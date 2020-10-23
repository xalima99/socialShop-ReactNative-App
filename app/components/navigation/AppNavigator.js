// In App.js in a new project

import * as React from "react";
import { Image, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Auth Routes
import Landing from "../../screens/auth/Landing";
import Login from "../../screens/auth/Login";
import SignUp from "../../screens/auth/SignUp";

//APP Routes
import SaveScreen from "../../screens/Save";
import MyTabs from "./TabNavigator";
import colors from "../../config/colors";
import AddScreen from "../../screens/Tabs/Camera/Add";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 170, height: 50 }}
      source={require("../../../assets/headerLogo.png")}
    />
  );
}

export const AuthNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: { borderBottomWidth: 1 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Add")}>
              <MaterialCommunityIcons
                name="camera-iris"
                color={colors.red}
                size={25}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            paddingLeft: Platform.OS === "android" ? 0 : 10,
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="message-text"
              color={colors.red}
              size={25}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: Platform.OS === "android" ? 0 : 10,
          },
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: Platform.OS === "android" ? 0 : 12,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(92,90,91,0.7)",
            alignItems: "center",
            marginLeft: 10, 
          },
        }}
      />
      <Stack.Screen name="Save" component={SaveScreen} />
    </Stack.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={AppNavigator}
        options={{ headerShown: false, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
};
