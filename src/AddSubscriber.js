import React, { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link } from "react-router-dom";
import ShowSubscibers from "./ShowSubscribers";

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

  formSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    // once submited re initialize to state original value
    this.setState({ id: 0, name: "", phone: "" });
    // after adding navigates to read only page
    this.props.history.push("/");
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div>
        <Header heading="Add Subscriber" />
        <div className="component-body-container">
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>

          <form
            className="subscriber-form"
            onSubmit={this.formSubmitHandler.bind(this)}
          >
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
              <div className="subscriber-info subscriber-name">
                Name: {name}
              </div>
              <br />
              <div className="subscriber-info subscriber-phone">
                Phone: {phone}
              </div>
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
