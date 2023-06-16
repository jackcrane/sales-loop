import React, { useState } from "react";
import { TextInput } from "../kit/textinput";
import { ActionButton } from "../kit/button";
import { Between } from "../kit/util";
import { Link, Text } from "../kit/text";
import { ActivityIndicator, Linking, View } from "react-native";
import { ThemeConsumer } from "styled-components";
import { Error } from "../kit/feedback";
import { EventHandler } from "../App";
import { DataStore } from "../util/data";
import { endpoint, request } from "../util/apiHandler";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPress = async () => {
    setLoading(true);
    setError(null);

    let f;
    try {
      await request("/login", {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password,
        }),
      }).then((res) => {
        console.log(res);
        if (res.ok) {
          setLoading(false);
          DataStore.set("token", res.json.token);
          EventHandler.emit("LOGIN:SUCCESS", res.json);
        } else {
          setError(res.message);
          setLoading(false);
        }
      });

      // f = await fetch(endpoint + "/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: username,
      //     password,
      //   }),
      // });
      // let json = {};
      // try {
      //   json = await f.json();
      // } catch (error) {}
      // if (f.status === 200) {
      //   setLoading(false);
      //   await DataStore.set("token", json.token);
      //   EventHandler.emit("LOGIN:SUCCESS", json);
      // } else {
      //   setError(f.statusText || json.message || "An error occurred");
      //   setLoading(false);
      // }
    } catch (error) {
      console.error(error);
      setError(JSON.stringify(error));
      setLoading(false);
    }
  };

  return (
    <Between>
      <ThemeConsumer>
        {(theme) => (
          <>
            <View>
              <TextInput
                placeholder="Your work email"
                label="Username"
                onChangeText={setUsername}
              />
              <TextInput
                placeholder="Your password"
                label="Password"
                textContentType="password"
                autoComplete="password"
                secureTextEntry={true}
                inputMode="text"
                onChangeText={setPassword}
              />
              <ActionButton onPress={onPress} scheme="blue">
                {loading ? (
                  <ActivityIndicator color={theme.color["blue:primary"]} />
                ) : (
                  "Log in"
                )}
              </ActionButton>
              {error && <Error>{error}</Error>}
            </View>
            <Text>
              Don't have your account information? Ask a manager or IT
              professional for access.
              {"\n\n"}
              Are you a business owner looking to improve your supply chain and
              stock management logistics?{" "}
              <Link
                onPress={() => Linking.openURL("https://jack@jackcrane.rocks")}
              >
                Get in contact
              </Link>{" "}
              about this software.{"\n"}
            </Text>
          </>
        )}
      </ThemeConsumer>
    </Between>
  );
};
