import * as React from 'react';
import { StyleSheet, Button, Alert, View, Text } from 'react-native';

import { RootTabScreenProps } from '../../constants/navtypes';

export default function UserHomeScreen({ navigation }: RootTabScreenProps<'UserHome'>) {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.container}>
            <View>  <Text>   Welcome to Logged in user Home  </Text></View>
            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                title="SEE TEST RESULTS"
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
