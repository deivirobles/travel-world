import React, { Component, Fragment } from 'react';
import "./App.css"

import { Hotels } from "./data/data.json"
import Navigation from "./components/Navigation"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hotels
    }
  }

  render() {
    const hotelsList = this.state.Hotels.map((hotel, i) => {
      return (
        <div className="col-md-6 pt-5">
          <div className="card" key={i}>
            <img src={hotel.image} className="card-img-top img-fluid" alt="..." />
            <div className="priceIn">
              <h2>{hotel.avgPrice}</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <div className="row">
                <div className="col">
                  <span className="badge badge-success">{hotel.category}</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col descriptionHotel">
                  <span>Description</span>
                  <p>{hotel.desc}</p>
                </div>
                <div className="col">
                  <button className="btn btn-primary">Add Favorite</button>
                </div>
              </div>
            </div>
          </div>
        </div >
      )
    })

    return (
      <Fragment>
        <div className="container-fluid">
          <Navigation />
        </div>
        <div className="container">
          <div className="row">
            {hotelsList}
          </div>
        </div>
      </Fragment >
    )
  }
}


export default App;
