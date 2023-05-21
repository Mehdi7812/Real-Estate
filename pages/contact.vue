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
    titleTemplate: '%s-ارتباط با ما',
})
const bannerImg = ref()

const setHeaderImg = (img) => {
    bannerImg.value = img
};
</script>