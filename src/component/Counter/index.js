import React, { Component } from "react";
import CountSection from "../CountSection";
import styles from "../Counter/Counter.module.css";


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  inputStep = ({ target: { value } }) => {
    this.setState({ number: Number(value) });
  };

  render() {
    return (
      <>
        <CountSection step={this.state.number} />
        <label> Select step
        <input className={styles.heading}
          type="number"
          value={this.state.number}
          onChange={this.inputStep}
        /></label>
      </>
    );
  }
}

export default Counter;
