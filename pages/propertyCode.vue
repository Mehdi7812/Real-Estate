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
                    <PropertyCodePosts />

                </div>
            </div>
        </div>
    </section>
    
</template>

<script setup>
// Convert diigits func Store
const { estateTypeRender, getNumber } = useConvertDatas();

import PN from "persian-number";

const route = useRoute();

const compPageName = computed(() => {
    if(route.query.estate_type || route.query.city || route.query.region) {
        return `جستجوی ${route.query.estate_type ? estateTypeRender(route.query.estate_type) : 'ملک'} ${(route.query.city || route.query.region) ? 'در ' + (route.query.region ? route.query.region : '') + ' ' + (route.query.city ? route.query.city : '') : ''}`
    } else {
        return "جستجوی ملک"
    }
});

const pageName = ref(compPageName)

useHead({
    titleTemplate: 'فیلتر ملک ها-%s',
});
</script>