import React from "react";
import PropTypes from "prop-types";

class Drum extends React.Component {
  constructor(props) {
    super(props);
  }
  playSound() {
    document
      .getElementById(this.props.audioObject.keyTrigger)
      .play()
      .catch(console.error);
    document.getElementById("display").innerHTML = this.props.audioObject.id;
  }
  render() {
    return (
      <button
        className="drum-pad"
        id={`drum-${this.props.audioObject.keyTrigger}`}
        onClick={this.playSound.bind(this)}
      >
        <audio
          src={this.props.audioObject.url}
          id={this.props.audioObject.keyTrigger}
          className="clip"
        ></audio>
        {this.props.audioObject.keyTrigger}
      </button>
    );
  }
}
Drum.propTypes = {
  audioObject: PropTypes.object.isRequired,
};
export default Drum;
