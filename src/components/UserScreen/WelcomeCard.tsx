import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const WelcomeCard = () => (
    <Card style={styles.cards}>
        <Card.Cover source={require('../../assets/images/cover.jpg')} />
        <Card.Content>
            <Paragraph style={styles.text}>Let's Fight against COVID-19</Paragraph>
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
    },
});

export default WelcomeCard;