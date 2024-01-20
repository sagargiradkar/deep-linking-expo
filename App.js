import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./src/screens/ScreenA";
import ScreenB from "./src/screens/ScreenB";
import ScreenC from "./src/screens/ScreenC";
import LinkingScreen from "./src/screens/LinkingScreen";
import * as Linking from 'expo-linking';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    ScreenA: "a",
    ScreenB: {
      path: "b/:message",
      parse: {
        message: (message) => `${message}`,
      },
    },
    ScreenC: "c",
  },
};

const prefix = Linking.createURL('myapp://app');
const universal = Linking.createURL('https://app.example.com');

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: [universal],
        config
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}