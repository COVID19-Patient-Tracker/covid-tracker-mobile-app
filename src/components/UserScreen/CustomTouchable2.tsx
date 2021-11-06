import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type customProp = {
  headText: string,
  onBtnPress: Function,
}
const CustomTouchable2 = ({ headText, onBtnPress }: customProp) => {

  return (
    <LinearGradient
      colors={['#10bdc7', '#91dde1', '#71efe5']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={styles.button}
    >
      <TouchableOpacity>
        <Text style={styles.stext} onPress={() => onBtnPress()} >{headText}</Text>
      </TouchableOpacity>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    height: 80,
    width: '90%',
    borderRadius: 8,
    shadowRadius: 1,
    justifyContent: 'center',
  },
  stext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomTouchable2;