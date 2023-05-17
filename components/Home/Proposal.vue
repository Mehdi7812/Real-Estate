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
                                    <div class="flex gap-2 items-center">
                                        <span v-if="data.Transaction == 'P'" class="bg-[#55499B] py-[6px] px-2 rounded-md text-[10px]">پیش فروش</span> 
                                        <div v-if="data.special" class="bg-[#FFA80A] p-1 rounded-md flex items-center relative w-20 md:w-6 overflow-hidden group-hover:w-20 transition-all duration-300">
                                            <span><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8518 16.0147H5.0974C4.82047 16.0147 4.59082 15.7672 4.59082 15.4687C4.59082 15.1703 4.82047 14.9228 5.0974 14.9228H11.8518C12.1287 14.9228 12.3584 15.1703 12.3584 15.4687C12.3584 15.7672 12.1287 16.0147 11.8518 16.0147Z" fill="white"/><path d="M14.1144 4.01824L11.4126 6.10015C11.0546 6.37677 10.5413 6.20934 10.386 5.7653L9.10939 2.09647C8.89325 1.46316 8.06246 1.46316 7.84632 2.09647L6.56298 5.75802C6.40763 6.20934 5.90105 6.37677 5.54307 6.09287L2.84132 4.01096C2.30097 3.60331 1.585 4.17838 1.8079 4.85537L4.61772 13.3359C4.71228 13.6271 4.96895 13.8163 5.25263 13.8163H11.6896C11.9732 13.8163 12.2299 13.6198 12.3245 13.3359L15.1343 4.85537C15.3639 4.17838 14.648 3.60331 14.1144 4.01824ZM10.1631 10.7371H6.78588C6.50895 10.7371 6.2793 10.4896 6.2793 10.1912C6.2793 9.89272 6.50895 9.64522 6.78588 9.64522H10.1631C10.44 9.64522 10.6696 9.89272 10.6696 10.1912C10.6696 10.4896 10.44 10.7371 10.1631 10.7371Z" fill="white"/></svg>
                                                </span>
                                            <span class="text-[10px] absolute right-7 whitespace-nowrap">فروش ویژه</span>
                                        </div>
                                    </div>
        
                                    <div>
                                        <div class="bg-primary flex gap-2 rounded-md p-1 items-center">
                                            <span class="text-[10px] relative top-[2px]">{{ estateTypeRender(data.estate_type) }}</span>
        
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
                                        <p class="bg-primary text-[10px] py-2 px-3 rounded-md md:opacity-0 group-hover:opacity-100 transition-all duration-300">{{ dateCalc(data.placed_at) }}</p>
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
                                    <span class="relative text-[15px] font-normal text-[#f6e9e9] whitespace-nowrap dark:text-black after:absolute after:w-1 after:h-1 after:rounded-full after:bg-[#f6e9e9] dark:after:bg-black after:-right-4 after:top-2">{{ estateTypeRender(data.estate_type) }}</span>
                                </div>
        
                                <div class="flex items-center gap-3 justify-between">
                                    <div class="flex items-center">
                                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M25.7331 10.56V17.4267C25.7331 21.5333 23.3865 23.2933 19.8665 23.2933H8.14644C7.54644 23.2933 6.97311 23.24 6.43978 23.12C6.10645 23.0667 5.78646 22.9734 5.49312 22.8667C3.49312 22.12 2.27979 20.3867 2.27979 17.4267V10.56C2.27979 6.4533 4.62644 4.69334 8.14644 4.69334H19.8665C22.8531 4.69334 24.9998 5.96 25.5731 8.85334C25.6665 9.38667 25.7331 9.9333 25.7331 10.56Z" fill="#237E48"/>
                                            <path d="M29.7333 14.56V21.4267C29.7333 25.5334 27.3866 27.2934 23.8666 27.2934H12.1466C11.1599 27.2934 10.2666 27.1601 9.49329 26.8668C7.90662 26.2801 6.82661 25.0668 6.43994 23.1201C6.97327 23.2401 7.54661 23.2934 8.14661 23.2934H19.8666C23.3866 23.2934 25.7333 21.5334 25.7333 17.4267V10.56C25.7333 9.93337 25.68 9.37341 25.5733 8.85341C28.1066 9.38674 29.7333 11.1734 29.7333 14.56Z" fill="#237E48"/>
                                            <path d="M14 17.52C15.944 17.52 17.52 15.944 17.52 13.9999C17.52 12.0559 15.944 10.4799 14 10.4799C12.056 10.4799 10.48 12.0559 10.48 13.9999C10.48 15.944 12.056 17.52 14 17.52Z" fill="#237E48"/>
                                            <path d="M6.37354 11C5.82687 11 5.37354 11.4533 5.37354 12V16C5.37354 16.5467 5.82687 17 6.37354 17C6.9202 17 7.37354 16.5467 7.37354 16V12C7.37354 11.4533 6.93354 11 6.37354 11Z" fill="#237E48"/>
                                            <path d="M21.6133 11C21.0666 11 20.6133 11.4533 20.6133 12V16C20.6133 16.5467 21.0666 17 21.6133 17C22.1599 17 22.6133 16.5467 22.6133 16V12C22.6133 11.4533 22.1733 11 21.6133 11Z" fill="#237E48"/>
                                        </svg>
                                        <p class="text-sm flex flex-col"><span v-html="getNumber(data.unit_price)" class="text-3xl font-semibold mx-3 whitespace-nowrap"> </span> تومان</p>
                                    </div>
                                
                                    <!-- پیش پرداخت -->
                                    <p v-if="data.pre_payment_status" class="flex items-center justify-center flex-wrap gap-1 text-xs lg:text-base text-graytext whitespace-nowrap">پیش پرداخت : <span><span v-html="getNumber(data.pre_payment)" class="text-white dark:text-black lg:text-lg font-bold"> </span> تومان</span></p>
                                </div>
        
                                <div class="text-right -mb-[48px]">
                                    <NuxtLink :to="`propertyCode?user=${data.user_id}`">
                                        <img class="relative z-10 rounded-full object-cover w-[43px] h-[43px]" :src="`${apiRootStore.api}/${data.userPicture}`" />
                                    </NuxtLink>
                                    <div style="background-color: var(--primaryColor-20)" class="flex justify-between items-center relative -top-[43px] right-5 bg-primary dark:bg-whiteSecondary w-11/12 md:w-1 h-[43px] group-hover:w-11/12 transition-all duration-300 rounded-tl-[21.5px] rounded-bl-[21.5px] overflow-hidden">
                                        <NuxtLink :to="`propertyCode?user=${data.user_id}`" class="flex px-10 whitespace-nowrap flex-col">
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
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

