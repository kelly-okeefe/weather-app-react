import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.city,
    date: new Date (response.data.time * 1000),
    description: response.data.condition.description,
    iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    temperature: response.data.temperature.current,
    feelsLike: response.data.temperature.feels_like,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
  })
}

function search() {
  const apiKey = "e7f44dtf8936b0ao9a003f375cfb3403";
  let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
  return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-9" >    
      <input type="search" placeholder="Enter a city..." className="form-control no-border" autoFocus="on" onChange={handleCityChange}/>
      </div> 
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-info w-100"/>
      </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast city={weatherData.city} />
  </div>
  )
} else {
  search();
  return "Loading weather...";
} 
}