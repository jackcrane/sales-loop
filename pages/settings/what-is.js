import styled from "styled-components/native";
import { Card } from "../../kit/card";
import { Subtitle, Text } from "../../kit/text";
import {
  TablerAccount,
  TablerBox,
  TablerBrain,
  TablerHeart,
} from "../../assets/icons/tabler";
import { Hr, Spacer } from "../../kit/util";

export const WhatIs = ({ route, navigation }) => {
  return (
    <>
      <Subtitle>What is SalesLoop?</Subtitle>
      <Spacer />
      <Text>
        SalesLoop is a software platform designed to help companies optimize the
        ordering and supply chain process while retaining existing
        infrastructure, experience, relationships, and workflows.
      </Text>
      <Spacer height={20} />
      <Subtitle>How does it work?</Subtitle>
      <Spacer />
      <Text>
        As a sales rep, you can use SalesLoop to create orders for your
        customers and send them up the chain to existing internal connections.
        Creating an order from a customer's warehouse or office may look like
        you visiting the customer's facility, scanning barcodes of products that
        need ordering, adding them to a cart with a quantity, and finally
        sending that cart to your manager or distributor.
      </Text>
      <Spacer />
      <Text>
        Your manager or distributor will receive the order and can then review
        it and confirm it with internal systems, then leave comments, approve,
        or reject your order. You can then view the status of your order and
        update or fix it as needed. From there, your manager or distributor can
        register the order in the same way they already do, and the order will
        be fulfilled as normal.
      </Text>
      <Spacer height={20} />
      <Subtitle>Who do I contact with issues?</Subtitle>
      <Spacer />
      <Text>
        If you have any issues with the app's intended features, including app
        access like logging in, app content like internal connections and
        product data, please contact your manager or distributor.
      </Text>
      <Spacer />
      <Text>
        If you have any issues with the app's functionality, including bugs,
        visual issues, crashes, or other technical issues, please contact the
        SalesLoop team.
      </Text>
    </>
  );
};
