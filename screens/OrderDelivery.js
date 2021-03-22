import { MailComposer } from "expo";
import React, { Component } from "react";

import { View, Text, Stylesheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class OrderDelivery extends React.Component {
  render() {
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
      />
    );
  }
}

// const OrderDelivery = () => {
//   function renderMap() {
//     <View></View>;
//   }

//   return <View style={{ flex: 1 }}>{renderMap()}</View>;
// };
