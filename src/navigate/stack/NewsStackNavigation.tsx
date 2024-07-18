import { Stack } from "./stack.ts";
import NewsView from "../../view/news/NewsView.tsx";
import NewsListView from "../../view/news/NewsListView.tsx";
import NewsMoreView from "../../view/news/NewsMoreView.tsx";
import { TransitionPresets } from "@react-navigation/stack";

const NewsStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"NewsNews"} component={NewsView}></Stack.Screen>
            <Stack.Screen name={"NewsNewsList"} component={NewsListView}></Stack.Screen>
            <Stack.Screen name={"NewsNewsMore"} component={NewsMoreView} options={{...TransitionPresets.ModalSlideFromBottomIOS}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NewsStackNavigation;
