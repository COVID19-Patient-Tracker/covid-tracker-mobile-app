import React, { memo } from 'react';
import { Text, Button, Alert, View } from 'react-native';
import Background from '../components/Layout/Background';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const UserHomeScreen = ({ navigation }: Props) => (
    <Background>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to User Home!</Text>
        </View>
    </Background>
);

export default memo(UserHomeScreen);
