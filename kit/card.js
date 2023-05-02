import { Text, View } from "react-native";
import { ThemeConsumer } from "styled-components";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import { Between, Column, Row } from "./util";
import { Trititle, Whisper } from "./text";

const _Card = styled.View`
  border: 1px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
`;

const TouchableCard = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.color["grey:border"]};
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
`;

const _CardInside = styled.View`
  padding: 10px;
`;

const Gradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const generateGradient = (theme, role, notification) => {
  const grad = `linear-gradient(90deg, ${
    notification ? theme.color["blue:bg"] : "rgba(255, 255, 255, 0.1)"
  } 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 70%, ${
    theme.color[`${role}:bg`]
  } 100%);`;

  return grad;
};

const generateTightGradient = (theme, role, notification) => {
  const grad = `linear-gradient(90deg, ${
    notification ? theme.color["blue:bg"] : "rgba(255, 255, 255, 0.1)"
  } 0%, ${theme.color[`${role}:bg`]} 100%);`;

  return grad;
};

export const AbsoluteGradient = (props) => (
  <ThemeConsumer>
    {(theme) => (
      <Gradient
        {...fromCSS(
          generateTightGradient(theme, props.role, props.notification)
        )}
      />
    )}
  </ThemeConsumer>
);

export const Card = (props) => {
  return (
    <ThemeConsumer>
      {(theme) =>
        !props.onPress ? (
          <_Card style={{ padding: 0 }}>
            <Gradient
              {...fromCSS(
                generateGradient(theme, props.role, props.notification)
              )}
            />
            <_CardInside>
              <View style={{ minHeight: 10, flex: 1 }}>
                <Row gap={5} align="flex-start">
                  {props.icon || null}
                  <Column>
                    <View>
                      <Row between>
                        <Trititle>{props.title}</Trititle>
                        <Whisper mono>{props.label}</Whisper>
                      </Row>
                      <Text>{props.children}</Text>
                    </View>
                  </Column>
                </Row>
              </View>
            </_CardInside>
          </_Card>
        ) : (
          <TouchableCard onPress={props.onPress}>
            <Gradient
              {...fromCSS(
                generateGradient(theme, props.role, props.notification)
              )}
            />
            <_CardInside>
              <Row gap={5} align="flex-start">
                {props.icon || null}
                <Column>
                  <Row between>
                    <Trititle>{props.title}</Trititle>
                    <Whisper mono>{props.label}</Whisper>
                  </Row>
                  <Text>{props.children}</Text>
                </Column>
              </Row>
            </_CardInside>
          </TouchableCard>
        )
      }
    </ThemeConsumer>
  );
};
