import { shallowMount } from '@vue/test-utils'
import EncouragementBar from './EncouragementBar.vue'

describe('EncouragementBar.vue Test', () => {
    it('component is created', () => {
      const encouragementMessage: string = '';  
      // render the component
      const wrapper = shallowMount(EncouragementBar, {
          propsData: {
              encouragementMessage
          }
      })
  
      // check the name of the component
      expect(wrapper.name()).toMatch('EncouragementBar')
    })
})