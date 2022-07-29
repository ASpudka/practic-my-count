import React, { Component } from "react";
import styles from "../CountSection/CountSection.module.css";

class CountSection extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isMode: true };
  }
  hendlerMode = () => {
    this.setState({ isMode: !this.state.isMode });
  };

  add = () => {
    this.setState({ count: this.state.count + this.props.step });
  };

  sub = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  render() {
    return (
      <><div className={styles.wrapper}>
        <h1 className={styles.heading}>My count {this.state.count}</h1>
        <button className={styles.button} onClick={this.hendlerMode}>
          Mode
        </button>
        {this.state.isMode ? (
          <button className={styles.button} onClick={this.add}>
            {" "}
            Add
          </button>
        ) : (
          <button className={styles.button} onClick={this.sub}>
            {" "}
            Sub
          </button>
        )}

        <h2>Step is {this.props.step}</h2>
        </div>
      </>
    );
  }
}

export default CountSection;
