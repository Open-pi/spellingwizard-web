<script>
/**
 * The list section inside the info card
 * 
 * list
 * @values list, links
 * 
 * {
      list: {
        list: [
          "< item 1 >",
          "< item 2 >",
          ...
        ]
      }
 * }
 *
 * {
      list: {
        links: [
          {
            name: "< item name >",
            url: "< item url >"
          },
        ]
      }
 * }
*/
export default {
  name: "ListSection",
  props: {
      list: Object,
  }
}
</script>

<template>
  <div>
    <ul v-if="'links' in list" class="mt-4 max-w-4xl lg:mx-auto list-disc">
      <li v-for="item in list.links" :key="item">
        <a :href="item.url" target="_blank" rel="noopener noreferrer" class="text-blue-600 no-underline hover:underline">
            {{ item.name }}
        </a>
      </li>
    </ul>
    <ul v-else-if="'list' in list" class="mt-4 max-w-4xl lg:mx-auto list-disc">
        <li v-for="item in list.list" :key="item" class="text-gray-700">{{ item }}</li>
    </ul>
  </div>
</template>