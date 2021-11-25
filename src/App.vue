<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from './components/HeaderSection.vue'
import DescriptionSection from './components/about_components/DescriptionSection.vue'
import FeatureSection from './components/about_components/FeatureSection.vue'
import MoreInfoSection from './components/about_components/MoreInfoSection.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <header-section/>
  <description-section/>
  <feature-section/>
  <more-info-section/>
</template>

<style>
:root {
  background-color: #7C3AED;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
