import styled from "styled-components/native";
import { Text, Whisper } from "./text";

const Container = styled.View`
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
  width: 100%;
  padding: 5px;
`;

const Title = styled(Whisper)`
  font-size: 12px;
  font-family: "DMMono_400Regular";
`;

export const Display = (props) => (
  <Container>
    <Title>{props.title}</Title>
    <Text mono={props.mono ? true : null}>{props.children}</Text>
  </Container>
);
