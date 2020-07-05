<template>
    <section id="progress-bar" class="box">
        <h1 class="title"> Today's Progress! </h1>
        <progress class="progress" :value="value" max="100"> {{ value }}% </progress>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class ProgressBar extends Vue {
    @Prop() value!: string;


}
</script>

<style>
#progress-bar {
    margin: 10px;
    margin-top: 40px;
}


progress[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(top,
    rgba(255,255,255, .25),
    rgba(0, 0, 0, .25)),
    -webkit-linear-gradient(left, rgba(58,230,130), rgb(215, 218, 54));

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
}

.box {
    position: relative;
}

h1 {
    position: absolute;
    top: 10%;
    left: 45%;
    font-family: 'Amatic SC', cursive;
    color: #7495B9;
    font-size: 16.2em;
    font-weight: 500;
    text-shadow: 0.03em 0.03em #F0F0F1;
    margin-bottom: 5vh;
}

h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: .06em;
    left: .06em;
    z-index: 1;
    text-shadow: none;
    background-image: linear-gradient(45deg, transparent 45%, #333333 45%, #333333 55%, transparent 0);
    background-size: .05em .05em;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: shad-anim 15s linear infinite;
    animation: shad-anim 15s linear infinite;
}
</style>