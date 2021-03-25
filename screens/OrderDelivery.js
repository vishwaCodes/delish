import React, { Component } from "react";
import { View, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const OrderDelivery = ({ route, navigation }) => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  const destinationMarker = () => (
    <Marker>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <AntDesign name="pushpin" size={24} color="black" />
      </View>
    </Marker>
  );
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 40.73061,
        longitude: -73.935242,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {destinationMarker()}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default OrderDelivery;
