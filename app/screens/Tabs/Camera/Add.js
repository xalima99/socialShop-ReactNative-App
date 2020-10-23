import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../../../config/colors";

const Add = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setcamera] = useState(null);
  const [image, setimage] = useState(null);
  const [flash, setflash] = useState('off');
  const [focus, setfocus] = useState('off');
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const chooseAction = () => {
    if (!image) {
      takePicture();
    } else {
      setimage(null);
    }
  };

  const handleFlash = () => {
      if(flash === 'off') setflash('torch')
      else setflash('off')
  }
  const handleFocus= () => {
    if(focus === 'off') setfocus('on')
    else setfocus('off')
}

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setimage(data.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        {!image ? (
          <Camera flashMode={flash} autoFocus={focus}
            ref={(ref) => setcamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"16:9"}
          />
        ) : (
          <View style={styles.fixedRatio}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
          </View>
        )}
      </View>

      <View style={styles.PrimaContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
           
          >
            <MaterialCommunityIcons name="folder-multiple-image" color={colors.blue} size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={chooseAction}>
            <View
              style={[
                styles.camera,
                { backgroundColor: !image ? colors.blue : colors.red },
              ]}
            >
              <MaterialCommunityIcons
                name={!image ? "camera-iris" : "trash-can-outline"}
                color={colors.white}
                size={30}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!image}
            onPress={() => console.log("pressed ")}
          >
            <MaterialCommunityIcons
              name="publish"
              color={!image ? colors.gray : colors.red}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
        <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          > 
            <Ionicons name="md-reverse-camera" color={colors.red} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleFlash}
          >
            <MaterialCommunityIcons name={flash === 'off' ? 'flash' : 'flash-off'} color={colors.red} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFocus}
          >
            <MaterialCommunityIcons name="focus-auto" color={colors.red} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    position: "relative",
  },
  deleteImage: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 10,
    top: 10,
    backgroundColor: colors.red,
    borderRadius: 5,
  },
  PrimaContainer:{
    flex: 0.6,
  },
  buttonContainer: {
    flex:1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  camera: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer:{
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    bottom:50
  }
});
