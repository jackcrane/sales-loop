import { ScrollView } from "react-native";
import {
  TablerAffiliate,
  TablerAlertHexagon,
  TablerCart,
  TablerCartX,
  TablerDots,
  TablerScan,
  TablerSettings,
} from "../assets/icons/tabler";
import { Card } from "../kit/card";
import { Small, Subtitle, Text } from "../kit/text";
import { Spacer } from "../kit/util";
import { Row } from "../kit/util";
import { BigGhostButton } from "../kit/button";
import { useEffect, useState } from "react";
import { request } from "../util/apiHandler";
import moment from "moment";

export const Home = ({ navigation, route }) => {
  const [carts, setCarts] = useState(null);
  useEffect(() => {
    request("/carts?includeProduct=true", { method: "GET" }).then((res) => {
      if (res.ok) {
        let firstThree = res.json.carts.slice(0, 3);
        console.log(res.json);
        setCarts(firstThree);
      }
    });
  }, []);

  return (
    <>
      <Row gap={10}>
        <TablerAlertHexagon />
        <Subtitle>Updates</Subtitle>
      </Row>
      <Spacer height={10} />
      <Card
        icon={<TablerAffiliate />}
        title="Order accepted"
        label="10 mins ago"
        scheme="green"
      >
        <Small>
          Order e9fcdce8-5b52-48a7-9cec-43cf59e3bfb7 was accepted. Your customer
          should get their order soon
        </Small>
      </Card>
      <Spacer height={20} />
      {carts && carts.length > 0 && (
        <>
          <Row gap={10}>
            <TablerCartX />
            <Subtitle>Recent Carts</Subtitle>
          </Row>
          <Spacer height={10} />
          {carts.map((cart) => (
            <>
              <Card
                key={cart.id}
                icon={<TablerCart />}
                title={cart.name}
                label={moment(cart.updatedAt).fromNow()}
                onPress={() => navigation.navigate("Cart", { cart })}
              >
                <Small>Your cart containing {cart.products.length} items</Small>
              </Card>
              <Spacer height={10} />
            </>
          ))}
          {/* <Card title="ACME Current" icon={<TablerCart />} label="Yesterday">
            <Small>
              4 Packs of M4 x 35 Hex Bolts | 8 Packs of M4 Nylock Nuts | 7 6”
              Diameter 1/4” thick gaskets
            </Small>
          </Card> */}
          <Spacer height={20} />
        </>
      )}
      <Row gap={10}>
        <TablerDots />
        <Subtitle>Actions</Subtitle>
      </Row>
      <Spacer height={10} />
      <ScrollView horizontal={true}>
        <BigGhostButton onPress={() => navigation.navigate("Scan")}>
          <TablerScan size={50} strokeWidth={1.5} />
          <Text>Scan</Text>
        </BigGhostButton>
        <Spacer />
        <BigGhostButton onPress={() => navigation.navigate("Carts")}>
          <TablerCart size={50} strokeWidth={1.5} />
          <Text style={{ textAlign: "center" }}>Manage Carts</Text>
        </BigGhostButton>
        <Spacer />
        <BigGhostButton>
          <TablerAffiliate size={50} strokeWidth={1.5} />
          <Text style={{ textAlign: "center" }}>Manage Network</Text>
        </BigGhostButton>
        <Spacer />
        <BigGhostButton onPress={() => navigation.navigate("Settings")}>
          <TablerSettings size={50} strokeWidth={1.5} />
          <Text style={{ textAlign: "center" }}>Settings</Text>
        </BigGhostButton>
      </ScrollView>
    </>
  );
};
