//import React, { Component } from "react";
import React, { useState } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import ShowSubscibers from "./ShowSubscribers";
import { ValidatorForm } from "react-material-ui-form-validator";
import TextValidator from "react-material-ui-form-validator/lib/TextValidator";

// class AddSubscriber extends Component {
//   constructor() {
//     super();
//     this.state = {
//       id: 0,
//       name: "",
//       phone: "",
//     };
//   }

//   inputChangeHandler = (e) => {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState(state);
//     console.log(state);
//   };

//   formSubmitHandler = (e) => {
//     e.preventDefault();
//     this.props.addSubscriberHandler(this.state);
//     // once submited re initialize to state original value
//     this.setState({ id: 0, name: "", phone: "" });
//     // after adding navigates to read only page
//     this.props.history.push("/");
//   };

//   render() {
//     const { name, phone } = this.state;
//     return (
//       <div>
//         <Header heading="Add Subscriber" />
//         <div className="component-body-container">
//           <Link to="/">
//             <button className="back-btn">Back</button>
//           </Link>

//           <form
//             className="subscriber-form"
//             onSubmit={this.formSubmitHandler.bind(this)}
//           >
//             <label htmlFor="name" className="label-control">
//               Name:{" "}
//             </label>
//             <br />
//             <input
//               id="name"
//               type="text"
//               className="input-control"
//               name="name"
//               onChange={this.inputChangeHandler}
//             ></input>
//             <br />
//             <br />
//             <label htmlFor="name" className="label-control">
//               Phone:
//             </label>
//             <br />
//             <input
//               id="name"
//               type="text"
//               className="input-control"
//               name="phone"
//               onChange={this.inputChangeHandler}
//             ></input>
//             <br />
//             <br />
//             <div className="subscriber-details-to-be-added">
//               <div className="subscriber-to-be-added">
//                 Subscriber Details Added:
//               </div>
//               <br />
//               <div className="subscriber-info subscriber-name">
//                 Name: {name}
//               </div>
//               <br />
//               <div className="subscriber-info subscriber-phone">
//                 Phone: {phone}
//               </div>
//               <br />
//             </div>
//             <button type="submit" className="custom-btn add-btn">
//               ADD
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

//export default AddSubscriber;

export default function AddSubscriber({ addSubscriberHandler }) {
  const [addSubscriberForm, setAddSubscriberForm] = useState([
    {
      id: 0,
      name: "",
      phone: "",
    },
  ]);

  let history = useHistory();

  function inputChangeHandler(e) {
    const state = addSubscriberForm;
    state[e.target.name] = e.target.value;

    // setAddSubscriberForm({
    //   id: state["id"],
    //   name: state["name"],
    //   phone: state["phone"],
    // });

    setAddSubscriberForm({ ...addSubscriberForm, ...state });
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    addSubscriberHandler(addSubscriberForm);
    // once submited re initialize to state original value
    setAddSubscriberForm({
      id: 0,
      name: "",
      phone: "",
    });
    // after adding navigates to read only page
    history.push("/");
    // history.goBack(); -> it can be used to go back to the previous url but sometimes it might be that we land on a page directly with the url and goback will take us to the initial page where we typed the url.
  }

  const { name, phone } = addSubscriberForm;

  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>

        <ValidatorForm className="subscriber-form" onSubmit={formSubmitHandler}>
          <TextValidator
            id="name"
            type="text"
            className="input-control"
            name="name"
            value={name}
            label="Enter Name"
            onChange={inputChangeHandler}
            validators={["required"]}
            errorMessages={["Name is required."]}
          ></TextValidator>

          <TextValidator
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangeHandler}
            label="Enter Phone Number"
            value={phone}
            validators={["required"]}
            errorMessages={["Phone no. is required."]}
          ></TextValidator>

          <br />
          <br />
          <div className="subscriber-details-to-be-added">
            <div className="subscriber-to-be-added">
              Subscriber Details Added:
            </div>
            <br />
            <div className="subscriber-info subscriber-name">Name: {name}</div>
            <br />
            <div className="subscriber-info subscriber-phone">
              Phone: {phone}
            </div>
            <br />
          </div>
          <button type="submit" className="custom-btn add-btn">
            ADD
          </button>
        </ValidatorForm>

        {/* <form className="subscriber-form" onSubmit={formSubmitHandler}>
          <label htmlFor="name" className="label-control">
            Name:{" "}
          </label>
          <br />
          <input
            id="name"
            type="text"
            className="input-control"
            name="name"
            onChange={inputChangeHandler}
          ></input>

          <br />
          <br />
          <label htmlFor="phone" className="label-control">
            Phone:
          </label>
          <br />
          <input
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangeHandler}
          ></input>

          <br />
          <br />
          <div className="subscriber-details-to-be-added">
            <div className="subscriber-to-be-added">
              Subscriber Details Added:
            </div>
            <br />
            <div className="subscriber-info subscriber-name">Name: {name}</div>
            <br />
            <div className="subscriber-info subscriber-phone">
              Phone: {phone}
            </div>
            <br />
          </div>
          <button type="submit" className="custom-btn add-btn">
            ADD
          </button>
        </form> */}
      </div>
    </div>
  );
}
