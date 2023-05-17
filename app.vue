<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const title = ref("")
const response = await fetch(`https://api.hypomelk.ir/real/HomePage/`)
const data = await response.json()
title.value = data[0].homePage_title

useHead({
    title: `${title.value}`,
});
</script>