import { useEffect, useState } from "react";
import {
  TablerCart,
  TablerChevronDown,
  TablerDatabaseSearch,
  TablerHome,
  TablerScan,
} from "../assets/icons/tabler";
import { CameraComponent } from "../kit/camera";
import { Card } from "../kit/card";
import { Small, Text, Whisper } from "../kit/text";
import { Hr, Row, SimpleRow, Spacer } from "../kit/util";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import { AddModal } from "../kit/add-modal";
import { EventHandler, getProfile } from "../App";
import { NumberInput } from "../kit/number-input";
import { Display } from "../kit/display";
import { ThemeConsumer } from "styled-components";
import { Picker } from "@react-native-picker/picker";
import { ActionButton } from "../kit/button";
import { TextInput } from "../kit/textinput";
import { request } from "../util/apiHandler";
import { CartPicker } from "./scan/CartPicker";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useIsFocused } from "@react-navigation/native";

const Container = styled.View``;

const NumberInputContainer = styled.View`
  width: 40%;
`;

const EverythingElseContainer = styled.View`
  width: 58%;
`;

export const ScanAddToCart = (barcodeData) => {
  const [qty, setQty] = useState(0);

  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(carts[0]?.id || "___");
  const [cartKey, setCartKey] = useState(0);
  useEffect(() => {
    request("/carts", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setCarts(res.json.carts);
      } else {
      }
      setSelectedCart(res.json.carts[0].id);
    });
  }, [cartKey]);

  useEffect(() => {
    EventHandler.on("CART:SET", async (id) => {
      request("/carts", {
        method: "GET",
      }).then((res) => {
        console.log("Cart data set", res);
        if (res.ok) {
          setCarts(res.json.carts);
        } else {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Something went wrong. Please try again.",
          });
        }
        setSelectedCart(id);
      });
    });
  }, []);

  const cartById = (id) => {
    if (id === "___") return { id: "___", name: "Loading...", products: [] };
    return carts.find((cart) => cart.id === id);
  };

  const [addWorking, setAddWorking] = useState(false);
  const addToCart = async () => {
    if (addWorking) return;
    setAddWorking(true);
    const req = await request("/cart/add-item", {
      method: "POST",
      body: JSON.stringify({
        cartId: selectedCart,
        productId: barcodeData.barcodeData.id,
        qty,
      }),
    });
    if (req.ok) {
      EventHandler.emit("MODAL:CLOSE");
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Product added to cart.",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong. Please try again.",
      });
      console.log(req.error);
    }
    setAddWorking(false);
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <Row align="flex-start" between>
          <NumberInputContainer>
            <NumberInput onChange={setQty} />
          </NumberInputContainer>
          <EverythingElseContainer>
            <Display
              title={
                <Text>
                  Select Cart{" "}
                  <TablerChevronDown
                    size={14}
                    color={theme.color["grey:whisper"]}
                  />
                </Text>
              }
              onPress={() =>
                EventHandler.emit("SUBMODAL:OPEN", {
                  content: (
                    <CartPicker
                      barcodeData={barcodeData}
                      qty={qty}
                      carts={carts}
                    />
                  ),
                  title: "Select Cart",
                  icon: <TablerCart />,
                })
              }
            >
              {cartById(selectedCart)?.name}
            </Display>
            <Spacer />
            <Text>
              You are adding <Whisper regular>{qty}</Whisper> of{" "}
              <Whisper regular underline>
                {barcodeData.barcodeData.name}
              </Whisper>{" "}
              to your <Whisper regular>{cartById(selectedCart)?.name}</Whisper>{" "}
              cart.
            </Text>
            <Spacer height={30} />
            <ActionButton onPress={addToCart} role="blue">
              {addWorking ? (
                <ActivityIndicator color={theme.color["blue:primary"]} />
              ) : (
                "Add to Cart"
              )}
            </ActionButton>
          </EverythingElseContainer>
        </Row>
      )}
    </ThemeConsumer>
  );
};

export const Scan = ({ navigation, route }) => {
  const [barcodeData, setBarcodeData] = useState(null);
  const onScanned = async (data) => {
    const req = await request("/product/barcode/" + data, {
      method: "GET",
    });
    if (req.ok) {
      setBarcodeData(req.json.product);
    }
  };

  const isFocused = useIsFocused();

  return (
    <>
      <Container>
        {isFocused && <CameraComponent onScanned={onScanned} />}
        <View>
          <Spacer />
          {barcodeData && (
            <>
              <Card
                title={barcodeData.name}
                icon={<TablerScan />}
                label="Add to cart"
                role="yellow"
                onPress={() => {
                  EventHandler.emit("MODAL:OPEN", {
                    title: "Add product to cart",
                    icon: <TablerDatabaseSearch />,
                    content: <ScanAddToCart barcodeData={barcodeData} />,
                  });
                }}
              >
                Product <Small mono>{barcodeData.name}</Small> read. Tap to add
                this product to cart.
              </Card>
              <Spacer />
            </>
          )}
          <Hr />
          <Spacer />
          <View>
            <Card
              title="Back Home"
              icon={<TablerHome />}
              onPress={() => navigation.navigate("Home")}
            >
              Navigate back to the home screen
            </Card>
            <Spacer />
            <Card
              title="Visit Carts"
              icon={<TablerCart />}
              onPress={() => navigation.navigate("Carts")}
            >
              View, edit, and send your carts
            </Card>
          </View>
        </View>
      </Container>
    </>
  );
};
