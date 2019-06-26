#!/bin/bash
if [[ ! -z "$FLIGHT_UI_URL" ]]; then
  apiUrl=$FLIGHT_UI_URL
  apiUrl=${apiUrl/ui/api}
  if [[ ! -z "$FLIGHT_API_NAMESPACE" ]]; then
    if [[ -z "$FLIGHT_UI_NAMESPACE" ]]; then
      echo Different namespace targeted bu FLIGHT_UI_NAMESPACE not provided
      exit 1
    fi
    echo Targeting different namespace $FLIGHT_API_NAMESPACE
    apiUrl=${apiUrl/$FLIGHT_UI_NAMESPACE/$FLIGHT_API_NAMESPACE}
  fi
  REACT_APP_FLIGHT_API_URL=$apiUrl npm start
else
  echo missing environment variable FLIGHT_UI_URL
  exit 1
fi