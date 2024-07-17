import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import ChallengeView from "../../view/challenge/ChallengeView.tsx";
import ChallengeContentView from "../../view/challenge/ChallengeContentView.tsx";

const ChallengeStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Challenge"} component={ChallengeView}></Stack.Screen>
            <Stack.Screen name={"ChallengeContent"} component={ChallengeContentView}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default ChallengeStackNavigation;
