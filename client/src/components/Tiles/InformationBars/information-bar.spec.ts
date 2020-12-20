import { shallowMount } from '@vue/test-utils'
import InformationBar from './InformationBar.vue'

describe('InformationBar.vue Test', () => {
    it('component is created', () => {
      // render the component
      const progressValue: number = 0;
      const notificationMessage: string = '';

      const wrapper = shallowMount(InformationBar, {
          propsData: {
              progressValue,
              notificationMessage
          }
      })
  
      // check the name of the component
      expect(wrapper.name()).toMatch('InformationBar')
    })
})