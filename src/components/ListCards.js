import React, { useState, createContext, useContext } from 'react'
import Card from './Card'
import cardContext from '../context/cardContext'

const ListCards = () => {
    const listCardContext = useContext(cardContext)
    const {listcards } = listCardContext
     return (<div> 
        {listcards ? listcards.map(card => <Card name={card.name} key={card.id}/>):null}
    </div>)
}
export default ListCards;