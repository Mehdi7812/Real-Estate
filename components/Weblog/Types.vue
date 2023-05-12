<template>
    <div class="flex flex-col gap-5 mt-7 md:p-8">
        <h4 class="md:text-xl">دسته بندی های محبوب</h4>

        <NuxtLink :to="`/weblog?search=&weblog_type=${item.id}`" v-for="item in dataRes" class="flex flex-col shadow-md gap-2 md:gap-3">
            <div :style="paramsWeblogType == item.id ? 'background-color: var(--primaryColor)' : ''" :class="paramsWeblogType == item.id ? 'bg-primaryOrange dark:bg-bluePrimary' : 'bg-primary dark:bg-[#f0f3f7]'" class="flex justify-between items-center py-3 px-8 rounded-lg cursor-pointer transition-all duration-300 hover:opacity-80" onmouseover="this.style.backgroundColor ? this.style.opacity = '.9' : this.style.backgroundColor = 'var(--primaryColor)'" onmouseout="this.style.opacity ? this.style.backgroundColor = 'var(--primaryColor)' : this.style.backgroundColor = ''">
                <p class="text-[13px] md:text-base"><span>{{ item.types }}</span> (<span>{{ item.count.toLocaleString('fa-ir') }}</span>)</p>

                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3073 13.6642L6.0174 9.5401C5.51077 9.05304 5.46823 8.21607 5.92286 7.68015L9.77246 3.14227" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                    
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const dataRes = ref()

onMounted(async () => {
    const response = await fetch(`https://api.hypomelk.ir/real/weblogTypes/`)
    const data = await response.json()
    dataRes.value = data
});
</script>