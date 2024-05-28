import type { Pokemon } from '../types/pokemon'

const fetchPokemonData = async (name: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2//pokemon/${name}`)
  const data = await response.json()
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type: { type: { name: string } }) => type.type.name)
  }
}

export const usePokemons = defineStore('pokemons', {
  state: () => ({
    pokemons: [] as Pokemon[],
    viewedPokemons: [] as Pokemon[],
    pokemonData: {} as Record<string, Pokemon>,
    loading: false,
    offset: 0,
    limit: 24
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    async fetchPokemons() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2//pokemon?offset=${this.offset}&limit=${this.limit}`)
        const data = await response.json()
        const pokemonsData = data?.results

        const promises = pokemonsData.map(({ name }: { name: string }) => {
          if (this.pokemonData[name]) {
            return Promise.resolve(this.pokemonData[name])
          } else {
            return fetchPokemonData(name)
          }
        })

        const resolved = await Promise.all(promises)
        this.offset += this.limit

        this.pokemons.push(...resolved)
        resolved.forEach(pokemon => {
          this.pokemonData[pokemon.name] = pokemon
        })
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async fetchPokemon(name: string) {
      this.loading = true
      try {
        if (!this.pokemonData[name]) {
          this.pokemonData[name] = await fetchPokemonData(name)
        }
        return this.pokemonData[name]
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async viewPokemon(pokemon: Pokemon) {
      if (!this.viewedPokemons.find(item => item.name === pokemon.name)) {
        this.viewedPokemons.push(pokemon)
      }
    },
    async removeViewedPokemon(pokemon: Pokemon) {
      const index = this.viewedPokemons.findIndex(item => item.name === pokemon.name)
      if (index !== -1) {
        this.viewedPokemons.splice(index, 1)
      }
    }
  },
  getters: {
    getPokemons(state: { pokemons: Pokemon[] }) {
      return state.pokemons
    },
    isLoading(state: { loading: boolean }) {
      return state.loading
    }
  }
})