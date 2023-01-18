import { View, Text,Button } from "react-native";
import React from "react";

const SettingScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{padding:15,fontSize:20}}>Setting</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />


    </View>
  );
};

export default SettingScreen;
