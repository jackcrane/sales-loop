import styled from "styled-components/native";

export const Error = styled.Text`
  font-size: 18px;
  font-family: "DMSans_400Regular";
  color: ${(props) => props.theme.color["red:primary"]};
  background: ${(props) => props.theme.color["red:bg"]};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color["red:primary"]};
  margin-bottom: 10px;
  width: 100%;
`;
