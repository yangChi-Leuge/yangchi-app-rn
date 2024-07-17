import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import ChallengeStackNavigation from "./ChallengeStackNavigation.tsx";
import { TransitionPresets } from "@react-navigation/stack";

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"MainMain"} component={MainView}></Stack.Screen>
            <Stack.Screen name={"MainChallenge"} component={ChallengeStackNavigation} options={{...TransitionPresets.FadeFromBottomAndroid}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MainStackNavigation;
