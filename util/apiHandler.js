import { Toast } from "react-native-toast-message/lib/src/Toast";
import { DataStore } from "./data";
const endpoint = "https://sales-loop.jackcrane.rocks";
// export const endpoint = "http://localhost:3000";

export const request = async (url, options) => {
  console.log(
    options.method + " " + endpoint + url + " " + JSON.stringify(options.body)
  );
  const token = options.token || (await DataStore.get("token"));
  const authHeader = token ? { Authorization: `Bearer ${token}` } : {};
  const f = await fetch(endpoint + url, {
    ...options,
    headers: {
      ...authHeader,
      ...options.headers,
      ...{ "Content-Type": "application/json" },
    },
  });
  let json = {};
  try {
    json = await f.json();
  } catch (error) {}
  if (f.status === 200) {
    return { ok: f.ok, json };
  } else {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Something went wrong. Please try again.",
    });
    console.log(f.status, json);
    return { error: f.status, ...json };
  }
};
