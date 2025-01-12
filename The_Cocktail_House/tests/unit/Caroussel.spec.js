import { shallowMount } from '@vue/test-utils'
import Caroussel from '@/components/Caroussel.vue'

describe('Caroussel.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Caroussel)
    expect(wrapper.text()).findAll("")
  })
})