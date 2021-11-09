import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootTabScreenProps } from '../../constants/navtypes';

export default function UserProfileScreen({ navigation }: RootTabScreenProps<'UserProfile'>) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.userRow}>
                    <Image
                        style={styles.userImage}
                        source={require('../../assets/images/useravatar.png')}
                    />
                    <View style={styles.userNameRow}>
                        <Text style={styles.userNameText}>Namal Bandara</Text>
                    </View>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>rnj@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.listView}>
                    <ListItem containerStyle={styles.listItemContainer} key={0} bottomDivider>
                        <Icon reverse size={20} name='badge' color="#34b7a6" />
                        <ListItem.Content>
                            <ListItem.Title style={styles.titleFont}>USER ID</ListItem.Title>
                            <ListItem.Subtitle>10054</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={1} bottomDivider>
                        <Icon reverse size={20} name='badge' color="#34b7a6" />
                        <ListItem.Content>
                            <ListItem.Title style={styles.titleFont}>NIC</ListItem.Title>
                            <ListItem.Subtitle>975787653v</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={2} bottomDivider>
                        <Icon name='home' reverse size={20} color="#34b7a6" />
                        <ListItem.Content>
                            <ListItem.Title style={styles.titleFont}>Address</ListItem.Title>
                            <ListItem.Subtitle>No 10 / Colombo</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={3} bottomDivider>
                        <Icon name='phone' reverse size={20} color="#34b7a6" />
                        <ListItem.Content>
                            <ListItem.Title style={styles.titleFont}>Contact No</ListItem.Title>
                            <ListItem.Subtitle>0771223456</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={4} bottomDivider>
                        <Icon name='today' reverse size={20} color="#34b7a6" />
                        <ListItem.Content>
                            <ListItem.Title style={styles.titleFont}>Birth Day</ListItem.Title>
                            <ListItem.Subtitle>1998/11/12</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </View>
                <View>

                </View>
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
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
    userImage: {
        borderRadius: 60,
        height: 80,
        marginBottom: 10,
        width: 80,
    },
    userNameRow: {
        marginBottom: 5,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userBioText: {
        fontSize: 15.5,
        textAlign: 'center',
    },
    listItemContainer: {
        height: 70,
        borderWidth: 1.5,
        borderColor: '#ECECEC',
        width: '100%',
        padding: 5,
    },
    listView: {
        height: 70,
        borderWidth: 1.5,
        borderColor: '#ECECEC',
        width: '100%'
    },
    titleFont: {
        fontWeight: 'bold',
    },
});
