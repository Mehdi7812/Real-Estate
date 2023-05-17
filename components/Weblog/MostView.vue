<template>
    <div class="flex flex-col gap-7 md:p-8">
        <h4 class="mb-2 md:text-xl">جستجوهای اخیر</h4>

        <main v-if="!dataRes" class="mostSearch">
            <ul class="o-vertical-spacing o-vertical-spacing--l">
                <li class="blog-post o-media">
                    <div class="o-media__figure md:w-5/12">
                    <span class="skeleton-box rounded-lg overflow-hidden" style="width:100%;height:8rem;"></span>
                    </div>
                    <div class="o-media__body mr-4">
                    <div class="o-vertical-spacing">
                        <h3 class="blog-post__headline">
                        <span class="skeleton-box" style="width:55%;"></span>
                        </h3>
                        <p>
                        <span class="skeleton-box" style="width:80%;"></span>
                        <span class="skeleton-box" style="width:90%;"></span>
                        </p>
                        <div class="blog-post__meta">
                        <span class="skeleton-box" style="width:70px;"></span>
                        </div>
                    </div>
                    </div>
                </li>
                <li class="blog-post o-media">
                    <div class="o-media__figure md:w-5/12">
                    <span class="skeleton-box rounded-lg overflow-hidden" style="width:100%;height:8rem;"></span>
                    </div>
                    <div class="o-media__body mr-4">
                    <div class="o-vertical-spacing">
                        <h3 class="blog-post__headline">
                        <span class="skeleton-box" style="width:55%;"></span>
                        </h3>
                        <p>
                        <span class="skeleton-box" style="width:80%;"></span>
                        <span class="skeleton-box" style="width:90%;"></span>
                        </p>
                        <div class="blog-post__meta">
                        <span class="skeleton-box" style="width:70px;"></span>
                        </div>
                    </div>
                    </div>
                </li>
                <li class="blog-post o-media">
                    <div class="o-media__figure md:w-5/12">
                    <span class="skeleton-box rounded-lg overflow-hidden" style="width:100%;height:8rem;"></span>
                    </div>
                    <div class="o-media__body mr-4">
                    <div class="o-vertical-spacing">
                        <h3 class="blog-post__headline">
                        <span class="skeleton-box" style="width:55%;"></span>
                        </h3>
                        <p>
                        <span class="skeleton-box" style="width:80%;"></span>
                        <span class="skeleton-box" style="width:90%;"></span>
                        </p>
                        <div class="blog-post__meta">
                        <span class="skeleton-box" style="width:70px;"></span>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </main>

        <NuxtLink :to="`/weblog/${item.slug}`" v-for="item in dataRes" :key="item.id" style="background-color: var(--primaryColor-20);" class="flex gap-2 rounded-xl hover:shadow-lg md:rounded-[21px] overflow-hidden hover:-translate-y-4 transition-all duration-300">
            <div class="rounded-xl h-32 w-52 object-cover overflow-hidden md:rounded-[21px]">
                <img class="object-cover w-full h-full" :src="`${apiRootStore.api}/${item.cover}`">
            </div>
            <div class="flex flex-col justify-around w-full">
                <h5 class="text-base md:text-lg">{{ item.title }}</h5>

                <p class="text-[9px] text-graytext md:text-xs">{{ item.introduction }}</p>
            
                <p style="color: var(--primaryColor)" class="flex items-center gap-1 text-[9px] text-primaryOrange dark:text-bluePrimary md:text-xs">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style="stroke: var(--primaryColor)" d="M5 1.25V3.125" stroke="#E16428" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M10 1.25V3.125" stroke="#E16428" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M2.1875 5.68127H12.8125" stroke="#E16428" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M13.125 5.3125V10.625C13.125 12.5 12.1875 13.75 10 13.75H5C2.8125 13.75 1.875 12.5 1.875 10.625V5.3125C1.875 3.4375 2.8125 2.1875 5 2.1875H10C12.1875 2.1875 13.125 3.4375 13.125 5.3125Z" stroke="#E16428" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M9.80907 8.5625H9.81468" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M9.80907 10.4375H9.81468" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M7.49657 8.5625H7.50218" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M7.49657 10.4375H7.50218" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M5.18407 8.5625H5.18968" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                        <path style="stroke: var(--primaryColor)" d="M5.18407 10.4375H5.18968" stroke="#E16428" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <div>
                        <span>{{ dateCalc(item.placed_at) }}</span>
                    </div>
                </p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

const dataRes = ref()

const dateCalc = (prevDate) => {
    let now = new Date().toJSON()
    let seconds = (Date.parse(now) - Date.parse(prevDate)) / 1000
    let days = Math.floor(seconds / (3600*24))

    if(days <= 0) {
        return 'امروز'
    } else if (days >= 1 && days <= 31) {
        return `${days} روز پیش`
    } else {
        return `${Math.round(days/31)} ماه پیش`
    }
}

onMounted(async () => {
    const response = await fetch(`${apiRootStore.api}/real/MostViewWeblogs/`)
    const data = await response.json()
    dataRes.value = data
});
</script>