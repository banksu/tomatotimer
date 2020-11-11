import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Timer extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.upper}>
          <Text style={style.text}>25:00</Text>
        </View>
        <View style={style.lower}>
          <Text>Button here</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  upper: {
    flex: 1,
    justifyContent: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 150,
    textAlign: "center",
  },
});

export default Timer;
