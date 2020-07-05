<template>
    <div id="quick-launch-panel" class="title is-vertical is-2 box card">
        <nav class="level">
            <div class="level-left">
                <p class="level-item" @click="addResourceConfiguration()">
                    <span class="icon is-small"><img src="@/assets/svg/add.svg" alt="Add resource configuration"/></span>
                </p>
            </div>
            <div class="level-right">
                <p class="level-item" @click="launchSettings()">
                    <span class="icon is-small"><img src="@/assets/svg/settings.svg" alt="Launch Settings"/></span>
                </p>
            </div>
        </nav>
        <div v-if="resources" class="field is-grouped is-grouped-multiline">
            <draggable @start="drag=true" @end="drag=false" draggable=".draggable" tag="div">
                <div v-for="resource in resources" :key="resource.resourceName" class="control draggable">
                    <LaunchableResource :resource="resource"></LaunchableResource>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import draggable from 'vuedraggable'

import LocalApplicationResource from "@/model/LocalApplicationResource";
import WebsiteResource from "@/model/WebsiteResource";
import Resource from "@/model/Resource";
import Context from "@/model/Context";

import LaunchableResource from "@/components/ModelVues/LaunchableResource.vue";

import ResourcesMock from "@/model/mock/ResourcesMock";

@Component({
  components: {
    draggable, LaunchableResource
  }
})
export default class QuickLaunchPanel extends Vue {
    public name: string = "QuickLaunchPanel";
    private resources: Resource[];
    
    constructor() { 
        super();
        this.resources = ResourcesMock;
    }

    addResourceConfiguration(){
        console.log("LAUNCH MODAL AND ADD NEW RESOURCE.")
        // TODO: return Resource
        this.launchNewResourceModal();
    }
    
    @Emit()
    launchSettings() {
        console.log("LAUNCH SETTINGS!");
        return new Context(this.name, "Adjust Settings");
    }

    @Emit()
    launchNewResourceModal(): Context {
        return new Context(this.name, "Add new commonly used Resource configuration");
    }
}
</script>

<style lang="scss" scoped>
#quick-launch-panel {
    -webkit-app-region: no-drag;
}
.control {
    margin: 2px;
}
</style>