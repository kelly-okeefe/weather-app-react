import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleResponse(response) {
        console.log(response);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast);
      return (  
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
        <WeatherForecastDay data={forecast[0]} />
        </div>
        </div>
        </div>
        );

    } else {

    const apiKey = "e7f44dtf8936b0ao9a003f375cfb3403";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
}