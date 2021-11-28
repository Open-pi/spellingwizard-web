<script>
import InfoCard from '../components/InfoCard.vue'

import { AnnotationIcon, CollectionIcon, ColorSwatchIcon, PencilAltIcon } from '@heroicons/vue/outline'

export default {
    name: 'HomePage',
    components: {
        'info-card': InfoCard
    },
    setup() {
        return {
            description_data,
            features_data,
            more_info_data,
        }
    },
}

const description_data = {
    center: true,
    tag: "Discrption",
    title: "What is the Spelling Wizard App?",
    body: [
        {
            image: "/src/assets/featureGraphicSW.png"
        },
        {
            paragraph: {
                content: [
                    "Spelling is one of those things that are particularly crucial in the English language. If you are preparing for a test or improving your skill, SpellingWizard is your friend.",
                    "SpellingWizard is simple yet feature rich spelling app. As opposed to other spelling apps that have a robotic voice to pronounce the words and an archaic user experience, SW has a userfriendly, and beautiful interface (as well as addtional themes to choose from), and An awesome and clear human voice."
                ]
            }
        },
    ]
}

const features_data = {
    tag: "Features",
    title: "What Spelling Wizard offers?",
    subtitle: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    body: [
        {
            features: [
                {
                    name: 'Various Categories',
                    description:
                    'SpellingWizard has multiple categories (Verbs, Family, etc.) with each one having multiple challenges. Complete them all to master that category.',
                    icon: CollectionIcon,
                },
                {
                    name: 'Different Themes',
                    description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
                    icon: ColorSwatchIcon,
                },
                {
                    name: 'Practice and Review mistakes',
                    description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
                    icon: PencilAltIcon,
                },
                {
                    name: 'Mobile notifications',
                    description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
                    icon: AnnotationIcon,
                },
            ]
        },
    ]
}

const more_info_data = {
    center: true,
    tag: "More Info",
    title: "Why does this app have a preminum version for Playstore users?",
    body: [
        {
            paragraph: {
                content: [
                    "As publishing an app on the playstore requires money, we've decided to have one-time-paid preminum features. However, we value the privacy and freedom of users to not be tracked by Google or even use google products and thus we will always provide the app freely, and with every feature in F-droid."
                ]
            }
        },
    ]
}

</script>

<template>
    <div class="page">
        <info-card
         :center="description_data.center"
         :tag="description_data.tag"
         :title="description_data.title"
         :body="description_data.body"
        />
        <info-card
         :tag="features_data.tag"
         :title="features_data.title"
         :subtitle="features_data.subtitle"
         :body="features_data.body"
        />
        <info-card
         :center="more_info_data.center"
         :tag="more_info_data.tag"
         :title="more_info_data.title"
         :body="more_info_data.body"
        />
    </div>
</template>
