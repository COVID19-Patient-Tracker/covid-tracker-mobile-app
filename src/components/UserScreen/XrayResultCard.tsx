import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {dateTime } from '../../shared/utils';

type customProp = {
    result: string,
    accuracy: number,
  }

const XrayResultCard = ({result , accuracy}: customProp) => {
    return (
        <View style={styles.cardStyle}>
                <Text style={styles.topicFont}>
                    Date    :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{dateTime()}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Accuracy    :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{accuracy}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Result  :&nbsp;
                    <Text style={styles.resultFont}>&nbsp;{result}</Text>
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        //borderWidth: 2,
        //backgroundColor: "#b6dddb",
        borderRadius: 8,
        width: "100%",
        margin:10,
        padding: 5,
        paddingLeft:30,
        alignSelf: 'center',
    },
    topicFont: {
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 30,

    },
    dataFont: {
        fontSize: 15,
        fontWeight: "normal",

    },
    resultFont: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'red',

    }

});

export default XrayResultCard;