import { Image, SafeAreaView, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Height, Width } from "../../styles/demention.ts";

const ProfileView = () => {

    const [animationStart, setAnimationStart] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setAnimationStart(true);
            return () => setAnimationStart(false);
        },[])
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <EarthPlanet opacity={0.5} types={true} start={animationStart} isAnimated={true}/>
                <View style={styles.content2}>
                    <View style={{width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: Height/35, paddingBottom: Height/105}}>
                        <Image style={{width: 26, height: 26}} src={"https://i.ibb.co/Zxsn1Cw/icon-settings.png"}></Image>
                        <Image style={{width: 26, height: 26}} src={"https://i.ibb.co/M2P4XPW/Vector.png"}></Image>
                    </View>
                </View>
                <Image style={{width: 100, height: 100, borderRadius: 1000, alignSelf: "center", position: "absolute", marginTop: 75}} src={"https://i.ibb.co/cLPGjGc/Avatar.png"}></Image>
            </View>
        </SafeAreaView>
    );
}

export default ProfileView;
