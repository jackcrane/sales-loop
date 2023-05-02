import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { EventEmitter } from "eventemitter3";
export const EventHandler = new EventEmitter();
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import { DMMono_400Regular } from "@expo-google-fonts/dm-mono";
import { Body, Header } from "./kit/header";
import { useEffect, useState } from "react";
import { DataStore } from "./util/data";

import { Login } from "./pages/login";
import { Welcome } from "./pages/welcome";
import { Home } from "./pages/home";
import { Scan } from "./pages/scan";
import { Settings } from "./pages/settings";
import { SettingsAccount } from "./pages/settings/account";
import { AddModal } from "./kit/add-modal";
import { WhatIs } from "./pages/settings/what-is";
import { About } from "./pages/settings/about";

const Stack = createNativeStackNavigator();

const p =
  ({ Component, large = false, bounces, user = {} }) =>
  (props) => {
    return (
      <View style={{ flex: 1 }}>
        <Header
          large={large}
          logo={user?.user?.company?.logoUrl || user?.company?.logoUrl}
          nav={props.navigation}
        >
          {props.route.name}
        </Header>
        <Body style={{ flex: 1, backgroundColor: "yellow" }} bounces={bounces}>
          <Component {...props} />
        </Body>
      </View>
    );
  };

const getProfile = async (token) => {
  let f;
  try {
    f = await fetch("https://sales-loop.jackcrane.rocks/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let json = {};
    try {
      json = await f.json();
    } catch (error) {}
    if (f.status === 200) {
      return json;
    } else {
      return { error: f.status };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function App() {
  // LogBox.ignoreAllLogs();
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
    DMMono_400Regular,
  });

  const [loggedIn, setLoggedIn] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [welcomed, setWelcomed] = useState(null);

  useEffect(() => {
    DataStore.get("token").then(async (token) => {
      if (token) {
        const prof = await getProfile(token);
        if (prof.error) {
          setUser(null);
          setLoggedIn(false);
          setToken(null);
          return;
        } else {
          setUser(prof);
          setToken(token);
          setLoggedIn(true);
        }
      } else {
        setUser(null);
        setLoggedIn(false);
        setToken(null);
      }
    });
    DataStore.get("STATUS:WELCOMED").then((welcomed) => {
      if (welcomed) {
        setWelcomed(true);
      } else {
        setWelcomed(false);
      }
    });
  }, []);

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    EventHandler.on("LOGIN:SUCCESS", (e) => {
      setUser(e.user);
      setLoggedIn(true);
      setToken(e.token);
    });
    EventHandler.on("ACCOUNT:REFRESH", () => {});
    EventHandler.on("LOGOUT", () => {
      setLoggedIn(false);
      setToken(null);
      setUser(null);
      DataStore.set("token", null);
      DataStore.set("STATUS:WELCOMED", false);
    });
    EventHandler.on("WELCOME:FINISH", () => {
      setWelcomed(true);
      DataStore.set("STATUS:WELCOMED", true);
    });
    EventHandler.on("WELCOME:REWATCH", () => {
      console.log("rewatch");
      setWelcomed(false);
    });
    EventHandler.on("MODAL:OPEN", (e) => {
      console.log("open", e);
      setModalData(e);
    });
    EventHandler.on("MODAL:CLOSE", () => {
      setModalData(null);
    });
  }, []);

  if (!fontsLoaded || loggedIn === null) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider
        theme={{
          color: {
            "grey:border": "#E0E0E0",
            "grey:placeholder": "#B3B3B3",
            "grey:whisper": "#ACACAC",
            "blue:primary": "#1982C4",
            "blue:bg": "rgba(25, 130, 196, 0.1)",
            "red:primary": "#FF595E",
            "red:bg": "rgba(255, 89, 94, 0.1)",
            "yellow:primary": "#FFCA3A",
            "yellow:bg": "rgba(255, 202, 58, 0.1)",
            "green:primary": "#8AC926",
            "green:bg": "rgba(138, 201, 38, 0.1)",
            "purple:primary": "#6A4C93",
            "purple:bg": "rgba(106, 76, 147, 0.1)",
          },
        }}
      >
        <StatusBar style="light" />
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              card: "black",
              text: "#fff",
              border: "black",
              background: "white",
            },
          }}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {!loggedIn ? (
              <Stack.Screen
                name="Login"
                component={p({ Component: Login, large: true, bounces: false })}
              />
            ) : !welcomed ? (
              <Stack.Screen
                name="Welcome"
                component={p({
                  Component: Welcome,
                  large: false,
                  bounces: true,
                  user: user,
                })}
                initialParams={{ user }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={p({
                    Component: Home,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
                <Stack.Screen
                  name="Scan"
                  component={p({
                    Component: Scan,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
                <Stack.Screen
                  name="Settings"
                  component={p({
                    Component: Settings,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
                <Stack.Screen
                  name="Account"
                  component={p({
                    Component: SettingsAccount,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
                <Stack.Screen
                  name="What is SalesLoop?"
                  component={p({
                    Component: WhatIs,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
                <Stack.Screen
                  name="About"
                  component={p({
                    Component: About,
                    large: false,
                    bounces: true,
                    user: user,
                  })}
                  initialParams={{ user }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <AddModal config={modalData} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
