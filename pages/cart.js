import { useEffect, useState } from "react";
import {
  TablerCart,
  TablerChevronDown,
  TablerDatabaseSearch,
  TablerHome,
  TablerScan,
  TablerTag,
} from "../assets/icons/tabler";
import { CameraComponent } from "../kit/camera";
import { Card } from "../kit/card";
import { Small, Subtitle, Text, Whisper } from "../kit/text";
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
import moment from "moment";

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

const NumberInputContainer = styled.View`
  width: 40%;
`;

const EverythingElseContainer = styled.View`
  width: 58%;
`;

export const Cart = (props) => {
  const _cart = props.route.params.cart;
  const [cart, setCart] = useState(_cart);
  const [updateKey, setUpdateKey] = useState(0);

  useEffect(() => {
    request(`/cart/${_cart.id}?includeProduct=true`, {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setCart(res.json.cart);
      } else {
      }
    });
  }, [updateKey]);

  useEffect(() => {
    EventHandler.on("CART:UPDATE", () => {
      setUpdateKey(updateKey + 1);
    });
  }, []);

  const deleteCart = async () => {
    const f = await request(`/cart/delete`, {
      method: "POST",
      body: JSON.stringify({
        cartId: cart.id,
      }),
    });
    if (f.ok) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Cart deleted",
      });
      EventHandler.emit("CARTS:UPDATE");
      props.navigation.goBack();
    }
  };

  const activateCart = async () => {
    const f = await request(`/cart/reactivate`, {
      method: "POST",
      body: JSON.stringify({
        cartId: cart.id,
      }),
    });
    if (f.ok) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Cart activated",
      });
      EventHandler.emit("CARTS:UPDATE");
      setUpdateKey(updateKey + 1);
    }
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <Whisper>Cart</Whisper>
          <Subtitle>{cart.name}</Subtitle>
          <Spacer height={5} />
          <Whisper>Created at</Whisper>
          <Text>
            {moment(cart.createdAt).format("MMMM Do YYYY")} (
            {moment(cart.createdAt).fromNow()})
          </Text>
          <Spacer height={5} />
          <Whisper>Updated at</Whisper>
          <Text>
            {moment(cart.updatedAt).format("MMMM Do YYYY")} (
            {moment(cart.updatedAt).fromNow()})
          </Text>

          <Spacer height={10} />
          <Hr />
          <Spacer height={10} />
          <Row align="flex-start" between>
            {cart.active ? (
              <>
                <ActionButton
                  onPress={() => {
                    deleteCart();
                  }}
                  label="Delete cart"
                  role="red"
                  half={true}
                >
                  Delete cart
                </ActionButton>
                <ActionButton
                  half={true}
                  onPress={() => {}}
                  label="Submit cart"
                  role="blue"
                >
                  Submit cart
                </ActionButton>
              </>
            ) : (
              <ActionButton
                onPress={() => {
                  activateCart();
                }}
                label="Activate cart"
                role="green"
                half={false}
              >
                Activate cart
              </ActionButton>
            )}
          </Row>
          <Hr />
          <Spacer height={10} />
          {cart.products.map((item) => (
            <>
              <Card
                title={item.product.name}
                icon={<TablerTag />}
                label={item.qty}
                onPress={() => {
                  EventHandler.emit("MODAL:OPEN", {
                    title: "Product cart configuration",
                    icon: <TablerTag />,
                    content: <ProductCartConfigurationModal item={item} />,
                  });
                }}
              >
                <Small>
                  {item.product.description} | {item.product.barcode}
                </Small>
              </Card>
              <Spacer height={10} />
            </>
          ))}
        </>
      )}
    </ThemeConsumer>
  );
};

const ProductCartConfigurationModal = (props) => {
  const removeFromCart = async () => {
    const f = await request(`/cart/remove-item`, {
      method: "POST",
      body: JSON.stringify({
        cartId: props.item.cartId,
        productId: props.item.productId,
      }),
    });
    if (f.ok) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Item removed from cart",
      });
      EventHandler.emit("MODAL:CLOSE");
      EventHandler.emit("CART:UPDATE");
    }
  };

  const [qty, setQty] = useState(props.item.qty);
  const updateQty = async () => {
    const f = await request(`/cart/update-item`, {
      method: "PUT",
      body: JSON.stringify({
        cartId: props.item.cartId,
        productId: props.item.productId,
        qty: qty,
      }),
    });
    if (f.ok) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Item updated",
      });
      EventHandler.emit("MODAL:CLOSE");
      EventHandler.emit("CART:UPDATE");
    }
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <Row align="flex-start" between>
            <NumberInputContainer>
              <NumberInput value={props.item.qty} />
            </NumberInputContainer>
            <EverythingElseContainer>
              <Whisper>Product</Whisper>
              <Text>{props.item.product.name}</Text>
              <Spacer height={15} />
              <Hr />
              <Spacer height={15} />
              <ActionButton
                onPress={() => {
                  removeFromCart();
                }}
                label="Remove from cart"
                role="red"
              >
                Remove from cart
              </ActionButton>
              <ActionButton
                onPress={() => {
                  updateQty();
                }}
                label="Update qty"
                role="blue"
              >
                Update qty
              </ActionButton>
            </EverythingElseContainer>
          </Row>
        </>
      )}
    </ThemeConsumer>
  );
};
