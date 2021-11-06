import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from 'react-native-elements'

import { Test, VisitHistory } from '../../constants/datatypes'

type customProp = {
    number: string,
    hospital: string,
}

const CallCard = ({number, hospital}: customProp) => {
    return (
        <View style={styles.cardStyle}>
            <View style={styles.iconView}>
                <Icon reverse size={20} name='phone' color="#1897c1" />
            </View>
            <View>
                <Text style={styles.topicFont}>
                    {number}
                </Text>
                <Text style={styles.dataFont}>{hospital}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 8,
        width: "100%",
        margin: 3,
        padding: 5,
        alignSelf: 'center',
        flexDirection:'row',
        maxWidth: '90%',
    },
    topicFont: {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 30,
    },
    dataFont: {
        fontSize: 14,
        fontWeight: "normal",
    },
    iconView: {
        paddingRight: 15,
    }

});

export default CallCard;