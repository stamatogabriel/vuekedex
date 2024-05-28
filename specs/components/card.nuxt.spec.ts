import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, describe, it } from 'vitest'
import Pokemon from '~/components/Card.vue'

describe('Card', () => {
  it('renders pokemon data correctly', async () => {
  const config = useRuntimeConfig()
  const wrapper = await mountSuspended(Pokemon, {
      props: {
        pokemon: {
          name: 'bulbasaur',
          id: 1,
          image: `${config.public.apiBase}/pokemon/1`,
          types: ['grass', 'poison']
        }
      }
    })
    expect(wrapper.html()).toContain('bulbasaur')
  })
})