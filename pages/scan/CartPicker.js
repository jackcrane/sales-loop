import { useEffect, useState } from "react";
import {
  TablerCart,
  TablerChevronDown,
  TablerDatabaseSearch,
  TablerHome,
  TablerScan,
} from "../../assets/icons/tabler";
import { CameraComponent } from "../../kit/camera";
import { Card } from "../../kit/card";
import { Small, Text, Whisper } from "../../kit/text";
import { Hr, Row, SimpleRow, Spacer } from "../../kit/util";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import { AddModal } from "../../kit/add-modal";
import { EventHandler, getProfile } from "../../App";
import { NumberInput } from "../../kit/number-input";
import { Display } from "../../kit/display";
import { ThemeConsumer } from "styled-components";
import { Picker } from "@react-native-picker/picker";
import { ActionButton } from "../../kit/button";
import { TextInput } from "../../kit/textinput";
import { request } from "../../util/apiHandler";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const NewCart = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getProfile().then((user) => {
      const nuser = user.user || user;
      setUser(nuser);
    });
  }, []);

  const [nameText, setNameText] = useState("");

  const [cartWorking, setCartWorking] = useState(false);
  const createCart = async () => {
    if (!cartWorking) {
      setCartWorking(true);
      let cartId;
      const createcart = await request("/create-cart", {
        method: "POST",
        body: JSON.stringify({
          name: nameText,
        }),
      });
      if (createcart.ok) {
        cartId = createcart.json.cart.id;
      }
      console.log(cartId);
      setCartWorking(false);
      EventHandler.emit("CART:SET", cartId);
      EventHandler.emit("CARTS:UPDATE");
      EventHandler.emit("SUBMODAL:CLOSE");
    }
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <Text>Enter a name for your new cart</Text>
          <Spacer />
          <TextInput
            placeholder={
              user
                ? user.company.name +
                  " " +
                  new Date().toLocaleDateString("en-US")
                : "new cart name"
            }
            label="Cart Name"
            onChangeText={setNameText}
            value={nameText}
          />
          {nameText.length > 0 && (
            <ActionButton
              scheme="blue"
              onPress={() => {
                createCart();
              }}
            >
              {cartWorking ? (
                <ActivityIndicator color={theme.color["blue:primary"]} />
              ) : (
                "Create Cart"
              )}
            </ActionButton>
          )}
        </>
      )}
    </ThemeConsumer>
  );
};

export const CartPicker = ({ barcodeData, qty, initialCarts }) => {
  const [step, setStep] = useState(0);
  const [selectedCart, setSelectedCart] = useState("new-cart");

  const onSelect = () => {
    if (selectedCart === "new-cart") {
      setStep(1);
    } else {
      EventHandler.emit("CART:SET", selectedCart);
      EventHandler.emit("SUBMODAL:CLOSE");
    }
  };

  useEffect(() => {
    console.log("Cart updated", selectedCart);
  }, [selectedCart]);

  const [carts, setCarts] = useState(initialCarts || []);
  useEffect(() => {
    request("/carts", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setCarts(res.json.carts);
      } else {
      }
    });
  }, []);

  const cartNameForId = (name) => {
    const cart = carts.find((cart) => cart.name === name).id;
    return cart;
  };

  return step === 0 ? (
    <>
      <Picker
        selectedValue={selectedCart}
        onValueChange={(itemValue, itemIndex) => setSelectedCart(itemValue)}
      >
        <Picker.Item label="Create a new cart" value="new-cart" />
        {carts.map((cart) => (
          <Picker.Item key={cart.id} label={cart.name} value={cart.id} />
        ))}
      </Picker>
      <ActionButton scheme="blue" onPress={onSelect}>
        Select
      </ActionButton>
    </>
  ) : step === 1 ? (
    <NewCart />
  ) : step === 2 ? (
    <>
      <Spacer />
      <ActivityIndicator size={"large"} />
      <Spacer />
      <Text style={{ alignSelf: "center" }}>{workingStage}...</Text>
    </>
  ) : null;
};
