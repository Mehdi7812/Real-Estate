<template>
    <div class="flex flex-col gap-8 mt-7 md:p-8">
        <h4 class="md:text-xl">برچسب های محبوب</h4>

        <div class="flex gap-1 flex-wrap pl-12">
            <a v-for="item in dataRes" :key="item.id" :href="`weblog.html?search=${item.title}&weblog_type=`" class="bg-primary dark:bg-[#f0f3f7] shadow-md bg-opacity-80 text-[10px] md:text-sm py-2 px-4 rounded-md hover:bg-primaryOrange dark:hover:bg-bluePrimary transition-all duration-300" onmouseover="this.style.backgroundColor = 'var(--primaryColor)'" onmouseout="this.style.backgroundColor = ''">{{ item.title }}</a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const dataRes = ref()

onMounted(async () => {
    const response = await fetch(`https://api.hypomelk.ir/real/tags/`)
    const data = await response.json()
    dataRes.value = data
});
</script>