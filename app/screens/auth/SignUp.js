import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../config/colors";
import { signup } from "../../services/redux/actions";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSignUp = () => {
    const user = { name, email, password };
    dispatch(signup(user));
  };

  return (
    <SafeAreaView  style={{
      flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: colors.white,
        }}
      >
        <Image
          source={require("../../../assets/logoRed.png")}
          style={styles.Image}
        />
        <View style={styles.container}>
          <Text style={styles.Text}>Create Account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              textContentType="name"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              placeholder="Enter Your Name"
              placeholderTextColor={colors.lightred}
              value={name}
              onChangeText={(text) => setname(text)}
            />
            <TextInput
              style={styles.textinput}
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Enter Your Email"
              placeholderTextColor={colors.lightred}
              clearButtonMode="while-editing"
              value={email}
              onChangeText={(text) => setemail(text)}
            />
            <TextInput
              autoCapitalize="none"
              style={styles.textinput}
              textContentType="password"
              placeholder="Enter Your Password"
              secureTextEntry
              placeholderTextColor={colors.lightred}
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
          </View>
          <TouchableOpacity onPress={onSignUp}>
            <View style={styles.button}>
              <Text numberOfLines={1} style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: width / 1.3,
    height: height / 2,
    alignItems: "center",
    padding: 20,
  },
  Text: {
    fontWeight: "500",
    fontSize: 19,
    textTransform: "uppercase",
    color: colors.red,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 20,
  },
  textinput: {
    borderWidth: 2,
    borderColor: colors.red,
    marginVertical: 15,
    padding: 10,
    fontSize: 19,
    width: "100%",
    color: colors.red,
    borderRadius: 5,
  },
  Image: {
    height: 40,
    width: 40,
  },
  button: {
    width: width / 3,
    padding: 9,
    backgroundColor: colors.red,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "bold",
  },
});
