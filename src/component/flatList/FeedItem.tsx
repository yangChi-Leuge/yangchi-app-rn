import { styles } from "../../styles/styles.ts";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Height, Width } from "../../styles/demention.ts";
import { feedType } from "../../type/itemType.ts";

const FeedItem = ({item} : {item : feedType}) => {
    return (
        // <View style={styless.container}>
        //     <View style={styless.header}>
        //         <Text>{item.fk_member_id}</Text>
        //         <Text>{item.title}</Text>
        //     </View>
        //     <Image style={{width: "95%", height: 200, backgroundColor: "red", alignSelf: "center"}} src={"https://www.elle.co.kr/resources_old/online/org_online_image/el/d1c94edc-cae0-42d2-ac5d-d34a16a33946.jpg"}></Image>
        //     <View style={{width: "100%", height: 230}}>
        //         <View style={{flexDirection: "row"}}>
        //             <FlatList scrollEnabled={false} horizontal={true} data={item.hashtage?.split("#")} renderItem={({item}) => (
        //                 item && <View style={{width: 110, height: 37, alignItems: "center", justifyContent: "center", backgroundColor: "#999", borderRadius: 6, opacity: 0.5, marginHorizontal: 7, paddingHorizontal: 3}}>
        //                   <Text numberOfLines={1}>#{item} </Text>
        //                 </View>
        //             )}/>
        //             {/*<Image style={{}} src={}></Image>*/}
        //         </View>
        //     </View>
        //
        //
        //     <Image style={{width: 50, height: 50, borderRadius: 1000, alignSelf: "center"}} src={"https://i.ibb.co/cLPGjGc/Avatar.png"}></Image>
        // </View>
        <View style={{width: 175, height: 185, backgroundColor: "#fff", borderRadius: 25, marginVertical: 10, marginHorizontal: 10, overflow: "hidden", paddingHorizontal: 15, paddingVertical: 15}}>
            <Image src={item.img} style={{width: "100%", height: "73%"}}></Image>
            <View style={{width: "100%", height: "27%"}}>
                <Text>{item?.title}</Text>
                <Text>{item?.hashtage}</Text>
            </View>
        </View>
    )
}

const styless = StyleSheet.create({
    container: {
        width: Width/1.05,
        backgroundColor: '#dfdfdf',
        alignSelf: "center",
        marginVertical: 20,
        borderRadius: 20,
        overflow: "hidden",
    },
    header: {
        width: "100%",
        height: Height/15,
        backgroundColor: '#cdcdcd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 5,
    }
})

export default FeedItem;
