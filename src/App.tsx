import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/inputs/TextInput';
import Button from './components/inputs/Button';
import PokemonForm from './components/pokemonForm/PokemonFormContainer';
import PokemonList from './components/pokemonList/PokemonListContainer';

function App() {
  const [filter, setFilter] = useState<string>("")
  const handleNewPokemon = () => {

  }
  return (
    <div className="container">
      <h1 className='title'>Listado de Pokemon</h1>
      <div className='flex justify-between'>
        <TextInput hideLabel={true}
          label='Buscar'
          onChange={x => setFilter(x)}
        />
        <Button className="addButton" onClick={handleNewPokemon}>Nuevo</Button>
      </div>
      <PokemonList />
      <PokemonForm />
    </div>
  );
}

export default App;
