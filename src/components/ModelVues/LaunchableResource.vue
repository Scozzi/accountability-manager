<template>
    <div class="tags are-large has-addons link-tag">
        <!-- <v-hide-at large> -->
            <span class="resource-desc tag is-dark"> {{ resource.resourceNameFormatted }} </span>
        <!-- </v-hide-at> -->
        <a @click="launchResource()" class="tag"><img class="resource-icon" :src="`${publicPath}images/` + resource.imgname"/></a>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Resource from "@/model/Resource";
// import { VHideAt } from 'vue-breakpoint-component'

@Component({
  components: {
    /* VHideAt */
  }
})
export default class LaunchableResource extends Vue {
    
    @Prop() private resource!: Resource;

    private publicPath: string = process.env.BASE_URL;
    
    constructor() { super(); }

    mounted () {}

    launchResource() {
        // if ( window. ipcRenderer ) {
        //     window.ipcRenderer.send(resource.ipcMessage);
        // } else {
        //     // this is for launching websites.. therefore - LocalApplications should be disabled if webapp?
        //     window.open(resource.link, '_blank');
        // }
        console.log("LAUNCH RESOURCE", this.resource);
    }
}
</script>

<style lang="scss" scoped>
.link-tag {
    width: 100%;
}
.resource-desc {
    font-size: 60%;
    width: 75%;
}
.resource-icon {
    width: 25px;
}
.tags {
    flex-wrap: nowrap;
}
</style>