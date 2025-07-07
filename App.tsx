import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import {WelcomeScreen1, WelcomeScreen2} from "./src/screens/WelcomeScreen";
import PermissionsScreen from "./src/screens/PermissionsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PhotoScreen from "./src/screens/PhotoScreen";
import SavedPhotosScreen from "./src/screens/SavedPhotosScreen";
import FullPhotoScreen from "./src/screens/FullPhotoScreen";
import InformationScreen from "./src/screens/InformationScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', height: 180 },
                        headerShadowVisible: false,
                    }}>
                        <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} options={{ headerShown: false }} />
                        <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} options={{ headerShown: false }} />
                        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SavedPhotosScreen" component={SavedPhotosScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="FullPhotoScreen" component={FullPhotoScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="InformationScreen" component={InformationScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
