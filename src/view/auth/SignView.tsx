import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { paddingStyle } from "../../styles/padding.ts";
import { Height, Width } from "../../styles/demention.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackNavigationType } from "../../type/navigationType.ts";
import { useCallback, useState } from "react";

const SignView = () => {

    const navigation = useNavigation<StackNavigationProp<AuthStackNavigationType>>();

    const [animationStart, setAnimationStart] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setAnimationStart(true);
            return () => setAnimationStart(false);
        },[])
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container]}>
                <EarthPlanet start={animationStart} />
                <Text style={[styles.title2, paddingStyle.paddingBottom1]}>작은 실천으로 시작하는</Text>
                <Text style={styles.title1}>세계시민</Text>

                <TouchableOpacity onPress={() => {navigation.navigate("SignIn")}} activeOpacity={0.6} style={[styles.button2, {alignSelf: "center", marginBottom: Height/60, marginTop: Height/1.85}]}>
                    <Text style={{fontSize: Width/21.5, fontWeight: "600", color: "#444"}}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}} activeOpacity={0.6} style={[styles.button1, {alignSelf: "center", marginBottom: Height/60}]}>
                    <Text style={{fontSize: Width/21.5, fontWeight: "600", color: "#444"}}>회원가입</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

export default SignView;
