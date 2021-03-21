import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images, SIZES, FONTS } from "../constants";

const Home = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            top: 20,
            height: 30,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="near-me" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              top: 10,
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Current Location</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            height: 30,
            top: 20,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
