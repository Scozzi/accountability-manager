import { shallowMount } from '@vue/test-utils'
import ProgressBar from './ProgressBar.vue'

describe('ProgressBar.vue Test', () => {
    it('component is created', () => {
      const value: number = 0;
      // render the component
      const wrapper = shallowMount(ProgressBar, {
        propsData: {
          value
        }
      })
  
      // check the name of the component
      expect(wrapper.name()).toMatch('ProgressBar')
    })
})