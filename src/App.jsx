import { useEffect } from 'react'
import { usePokemons } from './modules/usePokemons'
import './App.css'

function App() {
  const { pokemonData, getPokemons } = usePokemons()

  async function handleClick() {
    getPokemons()
  }

  return (
    <>
      <h1>PokeAPI</h1>
      <button onClick={handleClick} className='stick'>Más pokemones</button>
      <main id='main-container'>
        {pokemonData 
          ? pokemonData.map((pokemon, index) => {
            return (
              <div className='card' key={index}>
                <p className='pokemon-name'>{pokemon.id} {pokemon.name}</p>
                <img className='pokemon-img' src={pokemon.img} alt={`Imagen de ${pokemon.name} extraída de la PoKeAPI`} />
              </div>
            )
          })

          : <p>Aún sin pokemones</p>
        }
        
      </main>
    </>
  )
}

export default App
