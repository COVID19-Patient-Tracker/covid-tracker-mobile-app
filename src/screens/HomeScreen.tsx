import React, { memo } from 'react';
import { Text, Button, View } from 'react-native';

import CustomBackground from '../components/Layout/CustomBackground';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <CustomBackground>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to Public Home!</Text>
        </View>
        <Button
            onPress={() => navigation.navigate('Login')}
            title="GO TO LOGIN"
            color="#841584"
        />
        <Button
            onPress={() => navigation.navigate('SignUp')}
            title="GO TO REGISTER"
            color="#841584"
        />
    </CustomBackground>

);

export default memo(HomeScreen);
