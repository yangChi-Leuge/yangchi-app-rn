import { Image, SafeAreaView, View } from "react-native";
import { styles } from "../../styles/styles.ts";
const ProfileView = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.content2}>
                    <View style={{width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: Height/35, paddingBottom: Height/105}}>
                        <Image style={{width: 26, height: 26}} src={"https://i.ibb.co/Zxsn1Cw/icon-settings.png"}></Image>
                        <Image style={{width: 26, height: 26}} src={"https://i.ibb.co/M2P4XPW/Vector.png"}></Image>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProfileView;
