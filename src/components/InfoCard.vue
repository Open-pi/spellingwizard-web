<script>
import ParagraphSection from './ParagraphSection.vue'
import ListSection from './ListSection.vue'
import ImageSection from './ImageSection.vue'
import FeatureSection from './FeatureSection.vue'

export default {
  name: "InfoCard",
  components: {
    'paragraph-section': ParagraphSection,
    'list-section': ListSection,
    'image-section': ImageSection,
    'feature-section': FeatureSection,
  },
  props: {
    background: {
      type: String,
      default: "bg-card-texture"
    },
    center: Boolean,
    tag: String,
    title: String,
    subtitle: String,
    body: Object,
  }
}
</script>

<template>
  <div :class="['pt-12', 'pb-14', 'flex', background, 'bg-cover','sm:rounded-2xl', 'my-1', 'sm:my-5','xl:mx-64', 'sm:mx-10', 'shadow-lg']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base text-purple-600 font-semibold tracking-wide uppercase">
          {{ tag }}
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ title }}
        </p>
        <p class="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 lg:mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <div v-bind:class="[{'text-center': center}, 'mt-10']">
        <span v-for="item in body" :key="item">
          <span v-if="'paragraph' in item">
            <paragraph-section :paragraph="item.paragraph"/>
          </span>
          <span v-else-if="'list' in item">
            <list-section :list="item.list" />
          </span>
          <span v-else-if="'image' in item">
            <image-section :path="item.image" />
          </span>
          <span v-else-if="'features' in item">
            <feature-section :features="item.features" />
          </span>
        </span>
      </div>
    </div>
  </div>
</template>