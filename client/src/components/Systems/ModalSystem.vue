<template>
    <div class="modal" v-bind:class="{ 'is-active': isActive }" :is-active="isActive">
        <div class="modal-background" @click="closeModal('close')"></div>
        <div class="modal-content">
          <div class="container">
            <div v-if="CallingContext && isActive" class="card">
                <div class="card-header">
                    <p class="card-header-title is-centered">
                        {{ CallingContext.callerName }} -- {{ CallingContext.callPurpose }}
                    </p>
                </div>
                <div class="card-content">
                    <p v-if="!CallingContext || !CallingContext.settingsComponent"> Settings 404 </p>
                    <div v-if="CallingContext && CallingContext.settingsComponent">
                        <AppSettings></AppSettings>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal('cancel')"></button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

import Context from '@/model/Context';
import AppSettings from '@/components/Systems/Settings/AppSettings.vue';

@Component({ components: { AppSettings }})
export default class ModalSystem extends Vue {
    public name: string = "ModalSystem";
    @Prop() CallingContext!: Context;
    @Prop() isActive!: boolean;

    constructor () {
        super()
    }

    mounted () {
        document.addEventListener("keydown", (e) => {
            if (this.isActive && e.keyCode == 27) {
                this.closeModal('canceled');
            }
        });
    }

    @Emit()
    closeModal (reason: string) : any {
        let payload = {};
        switch(reason) {
            case 'submit':
                return payload;
            case 'cancel':    
            default: 
                return "canceled";
        }
    }
}
</script>

<style lang="scss">
.card {
    border-radius: 10px 10px;
}
</style>