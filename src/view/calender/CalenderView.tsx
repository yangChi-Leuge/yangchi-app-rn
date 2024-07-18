import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useGetGlobalMonth } from "../../hooks/useGlobal";
import { styles } from "../../styles/styles.ts"; // 외부 훅 사용 예시

const CalendarView = () => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [isLoading, globalList, getGlobal] = useGetGlobalMonth(); // 외부 훅에서 데이터 및 상태 가져오기

    useEffect(() => {
        getGlobal(`${selectedMonth + 1}`.padStart(2, "0") + "01"); // 선택된 월에 따라 데이터 가져오기
    }, [selectedMonth]);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handlePrevMonth = () => {
        const newMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
        setSelectedMonth(newMonth);
        if (newMonth === 11) {
            setSelectedYear(selectedYear - 1);
        }
    };

    const handleNextMonth = () => {
        const newMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
        setSelectedMonth(newMonth);
        if (newMonth === 0) {
            setSelectedYear(selectedYear + 1);
        }
    };

    const getMarkedDates = () => {
        const markedDates = [];
        if (globalList) {
            globalList.forEach(event => {
                const eventDate = event.date; // 예: "0604"
                const eventDescription = event.name; // 이벤트 이름
                const formattedDate = `${new Date(selectedYear, selectedMonth, parseInt(eventDate.slice(2)))}`;
                markedDates.push({
                    date: formattedDate,
                    style: {
                        backgroundColor: '#92c3fa'
                    },
                    textStyle: { color: 'black' },
                    containerStyle: [],
                    allowDisabled: true,
                });
            });
        }
        return markedDates;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styless.header}>
                <TouchableOpacity onPress={handlePrevMonth}>
                    <Text style={[styless.headerText, { fontSize: 25, position: "absolute", marginTop: -14, marginLeft: -9 }]}>{'◀'}</Text>
                </TouchableOpacity>
                <Text style={styless.headerText}>
                    {months[selectedMonth]} {selectedYear}
                </Text>
                <TouchableOpacity onPress={handleNextMonth}>
                    <Text style={[styless.headerText, { fontSize: 25, position: "absolute", marginTop: -14, marginLeft: -9 }]}>{'▶'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styless.calendarContainer}>
                <CalendarPicker
                    selectedStartDate={new Date(selectedYear, selectedMonth, 1)}
                    onMonthChange={(date) => {
                        setSelectedMonth(date.getMonth());
                        setSelectedYear(date.getFullYear());
                    }}
                    previousTitle=""
                    nextTitle=""
                    selectedDayColor="#2E66E7"
                    selectedDayTextColor="#FFFFFF"
                    restrictMonthNavigation={true}
                    textStyle={{ color: "#000000" }}
                    todayBackgroundColor="#007048FF"
                    width={Dimensions.get('window').width / 1.1}
                    height={Dimensions.get('window').height / 2.3}
                    backgroundColor="#FFFFFF"
                    initialDate={new Date(selectedYear, selectedMonth)}
                    customDatesStyles={getMarkedDates()}
                />
            </View>
        </SafeAreaView>
    );
}

export default CalendarView;

const styless = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        height: 50,
        marginTop: 35,
        marginBottom: 45,
    },
    headerText: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    calendarContainer: {
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 2.3,
        alignSelf: "center",
        paddingTop: 30,
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
});
