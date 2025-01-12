import { shallowMount } from '@vue/test-utils'
import CocktailDay from '@/components/CocktailDay.vue'

describe('CocktailDay.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(CocktailDay)
    expect(wrapper()).toContain("Ingredients:",)
  })
})