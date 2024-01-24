import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSreen from "./screens/HomeSreen";
import MovieScreen from "./screens/MovieScreen";


const Stack = createNativeStackNavigator();

export default function Navigation (){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeSreen} />
                <Stack.Screen name="Movies" component={MovieScreen} />
    </Stack.Navigator>
    </NavigationContainer>
);
}