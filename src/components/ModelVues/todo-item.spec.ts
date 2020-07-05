import { mount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

import Todo from '@/model/Todo';
import Vue from 'vue';

describe('TodoItem.vue Test', () => {
    var todoItem: Todo;
    var showActionIcons: boolean;
    var wrapper: any;

    beforeEach(() => {
        todoItem = new Todo('Reminder to do stuff today about stuff @top-priority #important');
        showActionIcons = true;

      // render the component
      wrapper = mount(TodoItem, {
            propsData: {
                todo: todoItem,
                showActionIcons: showActionIcons
            }
        });
    })

    it('component is created', () => {
      // check the name of the component
      expect(wrapper.name()).toMatch('TodoItem');
    });

    it('strikes out row when completed', async () => {
        const checkbox = wrapper.find('input[type="checkbox"]');
        await checkbox.setChecked();

        expect(wrapper.vm.todo.completed).toBe(true);
        
        /*
            await Vue.nextTick();

            const hr = wrapper.find('.markthrough');
            console.log(hr);
            expect(hr.exists()).toBe(true);
        */
    });

    it('emits start pomodoro event when clock icon is clicked', () => {
        const quickActions = wrapper.find('.quick-action');
        console.log(quickActions);
    });
})