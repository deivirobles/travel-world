import React, { Component, Fragment } from 'react';
import "./App.css"

import { Hotels } from "./data/data.json"
import Navigation from "./components/Navigation"
import Search from "./components/Search"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hotels
    }
  }

  handleSearch = (search) => {
    console.log(search)
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
                  <p>{hotel.desc}</p>
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
            <div className="col pt-4">
              <Search handleSearch={this.handleSearch} />
            </div>
          </div>
          <div className="row">
            {hotelsList}
          </div>
        </div>
      </Fragment >
    )
  }
}


export default App;
