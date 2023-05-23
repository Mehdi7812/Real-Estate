<template>
    <HeaderViaBackground :pageName="'ارتباط با ما'" :customImage="bannerImg" />
    <main>
        <!-- Map Section -->
        <ContactMap />

        <!-- Finder Villa -->
        <ContactFinderVila />

        <!-- Team Section -->
        <ContactBanner @banner="setHeaderImg" />
    </main>
</template>

<script setup>
useHead({
    titleTemplate: 'ارتباط با ما-%s',
    script:[
        { src: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js', integrity: 'sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=', crossorigin: '' }
    ],
    link: [
        { href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css', integrity: 'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=', crossorigin: '' }
    ]
})
const bannerImg = ref()

const setHeaderImg = (img) => {
    bannerImg.value = img
};
</script>