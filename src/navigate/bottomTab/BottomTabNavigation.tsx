import { Image, View } from "react-native";
import { Tab } from "./tab.ts";
import MainStackNavigation from "../stack/MainStackNavigation.tsx";
import ProfileStackNavigation from "../stack/ProfileStackNavigation.tsx";
import FeedStackNavigation from "../stack/FeedStackNavigation.tsx";
import CalenderStackNavigation from "../stack/CalenderStackNavigation.tsx";
import NewsStackNavigation from "../stack/NewsStackNavigation.tsx";
import { Height } from "../../styles/demention.ts";
import { shadow } from "../../styles/shadow.ts";

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="BottomMainStack" screenOptions={({route})=>({ headerShown: false, tabBarIcon: ({focused}) => (<Image style={{width: route.name == "BottomNewsStack" ? 29.5 : 27.5, height: 27, marginBottom: route.name != "BottomNewsStack" || "BottomFeedStack" ? -6 : -10}} src={route.name == "BottomMainStack" ? focused ? "https://i.ibb.co/61bfMp1/Vector-1.png" : "https://i.ibb.co/kqkqKTC/Vector.png" : route.name == "BottomProfileStack" ? focused ? "https://i.ibb.co/5RrYRD4/Vector-1.png" : "https://cdn-icons-png.flaticon.com/128/1144/1144760.png" : route.name == "BottomFeedStack" ? focused ? "https://i.ibb.co/fkMrVLM/Vector-3.png" : "https://i.ibb.co/2Sd2RLm/Vector-3.png" : route.name == "BottomCalenderStack" ? focused ? "https://i.ibb.co/x2mfSqL/Group-22.png" : "https://i.ibb.co/Mk7M98W/Vector-2.png" : focused ? "https://i.ibb.co/hFYXpBJ/Vector.png" : "https://i.ibb.co/kyQ3Zb3/Group.png"}></Image>), tabBarStyle: {height: Height/7.8, position: "absolute", paddingHorizontal: 23, borderRadius: 35, shadowOffset: {width: 0, height: 6}, shadowRadius: 12.5, shadowColor: shadow.shadowColor, shadowOpacity: 0.3}})}>
            <Tab.Screen name={"BottomFeedStack"} component={FeedStackNavigation} options={{tabBarLabel: "게시물", tabBarLabelStyle: {marginBottom: 10, fontSize: 11, fontWeight: "600", color: "#4D4D4D"}}}/>
            <Tab.Screen name={"BottomCalenderStack"} component={CalenderStackNavigation} options={{tabBarLabel: "캘린더", tabBarLabelStyle: {marginBottom: 10, fontSize: 11, fontWeight: "600", color: "#4D4D4D"}}}/>
            <Tab.Screen name={"BottomMainStack"} component={MainStackNavigation} options={{tabBarLabel: "메인", tabBarLabelStyle: {marginBottom: 10, fontSize: 11, fontWeight: "600", color: "#4D4D4D"}}}/>
            <Tab.Screen name={"BottomNewsStack"} component={NewsStackNavigation} options={{tabBarLabel: "이슈", tabBarLabelStyle: {marginBottom: 10, fontSize: 11, fontWeight: "600", color: "#4D4D4D"}}}/>
            <Tab.Screen name={"BottomProfileStack"} component={ProfileStackNavigation} options={{tabBarLabel: "유저", tabBarLabelStyle: {marginBottom: 10, fontSize: 11, fontWeight: "600", color: "#4D4D4D"}}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;
