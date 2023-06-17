<template>
    <div class="md:p-8 md:bg-secondary md:dark:bg-[#fcfcfc] rounded-[31px]" :class="route.params.slug ? 'rounded-r-none' : ''">
        <h5 class="mb-4 md:text-xl">جستجوی پست</h5>

        <form @submit.prevent="fetchSearch" class="flex">
            <input style="border-color: var(--primaryColor)" v-model="slug" type="text" class="w-full outline-none border-l-0 rounded-l-none bg-primary dark:bg-graytext/10 rounded-r-lg p-4 h-12 border-primaryOrange dark:border-bluePrimary border-[1px] placeholder:text-graytext" placeholder="جستجو">
            
            <a v-if="!slug" style="background-color: var(--primaryColor)" class="opacity-80 bg-primaryOrange !cursor-not-allowed dark:bg-bluePrimary hover:bg-hoverPrimaryOrange dark:hover:bg-bluePrimary/30 rounded-l-lg h-12 px-4 lg:px-6 rounded-r-none transition-all duration-300 flex justify-center items-center">
                <svg class="w-6 md:w-8" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6631 7.09363H29.1631" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.6631 11.3436H24.9131" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.5797 16.302C30.5797 23.7395 24.5589 29.7603 17.1214 29.7603C9.68392 29.7603 3.66309 23.7395 3.66309 16.302C3.66309 8.86446 9.68392 2.84363 17.1214 2.84363" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.9964 31.177L29.1631 28.3436" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>   
            </a>
            <NuxtLink v-if="slug" style="background-color: var(--primaryColor)" :to="`/weblog?search=${slug}&weblog_type=`" :class="slug ? 'cursor-pointer' : 'cursor-not-allowed'" class="hover:opacity-80 bg-primaryOrange dark:bg-bluePrimary hover:bg-hoverPrimaryOrange dark:hover:bg-bluePrimary/30 rounded-l-lg h-12 px-4 lg:px-6 rounded-r-none transition-all duration-300 flex justify-center items-center">
                <svg class="w-6 md:w-8" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6631 7.09363H29.1631" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.6631 11.3436H24.9131" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.5797 16.302C30.5797 23.7395 24.5589 29.7603 17.1214 29.7603C9.68392 29.7603 3.66309 23.7395 3.66309 16.302C3.66309 8.86446 9.68392 2.84363 17.1214 2.84363" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.9964 31.177L29.1631 28.3436" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
        </form>
    </div>
</template>

<script setup>
const route = useRoute()

const slug = ref("");

const fetchSearch = () => {
    navigateTo(`/weblog?search=${slug}&weblog_type=`)
}
</script>