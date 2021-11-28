<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import InfoCard from './components/InfoCard.vue'
</script>

<script>
export default {
  components: { HeaderSection, FooterSection, InfoCard },
  data() {
    return {
      body:[
        {
          "paragraph": {
            "title": "paragraph title"
          }
        },
        {
          "paragraph": {
            "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at maximus ex. Maecenas vulputate ante vitae nulla rutrum"
          }
        },
        {
          "list": {
            "list": [
              "item1",
              "item2",
              "item3"
            ]
          }
        },
        {
          "list": {
            "links": [
              {
                "name": "u1",
                "url": "http.."
              },
            ]
          }
        },
        {
          "image": "/src/assets/featureGraphicSW.png"
        }
      ]
    }
  },
}
</script>

<template>
  <div>
    <header-section />
    <router-view ref="nestedView" v-slot="{ Component, route }">
      <transition 
      :enter-active-class="route.meta.enterActiveClass"
      :leave-active-class="route.meta.leaveActiveClass"
      mode="out-in"
      appear>
        <component :is="Component"/>
      </transition>
    </router-view>
    <footer-section />
  </div>
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
