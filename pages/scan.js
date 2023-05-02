import { useEffect, useState } from "react";
import {
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
import { View } from "react-native";
import { AddModal } from "../kit/add-modal";
import { EventHandler } from "../App";
import { NumberInput } from "../kit/number-input";
import { Display } from "../kit/display";
import { ThemeConsumer } from "styled-components";

const Container = styled.View``;

const NumberInputContainer = styled.View`
  width: 40%;
`;

const EverythingElseContainer = styled.View`
  width: 58%;
`;

export const ScanAddToCart = (barcodeData) => {
  const [qty, setQty] = useState(0);
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
            >
              ACME Current
            </Display>
            <Spacer />
            <Text>
              You are adding <Whisper>{qty}</Whisper> products to your{" "}
              <Whisper>ACME Current</Whisper> cart.
            </Text>
          </EverythingElseContainer>
        </Row>
      )}
    </ThemeConsumer>
  );
};

export const Scan = ({ navigation, route }) => {
  const [barcodeData, setBarcodeData] = useState(null);

  return (
    <>
      <Container>
        <CameraComponent onScanned={setBarcodeData} />
        <View>
          <Spacer />
          {barcodeData && (
            <>
              <Card
                title={barcodeData}
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
                Product code <Small mono>{barcodeData}</Small> read. Tap to add
                this product to cart.
              </Card>
              <Spacer />
            </>
          )}
          <Hr />
          <Spacer />
          <View>
            <SimpleRow gap={10}>
              <Card title="Back Home" icon={<TablerHome />}>
                Navigate back to the home screen
              </Card>
              <Card title="Back Home" icon={<TablerHome />}>
                View, edit, and send your carts
              </Card>
            </SimpleRow>
          </View>
        </View>
      </Container>
    </>
  );
};
