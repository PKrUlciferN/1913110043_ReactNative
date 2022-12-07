import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";

const AlertExample = () => {
  const simpleAlertHandle = () => {
    //alert javascript
    alert("Hello I am simple alert");
  };

  const twoOptionAlertHandle = () => {
    Alert.alert(
      //title
      "hello",
      //body
      "I am two option alert. Do you want to cancle me?",

      [
        {
          text: "Yes",
          onPress: () => alert("Yes Pressed"),
        },
        {
          text: "No",
          onPress: () => alert("No Pressed"),
        },
      ],
      //click outside of alert will not cancle
      {
        cancelable: false,
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandle} />

        <Button title="Alert with Two options" onPress={twoOptionAlertHandle} />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
