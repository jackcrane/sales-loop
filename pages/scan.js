import { useState } from "react";
import { TablerScan } from "../assets/icons/tabler";
import { CameraComponent } from "../kit/camera";
import { Card } from "../kit/card";
import { Small, Text } from "../kit/text";
import { Spacer } from "../kit/util";

export const Scan = ({ navigation, route }) => {
  const [barcodeData, setBarcodeData] = useState(null);
  return (
    <>
      <CameraComponent onScanned={setBarcodeData} />
      <Spacer />
      {barcodeData && (
        <Card
          title={barcodeData}
          icon={<TablerScan />}
          label="Add to cart"
          role="yellow"
        >
          Product code <Small mono>{barcodeData}</Small> read. Tap to add this
          product to cart.
        </Card>
      )}
    </>
  );
};
