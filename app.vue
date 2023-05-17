<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

const title = ref("")
const response = await fetch(`${apiRootStore.api}/real/HomePage/`)
const data = await response.json()
title.value = data[0].homePage_title

useHead({
    title: `${title.value}`,
});
</script>