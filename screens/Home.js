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
import { COLORS, images, SIZES, FONTS } from "../constants";

const Home = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="near-me" size={24} color="black" />
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
