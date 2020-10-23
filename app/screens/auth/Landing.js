import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from "react-native";

import Screen from "../../components/common/Screen";
import colors from "../../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("window");

const Landing = ({ navigation }) => {
  
  return (
    <View
      style={{
        backgroundColor: colors.red,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <Image
          style={{ width: 250, height: 100, alignSelf:'center' }}
          source={require("../../../assets/homeLogoWhite.png")}
        />

        <View style={styles.authButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  authButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: width / 3,
    padding: 9,
    backgroundColor: colors.white,
    alignItems: "center",
    margin:10,
    borderRadius:19
  },
  buttonText: {
    color: colors.red,
    fontSize: 19,
    fontWeight: "bold",
  },
});
