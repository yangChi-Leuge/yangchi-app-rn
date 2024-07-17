import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import FeedView from "../../view/feed/FeedView.tsx";
import ChallengeStackNavigation from "./ChallengeStackNavigation.tsx";

const FeedStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"FeedFeed"} component={FeedView}></Stack.Screen>
            <Stack.Screen name={"FeedChallenge"} component={ChallengeStackNavigation}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default FeedStackNavigation;
