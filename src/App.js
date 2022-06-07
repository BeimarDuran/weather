import React, { createContext, useState } from 'react'
import SearchBar from './components/SearchBar';
import ListCards from './components/ListCards'
import CardState from './context/cardState'
import './App.css'


function App() {
  return (
    
    <CardState>
      <div id='app'>
      <SearchBar/>
      <ListCards/>
      </div>

      
    </CardState>

    
  );
}

export default App;
