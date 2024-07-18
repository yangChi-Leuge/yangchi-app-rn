import { styles } from "../../styles/styles.ts";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { newsType } from "../../type/itemType.ts";
import { Height, Width } from "../../styles/demention.ts";
import { StackNavigationProp } from "@react-navigation/stack";
import { NewsStackNavigationType } from "../../type/navigationType.ts";
import { store } from "../../state/store.ts";

const NewsItem = ({item, navigation} : {item : newsType, navigation : StackNavigationProp<NewsStackNavigationType>}) => {
    return (
        <Pressable onPress={() => {
            navigation.navigate("NewsNewsMore");
            store.setState({currentNews: item})
        }} style={styleso.container}>
            <View style={{height: "100%", width: "8%", backgroundColor: "#AAA", borderRightWidth: 1}}></View>
            <View style={{height: "100%", width: "92%", backgroundColor: "#FFF", paddingHorizontal: 15, paddingVertical: 1, justifyContent: "center"}}>
                <Text style={{fontSize: 17, fontWeight: "600"}} numberOfLines={1}>{item.title}</Text>
                <Text style={{fontSize: 14, fontWeight: "500", color: "#777"}} numberOfLines={1}>{item.title.slice(15, -1)}</Text>
            </View>
        </Pressable>
    )
}

const styleso = StyleSheet.create({
    container: {
        width: Width/1.125,
        height: Height/12,
        backgroundColor: "#fff",
        marginVertical: 5,
        justifyContent: "center",
        alignSelf: "center",
        paddingRight: 1,
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
        borderWidth: 1,
    }
})

export default NewsItem;
