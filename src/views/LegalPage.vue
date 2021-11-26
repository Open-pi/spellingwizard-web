<script>
import LicenseSection from '/src/components/legals/LicenseSection.vue'
import PrivacyPolicySection from '/src/components/legals/PrivacyPolicySection.vue'
import TermsOfUseSection from '/src/components/legals/TermsOfUseSection.vue'
import UserAgreementSection from '/src/components/legals/UserAgreementSection.vue'

export default {
    name: 'LegalityPage',
    components: {
        'license-section': LicenseSection,
        'privacy-policy-section': PrivacyPolicySection,
        'terms-of-use-section': TermsOfUseSection,
        'user-agreement-section': UserAgreementSection,
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
        <license-section />
        <privacy-policy-section />
        <terms-of-use-section />
        <user-agreement-section />
    </div>
</template>
