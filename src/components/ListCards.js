import React, { useState, createContext, useContext } from 'react'
import Card from './Card'
import cardContext from '../context/cardContext'

const ListCards = () => {
    const listCardContext = useContext(cardContext)
    const {listcards } = listCardContext
     return (<div id='list-card'> 
        {listcards ? listcards.map(card => <Card 
        name={card.name} 
        key={card.id} 
        region={card.region}
        country={card.country}
        localtime={card.localtime}
        temp={card.temp}
        iscelcius={card.iscelcius}       
        />):null}
    </div>)
}
export default ListCards;