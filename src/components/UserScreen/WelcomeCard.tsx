import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const WelcomeCard = () => (
    <Card style={styles.cards}>
        <Card.Cover source={require('../../assets/images/usercover.jpg')} />
        <Card.Content>
            <Paragraph style={styles.text}>We are in this together - and we will get through this together.. Stay Safe</Paragraph>
        </Card.Content>

    </Card>
);

const styles = StyleSheet.create({
    cards: {
        width: '100%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign:"center",
    },
});

export default WelcomeCard;