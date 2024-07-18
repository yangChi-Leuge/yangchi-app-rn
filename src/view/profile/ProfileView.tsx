import React, { useState, useCallback, useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles.ts";
import EarthPlanet from "../../component/element/EarthPlanet.tsx";
import { useFocusEffect } from "@react-navigation/native";
import { Height } from "../../styles/demention.ts";
import { useGetUser } from "../../hooks/useUser.tsx";
import { store } from "../../state/store.ts";
import { useTranslate, useTransTextList } from "../../hooks/useTranslate.tsx";

const languages = [
    { code: 'kr', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'germ', name: 'German' },
    { code: 'fran', name: 'Fran' },
    { code: 'chi', name: 'China' },
    { code: 'ital', name: 'Italia' },
    { code: 'pli', name: 'Piliphine' },
    { code: 'jp', name: 'Japan' }
];

const ProfileView = () => {
    const [animationStart, setAnimationStart] = useState(false);
    const [isLoading, getUser] = useGetUser();
    const [modalVisible, setModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [istranLoading, tranRes, tran] = useTranslate()
    const [istranLoadingList, tranResList, tranL] = useTransTextList()

    const rendL = ["님, 안녕하세요!", "좋아요 누른 게시글", "올린 게시글"]

    const [renderText, setRenderText] = useState<string[]>(rendL)

    const {currentUser, currentLang} = store.getState()

    useFocusEffect(
        useCallback(() => {
            setAnimationStart(true);
            getUser();
            return () => setAnimationStart(false);
        }, [])
    );

    useEffect(() => {
        if (!isLoading){
            console.log(currentUser.name)
            console.log(currentLang)
            tran(currentUser.name, currentLang);
        }
    }, [isLoading]);

    useEffect(() => {
        if (!istranLoading) {
            console.log(tranRes)
        }
    }, [istranLoading]);

    useEffect(() => {
        tranL(rendL)
    }, [currentLang])

    useEffect(() => {
        if (!istranLoadingList) {
            setRenderText(tranResList)
        }
    }, [istranLoadingList]);

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? languages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === languages.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <EarthPlanet opacity={0.5} types={true} start={animationStart} isAnimated={true} />
                <View style={styles.content2}>
                    <View style={{ width: "100%", height: "15%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: Height / 35, paddingBottom: Height / 105 }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image style={{ width: 26, height: 26 }} src={"https://i.ibb.co/Zxsn1Cw/icon-settings.png"} />
                        </TouchableOpacity>
                        <Image style={{ width: 26, height: 26 }} src={"https://i.ibb.co/M2P4XPW/Vector.png"} />
                    </View>
                    <Text style={[styles.title2, {color: "black", alignSelf: "center"}]}>{currentUser.name} {renderText[0]}</Text>
                    <Text style={[styles.title2, {color: "black", alignSelf: "flex-start", marginLeft: 20, marginTop: 60}]}>{renderText[1]} {">"}</Text>
                    <Text style={[styles.title2, {color: "black", alignSelf: "flex-start", marginLeft: 20, marginTop: 10}]}>{renderText[2]} {">"}</Text>
                </View>
                <Image style={{ width: 100, height: 100, borderRadius: 1000, alignSelf: "center", position: "absolute", marginTop: 75 }} src={"https://i.ibb.co/cLPGjGc/Avatar.png"} />

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styless.modalContainer}>
                    <View style={styless.modalView}>
                        <TouchableOpacity onPress={handlePrevious} style={styless.arrowButton}>
                            <Text style={styless.arrowText}>{"◀"}</Text>
                        </TouchableOpacity>
                        <Text style={styless.languageText}>{languages[currentIndex].name}</Text>
                        <TouchableOpacity onPress={handleNext} style={styless.arrowButton}>
                            <Text style={styless.arrowText}>{"▶"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!modalVisible);
                            store.setState({currentLang : languages[currentIndex].code})
                        }} style={styless.closeButton}>
                            <Text style={styless.closeButtonText}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styless = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
    },
    arrowButton: {
        padding: 10,
        marginHorizontal: 20
    },
    arrowText: {
        fontSize: 24,
        color: '#000'
    },
    languageText: {
        fontSize: 20,
        color: '#000'
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 10
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16
    }
});

export default ProfileView;
