import React, { memo } from 'react';
import { Text, Button, View } from 'react-native';
import Background from '../components/Background';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => (
    <Background>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>SIGN UP PAGE!</Text>
        </View>
        <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="BACK TO HOME"
            color="#841584"
        />

        <Button
            onPress={() => navigation.navigate('LoginScreen')}
            title="SIGN UP"
            color="#841584"
        />
    </Background>

);

export default memo(RegisterScreen);
