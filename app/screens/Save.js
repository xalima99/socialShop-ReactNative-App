import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Save = ({ navigation, route }) => {
  const [uri, seturi] = useState(null);

  useEffect(() => {
    console.log(route.params.uri);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image style={{ flex: 1 }} source={{ uri: route.params.uri }} />
    </View>
  );
};

export default Save;

const styles = StyleSheet.create({});
