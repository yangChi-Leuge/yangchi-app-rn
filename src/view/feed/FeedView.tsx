import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles.ts";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGetFeed } from "../../hooks/useFeed.tsx";
import { feedType } from "../../type/itemType.ts";
import FeedItem from "../../component/flatList/FeedItem.tsx";
import { Height, Width } from "../../styles/demention.ts";
import BottomSheet from "react-native-gesture-bottom-sheet"

const FeedView = () => {

    const bottomRef = useRef<BottomSheet>(null);

    const [isLoadingGet, feedList, getFeed] = useGetFeed()

    const [renderFeedList, setRenderFeedList] = useState<feedType[][]>([])

    useFocusEffect(
        useCallback(()=>{
            getFeed()
        },[])
    )

    useEffect(() => {
        if (!isLoadingGet) {
            let l : feedType[][]= []

            for (let i = 0; i < feedList.length; i += 2) {
                l.push(feedList.slice(i, i + 2));
            }

            setRenderFeedList(l);
        }
    }, [isLoadingGet]);

    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet height={Height} ref={bottomRef}/>
            <View style={styles.container}>
                <FlatList style={{overflow: "visible", alignSelf: "center", width: Width}} data={renderFeedList} renderItem={({item}) => (<View style={{flexDirection: "row", width: Width/1.05, alignSelf: "center", justifyContent: "space-evenly"}}>
                    <FeedItem item={item[0]}/>
                    <FeedItem item={item[1]}/>
                </View>)} />
                <TouchableOpacity onPress={() => {bottomRef.current.show()}} style={{width: 70, height: 70, position: "absolute", borderRadius: 1000, backgroundColor: "#48ce71",  marginTop: 570, marginLeft: 290, alignItems: "center", paddingBottom: 20}}>
                    <Text style={{fontSize: 55, color: "white", fontWeight: "200", marginTop: -1.5}}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default FeedView;
