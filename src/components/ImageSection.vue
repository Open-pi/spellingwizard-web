<script>
/**
 * The image section inside the info card
 * 
 * {
    image: "< image path >"
 * }
 *
*/
const pngs = import.meta.globEager('/src/assets/*.png');
export default {
  name: "ImageSection",
  props: {
      path: String,
  },
  data() {
    return {
      image_path: pngs[this.path].default
    }
  }
}


</script>

<template>
  <div class="mt-5 mb-8 flex items-center justify-center">
    <img :src="image_path" class="rounded-lg shadow-lg"/>
  </div>
</template>