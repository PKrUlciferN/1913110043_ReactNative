import { Text, View, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "../components/styles";

const FirstPage2 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the First Page</Text>
        <Text style={{ padding: 5 }} />
        <Button
          style={{ padding: 20 }}
          title="go to second page"
          onPress={() => navigation.navigate("SecondPage2")}
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

export default FirstPage2;
