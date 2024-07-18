import { Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { store } from "../../state/store.ts";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useTranslate } from "../../hooks/useTranslate.tsx";
import GoBackButton from "../../component/element/GoBackButton.tsx";
import { StackNavigationProp } from "@react-navigation/stack";
import { NewsStackNavigationType } from "../../type/navigationType.ts";

const NewsMoreView = () => {

    const {currentNews} = store.getState()

    const [isLoading, transText, translateText] = useTranslate()

    const [renderContent, setRenderContent] = useState<string>("");

    const navigation = useNavigation<StackNavigationProp<NewsStackNavigationType>>();

    useFocusEffect(useCallback(() => {
        translateText(currentNews.description, store.getState().currentLang)
    }, []))

    useEffect(() => {
        if(!isLoading) {
            console.log(transText)
            setRenderContent(transText)
        }
    }, [isLoading]);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
            <View style={[styles.container, {backgroundColor: "white" ,paddingVertical: 40, marginTop: 20}]}>
                <GoBackButton navigation={navigation} color={"black"}/>
                <Text style={[styles.title2, {color : "black"}]}>{currentNews.title}</Text>
                <View style={{width: "100%", height: 1, backgroundColor: "black"}}></View>
                <Image style={{width: 200, height: 200, marginTop: 20, marginBottom: 10}} src={currentNews.imageUrl}></Image>
                <Text style={[styles.description1, {color : "black"}]}>{renderContent}</Text>
            </View>
        </SafeAreaView>
    );
}

export default NewsMoreView;
