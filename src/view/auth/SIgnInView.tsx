import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import
    GoBackButton from "../../component/element/GoBackButton.tsx";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackNavigationType, RootStackNavigationType } from "../../type/navigationType.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { Height, Width } from "../../styles/demention.ts";
import { useCallback, useEffect, useState } from "react";
import { useSignIn } from "../../hooks/useAuth.tsx";
import { store } from "../../state/store.ts";
import Toast from "react-native-toast-message";

const SignInView = () => {
    const rootNavigation = useNavigation<StackNavigationProp<RootStackNavigationType>>();
    const navigation = useNavigation<StackNavigationProp<AuthStackNavigationType>>();

    const [isLoading, signIn] = useSignIn()

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [animationStart, setAnimationStart] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setAnimationStart(true);
            return () => setAnimationStart(false);
        },[])
    )

    useEffect(() => {
        if (!isLoading) {
            if(store.getState().auth.accessToken != "") {
                rootNavigation.navigate("BottomTab");
            } else {
                Toast.show({
                    type: "error",
                    text1 : "로그인 실패",
                })
            }
        }
    },[isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Toast/>
                <EarthPlanet start={animationStart} isAnimated={true}/>
                <GoBackButton navigation={navigation}></GoBackButton>
                <Text style={[styles.title1, {alignSelf: "center", marginTop: Height/25}]}>로그인</Text>
                <TextInput
                    style={[styles.textField1, {alignSelf: "center", marginBottom: Height/60, marginTop: Height/17.5}]}
                    placeholder={"아이디"}
                    autoCapitalize="none"
                    onChangeText={(text) => setId(text)}
                />
                <TextInput
                    style={[styles.textField1, {alignSelf: "center", marginBottom: Height/60}]}
                    placeholder={"비밀번호"}
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity onPress={() => {signIn(id,password)}} activeOpacity={0.6} style={[styles.button2, {alignSelf: "center", marginBottom: Height/60, marginTop: Height/17.5}]}>
                    <Text style={{fontSize: Width/21.5, fontWeight: "600", color: "#444"}}>로그인</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default SignInView;
