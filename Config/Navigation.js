import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Signup from "../components/signup"
import Login from "../components/login"
import Splash from "../components/splashScreen"
import Admin from "../components/adminHome"
import User from "../components/userHome"

const Stack = createNativeStackNavigator();

function App() {


  

  return (
    // <Text>Hello world!</Text>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash"  component={Splash} 
    options={{
        headerShown: false
      }}
       />
      <Stack.Screen name="Signup" options={{
        headerShown: false
      }} component={Signup} />
      <Stack.Screen name="Login"  options={{
        headerShown: false
      }} component={Login} />
      <Stack.Screen name="Dashboard"  options={{
        headerShown: false
      }} component={Admin} />
      <Stack.Screen name="Available courses"  options={{
        headerShown: false
      }} component={User} />

    </Stack.Navigator>
    </NavigationContainer>
  // 
  );
}
export default App