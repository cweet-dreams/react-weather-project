import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="weather-info">
            <div className="row">
                <div className="col-6 d-flex">
                    <img alt={props.info.descripton} src={props.info.icon} />
                    <strong>{Math.round(props.info.temperature)}</strong>
                    <span className="units">
                    <div className="active-unit">°C </div>
                    </span>
                    <ul className="weather-points">
                        <li>Humidity: {props.info.humidity}%</li>
                        <li>Wind: {props.info.wind} km/h</li>
                    </ul>
                </div>
                <div className="col-6 text-end city-info">
                    <h1>{props.info.city} </h1>
                    <ul>
                    <li><FormattedDate date={props.info.date}/></li>
                    <li className='text-capitalize'>{props.info.descripton}</li> 
                    </ul> 
                </div>
            </div>
      </div>
    );
}