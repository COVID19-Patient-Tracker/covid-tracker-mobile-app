import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type customProp = {
  headText: string,
  onBtnPress: Function,
}

const CustomTouchable = ({ headText, onBtnPress }: customProp) => {

  return (
    <LinearGradient
      colors={['#12acdb', '#a6d2df', '#a5d7e7',]}
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
    marginBottom: 10,
    justifyContent: 'center',
  },
  stext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomTouchable;