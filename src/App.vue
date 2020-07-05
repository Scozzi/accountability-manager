<template>
  <div id="app" v-bind:style="backgroundFromPath">
    <ModalSystem @close-modal="modalCompleted" :CallingContext="lastCallingContext" :isActive="modalActive">
    </ModalSystem>
    <section id="manager-content">
      <nav class="level card-top-bar">
          <div class="level-left"></div>
          <div class="level-right">
              <p class="level-item" @click="launchModal()">
                  <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
              </p>
          </div>
      </nav>
      <div class="container">
        <InformationBar :progressValue="20" notificationMessage="20%? You're getting your ass whooped"></InformationBar>
        <TileManager @request-modal-launch="launchModal"></TileManager>
        <EncouragementBar encouragementMessage="Stay Calm and Carry On"></EncouragementBar>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import InformationBar from '@/components/Tiles/InformationBars/InformationBar.vue';
import TileManager from '@/components/TileManager/TileManager.vue';
import EncouragementBar from '@/components/Tiles/InformationBars/EncouragementBar.vue';
import ModalSystem from '@/components/Systems/ModalSystem.vue';

import Context from '@/model/Context';

@Component({
  components: {
    InformationBar, TileManager, EncouragementBar, ModalSystem
  }
})
export default class App extends Vue {
  private name: string = "App";

  appCallingContext: Context = new Context(this.name, "Adjust Settings", { settingsComponent: "AppSettings" });
  lastCallingContext?: Context;
  modalActive: boolean = false;

  isElectron: boolean = false;

  backgroundImageName = "geometric-tiling.png";

  mounted() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(' electron/') > -1) {
      this.isElectron = true;
    } else {
      this.isElectron = false;
    }
    this.lastCallingContext = this.appCallingContext;
  }

  get backgroundFromPath(): string {
    return 'background-image:url(images/'  + this.backgroundImageName + ')';
  }

  launchModal(): void {
    if (!this.modalActive) {
      this.lastCallingContext = this.appCallingContext;
      this.modalActive = true;
    }
  }

  modalCompleted(returnedFromModal: any): void {
    this.modalActive = false;
    console.log(returnedFromModal);
  }
}
</script>

<style lang="scss">
@import url(./assets/main.scss);

#app {
  min-height: 100vh;
  padding: 60px;
  margin-bottom: -10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* can css url definitions be more inline with public path references elsewhere? */
  background-repeat: repeat;
}
</style>
