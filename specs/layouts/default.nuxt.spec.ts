import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import Layout from '~/layouts/default.vue'

describe('Layout', () => {
  it('renders a layout with suspense', async () => {
    const wrapper = await mountSuspended(Layout, {
      slots: {
        default: 'Hello, world!'
      }
    })
    expect(wrapper.html()).toContain('Hello, world!')
  })

  it('renders a layout without suspense', async () => {
    const wrapper = await mountSuspended(Layout, {
      slots: {
        default: 'Hello, world!'
      },
      suspense: false
    })
    expect(wrapper.html()).toContain('Hello, world!')
  })
})