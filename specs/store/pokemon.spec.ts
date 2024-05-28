import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usePokemons } from '~/store/pokemon'

describe('usePokemons', () => {
  beforeEach(() => {
    vi.mock('fetch', () => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          { name: 'bulbasaur' }
        ]
      })
    }))
  })

  it('fetches pokemons', async () => {
    const store = usePokemons()
    await store.fetchPokemons()

    expect(store.pokemons.length).toBeGreaterThan(0)
    expect(store.pokemonData).toHaveProperty(store.pokemons[0].name)
  })

  it('fetches a single pokemon', async () => {
    const store = usePokemons()
    const pokemon = await store.fetchPokemon('bulbasaur')

    expect(pokemon).toHaveProperty('name', 'bulbasaur')
    expect(store.pokemonData).toHaveProperty('bulbasaur')
  })

  it('views a pokemon', async () => {
    const store = usePokemons()
    const pokemon = await store.fetchPokemon('bulbasaur')

    if (pokemon) {
      await store.viewPokemon(pokemon)
    }

    expect(store.viewedPokemons).toContain(pokemon)
  })

  it('removes a viewed pokemon', async () => {
    const store = usePokemons()
    const pokemon = await store.fetchPokemon('bulbasaur')

    if (pokemon) {
      await store.viewPokemon(pokemon)
      await store.removeViewedPokemon(pokemon)
    }


    expect(store.viewedPokemons).not.toContain(pokemon)
  })

  it('persists state', async () => {
    const store = usePokemons()
    await store.fetchPokemons()

    const newStore = usePokemons()

    expect(newStore.pokemons.length).toBeGreaterThan(0)
    expect(newStore.pokemonData).toHaveProperty(newStore.pokemons[0].name)
  })

  it('loads persisted state', async () => {
    const store = usePokemons()
    await store.fetchPokemons()

    const newStore = usePokemons()

    expect(newStore.pokemons.length).toBeGreaterThan(0)
    expect(newStore.pokemonData).toHaveProperty(newStore.pokemons[0].name)
  })
})