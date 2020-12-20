import { shallowMount } from '@vue/test-utils'
import LaunchableResource from './LaunchableResource.vue'

import Resource from '@/model/Resource'
import WebsiteResource from '@/model/WebsiteResource'
import LocalApplicationResource from '@/model/LocalApplicationResource'

describe('LaunchableResource.vue Test', () => {
    const websiteResource = new WebsiteResource('google', 'http://google.com', { queryParams: "NO" });
    const localApplicationResource = new LocalApplicationResource('blender', `/Applications/blender.app`, { version: '2.8.3' });
    
    it('component is created', () => {
      const resource: Resource = websiteResource;

      // render the component
      const wrapper = shallowMount(LaunchableResource, {
          propsData: {
              resource
          }
      })
  
      // check the name of the component
      expect(wrapper.name()).toMatch('LaunchableResource')
    })
})