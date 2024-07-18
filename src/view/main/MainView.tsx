import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { styles } from "../../styles/styles.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Height, Width } from "../../styles/demention.ts";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackNavigationType } from "../../type/navigationType.ts";

const MainView = () => {

    const navigation = useNavigation<StackNavigationProp<MainStackNavigationType>>();

    const [animationStart, setAnimationStart] = useState(false);

    useFocusEffect(
        useCallback(() => {
            console.log("come")
            setAnimationStart(true);
            return () => {
                console.log("exit")
                setAnimationStart(false);
            };
        },[])
    )

    useEffect(() => {
        Toast.show({
            type: "success",
            text1 : "로그인 성공",
            visibilityTime: 700
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <EarthPlanet opacity={0.75} start={animationStart} isAnimated={true}/>
                <Text style={[styles.title2, {marginLeft: 6.5, marginTop: 7}]}>7월 17일</Text>
                <Text style={[styles.title1, {marginLeft: 6.5}]}>세계 감정의 날  ❯</Text>
                <Toast/>
                <TouchableOpacity style={[styles.button2, {marginTop: Height/11}]} onPress={() => {navigation.navigate("MainChallenge")}}>
                    <Text style={{fontSize: Width/22, fontWeight: "600", color: "#444"}}>챌린지 하러가기 →</Text>
                </TouchableOpacity>
                <View style={[styles.content1]}></View>
            </View>
        </SafeAreaView>
    );
}

export default MainView;
