import { getByPlaceholderText } from "@testing-library/react";
import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   imgUrl: "https://i.stack.imgur.com/wPh0S.jpg",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // handleClick = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getClassName()}>{this.formatCounter()}</span>
        <button
          className='btn btn-secondary btn-sm'
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getClassName() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
