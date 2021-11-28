<script>
export default {
  name: "ParagraphSection",
  props: {
      paragraph: Object,
  }
}
</script>

<template>
  <p v-if="'title' in paragraph" class="mt-4 max-w-5xl text-xl text-gray-500 lg:mx-auto">
      <strong class="text-gray-900">{{ paragraph.title }}</strong>
  </p>
  <span v-for="item in paragraph.content" :key="item">
    <p class="mt-4 max-w-5xl text-xl text-gray-500 lg:mx-auto">
        {{ item }}
    </p>
  </span>
</template>