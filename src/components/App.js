import React, { Component } from 'react';
import Flights from './flights';
import FlightService from './flightService'

class App extends Component {

  constructor(props) {
    super(props);
    this.flightService = new FlightService();
    this.state = {
    }
  }

  componentDidMount() {
    this.getFlights()
    this.timer = setInterval(() => this.getFlights(), 2000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    const flights = this.state.flights;
    if (!flights) return null;
    return (
      <Flights flights={this.state.flights} app={this} />
    );
  }

  getFlights() {
    this.flightService.retrieveFlights().then(flights => {
      this.setState({ flights: flights });
    });
  }

  deleteFlight(callsign) {
    this.clearState();
    this.flightService.deleteFlight(callsign).then(flight => { this.getFlights() })
  }

  clearState() {
    this.setState({});
  }
}

export default App;
