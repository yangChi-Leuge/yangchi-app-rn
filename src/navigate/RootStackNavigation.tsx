import { Stack } from "./stack/stack.ts";
import { AuthStackNavigation } from "./stack/AuthStackNavigation.tsx";
import BottomTabNavigation from "./bottomTab/BottomTabNavigation.tsx";

const RootStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"AuthStack"} component={AuthStackNavigation}></Stack.Screen>
            <Stack.Screen name={"BottomTab"} component={BottomTabNavigation}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default RootStackNavigation;
