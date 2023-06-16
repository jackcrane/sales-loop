import { Alert } from "react-native";
import { EventHandler } from "../../App";
import { ActionButton } from "../../kit/button";
import { Text } from "../../kit/text";
import { Spacer } from "../../kit/util";
import { Display } from "../../kit/display";

export const SettingsAccount = ({ navigation, route }) => {
  const user = route.params.user.user || route.params.user;

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
      <Display title="Name">{user.name}</Display>
      <Spacer />
      <Display title="Email">{user.email}</Display>
      <Spacer />
      <Display title="Company">{user.company.name}</Display>
      <Spacer />
      <ActionButton scheme="red" onPress={handleLogoutButtonPressed}>
        <Text>Logout</Text>
      </ActionButton>
      <Spacer />
      <ActionButton scheme="yellow" onPress={handleOnboardingButtonPressed}>
        <Text>Re-watch onboarding</Text>
      </ActionButton>
    </>
  );
};
