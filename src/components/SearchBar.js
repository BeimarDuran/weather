import React, { useState, useContext } from 'react'
import clientAxios from '../config/ClientAxios'
import cardContext from '../context/cardContext'
const SearchBar = () => {
    const listCardContext = useContext(cardContext)
    const {listcards, addCard} = listCardContext
    const [input, setInput] = useState("")
    const search = async (e) => {
        e.preventDefault()
        try {
            let test = await clientAxios("/current.json?key=e0e9776929174f14b0711940220206&q=" + input)
            //console.log(test.data)
            const {current, location} = test.data
           addCard({
                name: input, 
                region: location.region,
                country: location.country,
                localtime: location.localtime,
                temp_c: current.temp_c,
                temp_f: current.temp_f,
                is_day: current.is_day,
                id: listcards.length           
                })
            console.log("current: ", current)
            console.log("location: ", location)
        } catch (error) {
            console.log(error)
        }
    }
    return (<div>
        <form>
        <input value={input}  className ="form-control" onChange={(e) => {setInput(e.target.value)
        
        }} />
        <button onClick={search} type="button" className="btn btn-secondary">
        Search Weather
        </button>
        
        </form>
    </div>);
};
export default SearchBar;