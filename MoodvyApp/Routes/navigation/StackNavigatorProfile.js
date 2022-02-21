import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE } from "./Routes/constant/CRoute";
import ProfilePage from "./pages/ProfilePage";
import WelcomePage from "./pages/WelcomePage";
import * as React from 'react'

const Stack = createNativeStackNavigator();

export default function StackNavigatorProfil() {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME_TAB.MAIN}>
            <Stack.Screen name={ROUTE.WELCOME_TAB.MAIN} component={WelcomePage} />
            <Stack.Screen name={ROUTE.WELCOME_TAB.PROFIL} component={ProfilePage} />
        </Stack.Navigator>
    )
};