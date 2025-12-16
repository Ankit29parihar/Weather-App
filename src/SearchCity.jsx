import React from 'react'

const SearchCity = () => {
const [city, setCity] = useState("");

      function handleInputChange(event) {
    // console.log(event.target.value)
    setCity(event.target.value)
  }

    const fetchWeather = async (props) => {
    // Function to fetch weather data will be implemented here
    const response = await fetch(`${props.API_URL}?q=${city}&appid=${props.API_KEY}&units=metric`)
    const jsonResponse = await response.json();

    console.log(jsonResponse);
    setResult({
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feels_like: jsonResponse.main.feels_like,
      city: jsonResponse.name,
      weather: jsonResponse.weather[0].description,
    })
  }
  return (
    <div>
        <input type="text" onChange={handleInputChange} value={city}/>
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  )
}

export default SearchCity