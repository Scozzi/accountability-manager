import { shallowMount } from '@vue/test-utils'
import NotificationSystem from './NotificationSystem.vue'

describe('MNotificationSystem.vue Test', () => {
    it('creates the notification system component', () => {
      const message: string = '';
      // render the component
      const wrapper = shallowMount(NotificationSystem, {
        propsData: {
          message
        }
      })
  
      // check the name of the component
      expect(wrapper.name()).toMatch('NotificationSystem')
    })
})