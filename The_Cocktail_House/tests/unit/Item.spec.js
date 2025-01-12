import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

describe('Item.vue', () => {
  it('', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.text()).toContain("")
  })
})