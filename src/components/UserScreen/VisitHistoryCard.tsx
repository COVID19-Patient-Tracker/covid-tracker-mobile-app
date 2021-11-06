import React from "react";
import { View, StyleSheet, Text } from "react-native";

import {Test, VisitHistory} from '../../constants/datatypes'

type customProp = {
    VisitData: VisitHistory;
}

const VisitHistoryCard = ({ VisitData }: customProp) => {
    return (
        <View style={styles.cardStyle}>
                <Text style={styles.topicFont}>
                    ID          :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{VisitData.id}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Date    :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{VisitData.date}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Hospital   :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{VisitData.hospital}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Ward    :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{VisitData.ward}</Text>
                </Text>
                <Text style={styles.topicFont}>
                    Status  :&nbsp;
                    <Text style={styles.dataFont}>&nbsp;{VisitData.status}</Text>
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 2,
        //backgroundColor: "#b6dddb",
        borderRadius: 8,
        width: "100%",
        margin:5,
        padding: 5,
        paddingLeft:30,
        alignSelf: 'center',
    },
    resultCard: {
        width: "35%",
    },
    topicFont: {
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 30,

    },
    dataFont: {
        fontSize: 15,
        fontWeight: "normal",

    }

});

export default VisitHistoryCard;