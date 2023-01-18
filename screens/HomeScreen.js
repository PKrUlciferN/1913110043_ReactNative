import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={30}
    color="white"
    {...props}
  />
);

const HomeScreen = ({ navigation }) => {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      // headerLeft: () => (
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item
      //       title="Menu"
      //       iconName="menu"
      //       onPress={() => alert("menu commmand")}
      //     />
      //   </HeaderButtons>
      // ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="person-add"
            iconName="person-add"
            color="black"
            onPress={() => alert("register")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="home" size={24} color="black" />
      <Text>Home Screen</Text>
      {/* <Button
        title="About Us"
        onPress={() =>
          navigation.navigate("About", {
            email: "reactNative@tni.ac.th",
          })
        }
      /> */}
    </View>
  );
};

export default HomeScreen;
