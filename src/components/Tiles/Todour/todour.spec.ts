import { shallowMount } from '@vue/test-utils'
import Todour from './Todour.vue'

import TodosMock from '@/model/mock/TodosMock'

describe('Todour.vue Test', () => {
    it('component is created', () => {
      // render the component
      const wrapper = shallowMount(Todour, {})
  
      // check the name of the component
      expect(wrapper.name()).toMatch('Todour')
    })

    it('sets todos[] to mock for dev purposes', ()=> {
      const wrapper = shallowMount(Todour, {})
      // expect(wrapper.todos()).toEqual(TodosMock);
    })
})