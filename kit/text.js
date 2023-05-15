import styled from "styled-components/native";

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${(props) =>
    props.mono ? "DMMono_400Regular" : "DMSans_400Regular"};
`;

export const Link = styled.Text`
  font-size: 18px;
  font-family: "DMSans_400Regular";
  color: ${(props) => props.theme.color["blue:primary"]};
`;

export const Bold = styled.Text`
  font-size: 18px;
  font-family: "DMSans_700Bold";
`;

export const Subtitle = styled.Text`
  font-size: 24px;
  font-family: "DMSans_400Regular";
`;

export const Trititle = styled.Text`
  font-size: 20px;
  font-family: "DMSans_400Regular";
`;

export const Whisper = styled.Text`
  font-size: ${(props) => (props.regular ? "18px" : "14px")};
  font-family: ${(props) =>
    props.mono ? "DMMono_400Regular" : "DMSans_400Regular"};
  color: ${(props) => props.theme.color["grey:whisper"]};
`;

export const Small = styled.Text`
  font-size: 14px;
  font-family: ${(props) =>
    props.mono ? "DMMono_400Regular" : "DMSans_400Regular"};
`;
