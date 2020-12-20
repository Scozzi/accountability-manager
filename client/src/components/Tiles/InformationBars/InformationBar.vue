<template>
    <section id="information-bar">
        <NotificationSystem :message="notificationMessage"></NotificationSystem>
        <ProgressBar :value="progressValue"></ProgressBar>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ProgressBar from "@/components/Tiles/InformationBars/ProgressBar.vue";
import NotificationSystem from "@/components/Systems/NotificationSystem.vue";

@Component({
    components: {
        ProgressBar, NotificationSystem
    }
})
export default class InformationBar extends Vue {
  @Prop() progressValue!: number;
  @Prop() notificationMessage!: string;
}
</script>

<style lang="scss">
#information-bar {
    padding: 20px;
}
</style>