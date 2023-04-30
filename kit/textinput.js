import { Text } from "react-native";
import { ThemeConsumer } from "styled-components";
import styled from "styled-components/native";

const TextInputInput = styled.TextInput`
  border: 1px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 18px;
  font-family: "DMSans_400Regular";
`;

const TextInputLabel = styled.Text`
  font-size: 18px;
  font-family: "DMSans_400Regular";
`;

export const TextInput = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <TextInputLabel>
            <Text>{props.label}</Text>
          </TextInputLabel>
          <TextInputInput
            placeholderTextColor={theme.color["grey:placeholder"]}
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            {...props}
            onChangeText={(text) => props.onChangeText(text)}
          />
        </>
      )}
    </ThemeConsumer>
  );
};
