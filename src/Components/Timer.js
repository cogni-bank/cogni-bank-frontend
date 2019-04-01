import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0,
      start: Date.now()
    };
  }
  //   getInitialState() {
  //     // This is called before our render function. The object that is
  //     // returned is assigned to this.state, so we can use it later.

  //     return { elapsed: 0 };
  //   }

  componentDidMount() {
    // componentDidMount is called by react when the component
    // has been rendered on the page. We can set the interval here:

    this.timer = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:

    clearInterval(this.timer);
  }

  tick() {
    // This function is called every 50 ms. It updates the
    // elapsed counter. Calling setState causes the component to be re-rendered
    console.log("new State is", this.props.start);
    //const newState = JSON.parse(JSON.stringify(this.state));
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.elapsed = new Date() - this.state.start;

    this.setState(newState);
    //{ elapsed: new Date() - this.start });
  }

  render() {
    // Calculate elapsed to tenth of a second:
    var elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    var seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return (
      <p>
        This example was started <b>{seconds} seconds</b> ago.
      </p>
    );
  }
}
