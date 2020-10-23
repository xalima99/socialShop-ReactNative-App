import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../../screens/Home";
import ProfileScreen from "../../screens/Tabs/Profile";
import SearchScreen from "../../screens/Tabs/Search";

import NotifScreen from "../../screens/Tabs/Notifs";
import AddButton from "./AddButton";

const Tab = createMaterialBottomTabNavigator();

const emptyScreen = () => null;

const MyTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ borderWidth: 0, shadowColor: "transparent" }}
      labeled={false}
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="AddHolder"
        component={emptyScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("Add");
          },
        })}
        options={{
          tabBarIcon: ({ color }) => <AddButton />,
        }}
      />
      <Tab.Screen
        name="Notifs"
        component={NotifScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={25} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
