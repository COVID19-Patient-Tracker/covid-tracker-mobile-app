import React, { memo } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <ScrollView>
        <View style={styles.container}>
            <Image
                style={styles.Logo}
                source={require('../assets/images/logo4.png')}
            />

        </View>
        <View style={styles.container2}>
            <Text style={styles.homeTxt}>Your Health Matters</Text>
            <Image
                style={styles.homeImg}
                source={require('../assets/images/home.png')}
            />
            <View style={styles.container3}>
                <Button
                    mode="contained"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Login')}
                >
                    LOGIN HERE
                </Button>
            </View>

        </View>
        <View style={styles.container4}>
            <Image
                style={styles.sympImg}
                source={require('../assets/images/symp.png')}
            />
        </View>
        <LinearGradient
            colors={['#0f536c', '#91dde1', '#1bbed6']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.container5}
        >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Uploadxray')}>
                <View>
                    <Image
                        style={styles.cardImg}
                        source={require('../assets/images/health.png')}
                    />
                </View>
                <View style={{ padding: 15 }}>
                    <Text style={styles.homeTxt}>Feeling sick?</Text>
                    <Text style={styles.homeTxt}>Do your own test!</Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>

        <View style={styles.container4}>
            <Image
                style={styles.sympImg}
                source={require('../assets/images/remedy.png')}
            />
        </View>

        {/* <Button
                mode="contained"
                style={styles.btn}
                onPress={() => navigation.navigate('UserRoot')}
            >
                HOME
            </Button> */}
    </ScrollView>
)
export default memo(HomeScreen);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#1bbed6',
    },
    container2: {
        backgroundColor: '#1bbed6',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    container3: {
        paddingTop: 15,
    },
    container4: {
        padding: 5,
    },
    container5: {
        paddingLeft: 30,
        flexDirection: 'row',
        backgroundColor: 'blue',
        margin: 12,
        borderRadius: 15,
    },
    Logo: {
        width: 250,
        height: 50,
    },
    homeImg: {
        width: 250,
        height: 200,
    },
    sympImg: {
        width: '100%',
        height: 200,
    },
    cardImg: {
        width: 130,
        height: 100,
    },
    homeTxt: {
        color: '#000062',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 15,
        backgroundColor: '#1f7091',
    },
});
