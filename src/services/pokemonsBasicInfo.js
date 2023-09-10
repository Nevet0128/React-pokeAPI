export function pokemonsBasicInfo({ pokemonList, setPokemonData }) {

  if (!pokemonList) return

  pokemonList.map(pokemon => {
    fetch(pokemon.url).then(res => res.json()).then(json => {
      const data = { id: json.id, name: json.name, img: json.sprites.front_default}
      setPokemonData(prevData => [...prevData, data])
    })
  })
}