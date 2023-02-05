import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({ready:false});
  
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      icon: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
      descripton: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: 'London',
      date: 'Sunday, 16:57'
    })
  }

  if (weatherData.ready){
    return (
      <div className="App">
        <div className="weather-wrap">
          <form id="search-form">
            <div className="row mb-3">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Type a city .."
                  className="form-control"
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
          <div className="weather-info">
            <div className="row">
              <div className="col-6 d-flex">
                <img alt={weatherData.descripton} src={weatherData.icon} />
                <strong>{Math.round(weatherData.temperature)}</strong>
                 <span className="units">
                  <div className="active-unit">°C </div>
                </span>
               <ul className="weather-points">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
               </div>
              <div className="col-6 text-end city-info">
                <h1>{weatherData.city} </h1>
                <ul>
                  <li>{weatherData.date}</li>
                  <li className='text-capitalize'>{weatherData.descripton}</li> 
                 </ul> 
              </div>
            </div>
          </div>
          <div className='weather-forecast'> 
          </div>
          
          </div>
      </div>
    );
  } else {
    const apiKey = "2a172440227c6d8273ae35f7435ef0b3";
  let city = 'Magdeburg';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      Loading...
    </div>
  );
  }
  



}

export default App;
