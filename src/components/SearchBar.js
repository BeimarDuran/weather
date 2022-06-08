import React, { useState, useContext } from 'react'
import clientAxios from '../config/ClientAxios'
import cardContext from '../context/cardContext'
const SearchBar = () => {
    const listCardContext = useContext(cardContext)
    const {listcards, addCard} = listCardContext
    const [input, setInput] = useState("")
    const [celcius, setCelcius] = useState(false)

    const search = async (e) => {
        e.preventDefault()
        try {
            let test = await clientAxios("/current.json?key=e0e9776929174f14b0711940220206&q=" + input)
            //console.log(test.data)
            const {current, location} = test.data
            console.log(current.temp_c)
            console.log(current.temp_f)
            console.log(celcius)
            if(celcius){
                addCard({
                    name: input, 
                    region: location.region,
                    country: location.country,
                    localtime: location.localtime,
                    temp: current.temp_c,
                    iscelcius: celcius,
                    id: listcards.length           
                    })
            }else{addCard({
                name: input, 
                region: location.region,
                country: location.country,
                localtime: location.localtime,
                temp: current.temp_f,
                iscelcius: celcius,
                id: listcards.length           
                })}
             
            console.log("current: ", current)
            console.log("location: ", location)
        } catch (error) {
            console.log(error)
        }
    }
    return (<div>
        <form onSubmit={search}>
        <input value={input}  className ="form-control" onChange={(e) => {setInput(e.target.value)
        
        }} />
        <button type="submit" className="btn btn-secondary">
        Search Weather
        </button>
        <input type={"checkbox"} value={celcius} onChange={()=>{setCelcius(!celcius)}}/>
        celcius
        
        
        </form>
    </div>);
};
export default SearchBar;