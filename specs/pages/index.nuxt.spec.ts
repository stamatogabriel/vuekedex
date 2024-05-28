import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import Index from '../../pages/index'

describe('Index', () => {
  it('renders a list of pokemons with suspense', async () => {
    const wrapper = await mountSuspended(Index)
    expect(wrapper.html()).toContain('bulbasaur')
  })

  it('renders a list of pokemons without suspense', async () => {
    const wrapper = await mountSuspended(Index, {
      suspense: false
    })
    expect(wrapper.html()).toContain('bulbasaur')
  })
})