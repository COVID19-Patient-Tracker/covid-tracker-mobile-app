import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

const ListView = () => (
    <View style={styles.container}>
        <List.Item
            title="011-8912876"
            description="General Hospital - Colombo"
            left={props => <List.Icon {...props} icon="phone" />}
        />
        <List.Item
            title="011-9876542"
            description="General Hospital - Kollupitiya"
            left={props => <List.Icon {...props} icon="phone" />}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:"flex-start",
        fontWeight: 'bold',
    },
    num: {
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default ListView; 