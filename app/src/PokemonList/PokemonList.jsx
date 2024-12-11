import { useEffect, useState } from "react"

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        // fetch('https://pokeapi.co/api/v2/pokemon')
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     setPokemonList(data.results)
        // })
        getPokemon()
    }, [])

    // helper functions
    const getPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        setPokemonList(data.results)
    }

  return (
    <div>
        {pokemonList.map((pokemon, idx) => (
            <li key={idx}>{pokemon.name}</li>
        ))}
    </div>
  )
}
export default PokemonList