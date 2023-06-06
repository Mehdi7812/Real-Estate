<template>
    <section class="lg:px-12">
        <div class="container m-auto p-5 lg:py-12">
            <NuxtLink to="propertyCode?jungle=true" class="relative rounded-xl flex my-8 overflow-hidden lg:hidden">
                <div class=" w-full h-[117px] bg-no-repeat bg-right" style="background-image: url(/favImg1.webp);">
                    <div style="background: linear-gradient(to right, var(--primaryColor) 55%, transparent)" class="absolute left-0 top-0 bottom-0 w-5/6 bg-gradient-to-r from-primaryOrange via-primaryOrange after:from-bluePrimary after:via-bluePrimary z-10"></div>
                    <div class="flex items-center absolute left-[10%] top-0 bottom-0 z-20 cursor-pointer">
                        <h3 class="w-20 text-center dark:text-white text-sm font-extrabold">خرید ویلاهای جنگلی</h3>

                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7935 0.717834H4.20683C1.78016 0.717834 0.333496 2.1645 0.333496 4.59117V10.1712C0.333496 12.6045 1.78016 14.0512 4.20683 14.0512H9.78683C12.2135 14.0512 13.6602 12.6045 13.6602 10.1778V4.59117C13.6668 2.1645 12.2202 0.717834 9.7935 0.717834ZM11.0002 7.8845H4.20683L6.2135 9.89117C6.40683 10.0845 6.40683 10.4045 6.2135 10.5978C6.1135 10.6978 5.98683 10.7445 5.86016 10.7445C5.7335 10.7445 5.60683 10.6978 5.50683 10.5978L2.64683 7.73783C2.5535 7.6445 2.50016 7.51783 2.50016 7.3845C2.50016 7.25117 2.5535 7.1245 2.64683 7.03117L5.50683 4.17117C5.70016 3.97783 6.02016 3.97783 6.2135 4.17117C6.40683 4.3645 6.40683 4.6845 6.2135 4.87783L4.20683 6.8845H11.0002C11.2735 6.8845 11.5002 7.11117 11.5002 7.3845C11.5002 7.65783 11.2735 7.8845 11.0002 7.8845Z" fill="white"/>
                        </svg>     
                    </div>
                </div>
            </NuxtLink>

            <p style="color: var(--primaryColor)" class="lg:text-xl">نمایندگان با پشتکار ما</p>
            <h2 class="text-xl dark:text-black font-extrabold mt-2 mb-10 lg:text-4xl">بانمایندگان ما آشنا شوید</h2>

            <div class="swiper swiperPersons text-center lg:px-4 !pt-3">
                <div class="swiper-wrapper">
                    <div v-for="data in dataRes" :key="data.id" class="swiper-slide">
                        <NuxtLink style="background-color: var(--primaryColor-20)" :to="`propertyCode?user=${data.id}`" class="bg-primary dark:bg-whiteSecondary rounded-2xl flex flex-col cursor-pointer hover:-translate-y-3 justify-center items-center p-5 gap-3 transition-all duration-300">
                            <img style="border-color: var(--primaryColor)" class="rounded-full border-primaryOrange dark:border-bluePrimary border-[3px] w-14 h-14 lg:w-24 lg:h-24 lg:border-4 object-cover" :src="data.picture">
                            <p class="text-sm font-bold lg:text-base">{{ data.username }}</p>
                            
                            <star-rating :read-only="true" :id="`starRating-${data.id}`" :rating="data.rate_avg" :star-size="22" :rounded-corners="true" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="direction: ltr;" :rtl="true" :show-rating="false"></star-rating>
                        </NuxtLink>
                    </div>
                </div>

                <div class="personsPrev hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:top-[40%] lg:left-0 lg:z-10 lg:bg-[#393e46] lg:bg-opacity-50 lg:w-12 lg:h-12 lg:rounded-full">
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.65973 17.8277C9.97038 17.5171 9.99862 17.031 9.74446 16.6884L9.65973 16.5903L2.11218 9.04232L9.65973 1.49437C9.97038 1.18372 9.99862 0.697615 9.74446 0.355068L9.65973 0.256929C9.34909 -0.0537148 8.86298 -0.081955 8.52044 0.172209L8.4223 0.256929L0.255631 8.4236C-0.0550127 8.73424 -0.0832539 9.22035 0.17091 9.5629L0.255631 9.66103L8.4223 17.8277C8.76401 18.1694 9.31803 18.1694 9.65973 17.8277Z" fill="white"/>
                    </svg>
                        
                </div>
                <div class="personsNext hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:top-[40%] lg:right-0 lg:z-10 lg:bg-[#393e46] lg:bg-opacity-50 lg:w-12 lg:h-12 lg:rounded-full">
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.256282 17.8267C-0.0543628 17.5161 -0.0826032 17.03 0.17156 16.6874L0.256282 16.5893L7.80383 9.04134L0.256282 1.49339C-0.0543628 1.18275 -0.0826032 0.696638 0.17156 0.354091L0.256282 0.255953C0.566926 -0.0546908 1.05303 -0.0829318 1.39558 0.171232L1.49372 0.255953L9.66038 8.42262C9.97103 8.73327 9.99927 9.21937 9.74511 9.56192L9.66038 9.66006L1.49372 17.8267C1.15201 18.1684 0.59799 18.1684 0.256282 17.8267Z" fill="white"/>
                    </svg>                            
                </div>
                
                <div class="swiper-paginationPersons my-9 lg:hidden"></div> 
            </div>
        </div>
    </section>
</template>

<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

const dataRes = ref()

const response = await fetch(`${apiRootStore.api}/real/usersinfo/`)
const data = await response.json()
dataRes.value = data;

onMounted(async () => {
    const swiperPersons = await new Swiper('.swiperPersons', {
        direction: "horizontal",
        // loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-paginationPersons',
            clickable: true,
        },

        breakpoints: {
            550:{slidesPerView: 3},
            768: {slidesPerView: 4, spaceBetween: 10},
            1024: {slidesPerView: 5, spaceBetween: 20},
        },

        navigation: {
            nextEl: '.personsNext',
            prevEl: '.personsPrev',
        }
    });
});
</script>