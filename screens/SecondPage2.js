import { Text, View, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "../components/styles";

const SecondPage2 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the Second Page</Text>
        <Text style={{ padding: 5 }} />
        <Button
          style={{ padding: 20 }}
          title="go to first page"
          onPress={() => navigation.navigate("FirstPage2")}
        />
        <Text style={{ padding: 5 }} />
        <Button
          style={{ padding: 20 }}
          title="go to third page"
          onPress={() => navigation.navigate("ThirdPage2")}
        />
      </View>

      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.textBottomStyle}>
          Thai-Nichi institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage2;
