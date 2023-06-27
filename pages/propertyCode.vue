<template>
    <HeaderViaBackground :pageName="pageName" />

    <section>
        <div class="container m-auto">
            <div class="bg-primary dark:bg-whiteSecondary p-1 py-3 rounded-[27px] flex flex-col-reverse lg:flex-row relative -top-20">
                
                <!-- FilterSearch Section -->
                <PropertyCodeFilterEstate />

                <!-- Estates Search -->
                <div class="lg:w-4/6 py-5">
                    <!-- tags -->
                    <PropertyCodeTagsSearch />

                    <!-- Posts -->
                    <NuxtPage />
                    <!-- <PropertyCodePosts /> -->

                </div>
            </div>
        </div>
    </section>
    
</template>

<script setup>
// Convert diigits func Store
import { useConvertDatas } from "~/stores/ConvertDatas"
const convertDatas = useConvertDatas()

const route = useRoute();

const comp = computed(() => {
    if(route.query.estate_type || route.query.city) {
        return `جستجوی ${route.query.estate_type ? convertDatas.estateTypeRender(route.query.estate_type) : 'ملک'} ${route.query.city ? 'در ' + route.query.city : ''}`
    } else {
        return "جستجوی ملک"
    }
});

const pageName = ref(comp)

useHead({
    titleTemplate: 'فیلتر ملک ها-%s',
});
</script>