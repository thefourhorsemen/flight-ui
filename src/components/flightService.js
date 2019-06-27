class FlightService {

    async retrieveFlights() {
        return fetch(process.env.REACT_APP_FLIGHT_API_URL + "/v0/flights", { mode: "cors" })
            .then(res => res.json())
            .catch(console.log)
    }

    async deleteFlight(callsign) {
        console.log("FlightService.deleteFlight(): " + callsign);
        return fetch(process.env.REACT_APP_FLIGHT_API_URL + 'ttt/v0/flights/' + callsign, {
            method: "DELETE",
            mode: "cors"
        }).catch(console.log)
    }
    async updateFlight(callsign) {
        console.log("FlightService.updateFlight():");
        console.log(callsign);
    }
}

export default FlightService;