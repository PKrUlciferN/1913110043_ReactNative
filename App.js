import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import Practice1 from "./components/Practice1";
import TxtInput from "./components/TxtInput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import Users from "./components/Users";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MyCustomTextWith from "./components/MyCustomTextWith";
import Count from "./components/Count";
import TextInput2 from "./components/TextInput2";
import UserNamePassword from "./components/UserNamePassword";
import AlertExample from "./components/AlertExample";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import TouchablePractice from "./components/TouchablePractice";
import TouchableExample from "./components/TouchableExample";

const App = () => {
  return (
    <View>
      {/* <Information/> */}
      {/* <Welcome></Welcome> */}
      {/* <Practice1></Practice1> */}
      {/* <TxtInput></TxtInput> */}

      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <LotsOfGreeting/> */}

      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title = "Click"/> */}
      {/* <TextInput2 /> */}

      {/* <UserNamePassword/> */}
      {/* <AlertExample/> */}
      {/* <ImageWithTextInput/> */}

      {/* <ButtonExample/> */}
      {/* <TouchableExample/> */}
      <TouchablePractice/>

    </View>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container:{
//       flex:1,
//       justifyContent:"center",
//       alignItems:"center"
//   }

// })

