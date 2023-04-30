import styled from "styled-components/native";
import { Card } from "../kit/card";
import { Text } from "../kit/text";
import {
  TablerAccount,
  TablerBox,
  TablerBrain,
  TablerHeart,
} from "../assets/icons/tabler";
import { Spacer } from "../kit/util";

export const Settings = ({ route, navigation }) => {
  return (
    <>
      <Card
        title="Profile"
        icon={<TablerAccount />}
        onPress={() => {
          navigation.navigate("Account");
        }}
      >
        <Text>View & edit your profile information</Text>
      </Card>
      <Spacer />
      <Card title="About" icon={<TablerBox />} onPress={() => {}}>
        <Text>View information about this app</Text>
      </Card>
      <Spacer />
      <Card title="Acnowledgements" icon={<TablerHeart />} onPress={() => {}}>
        <Text>Open source acnowledgements</Text>
      </Card>
      <Spacer />
      <Card
        title="How does SalesLoop work?"
        icon={<TablerBrain />}
        onPress={() => {}}
      >
        <Text>Learn how SalesLoop works</Text>
      </Card>
    </>
  );
};
