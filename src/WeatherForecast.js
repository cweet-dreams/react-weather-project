import axios from "axios";
import React from "react";
import AnimatedIcon from "./AnimatedIcon";
import './WeatherForecast.css';


export default function WeatherForecast(props) {

     let lat = props.coord.lat;
     let lon = props.coord.lon;

    function handleForecastResponse(response) {
       
       console.log(response);
    } 

    const apiKey = "97c2f6a3b34509ac62090edc5d18d949";
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
    //let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);


    return (
        <div className='row'> 
        <div className="col weather-forecast">
            <div>Sun</div>
            <AnimatedIcon code={props.icon}/> 
            <div>
              <span className="max-temperature">15</span>°/ <span className="min-temperature">7</span>°</div>
        </div>
        </div>
    );
}