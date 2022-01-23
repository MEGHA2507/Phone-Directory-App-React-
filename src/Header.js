import React from "react";
import "./Header.css";

// functional compoenent when we dont need to maintain states
const Header = function () {
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
    <div className="header">Phone Directory</div>
  );
};

// class component when we need to maintain states
// class Header extends Component {
//   render() {
//     return <div className="header">Phone Directory</div>;
//   }
// }

export default Header;
