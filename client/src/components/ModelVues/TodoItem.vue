<template>
    <tr>
        <span class="drag-icon has-text-centered"><img :src="`${publicPath}images/drag-reorder.png`"></span>
        <th class="has-text-centered">
            <label class="checkbox">
                <input v-model="todo.completed" type="checkbox">
            </label>
        </th>
        <td class="not-narrow has-text-centered">{{ todo.getDateFormatted() }}</td>
        <td>{{ todo.getTodoFormatted() }}</td>
        <td v-if="showActionIcons" class="quick-action has-text-centered" @click="startPomodoro(todo)"><img :src="`${publicPath}images/timer.png`"></td>
        <td v-if="showActionIcons" class="quick-action has-text-centered" @click="sendToBear(todo)"><img :src="todo.coveredInBear ? `${publicPath}images/check.png` : `${publicPath}images/bear-notes.jpg`"></td>
        <td v-if="showActionIcons" class="quick-action has-text-centered" @click="sendToOmni(todo)"><img :src="todo.trackedInOmni ? `${publicPath}images/check.png` : `${publicPath}images/omnifocus.png`"></td>
        <td class="quick-action has-text-centered delete-icon" @click="deleteTodo(todo)"><span class="icon is-small"><img src="@/assets/svg/delete.svg" alt="Delete todo"/></span></td>
        <hr v-if="todo.completed" class="markthrough"/>
    </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import Todo from '@/model/Todo';

@Component({})
export default class TodoItem extends Vue{
    private name: string = "TodoItem";
    private publicPath: string = process.env.BASE_URL;
    
    @Prop() showActionIcons!: Boolean;
    @Prop() todo!: Todo;

    constructor () {
        super()
    }
    
    @Emit()
    deleteTodo (todo: Todo): Todo { 
        return this.todo; 
    }

    @Emit()
    startPomodoro(todo : Todo): void {
        console.log("START POMODORO :: " + todo);
        // TODO: Emit event to send POMODORO payload.  Include calling todo.
        // Should it happen here against vuex? or be an emit.

    }

    @Emit()
    sendToBear(todo : Todo): void {
        console.log("SEND TO BEAR :: " + todo);
        // TODO: Emit event to send BEAR payload. Include calling todo.
        // Should it happen here against vuex? or be an emit.
        todo.coveredInBear = true;
    }

    @Emit()
    sendToOmni(todo : Todo): void {
        console.log("SEND TO OMNI :: " + todo);
        // TODO: Emit event to send OMNI payload. Include calling todo.
        // Should it happen here against vuex? or be an emit.
        todo.trackedInOmni = true;
    }

}
</script>

<style lang="scss" scoped>
.delete-icon > span > img {
    margin-top: 10 px;
}

.quick-action > img {
    width: 25px;
    height: 25px;
}

.not-narrow {
    white-space: nowrap;
}
.drag-icon > img {
    /* better to resize for production? */
    margin-top: 10px;
    max-width: 25px;
    margin-right: 10px;
}

tbody > tr {
    position: relative;
}

.markthrough {
    margin-top: 15px;
    position: absolute;
    left: 5%;
    width: 90%;
    border: 0;
    border-bottom: 1px dashed #ccc;
    background: #999;
}
</style>