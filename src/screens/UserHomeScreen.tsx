import React, { memo } from 'react';
import { Text, View } from 'react-native';

import CustomBackground from '../components/Layout/CustomBackground';

import { Navigation } from '../constants/types';

type Props = {
    navigation: Navigation;
};

const UserHomeScreen = ({ navigation }: Props) => (
    <CustomBackground>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to User Home!</Text>
        </View>
    </CustomBackground>
);

export default memo(UserHomeScreen);
