<script setup>
import { useQuery } from '@vue/apollo-composable'
 import gql from 'graphql-tag'

 const { result } = useQuery(gql`
   query get {
    pokemons: pokemon_v2_pokemon(limit: 18) {
      id
      name
      pokemon_sprites: pokemon_v2_pokemonsprites {
        sprites
      }
    }
   }
 `)
</script>

<template>
  <ul>
    <li v-for="pokemon in result.pokemons" :key="pokemon.id">
      <img :src="JSON.parse(pokemon.pokemon_sprites[0].sprites).front_default" />
      {{ pokemon.name }}
    </li>
  </ul>
</template>
