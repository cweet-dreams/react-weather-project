import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

function App(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      descripton: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt*1000)
    })
  }
  function searchCity() {
    const apiKey = "2a172440227c6d8273ae35f7435ef0b3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(); 
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);

  }

  if (weatherData.ready){
    return (
      <div className="App">
        <div className="weather-wrap">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Type a city .."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo info={weatherData} />
          <div className='weather-forecast'> 
          </div>
          
          </div>
      </div>
    );
  } else {
    
    searchCity();
  return (
    <div>
      Loading...
    </div>
  );
  }
  



}

export default App;
