import AsyncStorage from "@react-native-async-storage/async-storage";

const DataStore = {
  set(key, value) {
    console.log("Setting", key, value);
    try {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error setting", key, value, error);
    }
  },
  get(key) {
    try {
      return AsyncStorage.getItem(key).then((value) => {
        return JSON.parse(value);
      });
    } catch (error) {
      return null;
    }
  },
  getAll() {
    return AsyncStorage.getAllKeys().then((keys) => {
      return AsyncStorage.multiGet(keys).then((stores) => {
        return stores.map((result, i, store) => {
          return JSON.parse(store[i][1]);
        });
      });
    });
  },
};

export { DataStore };
