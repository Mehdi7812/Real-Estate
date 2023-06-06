<template>
    <section style="background-color: var(--primaryColor-20)" class="bg-primary dark:bg-whiteSecondary md:py-10 lg:px-12">
        <div class="container m-auto p-5">
            <div class="flex justify-between">
                <div>
                    <p style="color: var(--primaryColor)" class="lg:text-xl">جدیدترین ملک ها</p>
                    <h2 class="text-xl dark:text-black font-extrabold mt-2 mb-8 lg:text-4xl">پیشنهادات باورنکردنی ملک ها</h2>
                </div>

                <div class="flex gap-2">
                    <div>
                        <NuxtLink to="propertyCode?special=true" style="background-color: var(--primaryColor);" class="group hover:opacity-80 p-3 lg:p-5 justify-center flex items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <span class="w-0 max-h-5 dark:text-white lg:group-hover:w-[90px] overflow-hidden whitespace-nowrap transition-all duration-300">مشاهده همه</span>
                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.84317 2.16666H5.78484C3.41234 2.16666 2.1665 3.41249 2.1665 5.77416V7.83249C2.1665 10.1942 3.41234 11.44 5.774 11.44H7.83234C10.194 11.44 11.4398 10.1942 11.4398 7.83249V5.77416C11.4507 3.41249 10.2048 2.16666 7.84317 2.16666Z" fill="white"/>
                                <path d="M20.2259 2.16666H18.1676C15.8059 2.16666 14.5601 3.41249 14.5601 5.77416V7.83249C14.5601 10.1942 15.8059 11.44 18.1676 11.44H20.2259C22.5876 11.44 23.8334 10.1942 23.8334 7.83249V5.77416C23.8334 3.41249 22.5876 2.16666 20.2259 2.16666Z" fill="white"/>
                                <path d="M20.2259 14.5492H18.1676C15.8059 14.5492 14.5601 15.795 14.5601 18.1567V20.215C14.5601 22.5767 15.8059 23.8225 18.1676 23.8225H20.2259C22.5876 23.8225 23.8334 22.5767 23.8334 20.215V18.1567C23.8334 15.795 22.5876 14.5492 20.2259 14.5492Z" fill="white"/>
                                <path d="M7.84317 14.5492H5.78484C3.41234 14.5492 2.1665 15.795 2.1665 18.1567V20.215C2.1665 22.5875 3.41234 23.8333 5.774 23.8333H7.83234C10.194 23.8333 11.4398 22.5875 11.4398 20.2258V18.1675C11.4507 15.795 10.2048 14.5492 7.84317 14.5492Z" fill="white"/>
                            </svg>                                
                        </NuxtLink>
                    </div>

                    <div class="hidden lg:block">
                        <a style="background-color: var(--primaryColor);" class="swiperProposal-next hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7144 12L18.4286 7L12.7144 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 7H18.4286" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                        </a>
                    </div>

                    <div class="hidden lg:block">
                        <a style="background-color: var(--primaryColor);" class="swiperProposal-prev hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.71338 12L1.99909 7L7.71338 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.4277 7H1.99916" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                        </a>
                    </div>
                </div>
            </div>

            <div class="swiper swiperProposal">
                <div v-if="!dataRes" class="swiper-wrapper">
                    <div v-for="_ in Array.from({ length: 4 })" class="swiper-slide">
                        <div class="loadingCard">
                            <a class="card w-full" style="flex-direction: row; justify-content: flex-start; height: 16rem;" id="card-link" target="_blank">
                                <div class="card__body h-full w-1/2">
                                    <div class="card__body body__img h-full" style="margin: 0;">
                                        <img class="skeleton" alt="" id="cover-img" />
                                    </div>
                                </div>
                                
                                <div class="card__header w-1/2 justify-around">
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
                                        <img class="header__img skeleton m-auto" id="logo-img" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="swiper-wrapper">
                    <div v-for="data in dataRes" :key="data.id" class="swiper-slide">
                        <NuxtLink :to="`estateDetail/${data.id}`" class="block postCard bg-secondary dark:bg-white rounded-2xl py-2 px-3 group lg:flex xl:h-full cursor-pointer">
                            <div class="swiper swiperProposalImg1 rounded-2xl overflow-hidden xl:w-1/2">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="relative rounded-2xl overflow-hidden h-72 lg:h-full">
                                            <img :src="data.cover" class="w-full object-cover h-full group-hover:scale-110 transition-all duration-300">
                                        </div>
                                    </div>

                                    <div v-if="data.media.length >= 1" v-for="media in data.media" class="swiper-slide">
                                        <div class="relative rounded-2xl overflow-hidden h-72 lg:h-full">
                                            <img :src="`${apiRootStore.api}/${media.image}`" class="w-full object-cover h-full group-hover:scale-110 transition-all duration-300">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="absolute dark:text-white z-10 top-3 left-3 right-3 flex justify-between">
                                    <div class="flex gap-2 items-center flex-wrap">
                                        <span class="bg-[#55499B] py-[6px] px-2 rounded-md text-[10px] whitespace-nowrap">تخفیف ویژه</span> 
                                        <!-- Transaction -->
                                        <span v-if="data.Transaction == 'P'" class="bg-[#55499B] py-[6px] px-2 rounded-md text-[10px]">پیش فروش</span> 
                                        <!-- Special -->
                                        <div v-if="data.special" class="bg-[#FF4764] p-1 rounded-md flex items-center relative w-20 md:w-5 overflow-hidden group-hover:w-[75px] whitespace-nowrap transition-all duration-300">
                                            <span>
                                                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1771 7.48667H8.73086V1.78667C8.73086 0.456667 8.01045 0.1875 7.1317 1.185L6.49836 1.90542L1.13878 8.00125C0.402528 8.8325 0.711278 9.51333 1.81961 9.51333H4.26586V15.2133C4.26586 16.5433 4.98628 16.8125 5.86503 15.815L6.49836 15.0946L11.8579 8.99875C12.5942 8.1675 12.2854 7.48667 11.1771 7.48667Z" fill="white"/></svg>
                                                </span>
                                            <span class="text-[10px] absolute right-6">فروش فوری</span>
                                        </div>
                                    </div>
        
                                    <div>
                                        <div class="bg-primary flex gap-2 rounded-md p-1 items-center whitespace-nowrap">
                                            <span class="text-[10px] relative top-[2px]">{{ convertDatas.estateTypeRender(data.estate_type) }}</span>
        
                                            <span>
                                                <svg v-if="data.estate_type == 'G'" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.25 24.75H24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M3.31836 24.75L3.37461 11.2163C3.37461 10.53 3.70086 9.87758 4.24086 9.45008L12.1159 3.31881C12.9259 2.68881 14.0621 2.68881 14.8834 3.31881L22.7584 9.43882C23.3096 9.86632 23.6246 10.5188 23.6246 11.2163V24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                                                    <path d="M17.4375 12.375H9.5625C8.62875 12.375 7.875 13.1288 7.875 14.0625V24.75H19.125V14.0625C19.125 13.1288 18.3712 12.375 17.4375 12.375Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.25 18.2812V19.9688" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.8125 8.4375H15.1875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <svg v-if="data.estate_type == 'A'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.8332 18.3333H4.1665C2.49984 18.3333 1.6665 17.5 1.6665 15.8333V9.16667C1.6665 7.50001 2.49984 6.66667 4.1665 6.66667H8.33317V15.8333C8.33317 17.5 9.1665 18.3333 10.8332 18.3333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.42483 3.33333C8.35816 3.58333 8.33317 3.85833 8.33317 4.16666V6.66666H4.1665V4.99999C4.1665 4.08333 4.9165 3.33333 5.83317 3.33333H8.42483Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.6665 6.66667V10.8333" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M15 6.66667V10.8333" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M14.1665 14.1667H12.4998C12.0415 14.1667 11.6665 14.5417 11.6665 15V18.3333H14.9998V15C14.9998 14.5417 14.6248 14.1667 14.1665 14.1667Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M5 10.8333V14.1667" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8.3335 15.8333V4.16667C8.3335 2.50001 9.16683 1.66667 10.8335 1.66667H15.8335C17.5002 1.66667 18.3335 2.50001 18.3335 4.16667V15.8333C18.3335 17.5 17.5002 18.3333 15.8335 18.3333H10.8335C9.16683 18.3333 8.3335 17.5 8.3335 15.8333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg> 
                                                <svg v-if="data.estate_type == 'H'" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.25 24.75H24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M16.8863 24.7387L3.38626 24.7612L3.375 7.95375C3.375 7.2 3.75752 6.50246 4.37627 6.08621L8.87627 3.08248C9.63002 2.57623 10.62 2.57623 11.3737 3.08248L15.8737 6.08621C16.5037 6.50246 16.875 7.2 16.875 7.95375L16.8863 24.7387Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M22.4766 24.7613V20.25" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M22.5 13.5C21.2625 13.5 20.25 14.5125 20.25 15.75V18C20.25 19.2375 21.2625 20.25 22.5 20.25C23.7375 20.25 24.75 19.2375 24.75 18V15.75C24.75 14.5125 23.7375 13.5 22.5 13.5Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M3.375 15.75H16.875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M10.125 24.75V20.5312" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M10.125 11.8125C11.057 11.8125 11.8125 11.057 11.8125 10.125C11.8125 9.19302 11.057 8.4375 10.125 8.4375C9.19302 8.4375 8.4375 9.19302 8.4375 10.125C8.4375 11.057 9.19302 11.8125 10.125 11.8125Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <svg v-if="data.estate_type == 'L'" width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.16602 9.74999V7.04166C2.16602 4.34416 4.34352 2.16666 7.04102 2.16666H9.74935" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M16.25 2.16666H18.9583C21.6558 2.16666 23.8333 4.34416 23.8333 7.04166V9.74999" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M23.834 17.3333V18.9583C23.834 21.6558 21.6565 23.8333 18.959 23.8333H17.334" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9.74935 23.8333H7.04102C4.34352 23.8333 2.16602 21.6558 2.16602 18.9583V16.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <svg v-if="data.estate_type == 'B'" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.063 24.7501H4.59055C3.28555 24.7501 2.2168 23.7039 2.2168 22.4214V5.72637C2.2168 2.77887 4.41055 1.44012 7.0993 2.75637L12.0943 5.20887C13.1743 5.73762 14.063 7.14387 14.063 8.33637V24.7501Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M24.7162 16.9426V21.1951C24.7162 23.6251 23.5912 24.7501 21.1612 24.7501H14.0625V11.7226L14.5913 11.8351L19.6537 12.9714L21.9375 13.4776C23.4225 13.8039 24.6375 14.5689 24.705 16.7289C24.7162 16.7964 24.7162 16.8639 24.7162 16.9426Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.1875 10.1251H10.0913" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.1875 14.6251H10.0913" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M19.6543 12.9714V16.5939C19.6543 17.9889 18.518 19.1251 17.123 19.1251C15.728 19.1251 14.5918 17.9889 14.5918 16.5939V11.8351L19.6543 12.9714Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M24.7055 16.7289C24.638 18.0564 23.5355 19.1251 22.1855 19.1251C20.7905 19.1251 19.6543 17.9889 19.6543 16.5939V12.9714L21.938 13.4776C23.423 13.8039 24.638 14.5689 24.7055 16.7289Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <svg v-if="data.estate_type == 'V'" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.125 24.75H25.875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M22.252 24.7612V19.7437" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M22.2758 12.2513C20.9033 12.2513 19.8008 13.3538 19.8008 14.7263V17.28C19.8008 18.6525 20.9033 19.755 22.2758 19.755C23.6483 19.755 24.7508 18.6525 24.7508 17.28V14.7263C24.7508 13.3538 23.6483 12.2513 22.2758 12.2513Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M2.36328 24.75V6.78381C2.36328 4.52256 3.48834 3.38629 5.72709 3.38629H12.7358C14.9746 3.38629 16.0883 4.52256 16.0883 6.78381V24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.52539 9.28125H12.0942" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M6.52539 13.5H12.0942" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9.28125 24.75V20.5312" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="absolute dark:text-white z-10 bottom-3 right-3 left-3 flex justify-between items-end">
                                    <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-7 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                        <span class="absolute bottom-5">{{ data.media.length.toLocaleString('fa-ir') }}</span>
                                        <span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.82349 17.4167H14.1762C16.6393 17.4167 17.621 16.0788 17.737 14.4479L18.201 7.90875C18.326 6.19875 16.791 4.75 14.8544 4.75C14.31 4.75 13.8103 4.47292 13.5604 4.04542L12.9179 2.8975C12.5073 2.17708 11.4364 1.58333 10.5261 1.58333H8.48246C7.56326 1.58333 6.49234 2.17708 6.08182 2.8975L5.43927 4.04542C5.18939 4.47292 4.68963 4.75 4.14525 4.75C2.20867 4.75 0.673685 6.19875 0.798626 7.90875L1.26269 14.4479C1.36978 16.0788 2.36038 17.4167 4.82349 17.4167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9.50016 14.25C11.2443 14.25 12.6668 12.8274 12.6668 11.0833C12.6668 9.33923 11.2443 7.91667 9.50016 7.91667C7.75606 7.91667 6.3335 9.33923 6.3335 11.0833C6.3335 12.8274 7.75606 14.25 9.50016 14.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>                                        
                                        </span>
                                    </div>
        
                                    <div>
                                        <p class="bg-primary text-[10px] py-2 px-3 rounded-md md:opacity-0 group-hover:opacity-100 transition-all duration-300">{{ convertDatas.dateCalc(data.placed_at) }}</p>
                                    </div>
                                </div>

                                <div class="swiperProposalImg1-next absolute top-[38%] z-10 -right-3">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_411_3053)">
                                        <path d="M25 15C19.49 15 15 19.49 15 25C15 30.51 19.49 35 25 35C30.51 35 35 30.51 35 25C35 19.49 30.51 15 25 15ZM27.79 25.53L24.26 29.06C24.11 29.21 23.92 29.28 23.73 29.28C23.54 29.28 23.35 29.21 23.2 29.06C22.91 28.77 22.91 28.29 23.2 28L26.2 25L23.2 22C22.91 21.71 22.91 21.23 23.2 20.94C23.49 20.65 23.97 20.65 24.26 20.94L27.79 24.47C28.09 24.76 28.09 25.24 27.79 25.53Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_411_3053" x="-2" y="-2" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="7.5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_3053"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_3053" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>                                
                                </div>

                                <div class="swiperProposalImg1-prev absolute top-[38%] z-10 -left-3">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_411_3052)">
                                        <path d="M25 15C19.49 15 15 19.49 15 25C15 30.51 19.49 35 25 35C30.51 35 35 30.51 35 25C35 19.49 30.51 15 25 15ZM26.79 28C27.08 28.29 27.08 28.77 26.79 29.06C26.64 29.21 26.45 29.28 26.26 29.28C26.07 29.28 25.88 29.21 25.73 29.06L22.2 25.53C21.91 25.24 21.91 24.76 22.2 24.47L25.73 20.94C26.02 20.65 26.5 20.65 26.79 20.94C27.08 21.23 27.08 21.71 26.79 22L23.79 25L26.79 28Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_411_3052" x="-2" y="-2" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="7.5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_3052"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_3052" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>                                
                                </div>
                            </div>
        
                            <div class="py-3 flex gap-4 flex-col lg:min-w-[270px] lg:pr-3 lg:justify-center xl:w-1/2">
                                <h3 class="text-[15px] font-bold lg:text-xl truncate group-hover:text-primaryOrange dark:group-hover:text-bluePrimary transition-all duration-300">{{ data.title }}</h3>
        
                                <div class="flex gap-8 flex-wrap gap-y-3">
                                    <p class="relative text-[15px] font-normal text-[#f6e9e9] whitespace-nowrap dark:text-black"><span>{{ Number(data.land_size).toLocaleString('fa-ir') }}</span> متر </p>
                                    <span class="relative text-[15px] font-normal text-[#f6e9e9] whitespace-nowrap dark:text-black after:absolute after:w-1 after:h-1 after:rounded-full after:bg-[#f6e9e9] dark:after:bg-black after:-right-4 after:top-2">{{ data.region }}</span>
                                    <span class="relative text-[15px] font-normal text-[#f6e9e9] whitespace-nowrap dark:text-black after:absolute after:w-1 after:h-1 after:rounded-full after:bg-[#f6e9e9] dark:after:bg-black after:-right-4 after:top-2">{{ data.location }}</span>
                                    <span class="relative text-[15px] font-normal text-[#f6e9e9] whitespace-nowrap dark:text-black after:absolute after:w-1 after:h-1 after:rounded-full after:bg-[#f6e9e9] dark:after:bg-black after:-right-4 after:top-2">{{ convertDatas.estateTypeRender(data.estate_type) }}</span>
                                </div>
        
                                <!-- Price -->
                                <div class="flex items-center gap-[initial] justify-between h-[75px]">
                                    <div class="flex items-center gap-[5px]">
                                        <svg class="dark:hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M25.7346 10.56V17.4267C25.7346 21.5333 23.3879 23.2933 19.8679 23.2933H8.14791C7.54791 23.2933 6.97458 23.24 6.44124 23.12C6.10791 23.0667 5.78792 22.9734 5.49459 22.8667C3.49459 22.12 2.28125 20.3867 2.28125 17.4267V10.56C2.28125 6.45331 4.62791 4.69336 8.14791 4.69336H19.8679C22.8546 4.69336 25.0012 5.96002 25.5746 8.85335C25.6679 9.38669 25.7346 9.93331 25.7346 10.56Z" fill="#237E48"/>
                                            <path d="M29.7347 14.56V21.4267C29.7347 25.5334 27.3881 27.2933 23.8681 27.2933H12.1481C11.1614 27.2933 10.2681 27.1601 9.49475 26.8667C7.90808 26.2801 6.82807 25.0667 6.44141 23.1201C6.97474 23.2401 7.54807 23.2933 8.14807 23.2933H19.8681C23.3881 23.2933 25.7347 21.5334 25.7347 17.4267V10.56C25.7347 9.93335 25.6814 9.37339 25.5747 8.85339C28.1081 9.38673 29.7347 11.1734 29.7347 14.56Z" fill="#237E48"/>
                                            <path d="M14.0005 17.52C15.9445 17.52 17.5205 15.944 17.5205 14C17.5205 12.056 15.9445 10.48 14.0005 10.48C12.0564 10.48 10.4805 12.056 10.4805 14C10.4805 15.944 12.0564 17.52 14.0005 17.52Z" fill="#237E48"/>
                                            <path d="M6.375 11C5.82833 11 5.375 11.4533 5.375 12V16C5.375 16.5467 5.82833 17 6.375 17C6.92167 17 7.375 16.5467 7.375 16V12C7.375 11.4533 6.935 11 6.375 11Z" fill="#237E48"/>
                                            <path d="M21.6133 11C21.0666 11 20.6133 11.4533 20.6133 12V16C20.6133 16.5467 21.0666 17 21.6133 17C22.1599 17 22.6133 16.5467 22.6133 16V12C22.6133 11.4533 22.1733 11 21.6133 11Z" fill="#237E48"/>
                                        </svg>
                                        <svg class="dark:inline-block hidden" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M25.7346 10.56V17.4267C25.7346 21.5333 23.3879 23.2933 19.8679 23.2933H8.14791C7.54791 23.2933 6.97458 23.24 6.44124 23.12C6.10791 23.0667 5.78792 22.9734 5.49459 22.8667C3.49459 22.12 2.28125 20.3867 2.28125 17.4267V10.56C2.28125 6.45331 4.62791 4.69336 8.14791 4.69336H19.8679C22.8546 4.69336 25.0012 5.96002 25.5746 8.85335C25.6679 9.38669 25.7346 9.93331 25.7346 10.56Z" fill="#237E48"/>
                                            <path d="M29.7347 14.56V21.4267C29.7347 25.5334 27.3881 27.2933 23.8681 27.2933H12.1481C11.1614 27.2933 10.2681 27.1601 9.49475 26.8667C7.90808 26.2801 6.82807 25.0667 6.44141 23.1201C6.97474 23.2401 7.54807 23.2933 8.14807 23.2933H19.8681C23.3881 23.2933 25.7347 21.5334 25.7347 17.4267V10.56C25.7347 9.93335 25.6814 9.37339 25.5747 8.85339C28.1081 9.38673 29.7347 11.1734 29.7347 14.56Z" fill="#237E48"/>
                                            <path d="M14.0005 17.52C15.9445 17.52 17.5205 15.944 17.5205 14C17.5205 12.056 15.9445 10.48 14.0005 10.48C12.0564 10.48 10.4805 12.056 10.4805 14C10.4805 15.944 12.0564 17.52 14.0005 17.52Z" fill="#237E48"/>
                                            <path d="M6.375 11C5.82833 11 5.375 11.4533 5.375 12V16C5.375 16.5467 5.82833 17 6.375 17C6.92167 17 7.375 16.5467 7.375 16V12C7.375 11.4533 6.935 11 6.375 11Z" fill="#237E48"/>
                                            <path d="M21.6133 11C21.0666 11 20.6133 11.4533 20.6133 12V16C20.6133 16.5467 21.0666 17 21.6133 17C22.1599 17 22.6133 16.5467 22.6133 16V12C22.6133 11.4533 22.1733 11 21.6133 11Z" fill="#237E48"/>
                                        </svg>

                                        <div class="flex flex-col">
                                            <!-- Real Price -->
                                            <p class="text-sm flex flex-nowrap whitespace-nowrap items-center">
                                                <p class="text-xl font-normal ml-1">{{ PN.convertEnToPe(convertDatas.getNumber(data.unit_price)) }}</p>
                                            
                                                <!-- SVG Toman -->
                                                <span>
                                                    <svg class="dark:hidden" width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.30177 11.2697C2.95193 11.2697 3.49876 11.2193 3.94224 11.1184C4.38573 11.0175 4.73664 10.8618 4.99498 10.6513C5.21888 10.4671 5.38249 10.2325 5.48583 9.94737C5.59347 9.66228 5.64729 9.30702 5.64729 8.88158H4.45892C4.15753 8.88158 3.85182 8.83553 3.54181 8.74342C3.2318 8.65132 2.94978 8.5 2.69575 8.28947C2.44602 8.07895 2.24149 7.80482 2.08218 7.4671C1.92287 7.125 1.84322 6.70833 1.84322 6.21711C1.84322 5.92763 1.8669 5.66667 1.91426 5.43421C1.96593 5.19737 2.02836 4.98684 2.10156 4.80263C2.17906 4.61842 2.26302 4.45833 2.35344 4.32237C2.44386 4.1864 2.53213 4.07018 2.61824 3.97368C2.85506 3.73246 3.12631 3.54605 3.43202 3.41447C3.73772 3.28289 4.06495 3.21711 4.41371 3.21711C4.71942 3.21711 5.00575 3.26535 5.2727 3.36184C5.53965 3.45833 5.77862 3.60307 5.9896 3.79605C6.57086 4.34868 6.8615 5.21491 6.8615 6.39474V7.63816H7.83028V8.88158H6.8615C6.8615 9.50439 6.77108 10.0395 6.59024 10.4868C6.41371 10.9386 6.13814 11.3158 5.76355 11.6184C5.38465 11.9211 4.91317 12.1447 4.34913 12.2895C3.78939 12.4386 3.10694 12.5132 2.30177 12.5132V11.2697ZM4.41371 4.46053C3.98745 4.46053 3.65591 4.61404 3.4191 4.92105C3.18229 5.22807 3.06388 5.66009 3.06388 6.21711C3.06388 6.7829 3.2318 7.17544 3.56765 7.39474C3.64946 7.44737 3.73342 7.49123 3.81953 7.52632C3.90564 7.55702 3.9896 7.58114 4.07141 7.59868C4.15322 7.61184 4.22642 7.62281 4.291 7.63158C4.35989 7.63597 4.41587 7.63816 4.45892 7.63816H5.64729V6.39474C5.64729 6.07456 5.62361 5.80482 5.57625 5.58553C5.52889 5.36184 5.46861 5.17763 5.39541 5.03289C5.32222 4.88816 5.23825 4.77851 5.14353 4.70395C5.05311 4.625 4.96269 4.56798 4.87227 4.53289C4.78185 4.49781 4.69574 4.47807 4.61393 4.47368C4.53212 4.46491 4.46538 4.46053 4.41371 4.46053Z" fill="white"/>
                                                        <path d="M10.2648 7.63816C10.3121 7.63816 10.3358 7.6557 10.3358 7.69079V8.81579C10.3358 8.85965 10.3121 8.88158 10.2648 8.88158H7.50051C7.45745 8.88158 7.43592 8.85965 7.43592 8.81579V7.69079C7.43592 7.6557 7.45745 7.63816 7.50051 7.63816H10.2648Z" fill="white"/>
                                                        <path d="M12.7154 7.63816C12.7628 7.63816 12.7865 7.6557 12.7865 7.69079V8.81579C12.7865 8.85965 12.7628 8.88158 12.7154 8.88158H9.95119C9.90813 8.88158 9.8866 8.85965 9.8866 8.81579V7.69079C9.8866 7.6557 9.90813 7.63816 9.95119 7.63816H12.7154Z" fill="white"/>
                                                        <path d="M15.1661 7.63816C15.2135 7.63816 15.2372 7.6557 15.2372 7.69079V8.81579C15.2372 8.85965 15.2135 8.88158 15.1661 8.88158H12.4019C12.3588 8.88158 12.3373 8.85965 12.3373 8.81579V7.69079C12.3373 7.6557 12.3588 7.63816 12.4019 7.63816H15.1661Z" fill="white"/>
                                                        <path d="M19.2766 3.52632C19.2853 3.55263 19.3025 3.62281 19.3283 3.73684C19.3541 3.85088 19.3821 3.99342 19.4123 4.16447C19.4467 4.33114 19.4833 4.51754 19.5221 4.72368C19.5608 4.92544 19.5953 5.13158 19.6254 5.34211C19.6555 5.54825 19.6814 5.74781 19.7029 5.94079C19.7244 6.13377 19.7352 6.30263 19.7352 6.44737C19.7352 6.86842 19.6663 7.23246 19.5285 7.53947C19.3951 7.8421 19.2185 8.0943 18.9989 8.29605C18.7836 8.49342 18.5404 8.64035 18.2691 8.73684C17.9979 8.83333 17.7244 8.88158 17.4489 8.88158H14.775V7.63816H17.4489C17.5135 7.63816 17.6039 7.62939 17.7201 7.61184C17.8407 7.58991 17.9591 7.53947 18.0754 7.46053C18.1959 7.38158 18.2993 7.26316 18.3854 7.10526C18.4758 6.94737 18.521 6.72807 18.521 6.44737C18.521 6.35088 18.5124 6.23026 18.4952 6.08553C18.4822 5.9364 18.4629 5.77851 18.437 5.61184C18.4155 5.44079 18.3897 5.26754 18.3595 5.09211C18.3294 4.91228 18.2993 4.74342 18.2691 4.58553C18.239 4.42763 18.211 4.28728 18.1852 4.16447C18.1593 4.04167 18.1378 3.94956 18.1206 3.88816L19.2766 3.52632ZM18.9666 2.13158L17.9462 1.07895L18.9537 0.0131579L20 1.07895L18.9666 2.13158ZM16.493 2.11842L15.4726 1.06579L16.4801 0L17.5264 1.06579L16.493 2.11842Z" fill="white"/>
                                                        <path d="M3.75004 27C3.08266 27 2.47771 26.8509 1.93519 26.5526C1.39267 26.2588 0.953495 25.8377 0.617651 25.2895C0.385144 24.9167 0.217222 24.5022 0.113885 24.0461C0.0148546 23.5943 -0.0195909 23.1096 0.0105489 22.5921C0.0406888 22.0746 0.135414 21.5329 0.294724 20.9671C0.454035 20.3969 0.675778 19.8092 0.959953 19.2039L2.0579 19.7368C1.81679 20.2456 1.62518 20.7346 1.48309 21.2039C1.34531 21.6689 1.2592 22.1096 1.22475 22.5263C1.19031 22.943 1.20753 23.3289 1.27642 23.6842C1.34531 24.0395 1.46802 24.3575 1.64456 24.6382C1.86845 24.9934 2.16124 25.2675 2.52292 25.4605C2.8846 25.6579 3.29364 25.7566 3.75004 25.7566H5.26779C5.76295 25.7566 6.16553 25.7018 6.47554 25.5921C6.78986 25.4868 7.03313 25.3377 7.20535 25.1447C7.38189 24.9518 7.50029 24.7171 7.56057 24.4408C7.62516 24.1689 7.65745 23.8662 7.65745 23.5329V18.9079H8.87811V23.5329C8.87811 24.6908 8.57672 25.557 7.97392 26.1316C7.37112 26.7105 6.46908 27 5.26779 27H3.75004ZM3.80171 18.3882L4.89966 17.2566L6.02344 18.4013L4.91257 19.5329L3.80171 18.3882Z" fill="white"/>
                                                        <path d="M13.5137 23.3553C13.1047 23.3509 12.7516 23.3202 12.4545 23.2632C12.1618 23.2018 11.912 23.1162 11.7054 23.0066C11.503 22.8925 11.3394 22.7522 11.2145 22.5855C11.0939 22.4145 10.9992 22.2171 10.9303 21.9934C10.8614 21.7654 10.8162 21.511 10.7947 21.2303C10.7732 20.9496 10.7624 20.6382 10.7624 20.2961V13.9671H11.9831V20.2961C11.9831 20.6776 11.9938 20.9868 12.0154 21.2237C12.0412 21.4605 12.1036 21.6447 12.2027 21.7763C12.306 21.9035 12.4589 21.9912 12.6612 22.0395C12.8679 22.0833 13.1521 22.1075 13.5137 22.1118V23.3553Z" fill="white"/>
                                                        <path d="M17.7914 22.4276C17.8216 22.4276 17.8625 22.4254 17.9141 22.4211C17.9701 22.4167 18.0282 22.3991 18.0885 22.3684C18.1531 22.3377 18.2155 22.2917 18.2758 22.2303C18.3404 22.1645 18.3964 22.0746 18.4437 21.9605C18.4954 21.8421 18.5363 21.693 18.5665 21.5132C18.6009 21.3289 18.6181 21.1053 18.6181 20.8421C18.6181 20.7939 18.6138 20.7171 18.6052 20.6118C18.5966 20.5066 18.5772 20.3904 18.5471 20.2632C18.5169 20.1316 18.4717 19.9978 18.4115 19.8618C18.3555 19.7259 18.278 19.6009 18.1789 19.4868C18.0799 19.3728 17.9594 19.2807 17.8173 19.2105C17.6752 19.136 17.503 19.0987 17.3006 19.0987C17.1111 19.0987 16.9497 19.1338 16.8162 19.2039C16.687 19.2697 16.5772 19.3618 16.4868 19.4803C16.3964 19.5987 16.321 19.739 16.2608 19.9013C16.2005 20.0592 16.1445 20.2325 16.0928 20.4211C16.0412 20.6053 15.9895 20.8004 15.9378 21.0066C15.8862 21.2083 15.8259 21.4101 15.757 21.6118C15.9809 21.7259 16.1876 21.8333 16.377 21.9342C16.5665 22.0351 16.743 22.1228 16.9066 22.1974C17.0702 22.2675 17.2231 22.3246 17.3652 22.3684C17.5116 22.4079 17.6537 22.4276 17.7914 22.4276ZM17.3006 17.8618C17.7225 17.8618 18.0885 17.9452 18.3985 18.1118C18.7129 18.2741 18.9733 18.4934 19.18 18.7697C19.3867 19.0461 19.5395 19.364 19.6386 19.7237C19.7419 20.0833 19.7936 20.4561 19.7936 20.8421C19.7936 21.2675 19.757 21.6338 19.6838 21.9408C19.6149 22.2478 19.5223 22.5066 19.4061 22.7171C19.2898 22.9232 19.1585 23.0899 19.0121 23.2171C18.87 23.3443 18.7236 23.4408 18.5729 23.5066C18.4265 23.5724 18.2844 23.6162 18.1467 23.6382C18.0089 23.6601 17.8905 23.6711 17.7914 23.6711C17.5805 23.6711 17.3781 23.6491 17.1843 23.6053C16.9906 23.5614 16.7925 23.4978 16.5901 23.4145C16.3878 23.3355 16.1746 23.2368 15.9508 23.1184C15.7312 23 15.4879 22.8662 15.2209 22.7171C14.8679 23.1425 14.4136 23.3553 13.8582 23.3553H13.1155V22.1118H13.8582C14.0218 22.1118 14.1553 22.0504 14.2586 21.9276C14.3663 21.8048 14.4588 21.6447 14.5363 21.4474C14.6138 21.25 14.6849 21.0241 14.7495 20.7697C14.814 20.5154 14.8872 20.2544 14.9691 19.9868C15.0552 19.7193 15.1564 19.4583 15.2726 19.2039C15.3889 18.9496 15.5353 18.7237 15.7118 18.5263C15.8926 18.3289 16.1101 18.1689 16.3641 18.0461C16.6224 17.9232 16.9346 17.8618 17.3006 17.8618Z" fill="white"/>
                                                    </svg>
    
                                                    <svg class="dark:inline-block hidden" width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.30177 11.2697C2.95193 11.2697 3.49876 11.2193 3.94224 11.1184C4.38573 11.0175 4.73664 10.8618 4.99498 10.6513C5.21888 10.4671 5.38249 10.2325 5.48583 9.94737C5.59347 9.66228 5.64729 9.30702 5.64729 8.88158H4.45892C4.15753 8.88158 3.85182 8.83553 3.54181 8.74342C3.2318 8.65132 2.94978 8.5 2.69575 8.28947C2.44602 8.07895 2.24149 7.80482 2.08218 7.4671C1.92287 7.125 1.84322 6.70833 1.84322 6.21711C1.84322 5.92763 1.8669 5.66667 1.91426 5.43421C1.96593 5.19737 2.02836 4.98684 2.10156 4.80263C2.17906 4.61842 2.26302 4.45833 2.35344 4.32237C2.44386 4.1864 2.53213 4.07018 2.61824 3.97368C2.85506 3.73246 3.12631 3.54605 3.43202 3.41447C3.73772 3.28289 4.06495 3.21711 4.41371 3.21711C4.71942 3.21711 5.00575 3.26535 5.2727 3.36184C5.53965 3.45833 5.77862 3.60307 5.9896 3.79605C6.57086 4.34868 6.8615 5.21491 6.8615 6.39474V7.63816H7.83028V8.88158H6.8615C6.8615 9.50439 6.77108 10.0395 6.59024 10.4868C6.41371 10.9386 6.13814 11.3158 5.76355 11.6184C5.38465 11.9211 4.91317 12.1447 4.34913 12.2895C3.78939 12.4386 3.10694 12.5132 2.30177 12.5132V11.2697ZM4.41371 4.46053C3.98745 4.46053 3.65591 4.61404 3.4191 4.92105C3.18229 5.22807 3.06388 5.66009 3.06388 6.21711C3.06388 6.7829 3.2318 7.17544 3.56765 7.39474C3.64946 7.44737 3.73342 7.49123 3.81953 7.52632C3.90564 7.55702 3.9896 7.58114 4.07141 7.59868C4.15322 7.61184 4.22642 7.62281 4.291 7.63158C4.35989 7.63597 4.41587 7.63816 4.45892 7.63816H5.64729V6.39474C5.64729 6.07456 5.62361 5.80482 5.57625 5.58553C5.52889 5.36184 5.46861 5.17763 5.39541 5.03289C5.32222 4.88816 5.23825 4.77851 5.14353 4.70395C5.05311 4.625 4.96269 4.56798 4.87227 4.53289C4.78185 4.49781 4.69574 4.47807 4.61393 4.47368C4.53212 4.46491 4.46538 4.46053 4.41371 4.46053Z" fill="black"/>
                                                        <path d="M10.2648 7.63816C10.3121 7.63816 10.3358 7.6557 10.3358 7.69079V8.81579C10.3358 8.85965 10.3121 8.88158 10.2648 8.88158H7.50051C7.45745 8.88158 7.43592 8.85965 7.43592 8.81579V7.69079C7.43592 7.6557 7.45745 7.63816 7.50051 7.63816H10.2648Z" fill="black"/>
                                                        <path d="M12.7154 7.63816C12.7628 7.63816 12.7865 7.6557 12.7865 7.69079V8.81579C12.7865 8.85965 12.7628 8.88158 12.7154 8.88158H9.95119C9.90813 8.88158 9.8866 8.85965 9.8866 8.81579V7.69079C9.8866 7.6557 9.90813 7.63816 9.95119 7.63816H12.7154Z" fill="black"/>
                                                        <path d="M15.1661 7.63816C15.2135 7.63816 15.2372 7.6557 15.2372 7.69079V8.81579C15.2372 8.85965 15.2135 8.88158 15.1661 8.88158H12.4019C12.3588 8.88158 12.3373 8.85965 12.3373 8.81579V7.69079C12.3373 7.6557 12.3588 7.63816 12.4019 7.63816H15.1661Z" fill="black"/>
                                                        <path d="M19.2766 3.52632C19.2853 3.55263 19.3025 3.62281 19.3283 3.73684C19.3541 3.85088 19.3821 3.99342 19.4123 4.16447C19.4467 4.33114 19.4833 4.51754 19.5221 4.72368C19.5608 4.92544 19.5953 5.13158 19.6254 5.34211C19.6555 5.54825 19.6814 5.74781 19.7029 5.94079C19.7244 6.13377 19.7352 6.30263 19.7352 6.44737C19.7352 6.86842 19.6663 7.23246 19.5285 7.53947C19.3951 7.8421 19.2185 8.0943 18.9989 8.29605C18.7836 8.49342 18.5404 8.64035 18.2691 8.73684C17.9979 8.83333 17.7244 8.88158 17.4489 8.88158H14.775V7.63816H17.4489C17.5135 7.63816 17.6039 7.62939 17.7201 7.61184C17.8407 7.58991 17.9591 7.53947 18.0754 7.46053C18.1959 7.38158 18.2993 7.26316 18.3854 7.10526C18.4758 6.94737 18.521 6.72807 18.521 6.44737C18.521 6.35088 18.5124 6.23026 18.4952 6.08553C18.4822 5.9364 18.4629 5.77851 18.437 5.61184C18.4155 5.44079 18.3897 5.26754 18.3595 5.09211C18.3294 4.91228 18.2993 4.74342 18.2691 4.58553C18.239 4.42763 18.211 4.28728 18.1852 4.16447C18.1593 4.04167 18.1378 3.94956 18.1206 3.88816L19.2766 3.52632ZM18.9666 2.13158L17.9462 1.07895L18.9537 0.0131579L20 1.07895L18.9666 2.13158ZM16.493 2.11842L15.4726 1.06579L16.4801 0L17.5264 1.06579L16.493 2.11842Z" fill="black"/>
                                                        <path d="M3.75004 27C3.08266 27 2.47771 26.8509 1.93519 26.5526C1.39267 26.2588 0.953495 25.8377 0.617651 25.2895C0.385144 24.9167 0.217222 24.5022 0.113885 24.0461C0.0148546 23.5943 -0.0195909 23.1096 0.0105489 22.5921C0.0406888 22.0746 0.135414 21.5329 0.294724 20.9671C0.454035 20.3969 0.675778 19.8092 0.959953 19.2039L2.0579 19.7368C1.81679 20.2456 1.62518 20.7346 1.48309 21.2039C1.34531 21.6689 1.2592 22.1096 1.22475 22.5263C1.19031 22.943 1.20753 23.3289 1.27642 23.6842C1.34531 24.0395 1.46802 24.3575 1.64456 24.6382C1.86845 24.9934 2.16124 25.2675 2.52292 25.4605C2.8846 25.6579 3.29364 25.7566 3.75004 25.7566H5.26779C5.76295 25.7566 6.16553 25.7018 6.47554 25.5921C6.78986 25.4868 7.03313 25.3377 7.20535 25.1447C7.38189 24.9518 7.50029 24.7171 7.56057 24.4408C7.62516 24.1689 7.65745 23.8662 7.65745 23.5329V18.9079H8.87811V23.5329C8.87811 24.6908 8.57672 25.557 7.97392 26.1316C7.37112 26.7105 6.46908 27 5.26779 27H3.75004ZM3.80171 18.3882L4.89966 17.2566L6.02344 18.4013L4.91257 19.5329L3.80171 18.3882Z" fill="black"/>
                                                        <path d="M13.5137 23.3553C13.1047 23.3509 12.7516 23.3202 12.4545 23.2632C12.1618 23.2018 11.912 23.1162 11.7054 23.0066C11.503 22.8925 11.3394 22.7522 11.2145 22.5855C11.0939 22.4145 10.9992 22.2171 10.9303 21.9934C10.8614 21.7654 10.8162 21.511 10.7947 21.2303C10.7732 20.9496 10.7624 20.6382 10.7624 20.2961V13.9671H11.9831V20.2961C11.9831 20.6776 11.9938 20.9868 12.0154 21.2237C12.0412 21.4605 12.1036 21.6447 12.2027 21.7763C12.306 21.9035 12.4589 21.9912 12.6612 22.0395C12.8679 22.0833 13.1521 22.1075 13.5137 22.1118V23.3553Z" fill="black"/>
                                                        <path d="M17.7914 22.4276C17.8216 22.4276 17.8625 22.4254 17.9141 22.4211C17.9701 22.4167 18.0282 22.3991 18.0885 22.3684C18.1531 22.3377 18.2155 22.2917 18.2758 22.2303C18.3404 22.1645 18.3964 22.0746 18.4437 21.9605C18.4954 21.8421 18.5363 21.693 18.5665 21.5132C18.6009 21.3289 18.6181 21.1053 18.6181 20.8421C18.6181 20.7939 18.6138 20.7171 18.6052 20.6118C18.5966 20.5066 18.5772 20.3904 18.5471 20.2632C18.5169 20.1316 18.4717 19.9978 18.4115 19.8618C18.3555 19.7259 18.278 19.6009 18.1789 19.4868C18.0799 19.3728 17.9594 19.2807 17.8173 19.2105C17.6752 19.136 17.503 19.0987 17.3006 19.0987C17.1111 19.0987 16.9497 19.1338 16.8162 19.2039C16.687 19.2697 16.5772 19.3618 16.4868 19.4803C16.3964 19.5987 16.321 19.739 16.2608 19.9013C16.2005 20.0592 16.1445 20.2325 16.0928 20.4211C16.0412 20.6053 15.9895 20.8004 15.9378 21.0066C15.8862 21.2083 15.8259 21.4101 15.757 21.6118C15.9809 21.7259 16.1876 21.8333 16.377 21.9342C16.5665 22.0351 16.743 22.1228 16.9066 22.1974C17.0702 22.2675 17.2231 22.3246 17.3652 22.3684C17.5116 22.4079 17.6537 22.4276 17.7914 22.4276ZM17.3006 17.8618C17.7225 17.8618 18.0885 17.9452 18.3985 18.1118C18.7129 18.2741 18.9733 18.4934 19.18 18.7697C19.3867 19.0461 19.5395 19.364 19.6386 19.7237C19.7419 20.0833 19.7936 20.4561 19.7936 20.8421C19.7936 21.2675 19.757 21.6338 19.6838 21.9408C19.6149 22.2478 19.5223 22.5066 19.4061 22.7171C19.2898 22.9232 19.1585 23.0899 19.0121 23.2171C18.87 23.3443 18.7236 23.4408 18.5729 23.5066C18.4265 23.5724 18.2844 23.6162 18.1467 23.6382C18.0089 23.6601 17.8905 23.6711 17.7914 23.6711C17.5805 23.6711 17.3781 23.6491 17.1843 23.6053C16.9906 23.5614 16.7925 23.4978 16.5901 23.4145C16.3878 23.3355 16.1746 23.2368 15.9508 23.1184C15.7312 23 15.4879 22.8662 15.2209 22.7171C14.8679 23.1425 14.4136 23.3553 13.8582 23.3553H13.1155V22.1118H13.8582C14.0218 22.1118 14.1553 22.0504 14.2586 21.9276C14.3663 21.8048 14.4588 21.6447 14.5363 21.4474C14.6138 21.25 14.6849 21.0241 14.7495 20.7697C14.814 20.5154 14.8872 20.2544 14.9691 19.9868C15.0552 19.7193 15.1564 19.4583 15.2726 19.2039C15.3889 18.9496 15.5353 18.7237 15.7118 18.5263C15.8926 18.3289 16.1101 18.1689 16.3641 18.0461C16.6224 17.9232 16.9346 17.8618 17.3006 17.8618Z" fill="black"/>
                                                    </svg>
                                                </span>
                                            </p>

                                            <!-- Takhfif Vizhe -->
                                            <div class="flex flex-nowrap items-center text-base">
                                                <p class="whitespace-nowrap font-normal ml-3 text-[#BEBEBE] line-through">{{ PN.convertEnToPe("230میلیارد") }}</p>
                                                <span class="bg-[#D7102F] text-white rounded-[19px] font-black px-2 h-5">{{ PN.convertEnToPe("40") }}٪</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <!-- پیش پرداخت -->
                                    <div v-if="data.pre_payment_status" class="flex flex-col items-center gap-[5px]">
                                        <p class="text-xs lg:text-[14px] text-[#BEBEBE]">پـیــش‌ پـرداخــت:</p>
                                        
                                        <div class="flex flex-nowrap items-center whitespace-nowrap gap-2">
                                            <p class="text-white dark:text-black lg:text-lg whitespace-nowrap font-bold">{{ PN.convertEnToPe(convertDatas.getNumber(data.pre_payment)) }}</p>
                                            <svg class="dark:hidden" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60427 7.94561C2.05741 7.94561 2.43853 7.91045 2.74762 7.84014C3.05672 7.76984 3.3013 7.66132 3.48135 7.51459C3.6374 7.3862 3.75144 7.22265 3.82346 7.02396C3.89848 6.82526 3.93599 6.57765 3.93599 6.28113H3.10774C2.89767 6.28113 2.6846 6.24904 2.46854 6.18484C2.25247 6.12065 2.05591 6.01518 1.87885 5.86845C1.7048 5.72172 1.56225 5.53067 1.45122 5.29529C1.34018 5.05685 1.28467 4.76645 1.28467 4.42408C1.28467 4.22232 1.30117 4.04044 1.33418 3.87842C1.37019 3.71335 1.41371 3.56662 1.46472 3.43823C1.51874 3.30984 1.57726 3.19827 1.64028 3.1035C1.7033 3.00874 1.76482 2.92773 1.82484 2.86048C1.98989 2.69235 2.17895 2.56243 2.39201 2.47073C2.60508 2.37902 2.83315 2.33317 3.07623 2.33317C3.28929 2.33317 3.48885 2.36679 3.67491 2.43404C3.86097 2.5013 4.02752 2.60217 4.17457 2.73668C4.57969 3.12184 4.78226 3.72558 4.78226 4.54788V5.41451H5.45747V6.28113H4.78226C4.78226 6.71521 4.71924 7.08815 4.5932 7.39995C4.47016 7.71481 4.2781 7.9777 4.01702 8.18863C3.75294 8.39955 3.42433 8.55546 3.03121 8.65633C2.64109 8.76027 2.16544 8.81223 1.60427 8.81223V7.94561ZM3.07623 3.19979C2.77913 3.19979 2.54806 3.30679 2.38301 3.52077C2.21796 3.73475 2.13543 4.03585 2.13543 4.42408C2.13543 4.81841 2.25247 5.09201 2.48654 5.24485C2.54356 5.28153 2.60208 5.3121 2.6621 5.33656C2.72211 5.35795 2.78063 5.37477 2.83765 5.387C2.89467 5.39617 2.94568 5.40381 2.9907 5.40992C3.03871 5.41298 3.07773 5.41451 3.10774 5.41451H3.93599V4.54788C3.93599 4.32473 3.91949 4.13673 3.88648 3.98388C3.85347 3.82798 3.81145 3.69959 3.76044 3.59872C3.70942 3.49784 3.6509 3.42142 3.58488 3.36945C3.52186 3.31443 3.45884 3.27469 3.39582 3.25023C3.33281 3.22578 3.27279 3.21202 3.21577 3.20896C3.15875 3.20285 3.11224 3.19979 3.07623 3.19979Z" fill="white"/>
                                                <path d="M7.15423 5.41451C7.18724 5.41451 7.20374 5.42673 7.20374 5.45119V6.23528C7.20374 6.26585 7.18724 6.28113 7.15423 6.28113H5.22763C5.19762 6.28113 5.18261 6.26585 5.18261 6.23528V5.45119C5.18261 5.42673 5.19762 5.41451 5.22763 5.41451H7.15423Z" fill="white"/>
                                                <path d="M8.86228 5.41451C8.89529 5.41451 8.91179 5.42673 8.91179 5.45119V6.23528C8.91179 6.26585 8.89529 6.28113 8.86228 6.28113H6.93568C6.90567 6.28113 6.89066 6.26585 6.89066 6.23528V5.45119C6.89066 5.42673 6.90567 5.41451 6.93568 5.41451H8.86228Z" fill="white"/>
                                                <path d="M10.5703 5.41451C10.6033 5.41451 10.6198 5.42673 10.6198 5.45119V6.23528C10.6198 6.26585 10.6033 6.28113 10.5703 6.28113H8.64373C8.61372 6.28113 8.59871 6.26585 8.59871 6.23528V5.45119C8.59871 5.42673 8.61372 5.41451 8.64373 5.41451H10.5703Z" fill="white"/>
                                                <path d="M13.4352 2.54868C13.4412 2.56702 13.4532 2.61593 13.4712 2.69541C13.4893 2.77489 13.5088 2.87424 13.5298 2.99345C13.5538 3.10962 13.5793 3.23953 13.6063 3.38321C13.6333 3.52382 13.6573 3.6675 13.6783 3.81423C13.6993 3.9579 13.7173 4.09699 13.7323 4.23149C13.7473 4.366 13.7548 4.48369 13.7548 4.58456C13.7548 4.87802 13.7068 5.13174 13.6108 5.34573C13.5178 5.55665 13.3947 5.73242 13.2417 5.87304C13.0916 6.0106 12.9221 6.113 12.733 6.18026C12.544 6.24751 12.3534 6.28113 12.1613 6.28113H10.2978V5.41451H12.1613C12.2064 5.41451 12.2694 5.40839 12.3504 5.39617C12.4344 5.38088 12.517 5.34573 12.598 5.2907C12.682 5.23568 12.754 5.15314 12.814 5.0431C12.8771 4.93305 12.9086 4.7802 12.9086 4.58456C12.9086 4.51731 12.9026 4.43325 12.8906 4.33237C12.8816 4.22844 12.8681 4.11839 12.8501 4.00223C12.8351 3.88301 12.817 3.76226 12.796 3.63999C12.775 3.51465 12.754 3.39696 12.733 3.28692C12.712 3.17687 12.6925 3.07905 12.6745 2.99345C12.6565 2.90786 12.6415 2.84367 12.6295 2.80087L13.4352 2.54868ZM13.2192 1.57659L12.5079 0.842936L13.2102 0.100113L13.9394 0.842936L13.2192 1.57659ZM11.4951 1.56742L10.7839 0.833765L11.4861 0.0909424L12.2154 0.833765L11.4951 1.56742Z" fill="white"/>
                                                <path d="M2.61366 18.9091C2.14852 18.9091 1.72689 18.8052 1.34877 18.5973C0.970652 18.3925 0.664557 18.099 0.430484 17.7169C0.268434 17.4571 0.151397 17.1682 0.0793747 16.8503C0.0103532 16.5355 -0.0136543 16.1977 0.00735229 15.837C0.0283588 15.4762 0.0943794 15.0987 0.205414 14.7044C0.316449 14.307 0.470997 13.8974 0.669058 13.4755L1.4343 13.8469C1.26624 14.2015 1.1327 14.5424 1.03367 14.8695C0.937642 15.1935 0.877623 15.5007 0.853616 15.7911C0.829608 16.0815 0.841612 16.3505 0.889627 16.5981C0.937642 16.8457 1.02317 17.0674 1.14621 17.263C1.30226 17.5106 1.50632 17.7017 1.7584 17.8362C2.01048 17.9737 2.29556 18.0425 2.61366 18.0425H3.67149C4.0166 18.0425 4.29719 18.0043 4.51325 17.9279C4.73232 17.8545 4.90188 17.7506 5.02191 17.6161C5.14495 17.4816 5.22748 17.318 5.26949 17.1254C5.3145 16.9359 5.33701 16.725 5.33701 16.4927V13.2692H6.18778V16.4927C6.18778 17.2997 5.97771 17.9034 5.55758 18.3039C5.13745 18.7074 4.50875 18.9091 3.67149 18.9091H2.61366ZM2.64967 12.9069L3.41491 12.1183L4.19816 12.9161L3.42392 13.7048L2.64967 12.9069Z" fill="white"/>
                                                <path d="M9.41867 16.3689C9.13358 16.3658 8.8875 16.3444 8.68044 16.3047C8.47638 16.2619 8.30232 16.2023 8.15828 16.1258C8.01724 16.0464 7.9032 15.9485 7.81617 15.8324C7.73215 15.7132 7.66613 15.5756 7.61811 15.4197C7.5701 15.2607 7.53859 15.0834 7.52358 14.8878C7.50858 14.6922 7.50107 14.4751 7.50107 14.2367V9.82559H8.35184V14.2367C8.35184 14.5026 8.35934 14.7181 8.37435 14.8832C8.39235 15.0483 8.43586 15.1767 8.50489 15.2684C8.57691 15.357 8.68344 15.4182 8.82449 15.4518C8.96853 15.4824 9.16659 15.4992 9.41867 15.5022V16.3689Z" fill="white"/>
                                                <path d="M12.4001 15.7223C12.4211 15.7223 12.4496 15.7208 12.4856 15.7177C12.5246 15.7147 12.5651 15.7025 12.6072 15.6811C12.6522 15.6597 12.6957 15.6276 12.7377 15.5848C12.7827 15.5389 12.8217 15.4762 12.8547 15.3968C12.8907 15.3142 12.9193 15.2103 12.9403 15.085C12.9643 14.9566 12.9763 14.8007 12.9763 14.6173C12.9763 14.5836 12.9733 14.5301 12.9673 14.4568C12.9613 14.3834 12.9478 14.3024 12.9268 14.2137C12.9057 14.122 12.8742 14.0288 12.8322 13.934C12.7932 13.8393 12.7392 13.7522 12.6702 13.6727C12.6012 13.5932 12.5171 13.529 12.4181 13.4801C12.3191 13.4281 12.199 13.4021 12.058 13.4021C11.9259 13.4021 11.8134 13.4266 11.7204 13.4755C11.6304 13.5214 11.5538 13.5856 11.4908 13.6681C11.4278 13.7506 11.3753 13.8485 11.3333 13.9616C11.2912 14.0716 11.2522 14.1924 11.2162 14.3238C11.1802 14.4522 11.1442 14.5882 11.1082 14.7319C11.0722 14.8725 11.0302 15.0131 10.9821 15.1537C11.1382 15.2332 11.2822 15.3081 11.4143 15.3784C11.5463 15.4487 11.6694 15.5099 11.7834 15.5618C11.8974 15.6107 12.004 15.6505 12.103 15.6811C12.205 15.7086 12.3041 15.7223 12.4001 15.7223ZM12.058 12.5401C12.3521 12.5401 12.6072 12.5982 12.8232 12.7143C13.0423 12.8275 13.2238 12.9803 13.3679 13.1729C13.5119 13.3655 13.6185 13.5871 13.6875 13.8378C13.7595 14.0884 13.7955 14.3483 13.7955 14.6173C13.7955 14.9138 13.77 15.169 13.719 15.383C13.671 15.597 13.6065 15.7773 13.5254 15.9241C13.4444 16.0677 13.3529 16.1839 13.2509 16.2726C13.1518 16.3612 13.0498 16.4285 12.9448 16.4743C12.8427 16.5202 12.7437 16.5507 12.6477 16.566C12.5516 16.5813 12.4691 16.5889 12.4001 16.5889C12.253 16.5889 12.112 16.5737 11.977 16.5431C11.8419 16.5125 11.7039 16.4682 11.5628 16.4101C11.4218 16.3551 11.2732 16.2863 11.1172 16.2038C10.9641 16.1212 10.7946 16.028 10.6085 15.9241C10.3625 16.2206 10.0459 16.3689 9.65874 16.3689H9.14107V15.5022H9.65874C9.77277 15.5022 9.8658 15.4594 9.93782 15.3738C10.0128 15.2882 10.0774 15.1767 10.1314 15.0391C10.1854 14.9015 10.2349 14.7441 10.2799 14.5668C10.3249 14.3895 10.376 14.2076 10.433 14.0212C10.493 13.8347 10.5635 13.6528 10.6445 13.4755C10.7256 13.2982 10.8276 13.1408 10.9506 13.0032C11.0767 12.8657 11.2282 12.7541 11.4053 12.6685C11.5853 12.5829 11.8029 12.5401 12.058 12.5401Z" fill="white"/>
                                            </svg>
                                            <svg class="dark:inline-block hidden" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.60427 7.94561C2.05741 7.94561 2.43853 7.91045 2.74762 7.84014C3.05672 7.76984 3.3013 7.66132 3.48135 7.51459C3.6374 7.3862 3.75144 7.22265 3.82346 7.02396C3.89848 6.82526 3.93599 6.57765 3.93599 6.28113H3.10774C2.89767 6.28113 2.6846 6.24904 2.46854 6.18484C2.25247 6.12065 2.05591 6.01518 1.87885 5.86845C1.7048 5.72172 1.56225 5.53067 1.45122 5.29529C1.34018 5.05685 1.28467 4.76645 1.28467 4.42408C1.28467 4.22232 1.30117 4.04044 1.33418 3.87842C1.37019 3.71335 1.41371 3.56662 1.46472 3.43823C1.51874 3.30984 1.57726 3.19827 1.64028 3.1035C1.7033 3.00874 1.76482 2.92773 1.82484 2.86048C1.98989 2.69235 2.17895 2.56243 2.39201 2.47073C2.60508 2.37902 2.83315 2.33317 3.07623 2.33317C3.28929 2.33317 3.48885 2.36679 3.67491 2.43404C3.86097 2.5013 4.02752 2.60217 4.17457 2.73668C4.57969 3.12184 4.78226 3.72558 4.78226 4.54788V5.41451H5.45747V6.28113H4.78226C4.78226 6.71521 4.71924 7.08815 4.5932 7.39995C4.47016 7.71481 4.2781 7.9777 4.01702 8.18863C3.75294 8.39955 3.42433 8.55546 3.03121 8.65633C2.64109 8.76027 2.16544 8.81223 1.60427 8.81223V7.94561ZM3.07623 3.19979C2.77913 3.19979 2.54806 3.30678 2.38301 3.52077C2.21796 3.73475 2.13543 4.03585 2.13543 4.42408C2.13543 4.81841 2.25247 5.09201 2.48654 5.24485C2.54356 5.28153 2.60208 5.3121 2.6621 5.33656C2.72212 5.35795 2.78063 5.37477 2.83765 5.387C2.89467 5.39617 2.94568 5.40381 2.9907 5.40992C3.03871 5.41298 3.07773 5.41451 3.10774 5.41451H3.93599V4.54788C3.93599 4.32473 3.91949 4.13673 3.88648 3.98388C3.85347 3.82798 3.81145 3.69959 3.76044 3.59872C3.70942 3.49784 3.6509 3.42142 3.58488 3.36945C3.52186 3.31443 3.45884 3.27469 3.39583 3.25023C3.33281 3.22578 3.27279 3.21202 3.21577 3.20896C3.15875 3.20285 3.11224 3.19979 3.07623 3.19979Z" fill="black"/>
                                                <path d="M7.15423 5.41451C7.18724 5.41451 7.20374 5.42673 7.20374 5.45119V6.23528C7.20374 6.26585 7.18724 6.28113 7.15423 6.28113H5.22763C5.19762 6.28113 5.18261 6.26585 5.18261 6.23528V5.45119C5.18261 5.42673 5.19762 5.41451 5.22763 5.41451H7.15423Z" fill="black"/>
                                                <path d="M8.86228 5.41451C8.89529 5.41451 8.91179 5.42673 8.91179 5.45119V6.23528C8.91179 6.26585 8.89529 6.28113 8.86228 6.28113H6.93568C6.90567 6.28113 6.89066 6.26585 6.89066 6.23528V5.45119C6.89066 5.42673 6.90567 5.41451 6.93568 5.41451H8.86228Z" fill="black"/>
                                                <path d="M10.5703 5.41451C10.6033 5.41451 10.6198 5.42673 10.6198 5.45119V6.23528C10.6198 6.26585 10.6033 6.28113 10.5703 6.28113H8.64373C8.61372 6.28113 8.59871 6.26585 8.59871 6.23528V5.45119C8.59871 5.42673 8.61372 5.41451 8.64373 5.41451H10.5703Z" fill="black"/>
                                                <path d="M13.4352 2.54868C13.4412 2.56702 13.4532 2.61593 13.4712 2.69541C13.4893 2.77489 13.5088 2.87424 13.5298 2.99345C13.5538 3.10962 13.5793 3.23953 13.6063 3.38321C13.6333 3.52382 13.6573 3.6675 13.6783 3.81423C13.6993 3.9579 13.7173 4.09699 13.7323 4.23149C13.7473 4.366 13.7548 4.48369 13.7548 4.58456C13.7548 4.87802 13.7068 5.13174 13.6108 5.34573C13.5178 5.55665 13.3947 5.73242 13.2417 5.87304C13.0916 6.0106 12.9221 6.11301 12.733 6.18026C12.544 6.24751 12.3534 6.28113 12.1613 6.28113H10.2978V5.41451H12.1613C12.2064 5.41451 12.2694 5.40839 12.3504 5.39617C12.4344 5.38088 12.517 5.34573 12.598 5.2907C12.682 5.23568 12.754 5.15314 12.814 5.0431C12.8771 4.93305 12.9086 4.7802 12.9086 4.58456C12.9086 4.51731 12.9026 4.43325 12.8906 4.33237C12.8816 4.22844 12.8681 4.11839 12.8501 4.00223C12.8351 3.88301 12.817 3.76226 12.796 3.63999C12.775 3.51465 12.754 3.39696 12.733 3.28692C12.712 3.17687 12.6925 3.07905 12.6745 2.99345C12.6565 2.90786 12.6415 2.84367 12.6295 2.80087L13.4352 2.54868ZM13.2192 1.57659L12.5079 0.842936L13.2102 0.100113L13.9394 0.842936L13.2192 1.57659ZM11.4951 1.56742L10.7839 0.833765L11.4861 0.0909424L12.2154 0.833765L11.4951 1.56742Z" fill="black"/>
                                                <path d="M2.61366 18.9091C2.14852 18.9091 1.72689 18.8052 1.34877 18.5973C0.970652 18.3925 0.664557 18.099 0.430484 17.7169C0.268434 17.4571 0.151397 17.1682 0.0793747 16.8503C0.0103532 16.5355 -0.0136543 16.1977 0.00735229 15.837C0.0283588 15.4762 0.0943794 15.0987 0.205414 14.7044C0.316449 14.307 0.470997 13.8974 0.669058 13.4755L1.4343 13.8469C1.26624 14.2015 1.1327 14.5424 1.03367 14.8695C0.937642 15.1935 0.877623 15.5007 0.853616 15.7911C0.829608 16.0815 0.841612 16.3505 0.889627 16.5981C0.937642 16.8457 1.02317 17.0674 1.14621 17.263C1.30226 17.5106 1.50632 17.7017 1.7584 17.8362C2.01048 17.9737 2.29556 18.0425 2.61366 18.0425H3.67149C4.0166 18.0425 4.29719 18.0043 4.51326 17.9279C4.73232 17.8545 4.90188 17.7506 5.02191 17.6161C5.14495 17.4816 5.22748 17.318 5.26949 17.1254C5.3145 16.9359 5.33701 16.725 5.33701 16.4927V13.2692H6.18778V16.4927C6.18778 17.2997 5.97771 17.9034 5.55758 18.3039C5.13745 18.7074 4.50875 18.9091 3.67149 18.9091H2.61366ZM2.64967 12.9069L3.41491 12.1183L4.19816 12.9161L3.42392 13.7048L2.64967 12.9069Z" fill="black"/>
                                                <path d="M9.41867 16.3689C9.13358 16.3658 8.88751 16.3444 8.68044 16.3047C8.47638 16.2619 8.30232 16.2023 8.15828 16.1258C8.01724 16.0464 7.9032 15.9485 7.81617 15.8324C7.73215 15.7132 7.66613 15.5756 7.61811 15.4197C7.5701 15.2607 7.53859 15.0834 7.52358 14.8878C7.50858 14.6922 7.50107 14.4751 7.50107 14.2367V9.82559H8.35184V14.2367C8.35184 14.5026 8.35934 14.7181 8.37435 14.8832C8.39235 15.0483 8.43587 15.1767 8.50489 15.2684C8.57691 15.357 8.68344 15.4182 8.82449 15.4518C8.96853 15.4824 9.16659 15.4992 9.41867 15.5022V16.3689Z" fill="black"/>
                                                <path d="M12.4001 15.7223C12.4211 15.7223 12.4496 15.7208 12.4856 15.7177C12.5246 15.7147 12.5651 15.7025 12.6072 15.6811C12.6522 15.6597 12.6957 15.6276 12.7377 15.5848C12.7827 15.5389 12.8217 15.4762 12.8547 15.3968C12.8907 15.3142 12.9193 15.2103 12.9403 15.085C12.9643 14.9566 12.9763 14.8007 12.9763 14.6173C12.9763 14.5836 12.9733 14.5301 12.9673 14.4568C12.9613 14.3834 12.9478 14.3024 12.9268 14.2137C12.9057 14.122 12.8742 14.0288 12.8322 13.934C12.7932 13.8393 12.7392 13.7522 12.6702 13.6727C12.6012 13.5932 12.5171 13.529 12.4181 13.4801C12.3191 13.4281 12.199 13.4021 12.058 13.4021C11.9259 13.4021 11.8134 13.4266 11.7204 13.4755C11.6304 13.5214 11.5538 13.5856 11.4908 13.6681C11.4278 13.7506 11.3753 13.8485 11.3333 13.9616C11.2912 14.0716 11.2522 14.1924 11.2162 14.3238C11.1802 14.4522 11.1442 14.5882 11.1082 14.7319C11.0722 14.8725 11.0302 15.0131 10.9821 15.1537C11.1382 15.2332 11.2822 15.3081 11.4143 15.3784C11.5463 15.4487 11.6694 15.5099 11.7834 15.5618C11.8974 15.6107 12.004 15.6505 12.103 15.6811C12.205 15.7086 12.3041 15.7223 12.4001 15.7223ZM12.058 12.5401C12.3521 12.5401 12.6072 12.5982 12.8232 12.7143C13.0423 12.8275 13.2238 12.9803 13.3679 13.1729C13.5119 13.3655 13.6185 13.5871 13.6875 13.8378C13.7595 14.0884 13.7955 14.3483 13.7955 14.6173C13.7955 14.9138 13.77 15.169 13.719 15.383C13.671 15.597 13.6065 15.7773 13.5254 15.9241C13.4444 16.0677 13.3529 16.1839 13.2509 16.2726C13.1518 16.3612 13.0498 16.4285 12.9448 16.4743C12.8427 16.5202 12.7437 16.5507 12.6477 16.566C12.5516 16.5813 12.4691 16.5889 12.4001 16.5889C12.253 16.5889 12.112 16.5737 11.977 16.5431C11.8419 16.5125 11.7039 16.4682 11.5628 16.4101C11.4218 16.3551 11.2732 16.2863 11.1172 16.2038C10.9641 16.1212 10.7946 16.028 10.6085 15.9241C10.3625 16.2206 10.0459 16.3689 9.65874 16.3689H9.14108V15.5022H9.65874C9.77277 15.5022 9.8658 15.4594 9.93782 15.3738C10.0128 15.2882 10.0774 15.1767 10.1314 15.0391C10.1854 14.9015 10.2349 14.7441 10.2799 14.5668C10.3249 14.3895 10.376 14.2076 10.433 14.0212C10.493 13.8347 10.5635 13.6528 10.6445 13.4755C10.7256 13.2982 10.8276 13.1408 10.9506 13.0032C11.0767 12.8657 11.2282 12.7541 11.4053 12.6685C11.5853 12.5829 11.8029 12.5401 12.058 12.5401Z" fill="black"/>
                                            </svg>
                                        </div>

                                        <p class="bg-[#519FFF] text-[12px] rounded-[16px] text-white px-2 whitespace-nowrap">شرایط اقساطی <span>{{ PN.convertEnToPe(12) }}</span> ماهه</p>
                                    </div>
                                </div>
        
                                <!-- Person Info -->
                                <div class="text-right -mb-[48px]">
                                    <NuxtLink :to="`/propertyCode?user=${data.user_id}`">
                                        <img class="relative z-10 rounded-full object-cover w-[43px] h-[43px]" :src="`${apiRootStore.api}/${data.userPicture}`" />
                                    </NuxtLink>
                                    <div style="background-color: var(--primaryColor-20)" class="flex justify-between items-center relative -top-[43px] right-5 bg-primary dark:bg-whiteSecondary w-11/12 md:w-1 h-[43px] group-hover:w-11/12 transition-all duration-300 rounded-tl-[21.5px] rounded-bl-[21.5px] overflow-hidden">
                                        <NuxtLink :to="`/propertyCode?user=${data.user_id}`" class="flex px-10 whitespace-nowrap flex-col">
                                            <span class="text-[15px] font-bold">{{ data.username }}</span> 
                                            <span class="text-xs">{{ data.user_activity }}</span>
                                        </NuxtLink>
        
                                        <div class="flex pl-3 gap-5">
                                            <NuxtLink to="/" @click="showMessageModal(data.id)">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.1401 0.959997L5.11012 3.96C-0.959883 5.99 -0.959883 9.3 5.11012 11.32L7.79012 12.21L8.68012 14.89C10.7001 20.96 14.0201 20.96 16.0401 14.89L19.0501 5.87C20.3901 1.82 18.1901 -0.390003 14.1401 0.959997ZM14.4601 6.34L10.6601 10.16C10.5101 10.31 10.3201 10.38 10.1301 10.38C9.94012 10.38 9.75012 10.31 9.60012 10.16C9.31012 9.87 9.31012 9.39 9.60012 9.1L13.4001 5.28C13.6901 4.99 14.1701 4.99 14.4601 5.28C14.7501 5.57 14.7501 6.05 14.4601 6.34Z" fill="#FFA80A"/>
                                                </svg>
                                            </NuxtLink>
        
                                            <NuxtLink to="/" @click="showCallModal(data.id, data.user_id, data.username, data.user_activity, data.user_number, data.userPicture)">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.62 10.75C17.19 10.75 16.85 10.4 16.85 9.98001C16.85 9.61001 16.48 8.84001 15.86 8.17001C15.25 7.52001 14.58 7.14001 14.02 7.14001C13.59 7.14001 13.25 6.79001 13.25 6.37001C13.25 5.95001 13.6 5.60001 14.02 5.60001C15.02 5.60001 16.07 6.14001 16.99 7.11001C17.85 8.02001 18.4 9.15001 18.4 9.97001C18.4 10.4 18.05 10.75 17.62 10.75Z" fill="#0DA049"/>
                                                    <path d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z" fill="#0DA049"/>
                                                    <path d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z" fill="#0DA049"/>
                                                    <path d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 8.09999 17.08 7.72999 16.77L11 13.5C11.28 13.71 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="#0DA049"/>
                                                </svg>
                                            </NuxtLink>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="flex lg:hidden gap-2 justify-center mt-5">
                <div>
                    <a style="background-color: var(--primaryColor);" class="swiperProposal-next hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7144 12L18.4286 7L12.7144 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 7H18.4286" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>
                </div>

                <div>
                    <a style="background-color: var(--primaryColor);" class="swiperProposal-prev hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300">
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
import PN from "persian-number";

