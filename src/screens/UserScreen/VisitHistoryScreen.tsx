import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, Button, Alert } from 'react-native';

import { Navigation } from '../../constants/types';

type Props = {
  navigation: Navigation;
};

const VisitHistoryScreen = ({ navigation }: Props) => {

  return (
    <View>
      <View>  <Text>   This is user Profile </Text></View>
      <Button
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        title="Antigen Test"
        color="#841584"
        accessibilityLabel="Learn more about this purple button" />
    </View>
  );
};


export default memo(VisitHistoryScreen);
