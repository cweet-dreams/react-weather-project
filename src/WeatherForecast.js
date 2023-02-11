import React, {useState, useEffect} from "react";
import axios from "axios";
import AnimatedIcon from "./AnimatedIcon";
import './WeatherForecast.css';


export default function WeatherForecast(props) {
    let [load, setLoad] = useState(false);
    let [forecastDaily, setForecastDaily] = useState(null);

    useEffect(() => {
        setLoad(false);
    }, [props.coord]);

    function handleForecastResponse(response) {
    setLoad(true);
    setForecastDaily(response.data.daily);
   
    } 
    function forecastDay (date) {
        let dateFormatted = new Date(date*1000);
        let day = dateFormatted.getDay();
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        return  days[day];

    }
    if(load) {
        return (
            <div className='row'> 
                {forecastDaily.map(function(faorecastDay, index){
                    if(index < 7){
                    return (
                        <div className="col weather-forecast" key = {index}>
                            <div><strong>{forecastDay(forecastDaily[index].dt)}</strong></div>
                            <AnimatedIcon code= {forecastDaily[index].weather[0].icon} size={44}/> 
                            <div><span className="max-temperature">{Math.round(forecastDaily[index].temp.max)}</span>°/  <span className="min-temperature">{Math.round(forecastDaily[0].temp.min)}</span>°</div>
                        </div>
                    );} else {
                        return null;
                         }
                })}       
        </div>
        );
    } else {
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        const apiKey = "97c2f6a3b34509ac62090edc5d18d949";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse);
        return null;
        }
   
}