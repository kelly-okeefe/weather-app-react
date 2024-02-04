import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response);


    }

    const apiKey = "e7f44dtf8936b0ao9a003f375cfb3403";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
            <div className = "WeatherForecast-day">
            Thu
            </div>
            <div className="WeatherForecast-icon">
            icon
            </div>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
            19°
            </span>
            <span className="WeatherForecast-temperature-min">
            10°
            </span>
            </div>
        </div>




        </div>
        </div>
    );
    }