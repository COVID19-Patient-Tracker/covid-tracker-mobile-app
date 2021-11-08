import React, { memo, useState, useEffect } from 'react';
import axios from "axios";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import TestResultCard from '../../components/UserScreen/TestResultCard';

import { PcrTest } from '../../constants/datatypes';
import { API_URL, test_acess_token } from '../../shared/routes';

const dataSet = [
    {
        id: 121,
        patientId: 1000,
        hospital_id: 3,
        test_data: "2021-09-12",
        test_result: "NEGATIVE",
    },
]

export default function AntigenTestScreen() {

    const [antigenTestList, setAntigenTestList] = useState<Array<PcrTest>>([]);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${API_URL}/management/api/V1/visitor/antigen/2`, {
            headers: {
                'Authorization': `Bearer ${test_acess_token}`
            }
        })
            .then((res) => {
                setIsLoading(false);
                if (res.data.TestData.length == 0) {
                    setIsError(true);
                    setMessage("No Records to Display");
                } else {
                    setAntigenTestList(res.data.TestData);
                    console.log(antigenTestList);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
                setIsError(true);
                setMessage("An error Occured. Try Again Later");
            })
    }, []);

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator size="large" color="#04767a" />}
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
