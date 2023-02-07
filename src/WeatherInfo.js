import React from "react";
import FormattedDate from "./FormattedDate";
import UnitConverse from "./UnitConverse";
import AnimatedIcon from "./AnimatedIcon";

export default function WeatherInfo(props) {
    return (
        <div className="weather-info">
            <div className="row">
                <div className="col-6 d-flex">
                    <div className="icon-main">
                    <AnimatedIcon code={props.info.icon}/>     
                    </div>               
                    {/* //icon added directly from openweather site
                    <img alt={props.info.descripton} src={props.info.icon}/> */}

                    <UnitConverse celsius= {Math.round(props.info.temperature)}/>
                   
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