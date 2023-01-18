import { View, Text, Button } from "react-native";
import React from "react";

import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage2 from "./screens/FirstPage2";
import SecondPage2 from "./screens/SecondPage2";
import ThirdPage2 from "./screens/ThirdPage2";



function Feed({ navigation }) {
  return (
    // <FirstPage2/>
    //2
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Article() {
  return (
    // <SecondPage2/>
    //2
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert("Link to help")} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle Drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
function MyStack1(){
  return (
    <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen name="FirstPage2" component={FirstPage2} />
        
      </Stack.Navigator>
  );
}

function MyStack2(){
  return (
    <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SecondPage2" component={SecondPage2} />
        <Stack.Screen name="ThirdPage2" component={ThirdPage2} />
      </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b0e0e6",
          width: 240,
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="First Page" component={MyStack1} />
      <Drawer.Screen name="Second Page" component={MyStack2} />
      
      
      {/* <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} /> */}
      
    </Drawer.Navigator>
  );
}



//1
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="go to notfications" />
//     </View>
//   );
// }


const App = () => {
  return (
    //1
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
