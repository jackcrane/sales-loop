import styled from "styled-components/native";
import { Dimensions, Text, TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoHeightImage from "react-native-auto-height-image";
import { Between, Row } from "./util";
import { EventHandler } from "../App";
import { useEffect } from "react";

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* flex: 1; */
  height: ${(props) => (props.large ? "200px" : "150px")};
  background-color: black;
  padding-left: 0;
  padding-bottom: 0;
  padding-top: ${(props) => (props.insets.top ? props.insets.top : 0)}px;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  font-family: "DMSans_400Regular";
`;

const HeaderSafeContainer = styled.View`
  /* background-color: white; */
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderTitlesection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  width: 95%;
  border: 1px solid white;
  border-bottom-width: 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  height: 50px;
`;

const BigLogo = styled(AutoHeightImage)`
  margin-left: auto;
  margin-right: auto;
`;

const Empty = styled.View``;

export const Header = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <HeaderContainer {...props} insets={insets}>
      <HeaderSafeContainer insets={insets}>
        <Empty />
        {props.large ? (
          <BigLogo
            source={require("../assets/logo-cw.png")}
            width={Dimensions.get("window").width * 0.7}
          />
        ) : (
          <Between direction="row">
            <TouchableWithoutFeedback
              onPress={() => EventHandler.emit("LOGOUT")}
            >
              <BigLogo
                source={require("../assets/logo-cw.png")}
                width={Dimensions.get("window").width * 0.4}
              />
            </TouchableWithoutFeedback>
            <BigLogo
              source={{ uri: props.logo || null }}
              width={Dimensions.get("window").width * 0.4}
            />
          </Between>
        )}
        <HeaderTitlesection large={props.large}>
          <HeaderText>{props.children}</HeaderText>
          {props.large ? null : (
            <TouchableWithoutFeedback onPress={props.nav.goBack}>
              <HeaderText style={{ fontSize: 18 }}>Back</HeaderText>
            </TouchableWithoutFeedback>
          )}
        </HeaderTitlesection>
      </HeaderSafeContainer>
    </HeaderContainer>
  );
};

const BodyContainer = styled.ScrollView`
  flex: 1;
  border: 1px solid black;
  border-top-width: 0px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) =>
    props.insets.bottom ? props.insets.bottom : 0}px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  padding: 10px;
  height: 100%;
`;

export const Body = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <BodyContainer
      bounces={props.bounces}
      insets={insets}
      contentContainerStyle={{
        flex: !props.bounces ? 1 : null,
        paddingBottom: !props.bounces ? 0 : 40,
      }}
    >
      {props.children}
    </BodyContainer>
  );
};
