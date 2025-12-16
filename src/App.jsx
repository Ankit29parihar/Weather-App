import React from 'react'
import { useState } from 'react';
import SearchCity from './SearchCity';

const App = () => {

const API_URL = ('https://api.openweathermap.org/data/2.5/weather');
const API_KEY = '8ab220159328ae154e5ec34545c09685';
const [result, setResult] = useState();


  return (
    <div>
      <h1>Weather API Application</h1>
      <SearchCity API_URL={API_URL} API_KEY={API_KEY} />

     { result && (<div>
        {/* Weather details will be displayed here */}
        <h2>Weather details</h2>
        <p>City Name: {city}</p>
        <p>Temperature: {result.temp} °C</p>
        <p>Feels Like: {result.feels_like} °C</p>
        <p>Humidity: {result.humidity}%</p>
        <p>Description: {result.weather}</p>
      </div>
)}
    </div>
  )
}

export default App