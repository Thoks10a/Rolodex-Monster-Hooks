import {React, useEffect, useState} from 'react'
import './App.css'
import CardList from "./component/card-list/card-list";
import SearchBox from "./component/search-box/search-box";

function App() {

  const [monsters,setMonsters] = useState([])
  const [searchString,setSearchString] = useState('')

  useEffect(() => {
    async function carregaRepositorios () {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const repositorios = await resposta.json();

      setMonsters(repositorios);
    }
    carregaRepositorios();
  }, []);

  function onSearchChange(event) {
    const searchStringInput = event.target.value.toLowerCase()
    setSearchString(searchStringInput)
  }

  const filteredMonsters = monsters.filter((monsters) => {
    return monsters.name.toLowerCase().includes(searchString)
  })

  return (
    <div className="App">
      <h1>Rolodex Monsters</h1>
      <SearchBox className='monster-search-box' placeHolder='Search Monster...' onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App
