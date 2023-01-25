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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import DetailScreen from "./screens/DetailScreen";
import ProductScreen from "./screens/ProductScreen";




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function MyStack2() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

// function MyStack3() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="DetailScreen" component={DetailScreen} />
//     </Stack.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 240,
        },drawerActiveTintColor:"red"
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MyStack1} />
      <Drawer.Screen name="Product" component={MyStack2} />
      {/* <Drawer.Screen name="Detail" component={MyStack3} /> */}
      
    </Drawer.Navigator>
  );
}

// const Tab = createBottomTabNavigator();

// function MyTab() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {

          

//             iconName = focused
//               ? "ios-information-circle"
//               : "ios-information-circle-outline";
//           } else if (route.name === "Setting Screen") {
//             iconName = focused ? "ios-list" : "ios-list";
//           }
//           //you can return any components that here
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "red",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >

//       <Tab.Screen name="Home" component={HomeScreen} />



//       <Tab.Screen name="Setting Screen" component={SettingScreen} />
//     </Tab.Navigator>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
