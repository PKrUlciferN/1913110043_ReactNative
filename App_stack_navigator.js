import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import FirstPage2 from "./screens/FirstPage2";
import SecondPage2 from "./screens/SecondPage2";
import ThirdPage2 from "./screens/ThirdPage2";





// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button title="About Us" onPress={()=>navigation.navigate('About')}/>
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle:{
          backgroundColor:'#87cefa'
        },
        headerTintColor:'white',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        
        {/* <Stack.Screen name="HomePost" component={HomePost} />
        <Stack.Screen name="CreatePost" component={CreatePost} /> */}
        
        {/* <Stack.Screen name="FirstPage2" component={FirstPage2} />
        <Stack.Screen name="SecondPage2" component={SecondPage2} />
        <Stack.Screen name="ThirdPage2" component={ThirdPage2} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
