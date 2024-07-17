import { Stack } from "./stack.ts";
import MainView from "../../view/main/MainView.tsx";
import NewsView from "../../view/news/NewsView.tsx";
import NewsListView from "../../view/news/NewsListView.tsx";
import NewsMoreView from "../../view/news/NewsMoreView.tsx";

const NewsStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"NewsNews"} component={NewsView}></Stack.Screen>
            <Stack.Screen name={"NewsNewsList"} component={NewsListView}></Stack.Screen>
            <Stack.Screen name={"NewsNewsMore"} component={NewsMoreView}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NewsStackNavigation;
