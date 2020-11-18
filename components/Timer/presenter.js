import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button/index";

function forTime(tomato) {
  let min = Math.floor(tomato / 60);
  tomato -= min * 60;
  let sec = parseInt(tomato % 60, 10);
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //start interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval,
      });
      console.log("Start");
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      //stop interval
      clearInterval(this.state.timerInterval);
      console.log("stop");
    }
  }

  render() {
    const {
      isPlaying,
      timerDuration,
      elapsedTime,
      startTimer,
      restartTimer,
    } = this.props;
    console.log(this.props);
    return (
      <View style={style.container}>
        <StatusBar barStyle={"light - content"} />
        <View style={style.upper}>
          <Text style={style.text}>{forTime(timerDuration - elapsedTime)}</Text>
        </View>
        <View style={style.lower}>
          {!isPlaying ? (
            <Button iconName="play-circle-o" onPress={startTimer}></Button>
          ) : null}

          {isPlaying && (
            <Button iconName="pause-circle-o" onPress={restartTimer}></Button>
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
