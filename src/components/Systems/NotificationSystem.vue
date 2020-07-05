<template>
    <section class="notification-system">
        <div v-if="!closed && message" class="notification is-primary is-light">
            <button @click="close()" class="delete"></button>
            {{ message ? message : "" }}
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class NotificationSystem extends Vue {

    constructor() { super(); }
    
    @Prop() private message!: string;

    private closed: boolean = false;

    @Watch('message') 
    onMessageChanged(val: string, oldVal: string) {
        if (oldVal == ""  && val != "") {
                this.closed = false
            }
    }

    close() {
        this.closed = true;
    }
}
</script>