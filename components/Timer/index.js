import { connect } from "react-redux";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, timerDuration, elapsedTime } = state;
  return {
    isPlaying,
    timerDuration,
    elapsedTime,
  };
}
export default connect(mapStateToProps)(Timer);
