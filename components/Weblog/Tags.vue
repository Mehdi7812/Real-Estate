<template>
    <div class="flex flex-col gap-8 mt-7 md:p-8">
        <h5 class="md:text-xl">برچسب های محبوب</h5>

        <div class="flex gap-1 flex-wrap pl-12">
            <NuxtLink :style="route.query.search == item.title ? 'background-color:var(--primaryColor)' : ''" :to="`/blog?search=${item.title}&weblog_type=`" v-for="item in dataRes" :key="item.id" class="bg-primary dark:bg-[#f0f3f7] shadow-md bg-opacity-80 text-[10px] md:text-sm py-2 px-4 rounded-md hover:bg-primaryOrange dark:hover:bg-bluePrimary transition-all duration-300" onmouseover="this.style.backgroundColor = 'var(--primaryColor)'" onmouseout="this.style.backgroundColor = ''"><h4>{{ item.title }}</h4></NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

const route = useRoute()

const dataRes = ref()

const response = await fetch(`${apiRootStore.api}/real/tags/`)
const data = await response.json()
dataRes.value = data;
</script>