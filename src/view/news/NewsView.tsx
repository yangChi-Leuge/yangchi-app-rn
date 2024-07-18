import { FlatList, SafeAreaView, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useGetNews } from "../../hooks/useNews.tsx";

const NewsView = () => {

    const [isLoading, newsList, getNews] = useGetNews()

    useFocusEffect(
        useCallback(() => {
            getNews()
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList data={[]} renderItem={() => <></>}></FlatList>
            </View>
        </SafeAreaView>
    );
}

export default NewsView;