// Api Root Adress Store 
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

// Convert diigits func Store
import { useConvertDatas } from "~/stores/ConvertDatas"
const convertDatas = useConvertDatas()

const dataRes = ref("")

// Modal Call And Message Store
import { useModalMessage } from "~/stores/SendMessage";
import { storeToRefs } from "pinia";
const modalMessageStore = useModalMessage();
let {isOpenModalMessage, idPost} = storeToRefs(modalMessageStore);

import { useModalCall } from "~/stores/CallModal"
const modalCallStore = useModalCall();
let {isOpenModalCall, idCase, userId, userName, userActivity, userNumber, userImg} = storeToRefs(modalCallStore);

const showCallModal = (idPost, idUser, user_name, activity, user_number, userPicture) => {
    idCase.value = idPost
    userId.value = idUser
    userName.value = user_name
    userActivity.value = activity
    userNumber.value = user_number
    userImg.value = userPicture
    setTimeout(() => {
        isOpenModalCall.value = true
    }, 5);
}
const showMessageModal = (idCase) => {
    idPost.value = idCase
    setTimeout(() => {
        isOpenModalMessage.value = true
    }, 5);
}
// Modal Call And Message Store


const response = await fetch(`${apiRootStore.api}/real/cases/?special=true`) 
const data = await response.json()
dataRes.value = data.results;

onMounted(async () => {
    const swiperProposal = await new Swiper(".swiperProposal", {
        direction: "horizontal",
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {slidesPerView: 2},
        },
        navigation: {
            nextEl: ".swiperProposal-next",
            prevEl: ".swiperProposal-prev",
        },
    });

    const swiperProposalImg1 = await new Swiper(".swiperProposalImg1", {
        direction: "horizontal",
    
        navigation: {
            nextEl: ".swiperProposalImg1-next",
            prevEl: ".swiperProposalImg1-prev",
        },
    
        breakpoints: {
            1024: {spaceBetween: 10},
        }
    });
});

watch(dataRes, () => {
    setTimeout(async () => {
        const swiperProposal2 = await new Swiper(".swiperProposal", {
            direction: "horizontal",
            // loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                768: {slidesPerView: 2},
            },
            navigation: {
                nextEl: ".swiperProposal-next",
                prevEl: ".swiperProposal-prev",
            },
        });
    }, 500);
});
</script>