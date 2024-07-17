import { StyleSheet } from "react-native";
import { Height, Width } from "./demention.ts";
import { shadow } from "./shadow.ts";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3A4473',
        paddingHorizontal: Width/10,
        paddingVertical: Height/23,
    },
    title1: {
        fontSize: Width/13,
        fontWeight: "900",
        color: "white"
    },
    title2: {
        fontSize: Width/20,
        fontWeight: "600",
        color: "white"
    },
    description1: {
        fontSize: Width/25,
        fontWeight: "300",
        color: "white"
    },
    button1: {
        fontSize: Width/25,
        backgroundColor: "white",
        width: Width/1.25,
        height: Height/13,
        borderRadius: Width/25,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: shadow.shadowOpacity,
        shadowColor: shadow.shadowColor,
        shadowRadius: shadow.shadowRadius,
        shadowOffset: shadow.shadowOffset
    },
    button2: {
        fontSize: Width/25,
        backgroundColor: "#d6fadb",
        width: Width/1.25,
        height: Height/13,
        borderRadius: Width/25,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: shadow.shadowOpacity,
        shadowColor: shadow.shadowColor,
        shadowRadius: shadow.shadowRadius,
        shadowOffset: shadow.shadowOffset
    },
    textField1: {
        fontSize: Width/25,
        backgroundColor: "white",
        width: Width/1.25,
        height: Height/14,
        borderRadius: Width/25,
        paddingHorizontal: Width/15,
        shadowOpacity: shadow.shadowOpacity,
        shadowColor: shadow.shadowColor,
        shadowRadius: shadow.shadowRadius,
        shadowOffset: shadow.shadowOffset
    },
    content1: {
        width: Width/1.25,
        height: Height/2.65,
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center",
        marginTop: Height/80,
    },
    content2: {
        width: Width/1.125,
        height: Height/2,
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center",
        marginTop: Height/10,
    }
})
