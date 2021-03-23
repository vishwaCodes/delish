import React, { Component } from "react";
import { View } from "react-native";
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants";

import { AntDesign } from "@expo/vector-icons";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const OrderDelivery = ({ route, navigation }) => {
  // const [restaurant, setRestaurant] = React.useState(null);
  // const [streetName, setStreetName] = React.useState("");
  // const [fromLocation, setFromLocation] = React.useState(null);
  // const [toLocation, setToLocation] = React.useState(null);
  // const [region, setRegion] = React.useState(null);

  // React.useEffect(() => {
  // let { restaurant, currentLocation } = route.params;

  // let fromLoc = currentLocation.gps;
  // let toLoc = restaurant.location;
  // let street = currentLocation.streetName;

  // let mapRegion = {
  //   latitude: (fromLoc.latitude + toLoc.latitude) / 2,
  //   longitude: (fromLoc.longitude + toLoc.longitude) / 2,
  //   latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
  //   longitudeDelta: Math.abs(fromLoc.longitude - toLoc.location) * 2,
  // };

  //   setRestaurant(restaurant);
  //   setStreetName(street);
  //   setFromLocation(fromLoc);
  //   setToLocation(toLoc);
  //   setRegion(mapRegion);
  // }, []);

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

export default OrderDelivery;
