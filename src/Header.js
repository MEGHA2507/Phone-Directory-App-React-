import React from "react";
//import { Component } from "react";
import "./Header.css";

// functional compoenent when we dont need to maintain states
const Header = function (props) {
  // const headerStyle = {
  //   textAlign: "center",
  //   padding: 20,
  //   background: "#000",
  //   color: "#fff",
  //   textTransform: "uppercase",
  // };

  return (
    // <div style={headerStyle}>
    //   Phone Directory
    // </div>
    <div className="header">{props.heading}</div>
  );
};

// class component when we need to maintain states
// class Header extends Component {
//   render() {
//     return <div className="header">{this.props.heading}</div>;
//   }
// }

export default Header;
