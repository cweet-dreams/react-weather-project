import React, {useState} from "react";

export default function UnitConverse (props) {
    const [unit, setUnit] = useState('celsius');

    function showFahreinheit(event) {
         event.preventDefault();
         setUnit('fahreinheat');
    }

    function showCelsius(event){

    }
    function inFahreinheit() {
        let fahreinheatTemp =  props.celsius* 9 / 5 + 32
        return fahreinheatTemp 

    }
if (unit === 'celsius') { 
    return ( 
        <div> 
             <strong>{props.celsius}</strong>
                    <div className="units">
                    <span className="active-unit">°C|<a href="/" onClick={showFahreinheit}>°F</a> </span>
                    </div>
        </div>
        );}
else {
    return (
        
    <div> 
         <strong>{inFahreinheit()}</strong>
                <div className="units">
                <span className="active-unit"><a href="/" onClick={showCelsius}>°C</a>|°F </span>
                </div>
    </div>
    );}       
       
    
 }