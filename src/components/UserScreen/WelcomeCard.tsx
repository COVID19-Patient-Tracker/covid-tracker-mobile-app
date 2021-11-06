import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';


const WelcomeCard = () => (
    <Card style={styles.cards}>
        <Card.Cover style={styles.cardCover} source={require('../../assets/images/homeimage.png')} />
        <Card.Content style={styles.cardCover}>
            <Paragraph style={styles.text}>We are in this together - and we will get through this together.. Stay Safe..</Paragraph>
        </Card.Content>

    </Card>
);

const styles = StyleSheet.create({
    cards: {
        width: '100%',
    },
    cardCover: {
        backgroundColor: '#4fe8eb',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign:"center",
        fontStyle: 'italic',
    },
});

export default WelcomeCard;