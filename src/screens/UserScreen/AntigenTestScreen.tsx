import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import TestResultCard from '../../components/UserScreen/TestResultCard';

import { Test } from '../../constants/datatypes';

const dataSet = [
    {
        id: 1 ,
        date: "2021-12-12", 
        place:"Vaccination Center", 
        result: "positive"
    },
    {
        id: 780 ,
        date: "2021-12-12", 
        place:"Colombo Hospital", 
        result: "negative"
    },
]

export default function AntigenTestScreen() {
    return (
        <View style={styles.container}>
            {dataSet.map((test : Test) => {
                return (
                <TestResultCard key={test.id} testData={test} />
            )})}
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
