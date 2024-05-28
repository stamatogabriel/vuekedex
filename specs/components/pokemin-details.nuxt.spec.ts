import PokemonDetail from '~/components/PokemonDetail.vue'
import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('PokemonDetail.vue', () => {
  it('renders pokemon details correctly', async () => {
    const pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [{ ability: { name: 'overgrow' } }],
      types: [{ type: { name: 'grass' } }],
      stats: [{ stat: { name: 'hp' }, base_stat: 45 }]
    }

    const wrapper = await mountSuspended(PokemonDetail, {
      props: { pokemon }
    })

    expect(wrapper.find('.pokemon-name').text()).toBe(pokemon.name)
    expect(wrapper.find('.pokemon-header span').text()).toBe(`#${String(pokemon.id).padStart(3, "0")}`)
    expect(wrapper.find('.stat h2').text()).toBe('Height')
    expect(wrapper.find('.stat p').text()).toBe(String(pokemon.height))
    expect(wrapper.find('.badge').text()).toBe(pokemon.types[0].type.name)
  })
})