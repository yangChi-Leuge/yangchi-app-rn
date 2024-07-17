import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import CalenderView from "../../view/calender/CalenderView.tsx";
import CalenderDateMoreView from "../../view/calender/CalenderDateMoreView.tsx";

const CalenderStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"CalenderCalender"} component={CalenderView}></Stack.Screen>
            <Stack.Screen name={"CalenderCalenderDateMore"} component={CalenderDateMoreView}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default CalenderStackNavigation;
