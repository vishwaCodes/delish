import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-fast-food-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <TouchableOpacity>
                  <Ionicons name="ios-search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <TouchableOpacity>
                  <Ionicons name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <TouchableOpacity>
                  <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
