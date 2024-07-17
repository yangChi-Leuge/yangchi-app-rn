import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import ProfileView from "../../view/profile/ProfileView.tsx";

const ProfileStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"ProfileProfile"} component={ProfileView}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default ProfileStackNavigation;
