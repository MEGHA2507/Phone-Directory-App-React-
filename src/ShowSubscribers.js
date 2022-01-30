//import { Component } from "react";
import "./App.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// function App() {
// let subscribers = [
//   {
//     id: 1,
//     name: "Megha",
//     phone: "9999999999",
//   },
//   {
//     id: 2,
//     name: "Medha",
//     phone: "9736489969",
//   },
//   {
//     id: 3,
//     name: "Maa",
//     phone: "7777799999",
//   },
//   {
//     id: 4,
//     name: "Papa",
//     phone: "7777364679",
//   },
// ];
// class based component
// class ShowSubscibers extends Component {
//   deleteHandler(message, id) {
//     // alert(message + " button " + id + " clicked");
//     this.props.deleteSubscriberHandler(id);
//   }

//   render() {
//     let phoneDirectory = "Phone Directory";

//     return (
//       <div>
//         <Header heading={phoneDirectory} />
//         <div className="home-page">
//           <Link to="/add">
//             <button className="add-btn">Add</button>
//           </Link>

//           <div className="grid-container heading-container">
//             <span className="grid-item name-heading">Name</span>
//             <span className="grid-item phone-heading">Phone</span>
//           </div>

//           {this.props.subscribersList.map((sub) => {
//             return (
//               <div className="grid-container" key={sub.id}>
//                 <span className="grid-item">{sub.name}</span>
//                 <span className="grid-item">{sub.phone}</span>
//                 <button
//                   className="grid-item delete-btn"
//                   onClick={this.deleteHandler.bind(this, sub.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//           {/* <div className="grid-container">
//           <span className="grid-item">Megha</span>
//           <span className="grid-item">9999999999</span>
//         </div>
//         <div className="grid-container">
//           <span className="grid-item">Medha</span>
//           <span className="grid-item">7777777777</span>
//         </div> */}
//         </div>
//       </div>
//     );
//     // }
//   }
// }
// export default ShowSubscibers;

// function based component
export default function ShowSubscribers(
  //props
  { subscribersList, deleteSubscriberHandler }
) {
  let phoneDirectory = "Phone Directory";
  // function deleteHandler(id) {
  //   // alert(message + " button " + id + " clicked");
  //   props.deleteSubscriberHandler(id);
  // }

  useEffect(() => {
    // any ajax calls or function calls that are required on call update of the subscribersList
    if (subscribersList && subscribersList.length) {
      document.title = `Phone Directory - Number of subscribers : ${subscribersList.length}`;
    }
  }, [subscribersList]);

  return (
    <div>
      <Header heading={phoneDirectory} />
      <div className="home-page">
        <Link to="/add">
          <button className="add-btn">Add</button>
        </Link>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          //props.subscribersList.map((sub) => {
          subscribersList.map((sub) => {
            return (
              <div className="grid-container" key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button
                  className="grid-item delete-btn"
                  // onClick={() => deleteHandler(sub.id)}
                  onClick={() => deleteSubscriberHandler(sub.id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        }
        {/* <div className="grid-container">
      <span className="grid-item">Megha</span>
      <span className="grid-item">9999999999</span>
    </div>
    <div className="grid-container">
      <span className="grid-item">Medha</span>
      <span className="grid-item">7777777777</span>
    </div> */}
      </div>
    </div>
  );
}
