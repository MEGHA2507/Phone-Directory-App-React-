//import React, { Component, useState } from "react";
import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

// export default function PhoneDirectory() {
//   const [subscribersList, setSubscriberList] = useState([
//     {
//       id: 1,
//       name: "Megha",
//       phone: "9999999999",
//     },
//     {
//       id: 2,
//       name: "Medha",
//       phone: "9736489969",
//     },
//     {
//       id: 3,
//       name: "Maa",
//       phone: "7777799999",
//     },
//     {
//       id: 4,
//       name: "Papa",
//       phone: "7777364679",
//     },
//   ]);

//   function addSubscriberHandler(newSubscriber) {
//     if (subscribersList.length > 0) {
//       newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
//     } else {
//       newSubscriber.id = 1;
//     }

//     subscribersList.push(newSubscriber);
//     setSubscriberList(subscribersList);
//     console.log(this.state);
//   }

//   function deleteSubscriberHandler(subcriberId) {
//     // let subscribersList = subscribersList;
//     let subscriberIndex = 0;
//     subscribersList.forEach((subscriber, index) => {
//       if (subscriber.id === subcriberId) {
//         subscriberIndex = index;
//       }
//     });
//     let newSubscribersList = subscribersList;
//     newSubscribersList.splice(subscriberIndex, 1);
//     setSubscriberList(newSubscribersList);
//   }

//   return (
//     // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
//     //   <ShowSubscribers subscribersList={this.state.subscribersList} />

//     <Router>
//       <div className="main-container">
//         <Route
//           exact
//           path="/"
//           render={(props) => (
//             <ShowSubscribers
//               {...props}
//               subscribersList={subscribersList}
//               deleteSubscriberHandler={deleteSubscriberHandler}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/add"
//           render={({ history }, props) => (
//             <AddSubscriber
//               history={history}
//               {...props}
//               addSubscriberHandler={addSubscriberHandler}
//             />
//           )}
//         />
//       </div>
//     </Router>
//   );
// }

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Megha",
          phone: "9999999999",
        },
        {
          id: 2,
          name: "Medha",
          phone: "9736489969",
        },
        {
          id: 3,
          name: "Maa",
          phone: "7777799999",
        },
        {
          id: 4,
          name: "Papa",
          phone: "7777364679",
        },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }

    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    console.log(this.state);
  };

  deleteSubscriberHandler = (subcriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach((subscriber, index) => {
      if (subscriber.id === subcriberId) {
        subscriberIndex = index;
      }
    });
    let newSubscribersList = subscribersList;
    newSubscribersList.splice(subscriberIndex, 1);
    this.setState({ subscribers: newSubscribersList });
  };

  render() {
    return (
      // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
      //   <ShowSubscribers subscribersList={this.state.subscribersList} />

      <Router>
        <div className="main-container">
          <Route
            exact
            path="/"
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList}
                deleteSubscriberHandler={this.deleteSubscriberHandler}
              />
            )}
          />
          <Route
            exact
            path="/add"
            render={({ history }, props) => (
              <AddSubscriber
                history={history}
                {...props}
                addSubscriberHandler={this.addSubscriberHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