const dataRes = ref("")
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

const estateTypeRender = (type) => {
    if(type== 'G') {
        return 'باغ'
    } else if (type == "A") {
        return 'آپارتمان'
    } else if (type == "H") {
        return 'ویلا باغ'
    } else if (type == "L") {
        return 'زمین'
    } else if (type == "B") {
        return 'مغازه و واحد تجاری'
    } else if (type == "V") {
        return 'خانه ویلایی'
    }
}

const getNumber = (n) => {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = ' ';

        /* Remove spaces and commas */
        string = string.replace(/[, ]/g,"");

        /* Is number zero? */
        if( parseInt( string ) === 0 ) {
            return 'صفر';
        }
        
        /* Array of units as words */
        units = [ '', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲', '۱۳', '۱۴', '۱۵', '۱۶', '۱۷', '۱۸', '۱۹' ];
        
        /* Array of tens as words */
        tens = [ '', '', '۲۰', '۳۰', '۴۰', '۵۰', '۶۰', '۷۰', '۸۰', '۹۰' ];
        
        /* Array of scales as words */
        scales = [ '', 'هزار', 'میلیون', 'میلیارد', 'تریلیارد', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
        
        /* Split user argument into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while( start > 0 ) {
            end = start;
            chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
        }
        
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if( chunksLen > scales.length ) {
            return '';
        }
        
        /* Stringify each integer in each chunk */
        words = [];
        for( i = 0; i < chunksLen; i++ ) {
            
            chunk = parseInt( chunks[i] );
            
            if( chunk ) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split( '' ).reverse().map( parseFloat );
            
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if( ints[1] === 1 ) {
                    ints[0] += 10;
                }
                
                /* Add scale word if chunk is not zero and array item exists */
                if( ( word = scales[i] ) ) {
                    words.push( word );
                }
                
                /* Add unit word if array item exists */
                if( ( word = units[ ints[0] ] ) ) {
                    words.push( word );
                }
                
                /* Add tens word if array item exists */
                if( ( word = tens[ ints[1] ] ) ) {
                    words.push( word );
                }
                
                /* Add 'and' string after units or tens integer if: */
                if( ints[0] || ints[1] ) {
                    
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if( ints[2] || ! i && chunksLen ) {
                        words.push( and );
                    }
                
                }
                
                if( ( word = units[ ints[2] ] ) ) {
                    if(word == '۱') {
                        words.push('۱۰۰')
                    } else if (word == '۲'){
                        words.push('۲۰۰')
                    } else if (word == '۳'){
                        words.push('۳۰۰')
                    } else if (word == '۴'){
                        words.push('۴۰۰')
                    } else if (word == '۵'){
                        words.push('۵۰۰')
                    } else if (word == '۶'){
                        words.push('۶۰۰')
                    } else if (word == '۷'){
                        words.push('۷۰۰')
                    } else if (word == '۸'){
                        words.push('۸۰۰')
                    } else if (word == '۹'){
                        words.push('۹۰۰')
                    }
                }
            }
        }

        words = words.reverse()

        if(words.slice(2, 3)[0]) {
            if(words.slice(2, 3)[0] == '۱۰۰') {
                words[2] = '۱'
            } else if (words.slice(2, 3)[0] == '۲۰۰'){
                words[2] = '۲'
            } else if (words.slice(2, 3)[0] == '۳۰۰'){
                words[2] = '۳'
            } else if (words.slice(2, 3)[0] == '۴۰۰'){
                words[2] = '۴'
            } else if (words.slice(2, 3)[0] == '۵۰۰'){
                words[2] = '۵'
            } else if (words.slice(2, 3)[0] == '۶۰۰'){
                words[2] = '۶'
            } else if (words.slice(2, 3)[0] == '۷۰۰'){
                words[2] = '۷'
            } else if (words.slice(2, 3)[0] == '۸۰۰'){
                words[2] = '۸'
            } else if (words.slice(2, 3)[0] == '۹۰۰'){
                words[2] = '۹'
            }
        }

        let priceStrong = ""
        let priceLite = ""

        if(words.slice(2, 3)[0]) {
            priceStrong = `<span>${words.slice(0, 1)},${words.slice(2, 3)} ${words.slice(1, 2)}</span>`
        } else {
            priceStrong = `<span>${words.slice(0, 1)}${words.slice(2, 3)} ${words.slice(1, 2)}</span>`
        }

        if(words.slice(3).length == 0) {
            priceLite = ''
        } else if(words.slice(3) == 'میلیون') {
            priceLite = ''
        } else {
            priceLite = ` <span class='text-xl' style='margin-right: 10px'>${words.slice(3).join(' ')}</span>`
        }

        words = priceStrong + priceLite
    
        return words;
}

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
    const swiperProposal1 = new Swiper(".swiperProposal", {
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

    const response = await fetch(`${apiRootStore.api}/real/cases/?special=true`) 
    const data = await response.json()
    dataRes.value = data.results

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
</script>