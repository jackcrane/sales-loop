import { Alert } from "react-native";
import { EventHandler } from "../../App";
import { ActionButton } from "../../kit/button";
import { Text } from "../../kit/text";
import { Spacer } from "../../kit/util";

export const SettingsAccount = ({ navigation, route }) => {
  const handleLogoutButtonPressed = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            EventHandler.emit("LOGOUT");
          },
        },
      ],
      "default"
    );
  };

  const handleOnboardingButtonPressed = () => {
    console.log("REWATCH");
    EventHandler.emit("WELCOME:REWATCH");
  };

  return (
    <>
      <ActionButton role="red" onPress={handleLogoutButtonPressed}>
        <Text>Logout</Text>
      </ActionButton>
      <Spacer />
      <ActionButton role="yellow" onPress={handleOnboardingButtonPressed}>
        <Text>Re-watch onboarding</Text>
      </ActionButton>
    </>
  );
};
