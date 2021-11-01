import React, { memo, useState, useEffect } from 'react';
import axios from "axios";
import { StyleSheet, View, Text } from 'react-native';

import TestResultCard from '../../components/UserScreen/TestResultCard';

import { Test, PcrTest } from '../../constants/datatypes';
import { API_URL, test_acess_token } from '../../shared/routes';

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

    const [antigenTestList, setAntigenTestList] = useState<Array<PcrTest>>([]);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/management/api/V1/visitor/antigen/1`, {
            headers: {
                'Authorization': `Bearer ${test_acess_token}`
            }
        })
            .then((res) => {
                if (res.data.TestData.length == 0) {
                    setIsError(true);
                    setMessage("No Records to Display");
                    console.log(message);
                } else {
                    for (let obj of res.data.TestData) {
                        antigenTestList.push(obj);
                    }
                    console.log(antigenTestList);
                }
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
                setMessage("An error Occured. Try Again Later");
                console.log(message);
            })
    }, []);
    
    return (
        <View style={styles.container}>
            {isError &&
                <View style={styles.info}>
                    <Text style={styles.infoFont}>{message}</Text>
                </View>
            }
            {antigenTestList.map((test: PcrTest) => {
                return (
                    <TestResultCard key={test.id} testData={test} />
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    info: {
        backgroundColor: '#b6dddb',
        width: "100%",
        padding: 10,
        marginBottom: 8,
        marginTop: 8,
    },
    infoFont: {
        fontSize: 17,
    },
});
