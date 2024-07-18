import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useGetNews } from "../../hooks/useNews.tsx";
import { newsType } from "../../type/itemType.ts";
import { useTranslate, useTranslateNewsTitle } from "../../hooks/useTranslate.tsx";
import NewsItem from "../../component/flatList/NewsItem.tsx";
import { StackNavigationProp } from "@react-navigation/stack";
import { NewsStackNavigationType } from "../../type/navigationType.ts";
import { Height, Width } from "../../styles/demention.ts";
import Toast from "react-native-toast-message";

const NewsView = () => {

    const [isLoading, newsList, getNews] = useGetNews()

    const [renderList, setRenderList] = useState<newsType[]>([]);
    const [isLoadingTrans, transList, transLateList] = useTranslateNewsTitle()

    useFocusEffect(
        useCallback(() => {
            Toast.show({
                type: "info",
                text1: "최신 뉴스를 불러오는중",
                text2: "수 초가 걸릴 수 있습니다",
                visibilityTime: 7000
            })
            console.log("getNews")
            getNews()
        }, [])
    )

    useEffect(() => {
        if (!isLoading) {
            // newsList.map((item) => {
            //     transLate(item.title, "kr")
            // })
            transLateList(newsList.slice(0,10))
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoadingTrans) {
            console.log("getdddNews")
            setRenderList(transList)
        }
    }, [isLoadingTrans]);

    const navigation = useNavigation<StackNavigationProp<NewsStackNavigationType>>();

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
            <View style={[styles.container, {backgroundColor: "white"}]}>
                <ScrollView style={{width: Width, alignSelf: "center"}} contentContainerStyle={{alignItems: "center"}}>
                    <Text style={[styles.title2, {color : "black", marginBottom: 20, alignSelf: "flex-start", marginLeft: 30}]}>최근 세계 이슈</Text>
                    {
                        (
                            <FlatList scrollEnabled={false} style={{ overflow: "visible" }} data={renderList}
                                      renderItem={({ item }) => <NewsItem item={item} navigation={navigation} />}></FlatList>
                        )
                    }
                    <View style={{width: Width, height: Height/3}}></View>
                </ScrollView>
                <Toast/>
            </View>
        </SafeAreaView>
    );
}

export default NewsView;
