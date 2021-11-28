<script>
export default {
    name: "FeatureSection",
    props: {
        features: Object,
    }
}
</script>

<template>
    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
            </dd>
        </div>
    </dl>
</template>