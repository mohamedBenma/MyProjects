import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.text()).toContain("")
  })
})