import React, { createContext, useContext } from 'react'
const Card = ({name, region, country, localtime, temp_c, temp_f, is_day}) => {
   
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
                {temp_c}°c

            </div>
        </div>)
}
export default Card;
