import React from "react";
import { View, StyleSheet, Text } from "react-native";

import {Test} from '../../constants/datatypes'


type customProp = {
    testData: Test;
}

const TestResultCard = ({ testData }: customProp) => {
    return (
        <View style={styles.cardStyle}>
            <View style={styles.dataCard}>
                <Text style={styles.topicFont}>
                    Test ID :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{testData.id}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Date :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{testData.date}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Place :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{testData.place}</Text>
                </Text>
            </View>
            <View style={styles.resultCard}>
                <Text style={styles.topicFont}>
                    Result
                </Text>
                <Text style={styles.resultFont}>
                    {testData.result}
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        //borderWidth: 1,
        backgroundColor: "#97c7e1",
        borderRadius: 15,
        width: "100%",
        margin:5,
        flexDirection: 'row',
        padding: 5,
    },
    dataCard: {
        width: "65%",
    },
    resultCard: {
        width: "35%",
    },
    topicFont: {
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 30,

    },
    resultFont: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: 'uppercase',
    },
    dataFont: {
        fontSize: 15,
        fontWeight: "normal",

    }

});

export default TestResultCard;