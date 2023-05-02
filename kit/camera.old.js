import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import styled from "styled-components/native";

const StyledCamera = styled(BarCodeScanner)`
  /* height: 80%; */
  border: 3px solid ${(props) => props.theme.color["yellow:primary"]};
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
`;

export const CameraComponent = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [readyToScan, setReadyToScan] = useState(true);

  const scanDelay = 500; // Delay between scans in milliseconds

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!readyToScan) return;
    setScanned(true);
    setReadyToScan(false);
    console.log(data);
    props.onScanned(data);
    setTimeout(() => {
      console.log("Unlocking scanner");
      setScanned(false);
      setReadyToScan(true);
    }, scanDelay);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <StyledCamera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 200 }}
      />
    </View>
  );
};
