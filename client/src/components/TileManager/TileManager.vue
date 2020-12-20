<template>
  <div id="forecast-tiles">
      <div class="tile is-ancestor">
          <div class="tile is-vertical is-10">
              <article class="tile is-child box card">
                  <div class="content">
                      <!-- <p class="title"> Yesterdays CarryOver </p> -->
                          <p class="subtitle"> Questions and other starters for the day.. </p>
                          <div class="content">
                              <!-- TODO: a cell for pushing through successes or day openers for each day. -->
                          </div>
                  </div>
              </article>
              <div class="tile">
                  <div class="tile is-parent is-3 is-vertical">
                      <article class="tile is-child box card">
                          <div class="content">
                              <!-- <p class="title"> Today's Primary Task</p> -->
                              <p class="subtitle"> Manages the tasks to be accomplished. Show sprint tasks or tasks for the hour. </p>
                              <div class="content">
                                  <!-- on click launch pomodoro -->
                                  <button @click="startPrimaryTask()" class="button"> Start Primary Task </button>
                              </div>
                          </div>
                          <nav class="level bottom-level">
                                <div class="level-left"></div>
                                <div class="level-right">
                                    <p class="level-item" @click="launchSettings()">
                                        <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
                                    </p>
                                </div>
                            </nav>
                      </article>
                      <article class="tile is-child box card">
                          <div class="content">
                              <!-- <p class="title"> Week/Sprint Goals - configurable? </p> -->
                              <p class="subtitle"> A place to compile the mid-to-longterm goals.  Can this reference OMNI somehow?</p>
                          </div>
                          <nav class="level bottom-level">
                                <div class="level-left"></div>
                                <div class="level-right">
                                    <p class="level-item" @click="launchSettings()">
                                        <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
                                    </p>
                                </div>
                            </nav>
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box card">
                            <Todour @launch-settings="requestModalLaunch"></Todour>
                            <nav class="level bottom-level level-menu-fix">
                                <div class="level-left"></div>
                                <div class="level-right">
                                    <p class="level-item" @click="launchSettings()">
                                        <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
                                    </p>
                                </div>
                            </nav>
                      </article>
                  </div>
              </div>
          </div>
          <QuickLaunchPanel 
            @launch-new-resource-modal="requestModalLaunch"
            @launch-settings="requestModalLaunch">
          </QuickLaunchPanel>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

import Todour from '@/components/Tiles/Todour/Todour.vue';
import QuickLaunchPanel from '@/components/Tiles/QuickLaunchPanel/QuickLaunchPanel.vue';

import Context from '@/model/Context';

@Component({
  components: {
    Todour, QuickLaunchPanel
  }
})
export default class TileManager extends Vue {
  public name: string = "TileManager";

  startPrimaryTask () {
      console.log("DO PRIMARY TASK");
  }

  @Emit()
  requestModalLaunch (context: Context): Context {
    console.log(context);
    return context;
  }
}
</script>

<style lang="scss" scoped>
article.tile > .content > .title + .subtitle {
    font-size: 90%;
}
.box {
    margin: 10px;
    -webkit-app-region: no-drag;
}

.slim {
    text-align: center;
    height: 10px !important;
}

.tile > .content {
    margin: 0 auto;
}
</style>