import React, { Component } from 'react';
import Flights from './flights';

class App extends Component {

  state = {
    flights: []
  }

  componentDidMount() {
    fetch('http://flight-api/v0/flights', { mode: 'cors' })
      .then(res => res.json())
      .then((data) => {
        this.setState({ flights: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Flights flights={this.state.flights} />
    );
  }
}

export default App;
