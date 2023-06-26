<template>
    <!-- Nav Header -->
    <div>
        <nav id="navMenu" class="grid grid-cols-3 items-center justify-between cursor-pointer bg-primary dark:bg-white p-2 border-black fixed top-0 left-0 right-0 z-30 md:hidden">
            <span id="hamburger">
                <svg class="dark:inline-block hidden col-span-1 justify-self-start" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.33337H28H4Z" fill="#000"></path>
                    <path d="M4 9.33337H28" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M4 16H28H4Z" fill="#000"></path>
                    <path d="M4 16H28" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M4 22.6666H28H4Z" fill="#000"></path>
                    <path d="M4 22.6666H28" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
                </svg>
                <svg class="dark:hidden col-span-1 justify-self-start" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9.33337H28H4Z" fill="#363333"></path>
                    <path d="M4 9.33337H28" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M4 16H28H4Z" fill="#363333"></path>
                    <path d="M4 16H28" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M4 22.6666H28H4Z" fill="#363333"></path>
                    <path d="M4 22.6666H28" stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                </svg>
            </span>
    
            <NuxtLink to="/" class="flex justify-center w-full m-auto" >
                <img class="inline-block dark:hidden h-[50px] object-cover" :src="logo_dark" :alt="title" />
                <img class="dark:inline-block hidden h-[50px] object-cover" :src="logo_white" :alt="title" />
            </NuxtLink>
    
            <a style="color: var(--primaryColor)" @click="toggleModal" id="resSearchMelkBtn" class="text-primaryOrange dark:text-bluePrimary hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/80 flex items-center justify-end gap-2">کدملکی
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style="stroke: var(--primaryColor)" d="M9.3335 3.33337H13.3335" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M9.3335 5.33337H11.3335" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M14.0002 7.66671C14.0002 11.1667 11.1668 14 7.66683 14C4.16683 14 1.3335 11.1667 1.3335 7.66671C1.3335 4.16671 4.16683 1.33337 7.66683 1.33337" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M14.6668 14.6667L13.3335 13.3334" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </nav>
    
        <div ref="menuMobileElem" dir="ltr" id="menu_mobile" class="fixed right-0 top-0 bottom-0 bg-secondary dark:bg-whiteSecondary w-0 z-50 text-right overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-between">
            <div class="grid grid-cols-2 items-center p-4">
                <span id="exitBtn" class="mr-auto">
                    <svg class="cursor-pointer dark:hidden" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_3382)">
                        <path d="M17.3214 15.5L22.8756 9.95879C23.1188 9.71556 23.2554 9.38568 23.2554 9.0417C23.2554 8.69773 23.1188 8.36785 22.8756 8.12462C22.6324 7.88139 22.3025 7.74475 21.9585 7.74475C21.6145 7.74475 21.2846 7.88139 21.0414 8.12462L15.5002 13.6788L9.95891 8.12462C9.71569 7.88139 9.3858 7.74475 9.04183 7.74475C8.69786 7.74475 8.36797 7.88139 8.12475 8.12462C7.88152 8.36785 7.74488 8.69773 7.74488 9.0417C7.74488 9.38568 7.88152 9.71556 8.12475 9.95879L13.6789 15.5L8.12475 21.0413C8.00368 21.1614 7.90759 21.3042 7.84201 21.4616C7.77644 21.619 7.74268 21.7879 7.74268 21.9584C7.74268 22.1289 7.77644 22.2977 7.84201 22.4551C7.90759 22.6125 8.00368 22.7554 8.12475 22.8755C8.24483 22.9965 8.38769 23.0926 8.54509 23.1582C8.70249 23.2238 8.87132 23.2575 9.04183 23.2575C9.21235 23.2575 9.38118 23.2238 9.53858 23.1582C9.69598 23.0926 9.83884 22.9965 9.95891 22.8755L15.5002 17.3213L21.0414 22.8755C21.1615 22.9965 21.3044 23.0926 21.4618 23.1582C21.6192 23.2238 21.788 23.2575 21.9585 23.2575C22.129 23.2575 22.2978 23.2238 22.4552 23.1582C22.6126 23.0926 22.7555 22.9965 22.8756 22.8755C22.9966 22.7554 23.0927 22.6125 23.1583 22.4551C23.2239 22.2977 23.2577 22.1289 23.2577 21.9584C23.2577 21.7879 23.2239 21.619 23.1583 21.4616C23.0927 21.3042 22.9966 21.1614 22.8756 21.0413L17.3214 15.5Z" fill="white"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_3382">
                        <rect width="31" height="31" fill="white"></rect>
                        </clipPath>
                        </defs>
                    </svg>
                    <svg class="cursor-pointer dark:inline-block hidden" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_411_3382)">
                        <path d="M17.3214 15.5L22.8756 9.95879C23.1188 9.71556 23.2554 9.38568 23.2554 9.0417C23.2554 8.69773 23.1188 8.36785 22.8756 8.12462C22.6324 7.88139 22.3025 7.74475 21.9585 7.74475C21.6145 7.74475 21.2846 7.88139 21.0414 8.12462L15.5002 13.6788L9.95891 8.12462C9.71569 7.88139 9.3858 7.74475 9.04183 7.74475C8.69786 7.74475 8.36797 7.88139 8.12475 8.12462C7.88152 8.36785 7.74488 8.69773 7.74488 9.0417C7.74488 9.38568 7.88152 9.71556 8.12475 9.95879L13.6789 15.5L8.12475 21.0413C8.00368 21.1614 7.90759 21.3042 7.84201 21.4616C7.77644 21.619 7.74268 21.7879 7.74268 21.9584C7.74268 22.1289 7.77644 22.2977 7.84201 22.4551C7.90759 22.6125 8.00368 22.7554 8.12475 22.8755C8.24483 22.9965 8.38769 23.0926 8.54509 23.1582C8.70249 23.2238 8.87132 23.2575 9.04183 23.2575C9.21235 23.2575 9.38118 23.2238 9.53858 23.1582C9.69598 23.0926 9.83884 22.9965 9.95891 22.8755L15.5002 17.3213L21.0414 22.8755C21.1615 22.9965 21.3044 23.0926 21.4618 23.1582C21.6192 23.2238 21.788 23.2575 21.9585 23.2575C22.129 23.2575 22.2978 23.2238 22.4552 23.1582C22.6126 23.0926 22.7555 22.9965 22.8756 22.8755C22.9966 22.7554 23.0927 22.6125 23.1583 22.4551C23.2239 22.2977 23.2577 22.1289 23.2577 21.9584C23.2577 21.7879 23.2239 21.619 23.1583 21.4616C23.0927 21.3042 22.9966 21.1614 22.8756 21.0413L17.3214 15.5Z" fill="black"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_411_3382">
                        <rect width="31" height="31" fill="black"></rect>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
    
                <div class="flex gap-3 ml-auto items-center">
                    <button v-if="authStore.isLogin" @click="authStore.exitUser" style="background-color: rgba(225, 10, 50, 1); padding: 8px; height: 35px" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2">
                        <span>
                            <svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Exit_1_"> <path d="M52.4501991,28.7678509l-5-4.9990005c-0.3768997-0.3770008-0.9902-0.3770008-1.3671989,0 c-0.3778992,0.3778992-0.3778992,0.9902,0,1.3671989l3.3171997,3.3164005H35.2666016v2h14.1320992l-3.3157005,3.3163986 c-0.3778992,0.377903-0.3778992,0.9902,0,1.3672028c0.1884995,0.1884995,0.4365997,0.2831993,0.6835976,0.2831993 c0.2471008,0,0.4951019-0.0946999,0.6836014-0.2831993l5-5.0010014c0.1817017-0.1816006,0.2831993-0.4277,0.2831993-0.6835995 C52.7333984,29.1946507,52.6319008,28.9495506,52.4501991,28.7678509z"></path> <path d="M40.2666016,39.4524498c-0.5527,0-1,0.4473-1,1v10.7900009c0,1.0429993-0.8310013,2.2099991-1.9433022,2.2099991 h-6.0566998V11.2394505V9.8677502L30.0191994,9.33395L14.0765009,2.56445l-0.2606955-0.112h23.507494 c1.2168007,0,1.9433022,0.9921999,1.9433022,1.9511998v15.0487995c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V4.4036498 c0-2.1786997-1.7685013-3.9511998-3.9433022-3.9511998H12.2666006c-0.5215998,0-0.9358997,0.4029-0.9822998,0.9124 L11.2666006,1.35725V1.45245V55.03405l17.1855011,7.3064003l2.8144989,1.2070999v-3.0951004v-5h6.0566998 c2.3584023,0,3.9433022-2.1767998,3.9433022-4.2099991V40.4524498 C41.2666016,39.8997498,40.8194008,39.4524498,40.2666016,39.4524498z M29.2665997,11.2394505v49.2129974l-15.999999-6.7766991 V4.4524498l15.9906988,6.7728004l0.0093002,0.0038996V11.2394505z"></path> </g> </g></svg>
                        </span>
                        خروج
                    </button>

                    <NuxtLink @click="closeMenuMobile($refs.menuMobileElem)" to="/">
                        <img class="inline-block dark:hidden h-[50px] object-cover" :src="logo_dark" :alt="title">
                        <img class="dark:inline-block hidden h-[50px] object-cover" :src="logo_white" :alt="title">
                    </NuxtLink>
                </div>
            </div>
    
            <div class="flex justify-end p-5"> 
                <ul class="text-righ">
                    <li class="text-graytext cursor-default mb-6 text-lg">منو</li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink @click="closeMenuMobile($refs.menuMobileElem)" to="/">خانه</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink @click="closeMenuMobile($refs.menuMobileElem)" to="/weblog">وبلاگ</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink @click="closeMenuMobile($refs.menuMobileElem)" to="/contact">تماس باما</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink @click="closeMenuMobile($refs.menuMobileElem)" to="/about">درباره ما</NuxtLink></li>
                </ul>
            </div>
    
            <div class="p-5">
                <p class="text-graytext text-lg">شروع گفتگو</p>
                <p class="text-lg">Homeland.2022@gmail.com</p>
            </div>
        </div>

        <nav dir="ltr" id="navMain" class="hidden sm:block fixed top-0 left-0 right-0 w-full m-auto transition-all duration-300 navMain p-2 z-30 bg-primary dark:bg-white shadow-[0_0_17px_rgba(0,0,0,0.16)]">
            <ul class="flex justify-center items-center gap-14">
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink :style="{ color: route.fullPath=='/about' ? 'var(--primaryColor);' : '' }" onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/about">درباره ما</NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink :style="{ color: route.fullPath=='/contact' ? 'var(--primaryColor);' : '' }" onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/contact">ارتباط با ما</NuxtLink>
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
                    <NuxtLink :style="{ color: route.fullPath=='/weblog' ? 'var(--primaryColor);' : '' }" onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/weblog">وبلاگ</NuxtLink>
                </li>
                <li class="w-14 whitespace-nowrap">
                    <NuxtLink :style="{ color: route.fullPath=='/' ? 'var(--primaryColor);' : '' }" onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" class="transition-all duration-300" to="/">خانه</NuxtLink>
                </li>
            </ul>


            <div class="flex gap-3 absolute left-5 top-4">
                <button v-if="route.fullPath != '/'" style="background-color: var(--primaryColor)" @click="toggleModal" id="searchMelkBtn" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2 px-3">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 8H17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    جستجوی کد ملکی
                </button>

                <button v-if="authStore.isLogin" @click="authStore.exitUser" style="background-color: rgba(225, 10, 50, 1)" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2 px-3">
                    <span>
                        <svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Exit_1_"> <path d="M52.4501991,28.7678509l-5-4.9990005c-0.3768997-0.3770008-0.9902-0.3770008-1.3671989,0 c-0.3778992,0.3778992-0.3778992,0.9902,0,1.3671989l3.3171997,3.3164005H35.2666016v2h14.1320992l-3.3157005,3.3163986 c-0.3778992,0.377903-0.3778992,0.9902,0,1.3672028c0.1884995,0.1884995,0.4365997,0.2831993,0.6835976,0.2831993 c0.2471008,0,0.4951019-0.0946999,0.6836014-0.2831993l5-5.0010014c0.1817017-0.1816006,0.2831993-0.4277,0.2831993-0.6835995 C52.7333984,29.1946507,52.6319008,28.9495506,52.4501991,28.7678509z"></path> <path d="M40.2666016,39.4524498c-0.5527,0-1,0.4473-1,1v10.7900009c0,1.0429993-0.8310013,2.2099991-1.9433022,2.2099991 h-6.0566998V11.2394505V9.8677502L30.0191994,9.33395L14.0765009,2.56445l-0.2606955-0.112h23.507494 c1.2168007,0,1.9433022,0.9921999,1.9433022,1.9511998v15.0487995c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V4.4036498 c0-2.1786997-1.7685013-3.9511998-3.9433022-3.9511998H12.2666006c-0.5215998,0-0.9358997,0.4029-0.9822998,0.9124 L11.2666006,1.35725V1.45245V55.03405l17.1855011,7.3064003l2.8144989,1.2070999v-3.0951004v-5h6.0566998 c2.3584023,0,3.9433022-2.1767998,3.9433022-4.2099991V40.4524498 C41.2666016,39.8997498,40.8194008,39.4524498,40.2666016,39.4524498z M29.2665997,11.2394505v49.2129974l-15.999999-6.7766991 V4.4524498l15.9906988,6.7728004l0.0093002,0.0038996V11.2394505z"></path> </g> </g></svg>
                    </span>
                    خروج
                </button>
            </div>
        </nav>
    </div>
    
    <slot></slot>

    <Footer :title="title" :logo_dark="logo_dark" :logo_white="logo_white" :page-description="pageDescription" />

    <!-- Modal search Via Estate_code -->
    <div id="modal" class="opacity-0 transition-all duration-300">
        <Transition>
            <div v-show="isOpenModalSearch" class="fixed flex justify-center z-40 items-center bg-graytext/[.5] backdrop-blur-sm transition-all duration-300">
                <div v-click-out-side="closeModal" class="flex flex-col gap-3 w-[550px] bg-secondary dark:bg-whiteSecondary rounded-3xl lg:rounded-[46px] p-4 pt-3 lg:p-8 lg:pt-5">
                    <div class="flex justify-between items-start">
                        <span class="w-[65px]"></span>
                        
                        <NuxtLink to="/">
                            <img class="inline-block dark:hidden h-[65px] object-cover" :src="logo_dark" :alt="title">
                            <img class="dark:inline-block hidden h-[65px] object-cover" :src="logo_white" :alt="title">
                        </NuxtLink>
                        
                        <span id="exitModalBtn" @click ="isOpenModalSearch = false">
                            <svg class="dark:inline-block hidden cursor-pointer transition-all duration-300 hover:bg-whiteSecSection rounded-md" width="65" height="55" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.7205 50.7635L33.8005 36.8435C33.0871 36.1301 33.0871 34.9469 33.8005 34.2335C34.5139 33.5201 35.6971 33.5201 36.4105 34.2335L50.3305 48.1535C51.0439 48.8669 51.0439 50.0501 50.3305 50.7635C49.6171 51.4769 48.4339 51.4769 47.7205 50.7635Z" fill="black"/>
                                <path d="M33.7999 50.7635C33.0865 50.0501 33.0865 48.8669 33.7999 48.1535L47.7199 34.2335C48.4333 33.5201 49.6165 33.5201 50.3299 34.2335C51.0433 34.9469 51.0433 36.1301 50.3299 36.8435L36.4099 50.7635C35.6965 51.4769 34.5133 51.4769 33.7999 50.7635Z" fill="black"/>
                            </svg>
                            <svg class="dark:hidden cursor-pointer transition-all duration-300 hover:bg-graytext/[.2] rounded-md" width="65" height="55" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.7205 50.7635L33.8005 36.8435C33.0871 36.1301 33.0871 34.9469 33.8005 34.2335C34.5139 33.5201 35.6971 33.5201 36.4105 34.2335L50.3305 48.1535C51.0439 48.8669 51.0439 50.0501 50.3305 50.7635C49.6171 51.4769 48.4339 51.4769 47.7205 50.7635Z" fill="#EBEBEB"/>
                                <path d="M33.7999 50.7635C33.0865 50.0501 33.0865 48.8669 33.7999 48.1535L47.7199 34.2335C48.4333 33.5201 49.6165 33.5201 50.3299 34.2335C51.0433 34.9469 51.0433 36.1301 50.3299 36.8435L36.4099 50.7635C35.6965 51.4769 34.5133 51.4769 33.7999 50.7635Z" fill="#EBEBEB"/>
                            </svg>
                        </span>
                    </div>
    
                    <div class="flex flex-col">
                        <p class="text-sm md:text-2xl md:font-semibold py-5 lg:py-7">جستجوی کد ملکی</p>
                        <input type="text" v-model="estateType" class="bg-primary dark:bg-whiteSecondary p-4 md:p-6 outline-none border-graytext border rounded-[21px] inputNumber" placeholder="کد ملکی رو جستجو کنید...">
                        <p v-if="estateType && estateType.length >= 1 && isNaN(Number(estateType))" class="p-3 text-red-500 transition-all duration-300">لطفا مقدار صحیح وارد کنید :)</p>
                    </div>
                    
                    <div class="flex">
                        <p class="text-xs md:text-lg pb-8">کد ملکی موردنظر خود را برای جستجوی سریع تر وارد کنید .</p>
                    </div>
    
                    <NuxtLink @click="closeModal" v-if="!isNaN(Number(estateType)) && estateType.length >= 1" style="background-color: var(--primaryColor)" :to="`/propertyCode?estate_code=${estateType}`" class="hover:opacity-80 btn md:text-2xl md:p-5">جستجو</NuxtLink>
                    <p v-if="isNaN(Number(estateType)) || estateType.length == 0" style="background-color: var(--primaryColor)" class="opacity-70 btn dark:bg-bluePrimary/80 bg-primaryOrange/80 md:text-2xl !cursor-not-allowed md:p-5">جستجو</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';

