import { Button, FlatList, Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import Toast from "react-native-toast-message";
import { styles } from "../../styles/styles.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Height, Width } from "../../styles/demention.ts";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackNavigationType } from "../../type/navigationType.ts";
import { useGetChallenge, useGetGlobalDay } from "../../hooks/useGlobal.tsx";
import { globalDateType } from "../../type/itemType.ts";
import axios from "axios";
import Config from "../../config/server.json"
import { shadow } from "../../styles/shadow.ts";
import { useTranslate } from "../../hooks/useTranslate.tsx";
import BottomSheet from "react-native-gesture-bottom-sheet";

const MainView = () => {

    const navigation = useNavigation<StackNavigationProp<MainStackNavigationType>>();

    const [renderDate, setRenderDate] = useState<globalDateType>();

    const [animationStart, setAnimationStart] = useState(false);

    const [instanceInfo, setInstanceInfo] = useState<boolean>(false);
    const [isLoadingGetGlobal, globalDay, getGlobalDay] = useGetGlobalDay()

    const [render, setRender] = useState<any>()

    const date = new Date();

    const [i, d, f] = useGetChallenge()
    const [isl, trd, trans] = useTranslate()

    useFocusEffect(
        useCallback(() => {
            console.log("come")
            setAnimationStart(true);
            console.log(`${`${date.getMonth()+1}`.padStart(2,"0")}${`${date.getDate()}`.padStart(2, "0")}`)
            getGlobalDay(`${`${date.getMonth()+1}`.padStart(2,"0")}${`${date.getDate()}`.padStart(2, "0")}`)
            f(`${`${date.getMonth()+1}`.padStart(2,"0")}${`${date.getDate()}`.padStart(2, "0")}`)
            return () => {
                console.log("exit")
                setInstanceInfo(false);
                setAnimationStart(false);
            };
        },[])
    )

    const bottomRef = useRef<BottomSheet>(null);
    useEffect(() => {
        if (!i) {
            setRender(d)
            d && console.log(`#${d[0]?.hashtag.split("#")[1]}`)
            d && trans(`#${d[0]?.hashtag.split("#")[1]}`,"kr")
                        // d && trans(`${d[0]?.content}`, "kr")
        }
    }, [i]);
    const [h, sh] = useState<any>()
    const [r, sr] = useState<any>()

    useEffect(() => {
        if(!isl) {
            console.log(trd)
            if(trd.includes("#")) {
                sh(trd)
            } else {
                sr(trd)
            }
        }
    }, [isl])

    useEffect(() => {
        if (!isLoadingGetGlobal) {
            setRenderDate(globalDay)
        }
    }, [isLoadingGetGlobal]);

    useEffect(() => {
        setInstanceInfo(true);
        Toast.show({
            type: "success",
            text1 : "로그인 성공",
            visibilityTime: 700
        })
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <BottomSheet ref={bottomRef} height={Height-1}>
                    <Image style={{width: Width, height: Height}} src={"https://i.ibb.co/gMSJVbD/1.png"}></Image>
                </BottomSheet>
                <EarthPlanet opacity={0.75} start={animationStart} isAnimated={true}/>
                <Text style={[styles.title2, {marginLeft: 6.5, marginTop: 7}]}>{date.getMonth()+1}월 {Number(renderDate?.date.slice(2,4))}일</Text>
                <Text onPress={() => {bottomRef?.current.show()}} style={[styles.title1, {marginLeft: 6.5}]}>{renderDate?.name}  ❯</Text>
                {
                    date.getDay() != Number(renderDate?.date.slice(2,4)) ? (
                        <Image style={{ width: 180, height: 50, position: "absolute", marginLeft: 140, marginTop: 25 }}
                               src={"https://i.ibb.co/DDFkZPG/Group-353-2.png"}></Image>
                    ) : null
                }
                <Text style={[styles.description1, {marginLeft: 6.5, marginTop: 10}]}>{renderDate?.description}</Text>
                { instanceInfo ? <Pressable style={{position: "absolute"}} onPress={() => {setInstanceInfo(false)}}><Image  style={{ width: 180, height: 50, position: "absolute", marginLeft: 140, marginTop: 25 }}
                        src={"https://i.ibb.co/LxSYLt3/Group-354.png"}></Image></Pressable> : null}
                <Toast/>
                <TouchableOpacity style={[styles.button2, {marginTop: Height/12}]} onPress={() => {navigation.navigate("MainChallenge")}}>
                    <Text style={{fontSize: Width/22, fontWeight: "600", color: "#444"}}>챌린지 하러가기 →</Text>
                </TouchableOpacity>
                <View style={[styles.content1]}>
                    <FlatList data={render} renderItem={({item}) => (
                        <View style={{width: 300, height: 130, alignSelf: "center", marginVertical: 10, overflow: "visible", borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10}}>
                            <View style={{flexDirection: "row" ,width: 180, alignItems: "center", paddingTop: 9}}>
                                <Image style={{width: 90, height: 90}} src={"https://i.ibb.co/ZXKQbv2/image-2.png"}/>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: "600", marginLeft: 5}}>{h}</Text>
                                    <Text style={{fontSize: 17, fontWeight: "600", marginLeft: 5}}>교육 소외 계층을 위한 교육 활동 제공...</Text>
                                </View>
                            </View>
                        </View>
                    )}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MainView;
