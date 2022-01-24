import { Component } from "react";
import "./App.css";
import Header from "./Header";

// function App() {
class App extends Component {
  deleteHandler(message, id) {
    alert(message + " button " + id + " clicked");
  }
  render() {
    let subscribers = [
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
    ];

    let phoneDirectory = "Phone Directory";

    return (
      <div>
        <Header heading={phoneDirectory} />
        <div className="home-page">
          <button className="add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map((sub) => {
            return (
              <div className="grid-container" key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button
                  className="grid-item delete-btn"
                  onClick={this.deleteHandler.bind(this, "Delete", sub.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
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
    // }
  }
}
export default App;
