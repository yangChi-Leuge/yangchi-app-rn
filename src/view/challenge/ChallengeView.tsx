import { FlatList, SafeAreaView, Text, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useTransTextList } from "../../hooks/useTranslate.tsx";

const ChallengeView = () => {

    const rentT = ["완료", "도전", "최근 유행하고 있는 챌린지", "줍깅", "조깅 + 줍기 챌린지입니다! 다같이 쓰레기 없애보자구요", "모금", "힘든 장애인들을 위해 모금해서 기부해요!", "#조깅#환경미화","조깅 + 줍기 챌린지","교육","약소국의 교육환경 개선을 위해 관심 가지기"]

    const [renderText, setRenderText] = useState<string[]>(rentT);
    const [i, d, m] = useTransTextList()

    useFocusEffect(
        useCallback(() => {
            m(rentT)
    },[])
    )
    useEffect(() => {
        if (!i) {
            setRenderText(d)
        }
    },[i])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={[styles.title1, {alignSelf: "center", marginTop: 40, fontWeight: "600"}]}>{renderText[2]}</Text>
                <FlatList style={{overflow: "visible", marginTop: 20}} data={[{iscomp: true, title: `#${renderText[3]}`, desc: `${renderText[4]}`}, {iscomp: true, title: `#${renderText[5]}`, desc: `${renderText[6]}`}, {iscomp: false, title: `${renderText[7]}`, desc: `${renderText[8]}`}, {iscomp: false, title: `#${renderText[9]}`, desc: `${renderText[10]}`}]} renderItem={({item}) => <View style={{flexDirection: "row",width: 500, height: 120, backgroundColor: "white", marginVertical: 10, borderRadius: 20, alignItems: "center"}}>
                    <View style={{width: 70, height: 90, backgroundColor: item.iscomp ? "#d2ffa2" :"#CCC", marginLeft: 11, borderRadius: 10, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 21, fontWeight: "500"}}>{item.iscomp ?renderText[0] : renderText[1]}</Text>
                    </View>
                    <View style={{width: 360, height: "100%", marginLeft: 11}}>
                        <Text style={{fontSize: 23, fontWeight: "600", marginTop: 20}}>{item.title}</Text>
                        <Text>{item.desc}</Text>
                    </View>
                </View>}></FlatList>
            </View>
        </SafeAreaView>
    )
}

export default ChallengeView
