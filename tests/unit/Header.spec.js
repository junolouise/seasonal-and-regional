import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(Header, {
      data: {
        title: 'Seasonal Regional'
      }
    })
    expect(wrapper.text()).toBe(title)
  })
})
