import React from 'react'

const Flights = ({ flights, app }) => {
    return (
        <div>
            <center><h1>Flight List</h1></center>
            <div className="row ml-2">
                {flights.map((flight) => (
                    <div className="card text-center mb-2 ml-2" key={flight.callsign}>
                        <div className="card-body">
                            <h5 className="card-title">{flight.callsign}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{flight.adep} to {flight.ades}</h6>
                            <button type="button" className="btn btn-primary" onClick={() => app.deleteFlight(flight.callsign)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Flights