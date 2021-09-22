import React, { memo } from 'react';
import { Text, Button, View } from 'react-native';
import Background from '../components/Layout/Background';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <Background>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to Public Home!</Text>
        </View>
        <Button
            onPress={() => navigation.navigate('LoginScreen')}
            title="GO TO LOGIN"
            color="#841584"
        />
        <Button
            onPress={() => navigation.navigate('RegisterScreen')}
            title="GO TO REGISTER"
            color="#841584"
        />
    </Background>

);

export default memo(HomeScreen);
