import { shallowMount } from '@vue/test-utils'
import QuickLaunchPanel from './QuickLaunchPanel.vue'

describe('QuickLaunchPanel.vue Test', () => {
    it('component is created', () => {
      // render the component
      const wrapper = shallowMount(QuickLaunchPanel, {})
  
      // check the name of the component
      expect(wrapper.name()).toMatch('QuickLaunchPanel')
    })
})