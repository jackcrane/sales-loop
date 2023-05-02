import styled from "styled-components/native";
import { Row, SimpleRow } from "./util";
import { AbsoluteGradient } from "./card";
import { useEffect } from "react";

const ActionButtonButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.color[`${props.role}:bg`]};
  border: 1px solid ${(props) => props.theme.color[`${props.role}:primary`]};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;

const ActionButtonText = styled.Text`
  font-size: 18px;
  font-family: "DMSans_400Regular";
  color: ${(props) => props.theme.color[`${props.role}:primary`]};
`;

export const ActionButton = (props) => {
  return (
    <ActionButtonButton {...props} activeOpacity={0.6}>
      <ActionButtonText {...props}>{props.children}</ActionButtonText>
    </ActionButtonButton>
  );
};

export const BigGhostButton = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  text-align: center;
`;

const SmallButton = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
`;

const SmallButtonText = styled(ActionButtonText)`
  font-size: 14px;
  color: black;
`;

const SmallButtonInner = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const InlineButton = (props) => {
  return (
    <SmallButton onPress={props.onPress} activeOpacity={0.6}>
      {props.role && <AbsoluteGradient role={props.role} />}
      <SmallButtonInner>
        {props.icon && props.icon}
        <SmallButtonText {...props}>{props.children}</SmallButtonText>
      </SmallButtonInner>
    </SmallButton>
  );
};
