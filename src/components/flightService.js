class FlightService {

    async retrieveFlights() {
        return fetch("http://" + process.env.FLIGHT_API_HOSTNAME + "/v0/flights", { mode: "cors" })
            .then(res => res.json())
            .then((data) => {
                console.log("Retrieved items:");
                console.log(data);
                return data
            })
            .catch(console.log)
    }

    async deleteFlight(callsign) {
        console.log("FlightService.deleteFlight(): " + callsign);
        /* return fetch('http://flight-api/v0/flights/' + callsign, {
             method: "DELETE",
             mode: "cors"
         })*/
    }
    async updateFlight(callsign) {
        console.log("FlightService.updateFlight():");
        console.log(callsign);
    }
}

export default FlightService;