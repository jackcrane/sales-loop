import styled from "styled-components/native";

export const Between = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 100%;
  flex-direction: ${(props) => props.direction || "column"};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || "center"};
  flex: 1;
  justify-content: ${(props) =>
    props.between ? "space-between" : "flex-start"};
  gap: ${(props) => props.gap || 0}px;
  height: 100%;
`;

export const SimpleRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align || "center"};
`;

export const Spacer = styled.View`
  height: ${(props) => props.height || 10}px;
  width: ${(props) => props.width || 10}px;
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Hr = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.color["grey:border"]};
`;
