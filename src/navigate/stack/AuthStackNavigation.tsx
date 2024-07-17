import { Stack } from "./stack.ts";
import SignInView from "../../view/auth/SIgnInView.tsx";
import SignUpView from "../../view/auth/SignUpView.tsx";
import SignView from "../../view/auth/SignView.tsx";
import { TransitionPresets } from "@react-navigation/stack";

const AuthStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }} initialRouteName="Sign">
            <Stack.Screen name={"Sign"} component={SignView}/>
            <Stack.Screen name={"SignIn"} component={SignInView} />
            <Stack.Screen name={"SignUp"} component={SignUpView} />
        </Stack.Navigator>
    )
}

export { AuthStackNavigation };
