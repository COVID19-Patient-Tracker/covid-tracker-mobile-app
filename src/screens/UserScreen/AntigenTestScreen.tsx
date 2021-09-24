import * as React from 'react';
import { StyleSheet, Button, Alert, View, Text } from 'react-native';

import { RootTabScreenProps } from '../../constants/navtypes';

export default function AntigenTestScreen() {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.container}>
            <View>  <Text>   This is user Profile </Text></View>
            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                title="Antigen Test"
                color="#841584"
                accessibilityLabel="Learn more about this purple button" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        width: 300,
    },

});
