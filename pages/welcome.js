import React, { useEffect, useState } from "react";
import { TextInput } from "../kit/textinput";
import { ActionButton } from "../kit/button";
import { Between, Spacer } from "../kit/util";
import { Bold, Link, Text } from "../kit/text";
import { ActivityIndicator, Linking, View } from "react-native";
import { ThemeConsumer } from "styled-components";
import styled from "styled-components/native";
import { Error } from "../kit/feedback";
import { EventHandler } from "../App";
import { Card } from "../kit/card";
import AutoHeightImage from "react-native-auto-height-image";

const Image = styled.Image`
  width: 100%;
`;

export const Welcome = ({ navigation, route }) => {
  const user = route.params?.user?.user || route.params?.user;
  // useEffect(() => {
  //   if (!user?.name) EventHandler.emit("LOGOUT");
  // }, [user]);

  if (!user?.name) {
    return (
      <>
        <ActivityIndicator />
      </>
    );
  }
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <ThemeConsumer>
      {(theme) => (
        <View onLayout={handleLayout}>
          <Text>
            Hey <Bold>{user.name}</Bold>! Your company {user.company.name} has
            teamed up with SalesLoop to simplify inventory and supply chain
            management. Lets get you rolling!
          </Text>
          <Spacer height={20} />
          <AutoHeightImage
            source={require("../assets/onboarding/barcode.png")}
            width={containerWidth}
          />
          <Spacer height={10} />
          <Text>
            <Bold>Read data from the real world</Bold>. Use your smartphone's
            camera to read information from your product barcodes or QR codes.
          </Text>
          <Spacer height={40} />
          <AutoHeightImage
            source={require("../assets/onboarding/cart.png")}
            width={containerWidth}
          />
          <Spacer height={10} />
          <Text>
            <Bold>Build your cart</Bold>. Pipe your data directly from barcodes
            to a cart for easy ordering!
          </Text>
          <Spacer height={40} />
          <AutoHeightImage
            source={require("../assets/onboarding/ordering.png")}
            width={containerWidth}
          />
          <Spacer height={10} />
          <Text>
            <Bold>Send orders to sales reps</Bold>. Keep using your contacts and
            resources by sending orders directly to them for approval and
            fulfillment.
          </Text>
          <Spacer height={40} />
          <ActionButton
            onPress={() => EventHandler.emit("WELCOME:FINISH")}
            role="blue"
          >
            Next
          </ActionButton>
        </View>
      )}
    </ThemeConsumer>
  );
};
