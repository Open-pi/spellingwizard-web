<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
  <header-section />
  <router-view />
</template>

<style>
@font-face {
  font-family: "Raleway";
  src: local("Raleway"),
    url(./fonts/Raleway/Raleway-VariableFont_wght.ttf) format("truetype");
}
@font-face {
  font-family: "Inter";
  src: local("Inter"),
    url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf) format("truetype");
}
@font-face {
  font-family: "Metropolis";
  src: local("Metropolis"),
    url(./fonts/Metropolis/Metropolis-Bold.otf) format("opentype");
}
:root {
  background-color: #7C3AED;
}

#app {
  /* Raleway  Inter  Metropolis */
  font-family: "Metropolis", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
