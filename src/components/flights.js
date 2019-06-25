import React from 'react'

const Flights = ({ flights }) => {
    return (
        <div>
            <center><h1>Flight List</h1></center>
            {flights.map((flight) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{flight.callsign}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{flight.adep}</h6>
                        <p class="card-text">{flight.ades}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Flights