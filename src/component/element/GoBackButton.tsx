import { styles } from "../../styles/styles.ts";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Height, Width } from "../../styles/demention.ts";
import { NavigationProp } from "@react-navigation/native";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const GoBackButton = ({navigation} : {navigation : NavigationProp<any>}) => {
    return (
        <View style={styless.container}>
            <Text onPress={() => navigation.goBack()} style={{fontWeight: "500", fontSize: Width/20, color: "white"}}>← 돌아가기</Text>
        </View>
    );
}

const styless = StyleSheet.create({
    container: {
        width: Width/1.2,
        height: Height/15,
        position: "absolute",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: 30,
    }
})

export default GoBackButton;
