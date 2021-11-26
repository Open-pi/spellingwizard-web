<script>
import DescriptionSection from '/src/components/home/DescriptionSection.vue'
import FeatureSection from '/src/components/home/FeatureSection.vue'
import MoreInfoSection from '/src/components/home/MoreInfoSection.vue'

export default {
    name: 'HomePage',
    components: {
        'description-section': DescriptionSection,
        'feature-section': FeatureSection,
        'more-info-section': MoreInfoSection,
    },
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.show = true; // might need this.$nextTick
    },
}
</script>

<template>
    <div class="page" v-if="show">
        <description-section />
        <feature-section />
        <more-info-section />
    </div>
</template>
