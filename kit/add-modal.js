import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Subtitle, Text, Trititle } from "./text";
import { TablerClose, TextToIcon } from "../assets/icons/tabler";
import { KeyboardAvoidingView, Modal, View } from "react-native";
import { Row, Spacer } from "./util";
import { InlineButton } from "./button";
import { EventHandler } from "../App";
import useKeyboard from "@rnhooks/keyboard";

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

export const AddModal = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    EventHandler.on("MODAL:CLOSE", () => {
      setConfig(null);
    });
    EventHandler.on("MODAL:OPEN", (config) => {
      setConfig(config);
    });
  }, []);

  if (config === null) {
    return <></>;
  }
  return (
    <>
      <ModalBg>
        <ModalParent>
          <HeaderRow>
            <Row gap={10}>
              {config.icon}
              <Subtitle>{config.title}</Subtitle>
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
          {config.content}
          {/* <Text>{JSON.stringify(config)}</Text> */}
        </ModalParent>
      </ModalBg>
      <SubModal />
    </>
  );
};

export const SubModal = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    EventHandler.on("SUBMODAL:CLOSE", () => {
      setConfig(null);
    });
    EventHandler.on("SUBMODAL:OPEN", (config) => {
      setConfig(config);
    });
  }, []);

  const [visible, dismiss] = useKeyboard();

  if (config === null) {
    return <></>;
  }

  return (
    <ModalBg>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          flex: 1,
        }}
      >
        <ModalBg>
          <ModalParent style={{ height: visible ? 250 : 350 }}>
            <HeaderRow>
              <Row gap={10}>
                {config.icon}
                <Subtitle>{config.title}</Subtitle>
              </Row>
              <InlineButton
                icon={<TablerClose size={15} />}
                type="close"
                role="red"
                onPress={() => {
                  EventHandler.emit("SUBMODAL:CLOSE");
                }}
              >
                Close
              </InlineButton>
            </HeaderRow>
            <Spacer />
            {config.content}
            {visible && (
              <View
                style={{
                  alignSelf: "flex-end",
                }}
              >
                <Spacer />
                <InlineButton
                  icon={<TablerClose size={15} />}
                  type="close"
                  role="red"
                  onPress={() => {
                    dismiss();
                  }}
                >
                  Close keyboard
                </InlineButton>
              </View>
            )}
          </ModalParent>
        </ModalBg>
      </KeyboardAvoidingView>
    </ModalBg>
  );
};
