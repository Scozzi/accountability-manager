import { shallowMount } from '@vue/test-utils'
import TileManager from './TileManager.vue'

describe('TileManager.vue Test', () => {
    it('component is created', () => {
      // render the component
      const wrapper = shallowMount(TileManager, {})
  
      // check the name of the component
      expect(wrapper.name()).toMatch('TileManager')
    })
})