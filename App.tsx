const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Home2 from "./screens/Home2";
import Home3 from "./screens/Home3";
import Home4 from "./screens/Home4";
import Home5 from "./screens/Home5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Jost_regular: require("./assets/fonts/Jost_regular.ttf"),
    "Radio Canada_regular": require("./assets/fonts/Radio_Canada_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home2"
              component={Home2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home3"
              component={Home3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home4"
              component={Home4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home5"
              component={Home5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
