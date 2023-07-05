<template>
    <!-- Header Section -->
    <div dir="ltr">
        <header :style="`background: url('${homePagePic}'); background-size: cover;background-position: center`"
            class="w-full h-5/6 bg-gray-400 pt-[86px] relative bg-cover -top-[86px] bg-no-repeat">
        
            <div class="backdrop-brightness-[.38]">
                <div class="container m-auto mt-10 sm:mt-0 p-6 lg:p-0 lg:pb-5 lg:pt-32 dark:text-white">
                    <div class="flex flex-col text-center items-center gap-5 p-5 lg:p-24 sm:pt-32 lg:px-12 lg:items-end lg:py-28">
                        <h1 class="text-2xl font-extrabold lg:text-6xl">{{ homePage_headline }}</h1>
                        <h2 class="mt-5 text-xs font-bold lg:text-lg">{{ homePage_header }}</h2>
                        <p class="text-[11px] lg:text-sm lg:max-w-[530px] lg:text-right">{{ homePage_headText }}</p>
                        <form @submit.prevent="searchEstateCode" class="-bottom-6 w-4/5 text-center h-12 relative lg:w-1/2 lg:h-16">
                            <input id="searchInput" v-model="estateCode" class="placeholder:text-sm lg:placeholder:text-base w-full h-full rounded-3xl border-0 outline-none bg-primary/80 dark:bg-[#f0f3f7]/30 dark:backdrop-blur-sm text-right p-4 placeholder:text-white dark:placeholder:text-white placeholder:font-bold lg:rounded-[33px] inputNumber" type="text" placeholder="جستجوی کد ملکی">
                            <button type="submit" style="background-color: var(--primaryColor);" class="absolute bottom-1 left-1 hover:opacity-80 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition duration-300 lg:w-[55px] lg:h-[55px]">
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
                            </button>
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
        <HomePersons class="hidden"/>

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

const searchEstateCode = () => {
    if(estateCode.value) {
        navigateTo(`/propertyCode?estate_code=${estateCode.value}`)
    }
}

onMounted(async () => {
    // Check user Login
    authStore.checkLogin()
});

useHead({
    titleTemplate: '%s',
    links:[
        { rel: 'canonical', href: '/' }
    ],
    script: [
        {
            type: 'application/ld+json', innerHTML: `
                {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "hyponet",
                "alternateName": "هايپونت",
                "description": "هايپونت - آژانس ديجيتال مارکتينگ، طراحي وبسايت، برندينگ - کسب و کارتان را آنلاين کنيد",
                "slogan": "کسب و کارتان را برند کنيد",
                "logo": "https://hyponet.ir/logo/hyponet-logo.png",
                "address": {
                "@type": "PostalAddress",
                "addressCountry": "Iran",
                "addressLocality": "Amol, Mazandaran province",
                "addressRegion": "FA",
                "postalCode": "1517863332",
                "streetAddress": "Mazandaran province, Amol, Shomal University IEC"
                },
                "email": "info@hyponet.ir",
                "telephone": "+9811-4444-0710",
                "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+9811-4444-0710",
                "contactType": "customer service",
                "areaServed": "IR",
                "availableLanguage": "Persian"
                },
                "url": "https://www.hyponet.ir/",
                "sameAs": [
                "https://twitter.com/hyponet",
                "https://www.facebook.com/hyponet",
                "https://linkedin.com/company/hyponet",
                "https://instagram.com/hyponet.ir/",
                "https://www.youtube.com/user/hyponet",
                "https://www.pinterest.com/hyponetIR/",
                "https://www.dribbble.com/hyponet/"
                ],
                "foundingDate": "2019-09-1"
                }
            `
        }
    ]
});
</script>