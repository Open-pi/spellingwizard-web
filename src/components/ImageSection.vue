<script>
/**
 * The image section inside the info card
 * 
 * {
    image: "< image path >"
 * }
 *
*/
export default {
  name: "ImageSection",
  props: {
      url: String,
  }
}
</script>

<template>
  <div class="mt-5 mb-8 flex items-center justify-center">
          <img :src="url" class="rounded-lg shadow-lg"/>
  </div>
</template>