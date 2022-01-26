import React, { Component } from "react";
//import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

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

  render() {
    return (
      // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
      <ShowSubscribers subscribersList={this.state.subscribersList} />
    );
  }
}

export default PhoneDirectory;
