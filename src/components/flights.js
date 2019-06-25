import React from 'react'

const Flights = ({ flights, app }) => {
    return (
        <div>
            <center><h1>Flight List</h1></center>
            <div className="row">
                {flights.map((flight) => (
                    <div className="card" key={flight.callsign}>
                        <div className="card-body">
                            <h5 className="card-title">{flight.callsign}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{flight.adep} to {flight.ades}</h6>
                            <button type="button" class="btn btn-primary" onClick={() => app.deleteFlight(flight.callsign)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Flights