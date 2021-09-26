import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Navigation } from '../../constants/types';

type customProp =  {
  headText : string,
  onBtnPress : Function,
}
const CustomTouchable2 = ({ headText, onBtnPress}: customProp) => {
  const [count, setCount] = useState(0);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onBtnPress()}
    >
      <View style={[{
        flex: 1,
        justifyContent: 'center',

      }]}>
        <View style={{ position: 'relative', width: "90%" }}>
          <Text style={styles.stext}>{headText}</Text>
        </View>
      </View>
      <View style={{ position: 'absolute', top: 0, right: 0, left: 30, width: "95%", height: "100%" }}>
        <Image
          source={require("../../assets/images/visit.svg")}
          resizeMode="contain"
          style={{
            position: 'relative',
            width: "98%",
            height: '100%',
            left: 50,
          }}
        />
      </View>


    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dea0eb",
    alignItems: "center",
    padding: 10, 
    height: 80,
    width: '90%',
    borderRadius: 8,
    shadowRadius: 1,
  },
  stext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});

export default CustomTouchable2;