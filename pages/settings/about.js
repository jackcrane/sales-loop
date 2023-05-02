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
import { Display } from "../../kit/display";
import * as Constants from "expo-constants";
import * as Device from "expo-device";
import appPackage from "../../package.json";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export const About = ({ route, navigation }) => {
  const [uptime, setUptime] = useState(null);

  useEffect(() => {
    (async () => {
      setUptime(await Device.getUptimeAsync());
    })();
  }, []);

  return (
    <>
      <Display mono title="App Version">
        {Constants.default.manifest.version}
      </Display>
      <Spacer />
      <Display mono title="App Build">
        {Constants.default.manifest.ios.buildNumber ||
          Constants.default.manifest.android.versionCode}
      </Display>
      <Spacer />
      <Display mono title="Expo Version">
        {Constants.default.manifest.sdkVersion}
      </Display>
      <Spacer />
      <Display mono title="React Native Version">
        {appPackage.dependencies["react-native"]}
      </Display>
      <Spacer />
      <Display mono title="React Version">
        {appPackage.dependencies.react}
      </Display>
      <Spacer />
      <Display mono title="Device">
        {Device.manufacturer} {Device.modelName} {Device.deviceYearClass}
      </Display>
      <Spacer />
      <Display mono title="OS Version">
        {Device.osName} {Device.osVersion} {Device.osBuildId}
      </Display>
      <Spacer />
      <Display mono title="Device Name">
        {Device.deviceName}
      </Display>
      <Spacer />
      <Display mono title="Uptime">
        {Math.floor(uptime / 1000 / 60) + " Minutes" || <ActivityIndicator />}
      </Display>
    </>
  );
};
