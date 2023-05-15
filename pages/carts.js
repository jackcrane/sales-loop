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
import { useIsFocused } from "@react-navigation/native";

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

export const Carts = (props) => {
  const [carts, setCarts] = useState(null);
  const [cartKey, setCartKey] = useState(0);
  useEffect(() => {
    request("/carts?includeProduct=true", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setCarts(res.json.carts);
      } else {
      }
    });
  }, [cartKey]);

  const isFocused = useIsFocused();
  useEffect(() => {
    EventHandler.on("CARTS:UPDATE", () => {
      setCartKey(cartKey + 1);
    });
  }, []);

  const [inactiveCarts, setInactiveCarts] = useState(null);
  useEffect(() => {
    request("/carts?includeProduct=true&inactive=true", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setInactiveCarts(res.json.carts);
      } else {
      }
    });
  }, [cartKey]);

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <Subtitle>Active carts</Subtitle>
          <Spacer height={10} />
          {carts ? (
            carts.map((cart) => (
              <>
                <Card
                  title={cart.name}
                  icon={<TablerCart />}
                  label={moment(cart.updatedAt).fromNow()}
                  onPress={() => {
                    props.navigation.navigate("Cart", {
                      cart: cart,
                    });
                  }}
                >
                  <Small>
                    Your cart containing {cart.products.length} items
                  </Small>
                </Card>
                <Spacer height={10} />
              </>
            ))
          ) : (
            <ActivityIndicator />
          )}
          <Hr />
          <Spacer height={10} />
          <Subtitle>Inactive carts</Subtitle>
          <Spacer height={10} />
          {inactiveCarts ? (
            inactiveCarts.map((cart) => (
              <>
                <Card
                  title={cart.name}
                  icon={<TablerCart />}
                  label={moment(cart.updatedAt).fromNow()}
                  onPress={() => {
                    props.navigation.navigate("Cart", {
                      cart: cart,
                    });
                  }}
                >
                  <Small>
                    Your inactive cart containing {cart.products.length} items
                  </Small>
                </Card>
                <Spacer height={10} />
              </>
            ))
          ) : (
            <ActivityIndicator />
          )}
        </>
      )}
    </ThemeConsumer>
  );
};
