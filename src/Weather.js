import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
function handleResponse(response) {
  console.log(response.data);
  setTemperature(response.data.temperature.current);
  setReady(true);
}

if (ready) {
  return (
  <div className="Weather">
    <form>
      <div className="row">
      <div className="col-9" >    
      <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
      </div> 
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-danger w-100"/>
      </div>
      </div>
    </form>
  <h1>London</h1>
  <ul>
    <li>Sunday 13:45</li>
    <li>Cloudy</li>
  </ul>
  <div className="row mt-3">
    <div className="col-6">
      <div className="clearfix">
      <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
      <span className="temperature">{temperature}</span>
      <span className="unit">°C</span>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Precipitation: 0%</li>
        <li>Humidity: 68%</li>
        <li>Wind: 14km/h</li>
      </ul>
    </div>
  </div>
  </div>
  )
} else {
  const apiKey = "e7f44dtf8936b0ao9a003f375cfb3403";
  let city="New York";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading weather...";
} 
}