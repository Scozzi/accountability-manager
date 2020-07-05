<template>
    <section class="app-settings">
        <div class="settings-template app">
            <div class="container">
                <div class="background-settings">
                    Background Settings
                    <div class="columns settings-group">
                        <div class="column is-one-third">
                        Custom Background - Upload Tiling Print
                        </div>
                        <div class="column is-two-thirds">
                        Color Background
                         > LERP
                         > Single Color
                        </div>
                    </div>
                </div>
                <div class="application-settings">
                    Application Settings
                    <div class="columns ">
                        <div class="column settings-group">
                            More Important Settings
                        </div>
                    </div>
                    <div class="columns settings-group">
                        <div class="column">
                            Most Important Settings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SettingsInterface from './SettingsInterface.vue';

@Component({})
export default class AppSettings extends SettingsInterface {

    constructor() { 
        super(); 
    }

    
}
</script>

<style lang="scss" scoped>
.settings-group {
    margin: 10px 20px;
    -webkit-box-shadow: inset 3px 2px 3px -1px rgba(0,0,0,0.35);
    -moz-box-shadow: inset 3px 2px 3px -1px rgba(0,0,0,0.35);
    box-shadow: inset 3px 2px 3px -1px rgba(0,0,0,0.35);
    background-color: seashell;
}
</style>