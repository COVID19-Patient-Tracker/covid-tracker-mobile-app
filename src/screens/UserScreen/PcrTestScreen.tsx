import * as React from 'react';
import { StyleSheet, Button, Alert, View, Text } from 'react-native';


import TestResultCard from '../../components/UserScreen/TestResultCard';

import { Test } from '../../constants/datatypes';

const dataSet = [
    {
        id: 1,
        date: "2021-12-12",
        place: "Vaccination Center",
        result: "pending"
    },
]

export default function PcrTestScreen() {
    return (
        <View style={styles.container}>
            {dataSet.map((test: Test) => {
                return (
                    <TestResultCard key={test.id} testData={test} />
                )
            })};
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
});
