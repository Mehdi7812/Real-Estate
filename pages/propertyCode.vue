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
import PN from "persian-number";

const route = useRoute();

const compPageName = computed(() => {
    if(route.query.estate_type || route.query.city || route.query.region || route.query.unit_price__gte || route.query.unit_price__lte) {
        return `جستجوی ${route.query.estate_type ? convertDatas.estateTypeRender(route.query.estate_type) : 'ملک'} ${(route.query.city || route.query.region) ? 'در ' + (route.query.region ? route.query.region : '') + ' ' + (route.query.city ? route.query.city : '') : ''}  ${(route.query.unit_price__gte || route.query.unit_price__lte) ? ', قیمت' + ((route.query.unit_price__gte && route.query.unit_price__lte) ? ' از ' + PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__gte)) + ' تا ' + PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__lte)) + ' تومان' : ((route.query.unit_price__gte && !route.query.unit_price__lte) ? ' از ' + PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__gte)) + ' تومان' : ' تا ' + PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__lte) + ' تومان'))): ''}`
    } else {
        return "جستجوی ملک"
    }
});

const pageName = ref(compPageName)

useHead({
    titleTemplate: 'فیلتر ملک ها-%s',
});
</script>