<template>
    <section id="encouragement-bar">
        <NotificationSystem :message="encouragementMessage"></NotificationSystem>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import NotificationSystem from '@/components/Systems/NotificationSystem.vue'

@Component({
  components: {
    NotificationSystem
  }
})
export default class EncouragementBar extends Vue {
    @Prop() encouragementMessage!: string;
    
    constructor() { 
        super();
    }

    mounted () {
        // Axios call to get todays encouragement message
        // That would mean this wouldn't be a prop, which is OKAY!
    }
}
</script>

<style lang="scss">
#encouragement-bar {
    padding: 20px;
}
</style>