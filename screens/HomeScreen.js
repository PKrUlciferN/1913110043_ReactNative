import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="home" size={24} color="black" />
      <Text>Home Screen</Text>
      <Button
        title="About Us"
        onPress={() =>
          navigation.navigate("About", {
            email: "reactNative@tni.ac.th",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
