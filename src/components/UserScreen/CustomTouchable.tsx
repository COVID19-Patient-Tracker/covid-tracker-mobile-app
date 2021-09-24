import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

type customProp =  {
  headText : string,
  onNavigatePress : Function,
}

const CustomTouchable = ({ headText, onNavigatePress}: customProp) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onNavigatePress()}
    >
      <View style={[{
        flex: 1,
        justifyContent: 'center',

      }]}>
        <View style={{ position: 'relative', width: "60%" }}>
          <Text style={styles.stext}>{headText}</Text>
        </View>
      </View>
      <View style={{ position: 'absolute', top: 0, right: 0, left: 30, width: "95%", height: "100%" }}>
        <Image
          source={require("../../assets/images/test-result.svg")}
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
    backgroundColor: "#b3decd",
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

export default CustomTouchable;