import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { useAuth } from "~/stores/Auth"
const authStore = useAuth()

const route = useRoute()

const estateType = ref()

const isOpenModalSearch = ref(false)
const modalElem = ref()
const exitModalBtn = ref()

const title = ref()
const logo_dark = ref()
const logo_white = ref()
const pageDescription = ref()

const response = await fetch(`${apiRootStore.api}/real/HomePage`)
const data = await response.json()
logo_dark.value = data[0].logo_dark
logo_white.value = data[0].logo_white
title.value = data[0].homePage_title
pageDescription.value = data[0].homePage_text

onMounted(() => {
    // Check Login User
    authStore.checkLogin()

    modalElem.value = document.getElementById('modal')
    exitModalBtn.value = document.getElementById('exitModalBtn')

    const hamburger = document.getElementById("hamburger");
    const menuMobile = document.getElementById("menu_mobile");
    const exitBtn = document.getElementById("exitBtn");

    hamburger.addEventListener("click", () => {
        menuMobile.classList.remove("w-0");
        menuMobile.classList.add("w-full");
    }); 

    exitBtn.addEventListener("click", () => {
        menuMobile.classList.remove("w-full");
        menuMobile.classList.add("w-0");
    });

    document.addEventListener('scroll', function () {
        const navMenu = document.getElementById('navMain')
        
        if(navMenu) {
            if(document.documentElement.scrollTop > 100) {
                if(navMenu.classList.contains('navMain')) {
                    navMenu.classList.remove('navMain')
                }
            } else {
                if(!navMenu.classList.contains('navMain')) {
                    navMenu.classList.add('navMain')
                } 
            }
        }
    })
});

const closeMenuMobile = (menuElem) => {
    setTimeout(() => {
        menuElem.classList.remove("w-full");
        menuElem.classList.add("w-0");
    }, 500);
}

const toggleModal = () => {
    setTimeout(() => {
        modalElem.value.className = 'opacity-100 transition-all duration-300'
        modalElem.value.querySelector('input').focus()
        modalElem.value.querySelector('div').className = 'fixed top-0 left-0 right-0 bottom-0 flex justify-center z-40 items-center bg-graytext/[.5] backdrop-blur-sm transition-all duration-300'
        isOpenModalSearch.value = true
    }, 5);
}

const closeModal = () => {
    isOpenModalSearch.value = false;
};
</script>
