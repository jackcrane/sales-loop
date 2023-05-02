import styled from "styled-components/native";
import { Text } from "./text";
import { TablerBackspace } from "../assets/icons/tabler";
import { useEffect, useState } from "react";
import { Display } from "./display";
import { Spacer } from "./util";

const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const KeyTO = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.color["grey:border"]};

  padding: 10px;
  flex: 1;
  align-items: center;
  margin-bottom: 5px;
  height: 50px;
  justify-content: center;
`;

const KeyText = styled(Text)`
  font-size: 24px;
  font-family: "DMMono_400Regular";
`;

const Key = (props) => {
  return (
    <KeyTO {...props}>
      <KeyText>{props.children}</KeyText>
    </KeyTO>
  );
};

export const NumberInput = (props) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  useEffect(() => {
    if (value === "") setValue("0");
    if (value[0] === "0" && value.length > 1) setValue(value.substring(1));
    if (props.onChange) props.onChange(parseInt(value));
  }, [value]);

  return (
    <Container>
      <Display title={<Text>Qty</Text>}>{value}</Display>
      <Spacer height={5} />
      <Row>
        <Key onPressIn={() => setValue(value + 1)}>1</Key>
        <Key onPressIn={() => setValue(value + 2)}>2</Key>
        <Key onPressIn={() => setValue(value + 3)}>3</Key>
      </Row>
      <Row>
        <Key onPressIn={() => setValue(value + 4)}>4</Key>
        <Key onPressIn={() => setValue(value + 5)}>5</Key>
        <Key onPressIn={() => setValue(value + 6)}>6</Key>
      </Row>
      <Row>
        <Key onPressIn={() => setValue(value + 7)}>7</Key>
        <Key onPressIn={() => setValue(value + 8)}>8</Key>
        <Key onPressIn={() => setValue(value + 9)}>9</Key>
      </Row>
      <Row>
        <Key onPressIn={() => setValue(value + 0)}>0</Key>
        <Key onPressIn={() => setValue(value.substring(0, value.length - 1))}>
          <Text>
            <TablerBackspace size={24} />
          </Text>
        </Key>
      </Row>
    </Container>
  );
};
