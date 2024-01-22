import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "./screens/HomeSreen";


const Stack = createNativeStackNavigator();

export default function Navigation (){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeSreen} />
    </Stack.Navigator>
    </NavigationContainer>
);
}