import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";

class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
  }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  };

  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <button className="back-btn">Back</button>
          <form className="subscriber-form">
            <label htmlFor="name" className="label-control">
              Name:{" "}
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              onChange={this.inputChangeHandler}
            ></input>
            <br />
            <br />
            <label htmlFor="name" className="label-control">
              Phone:
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="phone"
              onChange={this.inputChangeHandler}
            ></input>
            <br />
            <br />
            <div className="subscriber-details-to-be-added">
              <div className="subscriber-to-be-added">
                Subscriber Details Added:
              </div>
              <br />
              <div className="subscriber-info subscriber-name">Name: </div>
              <br />
              <div className="subscriber-info subscriber-phone">Phone: </div>
              <br />
            </div>
            <button type="submit" className="custom-btn add-btn">
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddSubscriber;
