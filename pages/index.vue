<template>
    <!-- Header Section -->
    <div dir="ltr">
        <nav id="navMain" class="hidden sm:block fixed top-0 left-0 right-0 w-full m-auto transition-all duration-300 navMain p-2 z-30 bg-primary dark:bg-white shadow-[0_0_17px_rgba(0,0,0,0.16)]">
            <ul class="flex justify-center items-center gap-14">
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/about">درباره ما</NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/contact">ارتباط با ما</NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink class="block h-[67px]" to="/">
                        <div v-if="logo_dark" class="h-full">
                            <img class="inline-block dark:hidden w-full h-full object-cover" :src="logo_dark">
                            <img class="dark:inline-block hidden w-full h-full object-cover" :src="logo_white">
                        </div>

                        <div v-if="!logo_dark" class="h-full w-[67px]"></div>
                    </NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/weblog">وبلاگ</NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink style="color: var(--primaryColor);" class="hover:opacity-80 transition-all duration-300" to="/">خانه</NuxtLink>
                </li>
            </ul>

            <button v-if="authStore.isLogin" @click="authStore.exitUser" style="background-color: rgba(225, 10, 50, 1); padding: 8px" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2 absolute left-5 top-5">
                <span>
                    <svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Exit_1_"> <path d="M52.4501991,28.7678509l-5-4.9990005c-0.3768997-0.3770008-0.9902-0.3770008-1.3671989,0 c-0.3778992,0.3778992-0.3778992,0.9902,0,1.3671989l3.3171997,3.3164005H35.2666016v2h14.1320992l-3.3157005,3.3163986 c-0.3778992,0.377903-0.3778992,0.9902,0,1.3672028c0.1884995,0.1884995,0.4365997,0.2831993,0.6835976,0.2831993 c0.2471008,0,0.4951019-0.0946999,0.6836014-0.2831993l5-5.0010014c0.1817017-0.1816006,0.2831993-0.4277,0.2831993-0.6835995 C52.7333984,29.1946507,52.6319008,28.9495506,52.4501991,28.7678509z"></path> <path d="M40.2666016,39.4524498c-0.5527,0-1,0.4473-1,1v10.7900009c0,1.0429993-0.8310013,2.2099991-1.9433022,2.2099991 h-6.0566998V11.2394505V9.8677502L30.0191994,9.33395L14.0765009,2.56445l-0.2606955-0.112h23.507494 c1.2168007,0,1.9433022,0.9921999,1.9433022,1.9511998v15.0487995c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V4.4036498 c0-2.1786997-1.7685013-3.9511998-3.9433022-3.9511998H12.2666006c-0.5215998,0-0.9358997,0.4029-0.9822998,0.9124 L11.2666006,1.35725V1.45245V55.03405l17.1855011,7.3064003l2.8144989,1.2070999v-3.0951004v-5h6.0566998 c2.3584023,0,3.9433022-2.1767998,3.9433022-4.2099991V40.4524498 C41.2666016,39.8997498,40.8194008,39.4524498,40.2666016,39.4524498z M29.2665997,11.2394505v49.2129974l-15.999999-6.7766991 V4.4524498l15.9906988,6.7728004l0.0093002,0.0038996V11.2394505z"></path> </g> </g></svg>
                </span>
                خروج
            </button>
        </nav>

        <header :style="`background: url('${homePagePic}'); background-size: cover;background-position: center`"
            class="w-full h-5/6 bg-gray-400 pt-[86px] relative bg-cover -top-[86px] bg-no-repeat">
        
            <div class="backdrop-brightness-[.38]">
                <div class="container m-auto mt-10 sm:mt-0 p-6 lg:p-0 lg:pb-5 lg:pt-32 dark:text-white">
                    <div class="flex flex-col text-center items-center gap-5 p-5 lg:p-24 sm:pt-32 lg:px-12 lg:items-end lg:py-28">
                        <h1 class="text-2xl font-extrabold lg:text-6xl">{{ homePage_headline }}</h1>
                        <h2 class="mt-5 text-xs font-bold lg:text-lg">{{ homePage_header }}</h2>
                        <p class="text-[11px] lg:text-sm lg:max-w-[530px] lg:text-right">{{ homePage_headText }}</p>
                        <form class="-bottom-6 w-4/5 text-center h-12 relative lg:w-1/2 lg:h-16">
                            <input id="searchInput" v-model="estateCode" class="placeholder:text-sm lg:placeholder:text-base w-full h-full rounded-3xl border-0 outline-none bg-primary/80 dark:bg-[#f0f3f7]/30 dark:backdrop-blur-sm text-right p-4 placeholder:text-white dark:placeholder:text-white placeholder:font-bold lg:rounded-[33px] inputNumber" type="text" placeholder="جستجوی کد ملکی">
                            <NuxtLink :to="`propertyCode?estate_code=${estateCode}`" style="background-color: var(--primaryColor);" class="absolute bottom-1 left-1 hover:opacity-80 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition duration-300 lg:w-[55px] lg:h-[55px]">
                                <svg class="w-6 h-6 lg:w-8 lg:h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_422_694)">
                                        <path d="M18 5H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M18 8H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M25 11.5C25 16.75 20.75 21 15.5 21C10.25 21 6 16.75 6 11.5C6 6.25 10.25 2 15.5 2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M26 22L24 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_422_694" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                            <feOffset dy="4"></feOffset>
                                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_422_694"></feBlend>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_422_694" result="shape"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </NuxtLink>
                        </form>
                        <div class="h-5">
                            <p id="searchErr" class="text-red-500 h-0 overflow-hidden transition-all duration-300">لطفا مقدار صحیح وارد کنید :)</p>
                        </div>
                    </div>
                </div> 
            </div>
        </header>
    </div>

    <main>
        <!-- Category section -->
        <HomeCategory />
        
        <!-- Trust Section -->
        <HomeTrust />

        <!-- Newst Section -->
        <HomeNewst />

        <!-- Proposal Section -->
        <HomeProposal />

        <!-- Favourite Section -->
        <HomeFavourite />

        <!-- Weblog Section -->
        <HomeWeblog />

        <!-- Persons Section -->
        <HomePersons />

        <!-- Call Modal -->
        <CallModal />

        <!-- Send Message Modal -->
        <SendMessageModal />
    </main>
</template>

<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { useAuth } from "~/stores/Auth"
const authStore = useAuth();

const logo_dark = ref("");
const logo_white = ref("");
const homePage_headline = ref("");
const homePage_headText = ref("");
const homePagePic = ref("");
const homePage_header = ref("");
const estateCode = ref("");

const response = await fetch(`${apiRootStore.api}/real/HomePage`);
const data = await response.json();
logo_dark.value = data[0].logo_dark;
logo_white.value = data[0].logo_white;
homePage_headline.value = data[0].homePage_headline;
homePage_headText.value = data[0].homePage_headText;
homePagePic.value = data[0].homePage_pic;
homePage_header.value = data[0].homePage_header;

onMounted(async () => {
    // Check user Login
    authStore.checkLogin()
    
    document.addEventListener('scroll', function () {
        const navMenu = document.getElementById('navMain')
        
        if(document.documentElement.scrollTop > 100) {
            if(navMenu.classList.contains('navMain')) {
                navMenu.classList.remove('navMain')
            }
        } else {
            if(!navMenu.classList.contains('navMain')) {
                navMenu.classList.add('navMain')
            } 
        }
    })
});

useHead({
    titleTemplate: '%s'
});
</script>