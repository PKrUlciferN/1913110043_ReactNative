import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const checkTextInput = () => {
    if (!userName.trim()) {
      alert("Please Enter Name");
      
    }
    else if(!passWord.trim()){
        alert("Please Enter Email");
       
    }
    else{
        alert("Success");
        
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={"Enter Name"}
          style={styles.textInputStyle}
        />

        <TextInput
          value={passWord}
          onChangeText={(passWord) => setPassWord(passWord)}
          placeholder={"Enter Email"}
          style={styles.textInputStyle}
        />
        <View style={{ marginTop: 10 }}>
          <Button title="submit" onPress={
            checkTextInput
          } />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
