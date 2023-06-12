<template>
    <section style="background-color: var(--primaryColor-20)" class="bg-primary dark:bg-whiteSecondary md:py-10 lg:px-12 lg:py-5">
        <div class="container m-auto p-5 py-12">
            <div class="flex justify-between">
                <div>
                    <p style="color: var(--primaryColor)" class="lg:text-xl">از آخرین اخبار اطلاعی دارید؟</p>
                    <h2 class="text-xl dark:text-black font-extrabold mt-2 mb-10 lg:text-4xl">وبلاگ تخصصی ما</h2>
                </div>

                <div class="flex gap-2">
                    <div>
                        <NuxtLink style="background-color: var(--primaryColor)" :to="`/weblog`" class="group dark:text-white hover:opacity-80 p-3 lg:p-5 justify-center flex items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <span class="w-0 max-h-5 lg:group-hover:w-[90px] whitespace-nowrap overflow-hidden transition-all duration-300">مشاهده همه</span>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.84317 2.16666H5.78484C3.41234 2.16666 2.1665 3.41249 2.1665 5.77416V7.83249C2.1665 10.1942 3.41234 11.44 5.774 11.44H7.83234C10.194 11.44 11.4398 10.1942 11.4398 7.83249V5.77416C11.4507 3.41249 10.2048 2.16666 7.84317 2.16666Z" fill="white"/>
                                <path d="M20.2259 2.16666H18.1676C15.8059 2.16666 14.5601 3.41249 14.5601 5.77416V7.83249C14.5601 10.1942 15.8059 11.44 18.1676 11.44H20.2259C22.5876 11.44 23.8334 10.1942 23.8334 7.83249V5.77416C23.8334 3.41249 22.5876 2.16666 20.2259 2.16666Z" fill="white"/>
                                <path d="M20.2259 14.5492H18.1676C15.8059 14.5492 14.5601 15.795 14.5601 18.1567V20.215C14.5601 22.5767 15.8059 23.8225 18.1676 23.8225H20.2259C22.5876 23.8225 23.8334 22.5767 23.8334 20.215V18.1567C23.8334 15.795 22.5876 14.5492 20.2259 14.5492Z" fill="white"/>
                                <path d="M7.84317 14.5492H5.78484C3.41234 14.5492 2.1665 15.795 2.1665 18.1567V20.215C2.1665 22.5875 3.41234 23.8333 5.774 23.8333H7.83234C10.194 23.8333 11.4398 22.5875 11.4398 20.2258V18.1675C11.4507 15.795 10.2048 14.5492 7.84317 14.5492Z" fill="white"/>
                            </svg>                                
                        </NuxtLink>
                    </div>

                    <div class="hidden lg:block">
                        <a style="background-color: var(--primaryColor)" class="swiperWeblog-next hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7144 12L18.4286 7L12.7144 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 7H18.4286" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                        </a>
                    </div>

                    <div class="hidden lg:block">
                        <a style="background-color: var(--primaryColor)" class="swiperWeblog-prev hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.71338 12L1.99909 7L7.71338 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.4277 7H1.99916" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                        </a>
                    </div>
                </div>
            </div>

            <Swiper :modules="[SwiperNavigation]" :navigation="swiperOption.navigation" :breakpoints="swiperOption.breakpoints" :spaceBetween="swiperOption.spaceBetween" :slidesPerView="swiperOption.slidesPerView" :direction="swiperOption.direction">
                <SwiperSlide v-if="!dataRes" v-for="_ in Array.from({ length: 4 })">
                    <div class="loadingCard">
                        <a class="card w-full" id="card-link" target="_blank">
                            <div class="card__body h-64">
                                <div class="card__body body__img h-full">
                                    <img class="skeleton" alt="amlank.ir weblog" id="cover-img" />
                                </div>
                            </div>
                            
                            <div class="card__header">
                                <h3 class="card__header header__title" id="card-title">
                                    <div class="skeleton skeleton-text"></div>
                                    <div class="skeleton skeleton-text"></div>
                                </h3>
                                <div class="card__footer" id="card-footer">
                                    <div class="skeleton skeleton-text skeleton-footer"></div>
                                </div>
                                <h3 class="card__header header__title" id="card-title">
                                    <div class="skeleton skeleton-text"></div>
                                </h3>
                                <div>
                                    <img class="header__img skeleton m-auto" id="logo-img" alt="AMLANK.IR" />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide v-for="data in dataRes">
                    <NuxtLink :to="`/weblog/${data.slug}`" class="block postCard bg-secondary dark:bg-white rounded-2xl py-2 px-3 group cursor-pointer">
                        <div class="swiper swiperWeblogImg1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="flex relative h-60 rounded-2xl overflow-hidden">
                                        <img :src="`${apiRootStore.api}/${data.cover}`" class="object-cover w-full h-full bg-cover group-hover:scale-110 transition-all duration-300" :alt="data.title" />
                                    </div>
                                </div>
                            </div>

                            
                            <div class="absolute dark:text-white top-3 z-10 left-3 right-3 flex justify-between">
                                <div class="flex gap-2 items-center">
                                    <div class="bg-[#6DC175] p-1 rounded-md whitespace-nowrap flex items-center relative w-24 md:w-7 overflow-hidden group-hover:w-24 transition-all duration-300">
                                        <span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.4269 10.4896C16.4269 14.3133 13.3236 17.4167 9.49984 17.4167C5.67609 17.4167 2.57275 14.3133 2.57275 10.4896C2.57275 6.66583 5.67609 3.5625 9.49984 3.5625C13.3236 3.5625 16.4269 6.66583 16.4269 10.4896Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.5 6.33337V10.2917" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M7.125 1.58337H11.875" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>   
                                        </span>
                                        <span class="text-[10px] absolute right-7 top-2"><span>{{ data.time }}</span> دقیقه مطالعه</span>
                                    </div>
                                </div>
    
                                <p class="bg-white text-[10px] text-[#535353] py-2 px-3 rounded-md md:opacity-0 group-hover:opacity-100 transition-all duration-300">{{ convertDatas.dateCalc(data.placed_at) }}</p>
                            </div>
    
                            <div class="absolute dark:text-white bottom-3 z-10 right-3 left-3 flex justify-end items-end gap-2">
                                <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-6 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                    <span class="absolute bottom-5">{{ data.review_count.toLocaleString('fa-ir') }}</span>
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.66683 12.6667H5.3335C2.66683 12.6667 1.3335 12 1.3335 8.66671V5.33337C1.3335 2.66671 2.66683 1.33337 5.3335 1.33337H10.6668C13.3335 1.33337 14.6668 2.66671 14.6668 5.33337V8.66671C14.6668 11.3334 13.3335 12.6667 10.6668 12.6667H10.3335C10.1268 12.6667 9.92683 12.7667 9.80016 12.9334L8.80016 14.2667C8.36016 14.8534 7.64016 14.8534 7.20016 14.2667L6.20016 12.9334C6.0935 12.7867 5.84683 12.6667 5.66683 12.6667Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.6641 7.33333H10.6701" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.99715 7.33333H8.00314" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.32967 7.33333H5.33566" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                    
                                    </span>
                                </div>
    
                                <div>
                                    <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-6 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                        <span class="absolute bottom-5">{{ data.view.toLocaleString('fa-ir') }}</span>
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3866 8.00007C10.3866 9.32007 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32007 5.61328 8.00007C5.61328 6.68007 6.67995 5.6134 7.99995 5.6134C9.31995 5.6134 10.3866 6.68007 10.3866 8.00007Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1266 14.0732 9.72665C14.6732 8.78665 14.6732 7.20665 14.0732 6.26665C12.5466 3.86665 10.3532 2.47998 7.9999 2.47998C5.64656 2.47998 3.45323 3.86665 1.92656 6.26665C1.32656 7.20665 1.32656 8.78665 1.92656 9.72665C3.45323 12.1266 5.64656 13.5133 7.9999 13.5133Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                                                                                                                                                    
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="py-3 flex gap-4 flex-col">
                            <h3 class="text-[15px] font-bold lg:text-xl group-hover:text-primaryOrange dark:group-hover:text-bluePrimary transition-all duration-300">{{ data.title }}</h3>

                            <p class="text-right h-12 overflow-hidden text-[#F6E9E9] dark:text-graytext">{{ data.introduction }}</p>
                            
                            <div class="flex-row-reverse justify-between">
                                <NuxtLink :to="`/propertyCode?user=${data.user_id}`" class="flex gap-3">
                                    <img class="object-cover w-[35px] h-[35px] md:w-11 md:h-11 cursor-pointer rounded-lg" :src="`${apiRootStore.api}/${data.user_picture}`" :alt="data.username" />
                                    <div class="flex flex-col justify-around">
                                        <span class="text-[10px] md:text-base">{{ data.username }}</span>
                                        <span class="text-[8px] text-[#B1B1B1] md:text-[11px]">{{ data.user_activity }}</span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>

            <div class="lg:hidden flex gap-2 justify-center mt-5">
                <div>
                    <a style="background-color: var(--primaryColor);" class="swiperWeblog-next hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7144 12L18.4286 7L12.7144 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 7H18.4286" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>
                </div>

                <div>
                    <a style="background-color: var(--primaryColor);" class="swiperWeblog-prev hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.71338 12L1.99909 7L7.71338 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.4277 7H1.99916" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Api Root Address Store
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

// Convert diigits func Store
import { useConvertDatas } from "~/stores/ConvertDatas"
const convertDatas = useConvertDatas()

const dataRes = ref()

const response = await fetch(`${apiRootStore.api}/real/weblog/`)
const data = await response.json()
dataRes.value = data.results;

const swiperOption = {
    direction: "horizontal",
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    
    breakpoints: {
        768: {slidesPerView: 2, spaceBetween: 10},
        1024: {slidesPerView: 3, spaceBetween: 10}
    },
    
    navigation: {
        nextEl: ".swiperWeblog-next",
        prevEl: ".swiperWeblog-prev",
    },
};
</script>