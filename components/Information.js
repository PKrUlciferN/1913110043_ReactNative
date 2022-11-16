import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>React Native with Thai-Nichi</Text>
      <Text
        style={{
          color: "blue",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Pornpawit Tangjittipairoj
      </Text>
      <Text style={[styles.textStyle,styles.warning]}>
        ID : 1913110043
      </Text>
      <Text>Major : IT</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 25,
  },
  
  warning:{
    fontWeight:"bold",
    color: "red",

  }
});
