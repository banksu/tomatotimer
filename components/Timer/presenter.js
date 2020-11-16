import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button/index";

class Timer extends Component {
  render() {
    const { isPlaying, timerDuration, elapsedTime } = this.props;
    console.log(this.props);
    return (
      <View style={style.container}>
        <StatusBar barStyle={"light - content"} />
        <View style={style.upper}>
          <Text style={style.text}>25:00</Text>
        </View>
        <View style={style.lower}>
          {!isPlaying ? (
            <Button
              iconName="play-circle-o"
              onPress={() => alert("it work!")}
            ></Button>
          ) : null}

          {isPlaying && (
            <Button
              iconName="pause-circle-o"
              onPress={() => alert("it work!")}
            ></Button>
          )}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 150,
    textAlign: "center",
  },
});

export default Timer;
