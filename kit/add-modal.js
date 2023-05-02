import React from "react";
import styled from "styled-components/native";
import { Subtitle, Text, Trititle } from "./text";
import { TablerClose, TextToIcon } from "../assets/icons/tabler";
import { View } from "react-native";
import { Row, Spacer } from "./util";
import { InlineButton } from "./button";
import { EventHandler } from "../App";

const ModalBg = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalParent = styled.View`
  height: 400px;
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddModal = (props) => {
  if (props.config === null) {
    return null;
  }
  return (
    <ModalBg>
      <ModalParent>
        <HeaderRow>
          <Row gap={10}>
            {props.config.icon}
            <Subtitle>{props.config.title}</Subtitle>
          </Row>
          <InlineButton
            icon={<TablerClose size={15} />}
            type="close"
            role="red"
            onPress={() => {
              EventHandler.emit("MODAL:CLOSE");
            }}
          >
            Close
          </InlineButton>
        </HeaderRow>
        <Spacer />
        {props.config.content}
        {/* <Text>{JSON.stringify(props.config)}</Text> */}
      </ModalParent>
    </ModalBg>
  );
};
