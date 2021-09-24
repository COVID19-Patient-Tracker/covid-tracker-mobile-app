import * as React from 'react';
import { StyleSheet, Button, Alert, View, Text, ScrollView } from 'react-native';

import CustomTouchable from '../../components/UserScreen/CustomTouchable';
import CustomTouchable2 from '../../components/UserScreen/CustomTouchable2';
import WelcomeCard from '../../components/UserScreen/WelcomeCard';
import ListView from '../../components/UserScreen/ListView';

import { RootTabScreenProps } from '../../constants/navtypes';

export default function UserHomeScreen({ navigation }: RootTabScreenProps<'UserHome'>) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    const testNavigation = () => navigation.navigate('TestRoot');
    const visitNavigation = () => navigation.navigate('Visit');

    return (
        <ScrollView>
            <View style={styles.container}>
                <WelcomeCard />
                <Text style={styles.title}>Services</Text>
                <CustomTouchable
                    headText="Check Test Results"
                    onNavigatePress = {testNavigation}
                />
                <br></br>
                <CustomTouchable2
                    headText="Hospital Visit"
                    onBtnPress = {visitNavigation}
                />
                <Text style={styles.title}>Contacts of recent visited Hospitals</Text>
                <ListView />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 10,
        alignSelf: "flex-start"
    },
});
