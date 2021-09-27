import React, { memo } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import CustomBackground from '../components/Layout/CustomBackground';
import TestResultCard from '../components/UserScreen/TestResultCard';
import CustomBackground2 from '../components/Layout/CustomBackground2';
import CustomHeader from '../components/Layout/CustomHeader';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <CustomBackground2>
        <View>
            <CustomHeader>COVID-SAFE</CustomHeader>
        </View>

        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
            <Text></Text>
        </View>
        <Button
            icon="camera"
            mode="contained"
            color="#0036ee"
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}
        >
            GO TO LOGIN
        </Button>
        <br></br>
        <Button
            icon="camera"
            mode="contained"
            color="#0036ee"
            style={styles.btn}
            onPress={() => navigation.navigate('SignUp')}
        >
            GO TO SIGNUP
        </Button>
    </CustomBackground2>
)
export default memo(HomeScreen);

const styles = StyleSheet.create({
    btn: {
        paddingTop: 4,
        paddingBottom: 4,
    },
});
