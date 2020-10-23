import React from "react";
import Main from "./app/components/Main";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorTheme from "./app/config/NavigatorTheme";
import { store } from "./app/services/redux/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavigatorTheme}>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
