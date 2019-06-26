#!/bin/bash
if [[ ! -z "$FLIGHT_API_HOSTNAME" ]]; then
 REACT_APP_FLIGHT_API_HOSTNAME=$FLIGHT_API_HOSTNAME npm start
else
 echo missing environment variable FLIGHT_API_HOSTNAME
 exit 1
fi