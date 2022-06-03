import {ADD_CARD, GET_CARDS} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_CARDS:
            return state
        
        case ADD_CARD:
            
            return{
                ...state, listcards: [...state.listcards, action.payload]
            };
    
        default:
            return state;
    }
} 