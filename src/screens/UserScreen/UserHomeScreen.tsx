import * as React from 'react';
import { StyleSheet, Button, Alert, View, Text, ScrollView } from 'react-native';

import CustomTouchable from '../../components/UserScreen/CustomTouchable';
import CustomTouchable2 from '../../components/UserScreen/CustomTouchable2';
import WelcomeCard from '../../components/UserScreen/WelcomeCard';
import CallCard from '../../components/UserScreen/CallCard';

import { RootTabScreenProps } from '../../constants/navtypes';

export default function UserHomeScreen({ navigation }: RootTabScreenProps<'UserHome'>) {

    const testNavigation = () => navigation.navigate('TestRoot');
    const visitNavigation = () => navigation.navigate('Visit');

    return (
        <ScrollView>
            <View style={styles.container}>
                <WelcomeCard />
                <Text style={styles.title}>Services</Text>
                <CustomTouchable
                    headText="Check Test Results"
                    onBtnPress={testNavigation}
                />
                <CustomTouchable2
                    headText="Hospital Visit History"
                    onBtnPress={visitNavigation}
                />
                <Text style={styles.title}>Contact Directory</Text>
                <CallCard number="1990" hospital="Emergency Ambulance Service" />
                <CallCard number="1999" hospital="Health Information" />
                <CallCard number="117" hospital="Covid Complaints" />
                <CallCard number="0112 112 705" hospital="Quarantine Unit" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        padding: 10,
        alignItems:'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 10,
        alignSelf: "flex-start"
    },
});
