<template>
  <div class="flex justify-center mb-5 sm:mb-0">
    <div class="bg-white rounded-t shadow-lg">
      <nav class="flex flex-row">
        <router-link to="/" class="text-gray-600 py-4 px-6 block hover:text-purple-500 focus:outline-none">
          Home
        </router-link>
        <router-link to="/legalities" class="text-gray-600 py-4 px-6 block hover:text-purple-500 focus:outline-none">
          Legality
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  background: #EDE9FE;
}
a.router-link-active {
  @apply text-purple-500 border-b-2 font-medium border-purple-500; 
}
</style>

