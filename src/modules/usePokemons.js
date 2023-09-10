import { pokemonsBasicInfo } from '../services/pokemonsBasicInfo'
import { refreshPageAndList } from '../services/refreshPageAndList'
import { useEffect, useState} from 'react'

export function usePokemons() {
  const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon')
  const [pokemonList, setPokemonList] = useState(undefined)
  const [pokemonData, setPokemonData] = useState([])

  function getPokemons () {
    refreshPageAndList(URL).then(({next, results}) => {
      setURL(next)
      setPokemonList(results)
    })

    pokemonsBasicInfo({ pokemonList, setPokemonData })
  }

  useEffect(getPokemons, [])

  console.log('111pokimones: ', pokemonList)
  
  return { pokemonData, getPokemons }
}