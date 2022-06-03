import React, { createContext, useState } from 'react'
import SearchBar from './components/SearchBar';
import ListCards from './components/ListCards'
import CardState from './context/cardState'


function App() {
  return (
    
    <CardState>

      <SearchBar/>
      <ListCards/>
      
    </CardState>

    
  );
}

export default App;
