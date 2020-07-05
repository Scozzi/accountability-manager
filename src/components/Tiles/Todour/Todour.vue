<template>
    <div id="todour-ui">
        <nav class="level card-top-bar">
            <div class="level-left"></div>
            <div class="level-right">
                <p class="level-item" @click="launchSettings()">
                    <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
                </p>
            </div>
        </nav>
        <!-- NEW TODO -->
        <div id="new-todo-input" class="field has-addons">
            <div class="control" style="padding: 10px">
                <span class="image input-addon-image">
                    <img :src="`${publicPath}images/todolist.png`" />
                </span>    
            </div>
            <div class="control" style="width: 100%;">
                <input id="todo-input" v-model="newTodoInput" class="input is-medium" placeholder="Type out new tasks.. (following GTD patterns)"/>
                <input @click="addTodo()" id="add-todo" type="submit" value="">
            </div>
            <div class="control" style="padding: 10px;">
                <span class="image input-addon-image">
                    <img :src="`${publicPath}images/check.png`"/>
                </span>
            </div>
        </div>
        <!-- GRID MANAGEMENT BUTTONS -->
        <!-- TODOS GRID do we need ag-grid? -->
        <nav class="level">
            <div class="table-action-icons level-left">
                <p class="level-item" @click="toggleCompletedTodos(true)">
                    <span class="icon is-small"><img src="@/assets/svg/archive.svg" alt="Archive completed todos"/></span>
                </p>
            </div>
            <div class="table-action-icons level-right">
                <p class="level-item">
                    <span class="icon is-small"><img src="@/assets/svg/tags.svg" alt="Filter by tag"/></span>
                </p>
                <p class="level-item" @click="toggleActionItems">
                    <span class="icon is-small"><img src="@/assets/svg/action-toggle.svg" alt="Toggle action icons"/></span>
                </p>
            </div>
        </nav>
        <table class="table is-narrow">
            <thead>
                <tr>
                    <th class="clear-border"></th>
                    <th class="column-controls has-text-centered" title="Is task completed"> DONE? </th>
                    <th title="Timestamp" class="not-narrow column-controls has-text-centered"> DATE </th>
                    <th title="Full task description" class="column-controls"> TASK </th>
                    <th v-if="showActionIcons" title="Start Pomodoro"> POMO </th>
                    <th v-if="showActionIcons" title="Send to Bear"> BEAR </th>
                    <th v-if="showActionIcons" title="Send to Omnifocus"> OMNI </th>
                    <th class="image-header"><img src="@/assets/svg/trash.svg" alt="Delete todo"/></th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th class="clear-border"></th>
                    <th class="has-text-centered"><abbr>---</abbr></th>
                    <th title="Timestamp" class="not-narrow"></th>
                    <th></th>
                    <th v-if="showActionIcons" class="has-text-centered"><abbr>--</abbr></th>
                    <th v-if="showActionIcons" class="has-text-centered"><abbr>--</abbr></th>
                    <th v-if="showActionIcons" class="has-text-centered"><abbr>--</abbr></th>
                    <th></th>
                </tr>
            </tfoot> 
            <draggable v-if="todos" @start="drag=true" @end="drag=false" tag="tbody">
                <TodoItem v-for="todo in renderedTodos" :key="todo.todo" :todo="todo" 
                    @delete-todo="deleteTodo"
                    @start-pomodoro="startPomodoro"
                    @send-to-bear="sendToBear"
                    @send-to-omni="sendToOmni"
                    :showActionIcons="showActionIcons"
                    class="draggable">
                </TodoItem>
            </draggable>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import TodoItem from '@/components/ModelVues/TodoItem.vue';

import Context from "@/model/Context";
import Todo from "@/model/Todo";

import TodosMock from "@/model/mock/TodosMock";

@Component({
    components: {
        draggable, TodoItem
    }
})
export default class Todour extends Vue {
    private name: string = "Todour";

    private publicPath: string = process.env.BASE_URL;

    private newTodoInput: string = "";
    
    private todos: Todo[]
    private renderedTodos: Todo[];

    // TODO: This will allow you to change column order.
    //public todoColumns: [TodoColumnConfig] = [];

    private showCompleted: boolean = true;
    private showActionIcons: boolean = true;
    // TODO: create filter by object

    constructor() { 
        super(); 
        this.todos = TodosMock;
        this.renderedTodos = this.todos;
    }

    toggleCompletedTodos(update: boolean): void  {
        if (update) { this.showCompleted = !this.showCompleted; }
        // TODO: This actually needs to be a temporary sort of filter.
        if (!this.showCompleted) {
            this.renderedTodos = this.renderedTodos.filter( todo => !todo.completed );
        } else {
            this.renderedTodos = this.todos;
        }        
    }

    addTodo(): void {
        if (this.newTodoInput !== "") {
            let todo: Todo = new Todo(this.newTodoInput);
            // TODO: Additional Validation.
            this.todos.push(todo);
            this.updateRenderedTodos();
            this.newTodoInput = "";
        }
    }

    deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateRenderedTodos();
        console.log("DELETE TODO AT INDEX : ", this.todos.indexOf(todo));
    }

    startPomodoro(todo: Todo) {
        // Start another application that does not yet exist.
        // TODO: pass the todo and an amount of time to it.

        // QUESTION: Could there be a seperate mini modal for these types of actions?
    }

    sendToBear(todo: Todo) {
       // Use X-callback-url to interact with bear. 

       // QUESTION: Could there be a seperate mini modal for these types of actions?
       console.log(todo);
    }

    sendToOmni(todo: Todo) {
        // OmniFocus MailDrop inbox email.
        console.log(todo);
    }

    updateRenderedTodos(): void {
        this.renderedTodos = this.todos;
        if (!this.showCompleted) {
            this.toggleCompletedTodos(false);
        }
    }

    toggleActionItems(): void {
        this.showActionIcons = !this.showActionIcons;
    }

    @Emit()
    launchSettings() {
        console.log("LAUNCH SETTINGS!");
        return new Context(this.name, "Adjust Settings");
    }
}
</script>

<style lang="scss" scoped>
#todour-ui {
    -webkit-app-region: no-drag;
}
#todour-ui > table {
    width: 100%;
}

#new-todo-input {
    padding: 20px;
    margin: 0 auto;
}

#todo-input {
    width: 85%;
}

#add-todo {
    margin-top: -10px;
    margin-left: 15px;
    width: 10%;
    height: 70px;
    background-image: url("../../../assets/plus.png");
    background-size: cover;
    background-color: Transparent;
    border: none;
    overflow: hidden;
    outline: none;
}

.table-action-icons > p {
    padding: 3px;
    border: dashed 1px #41403E;
}
.table-action-icons > p:hover {
    border: solid 1px #41403E;
    box-shadow:3px 2px 3px -3px;
}

.table-action-icons span img {
    max-height: 20px;
}

.image-header > img {
    max-height: 25px;
}

.input-addon-image {
    width: 30px;
}

.card-top-bar {
    margin-bottom: -15px;
}

.clear-border {
    border: none;
}
</style>