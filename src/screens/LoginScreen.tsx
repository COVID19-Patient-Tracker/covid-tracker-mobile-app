import React, { memo } from 'react';
import { Text, Button, View } from 'react-native';
import Background from '../components/Background';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => (
    <Background>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>LOGIN PAGE</Text>
        </View>
        <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="BACK TO HOME"
            color="#841584"
        />

        <Button
            onPress={() => navigation.navigate('UserHomeScreen')}
            title="LOGIN TO MY ACCOUNT"
            color="#841584"
        />
    </Background>

);

export default memo(LoginScreen);
