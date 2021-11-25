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
    }
}
</script>

<template>
    <description-section />
    <feature-section />
    <more-info-section />
</template>
