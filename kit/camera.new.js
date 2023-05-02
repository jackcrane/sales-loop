import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { ActivityIndicator, Alert } from "react-native";

export const CameraComponent = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      if (cameraPermission === "denied") {
        Alert.alert(
          "Camera permission denied",
          "Please enable camera access in your device settings."
        );
      }
      if (cameraPermission === "restricted") {
        Alert.alert(
          "Camera permission restricted",
          "This could be due to parental or company device restrictions."
        );
      }
      if (cameraPermission === "not-determined") {
        const permissionRequest = await Camera.requestCameraPermission();
        if (permissionRequest === "denied") {
          Alert.alert(
            "Camera permission denied",
            "Please enable camera access in your device settings."
          );
        }
        if (permissionRequest === "restricted") {
          Alert.alert(
            "Camera permission restricted",
            "This could be due to parental or company device restrictions."
          );
        }
        if (permissionRequest === "authorized") {
          setHasPermission(true);
        }
      }
      if (cameraPermission === "authorized") {
        setHasPermission(true);
      }
    })();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  if (!hasPermission || !device) return <ActivityIndicator />;

  return <Camera style={{ flex: 1 }} device={device} isActive={true} />;
};
