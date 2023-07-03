import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./screens/Home";
import DiseasesScreen from "./screens/Diseases";
import symptomCheckerScreen from "./screens/symptomChecker"
import HelpScreen from "./screens/Help"
import localMedicalCenter from './screens/localmedical';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Diseases" component={DiseasesScreen} />
        <Stack.Screen name="SymptomChecker" component={symptomCheckerScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="localmedical" component={localMedicalCenter} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;