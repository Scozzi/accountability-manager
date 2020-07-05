import { shallowMount } from '@vue/test-utils'
import ModalSystem from './ModalSystem.vue'

describe('ModalSystem.vue Test', () => {
    it('component is created', () => {

      // render the component
      const wrapper = shallowMount(ModalSystem, {})
  
      // check the name of the component
      expect(wrapper.name()).toMatch('ModalSystem')
    })
})