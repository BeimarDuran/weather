import React, { useReducer } from 'react'

import {ADD_CARD, GET_CARDS} from '../types'

import cardContext from './cardContext'

import cardReducer from './cardReducer'


const CardState = props => {
    const initialState = {listcards: []}
    const [state, dispatch] = useReducer(cardReducer, initialState)
    const getCards = () =>{
        dispatch({type: GET_CARDS})
    }
    const addCard = card => {
        dispatch({type: ADD_CARD, payload: card})
    }
    return(<cardContext.Provider 
        value={{
            listcards: state.listcards,
            getCards, 
            addCard
            }}>{props.children}
    </cardContext.Provider>)
}
export default CardState 