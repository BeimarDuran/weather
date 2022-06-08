import React, { createContext, useContext } from 'react'
const Card = ({name, region, country, localtime, temp, iscelcius}) => {
    console.log(temp)
    return (
        <div id='card'>
            <div id='card-title'> 
                {name}
            </div>
            <div id='info'>
               Pais: {country}<br/> 
               Region: {region}<br/>
               Fecha: {localtime}<br/>
                </div>
            <div id='temp'>
                {temp}{iscelcius ?"°C":"°F"}

            </div>
        </div>)
}
export default Card;
