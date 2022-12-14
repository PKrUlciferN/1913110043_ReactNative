import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React from "react";

const ImageWithTextInput = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={require("../assets/input_username (1).png")}
            style={styles.imageStyle}
          />
          <TextInput 
            style={{ flex: 1 }} 
            placeholder="Enter Your name here" 
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={require("../assets/input_phone (1).png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your phone number here"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImageWithTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
