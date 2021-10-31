import * as React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'

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
                        <Text style={styles.userNameText}>Roshinie Jayasundara</Text>
                    </View>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>roshinienj@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.listView}>
                    <ListItem containerStyle={styles.listItemContainer} key={1} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>NIC</ListItem.Title>
                            <ListItem.Subtitle>&nbsp;&nbsp;975787653v</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={2} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Address</ListItem.Title>
                            <ListItem.Subtitle>&nbsp;&nbsp;678/6, Colombo Road, Kurunegala</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={3} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Contact No</ListItem.Title>
                            <ListItem.Subtitle>&nbsp;&nbsp;077-1223456</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem containerStyle={styles.listItemContainer} key={4} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>Birth Day</ListItem.Title>
                            <ListItem.Subtitle>&nbsp;&nbsp;1998/11/12</ListItem.Subtitle>
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
        fontSize: 18,
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
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
        width: '100%'
    },
    listView: {
        height: 55,
        borderWidth: 0.5,
        borderColor: '#ECECEC',
        width: '100%'
    },
});
