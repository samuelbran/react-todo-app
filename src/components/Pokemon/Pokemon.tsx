import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonInterface from './Pokemon.interface'
import AxiosResponse from './AxiosResponse.interface'

interface Props {
  name: string
}

const Pokemon: React.FC<Props> = ({ name }) => {
  const [pokemon, setPokemon] = useState<PokemonInterface>({
    name: '',
    sprites: { front_shiny: '' },
  })

  useEffect(() => {
    if (name) {
      fetchPokemon(name)
    }
  }, [name])

  const fetchPokemon = async (name: string) => {
    const response: AxiosResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    )

    if (response) {
      setPokemon(response.data)
    }
  }

  return pokemon.name ? (
    <>
      <p>{pokemon.name}</p>
      <img
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
        style={{ border: '1px solid #dedede' }}
      />
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default Pokemon
