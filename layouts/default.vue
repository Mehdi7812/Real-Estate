<template>
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
                <img class="inline-block dark:hidden h-[50px] object-cover" :src="logo_dark">
                <img class="dark:inline-block hidden h-[50px] object-cover" :src="logo_white">
            </NuxtLink>
    
            <a style="color: var(--primaryColor)" @click="isOpenModalSearch = true" id="resSearchMelkBtn" class="text-primaryOrange dark:text-bluePrimary hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/80 flex items-center justify-end gap-2" href="#">کدملکی
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style="stroke: var(--primaryColor)" d="M9.3335 3.33337H13.3335" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M9.3335 5.33337H11.3335" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M14.0002 7.66671C14.0002 11.1667 11.1668 14 7.66683 14C4.16683 14 1.3335 11.1667 1.3335 7.66671C1.3335 4.16671 4.16683 1.33337 7.66683 1.33337" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path style="stroke: var(--primaryColor)" d="M14.6668 14.6667L13.3335 13.3334" stroke="#E16428" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </nav>
    
        <div dir="ltr" id="menu_mobile" class="fixed right-0 top-0 bottom-0 bg-secondary dark:bg-whiteSecondary w-0 z-50 text-right overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-between">
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

                    <NuxtLink to="/">
                        <img class="inline-block dark:hidden h-[50px] object-cover" :src="logo_dark">
                        <img class="dark:inline-block hidden h-[50px] object-cover" :src="logo_white">
                    </NuxtLink>
                </div>
            </div>
    
            <div class="flex justify-end p-5"> 
                <ul class="text-righ">
                    <li class="text-graytext cursor-default mb-6 text-lg">منو</li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink to="/">خانه</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink to="/weblog">وبلاگ</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink to="/contact">تماس باما</NuxtLink></li>
                    <li class="mb-5 text-xl hover:text-primaryOrange dark:hover:text-bluePrimary transition duration-300"><NuxtLink to="/about">درباره ما</NuxtLink></li>
                </ul>
            </div>
    
            <div class="p-5">
                <p class="text-graytext text-lg">شروع گفتگو</p>
                <p class="text-lg">Homeland.2022@gmail.com</p>
            </div>
        </div>
    
        <nav class="hidden md:block p-2 fixed left-0 right-0 top-0 z-30 bg-primary dark:bg-white shadow-[0_0_17px_rgba(0,0,0,0.16)]">
            <div class="container m-auto flex justify-between items-center">
                <ul class="flex justify-center items-center gap-5 lg:gap-10">
                    <li class="md:ml-5">
                        <NuxtLink class="block h-[67px]" to="/">
                            <div v-if="logo_dark" class="h-full">
                                <img class="inline-block dark:hidden w-full h-full object-cover" :src="logo_dark">
                                <img class="dark:inline-block hidden w-full h-full object-cover" :src="logo_white">
                            </div>
                            <div v-if="!logo_dark" class="h-full">
                                <div class="w-[67px] h-full"></div>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/">
                            خرید خانه
                        
                            <span style="background-color: var(--primaryColor)" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>
                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/propertyCode?estate_type=V">
                            خرید ویلا
                        
                            <span style="background-color: var(--primaryColor)" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>
                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/propertyCode?estate_type=A">
                            خرید آپارتمان
                        
                            <span style="background-color: var(--primaryColor)" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>

                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/weblog">
                            وبلاگ
                        
                            <span style="background-color: var(--primaryColor)" :class="route.path == '/weblog' ? 'h-2' : ''" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>
                    
                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/contact">
                            ارتباط با ما
                        
                            <span style="background-color: var(--primaryColor)" :class="route.path == '/contact' ? 'h-2' : ''" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>

                    <li class="relative group">
                        <NuxtLink onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" class="relative text-sm lg:text-base hover:text-hoverPrimaryOrange dark:hover:text-bluePrimary/50 transition-all duration-300 pb-[30px]" to="/about">
                            درباره ما
                        
                            <span style="background-color: var(--primaryColor)" :class="route.path == '/about' ? 'h-2' : ''" class="absolute bottom-0 left-0 right-0 rounded-t-md h-0 group-hover:h-2 transition-all duration-300"></span>
                        </NuxtLink>
                    </li>
                </ul>
    
                <div class="flex gap-3">
                    <button v-if="authStore.isLogin" @click="authStore.exitUser" style="background-color: rgba(225, 10, 50, 1)" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2 px-3">
                        <span>
                            <svg fill="#fff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Exit_1_"> <path d="M52.4501991,28.7678509l-5-4.9990005c-0.3768997-0.3770008-0.9902-0.3770008-1.3671989,0 c-0.3778992,0.3778992-0.3778992,0.9902,0,1.3671989l3.3171997,3.3164005H35.2666016v2h14.1320992l-3.3157005,3.3163986 c-0.3778992,0.377903-0.3778992,0.9902,0,1.3672028c0.1884995,0.1884995,0.4365997,0.2831993,0.6835976,0.2831993 c0.2471008,0,0.4951019-0.0946999,0.6836014-0.2831993l5-5.0010014c0.1817017-0.1816006,0.2831993-0.4277,0.2831993-0.6835995 C52.7333984,29.1946507,52.6319008,28.9495506,52.4501991,28.7678509z"></path> <path d="M40.2666016,39.4524498c-0.5527,0-1,0.4473-1,1v10.7900009c0,1.0429993-0.8310013,2.2099991-1.9433022,2.2099991 h-6.0566998V11.2394505V9.8677502L30.0191994,9.33395L14.0765009,2.56445l-0.2606955-0.112h23.507494 c1.2168007,0,1.9433022,0.9921999,1.9433022,1.9511998v15.0487995c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1V4.4036498 c0-2.1786997-1.7685013-3.9511998-3.9433022-3.9511998H12.2666006c-0.5215998,0-0.9358997,0.4029-0.9822998,0.9124 L11.2666006,1.35725V1.45245V55.03405l17.1855011,7.3064003l2.8144989,1.2070999v-3.0951004v-5h6.0566998 c2.3584023,0,3.9433022-2.1767998,3.9433022-4.2099991V40.4524498 C41.2666016,39.8997498,40.8194008,39.4524498,40.2666016,39.4524498z M29.2665997,11.2394505v49.2129974l-15.999999-6.7766991 V4.4524498l15.9906988,6.7728004l0.0093002,0.0038996V11.2394505z"></path> </g> </g></svg>
                        </span>
                        خروج
                    </button>

                    <button style="background-color: var(--primaryColor)" @click="toggleModal" id="searchMelkBtn" class="hover:opacity-80 btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/50 gap-2 px-3">
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
                </div>
            </div>
        </nav>
    </div>

    <Suspense>
        <template #default>
            <slot></slot>
        </template>
        <template #fallback>
			<div class="backdrop-brightness-[.2] w-full flex justify-center items-center" style="height: 90vh">
				<div class="lds-spinner">
					<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
				</div>
			</div>
        </template>
    </Suspense>

    <footer style="background-color: var(--primaryColor-20)" dir="ltr" class="bg-[#1D2228] dark:bg-[#f0f3f7]">
        <div class=" lg:px-12">
            <div class="container m-auto p-5 lg:p-6 ">
                <div class="flex text-center justify-center items-center lg:items-start gap-12 flex-row-reverse flex-wrap md:py-8 lg:justify-between lg:gap-0">
                    <div class="flex flex-col justify-center text-center items-center gap-5 mt-20 md:mt-0 md:w-64 md:text-right md:items-end">
                        <NuxtLink to="/">
                            <img class="inline-block dark:hidden h-[67px] object-cover" :src="logo_dark">
                            <img class="dark:inline-block hidden h-[67px] object-cover" :src="logo_white">
                        </NuxtLink>
                        <p class="px-10 text-graytext md:text-xs md:px-0">{{ pageDescription }}</p>
                        
                        <div class="flex flex-row-reverse gap-4">
                            <svg class="hidden cursor-pointer hover:scale-125 transition-all duration-300 md:inline-block md:order-none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: var(--primaryColor)" fill-rule="evenodd" clip-rule="evenodd" d="M10.6067 18.0322C11.98 18.0303 12.9779 18.0131 13.6006 17.9805C14.2622 17.946 14.8368 17.8482 15.3243 17.687C15.9046 17.4798 16.4095 17.1632 16.839 16.7373C17.2684 16.3113 17.5876 15.8106 17.7966 15.235C17.9591 14.7515 18.0577 14.1817 18.0925 13.5255C18.1274 12.8693 18.1448 11.793 18.1448 10.2964L18.1443 9.78595C18.1419 8.55391 18.1304 7.65348 18.1099 7.08467C18.0635 6.41699 17.9591 5.8414 17.7966 5.3579C17.5876 4.78232 17.2684 4.28155 16.839 3.85562C16.4095 3.42968 15.9046 3.11311 15.3243 2.9059C14.8368 2.74473 14.2622 2.64689 13.6006 2.61235C12.939 2.57781 11.8538 2.56055 10.3448 2.56055L10.083 2.56073C8.70972 2.56264 7.71176 2.57985 7.08907 2.61235C6.42747 2.64689 5.85292 2.74473 5.36543 2.9059C4.78508 3.11311 4.28017 3.42968 3.85071 3.85562C3.42125 4.28155 3.10206 4.78232 2.89313 5.3579C2.73063 5.8414 2.63197 6.41123 2.59715 7.0674C2.56233 7.72357 2.54492 8.79992 2.54492 10.2964L2.5451 10.5562C2.54703 11.9182 2.56438 12.9079 2.59715 13.5255C2.63197 14.1817 2.73063 14.7515 2.89313 15.235C3.10206 15.8106 3.42125 16.3113 3.85071 16.7373C4.28017 17.1632 4.78508 17.4683 5.36543 17.6525C5.85292 17.8367 6.42747 17.946 7.08907 17.9805C7.75067 18.0151 8.83593 18.0324 10.3448 18.0324L10.6067 18.0322ZM11.1335 16.6501L9.55965 16.6501C8.74039 16.6484 8.09668 16.637 7.62853 16.6159C6.76961 16.5698 6.14283 16.4777 5.7482 16.3396C5.05177 16.0633 4.55267 15.5683 4.25089 14.8546C4.11161 14.4632 4.01875 13.8415 3.97232 12.9896C3.94911 12.4831 3.9375 11.7694 3.9375 10.8485L3.93774 9.51741C3.93952 8.70488 3.95104 8.06645 3.97232 7.60215C4.01875 6.72725 4.11161 6.10562 4.25089 5.73724C4.52946 5.02351 5.02856 4.52851 5.7482 4.25222C6.14283 4.11408 6.76961 4.02199 7.62853 3.97594C8.13924 3.95292 8.85888 3.94141 9.78744 3.94141L11.1295 3.94165C11.9488 3.9434 12.5925 3.95484 13.0606 3.97594C13.9428 4.02199 14.5695 4.11408 14.941 4.25222C15.6606 4.52851 16.1597 5.02351 16.4383 5.73724C16.5776 6.10562 16.6704 6.72725 16.7168 7.60215C16.7401 8.08564 16.7517 8.79937 16.7517 9.74333L16.7514 11.0744C16.7496 11.8869 16.7381 12.5253 16.7168 12.9896C16.6704 13.8415 16.5776 14.4632 16.4383 14.8546C16.1597 15.5453 15.6606 16.0403 14.941 16.3396C14.5695 16.4777 13.9428 16.5698 13.0606 16.6159C12.6136 16.637 11.9715 16.6484 11.1342 16.6501L11.1335 16.6501ZM15.1664 6.80835C14.9923 6.99254 14.7776 7.08463 14.5222 7.08463C14.2668 7.08463 14.0463 6.99254 13.8606 6.80835C13.6749 6.62416 13.582 6.40544 13.582 6.15218C13.582 5.89892 13.6749 5.6802 13.8606 5.49601C14.0463 5.31182 14.2668 5.21973 14.5222 5.21973C14.7776 5.21973 14.9981 5.31182 15.1838 5.49601C15.3695 5.6802 15.4624 5.89892 15.4624 6.15218C15.4392 6.40544 15.3405 6.62416 15.1664 6.80835ZM10.3443 14.2683C11.0639 14.2683 11.7313 14.0899 12.3465 13.733C12.9617 13.3761 13.4491 12.8927 13.809 12.2825C14.1688 11.6724 14.3487 11.0105 14.3487 10.2968C14.3487 9.58302 14.1688 8.9211 13.809 8.31097C13.4491 7.70085 12.9617 7.21736 12.3465 6.86049C11.7313 6.50363 11.0639 6.3252 10.3443 6.3252C9.62463 6.3252 8.95723 6.50363 8.34206 6.86049C7.72688 7.21736 7.23939 7.70085 6.87957 8.31097C6.51975 8.9211 6.33984 9.58302 6.33984 10.2968C6.33984 11.0105 6.51975 11.6724 6.87957 12.2825C7.23939 12.8927 7.72688 13.3761 8.34206 13.733C8.95723 14.0899 9.62463 14.2683 10.3443 14.2683ZM8.50044 12.1275C9.01115 12.6341 9.62632 12.8873 10.346 12.8873C11.0656 12.8873 11.6808 12.6341 12.1915 12.1275C12.7022 11.621 12.9575 11.0109 12.9575 10.2972C12.9575 9.58345 12.7022 8.97332 12.1915 8.46681C11.6808 7.96029 11.0656 7.70703 10.346 7.70703C9.62632 7.70703 9.01115 7.96029 8.50044 8.46681C7.98973 8.97332 7.73438 9.58345 7.73438 10.2972C7.73438 11.0109 7.98973 11.621 8.50044 12.1275Z"></path>
                            </svg>
                            <svg class="order-1 cursor-pointer hover:scale-125 transition-all duration-300 md:order-none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: var(--primaryColor)" d="M7.74769 17.0772C9.7297 17.0772 11.4855 16.578 13.0151 15.5798C14.4154 14.6877 15.5034 13.4876 16.2789 11.9795C17.033 10.5564 17.41 9.08022 17.41 7.55092C17.41 7.35975 17.3992 7.22169 17.3777 7.13673C18.0455 6.6482 18.6164 6.06409 19.0904 5.3844C18.4441 5.66053 17.7978 5.84107 17.1515 5.92603C17.8839 5.47999 18.3794 4.86402 18.638 4.07813C17.9701 4.46045 17.2484 4.72595 16.4728 4.87464C16.1497 4.55603 15.7781 4.30115 15.358 4.10999C14.9379 3.91882 14.4801 3.82324 13.9846 3.82324C13.3813 3.82324 12.8212 3.97192 12.3042 4.26929C11.7871 4.56665 11.3778 4.97553 11.0762 5.49592C10.7746 6.0163 10.6238 6.57386 10.6238 7.16859C10.6238 7.42347 10.6453 7.67836 10.6884 7.93324C9.3096 7.86952 8.0116 7.52968 6.79439 6.91371C5.57718 6.29774 4.54847 5.46937 3.70827 4.42859C3.38512 4.9596 3.22354 5.51716 3.22354 6.10126C3.22354 6.68537 3.36358 7.22169 3.64364 7.71022C3.92371 8.19874 4.28995 8.60231 4.74237 8.92092C4.20378 8.89967 3.6975 8.75099 3.22354 8.47487V8.53859C3.22354 9.32448 3.48207 10.0254 3.99911 10.6414C4.51616 11.2573 5.16246 11.6503 5.93803 11.8202C5.63642 11.8839 5.33481 11.9158 5.0332 11.9158C4.83931 11.9158 4.63465 11.9052 4.41921 11.8839C4.63465 12.5424 5.02782 13.0893 5.59872 13.5248C6.16963 13.9602 6.83209 14.1779 7.58612 14.1779C6.33659 15.1337 4.92549 15.6116 3.35281 15.6116C3.0512 15.6116 2.7819 15.601 2.54492 15.5798C4.1176 16.578 5.85186 17.0772 7.74769 17.0772Z"></path>
                            </svg>
                            <svg class="order-2 cursor-pointer hover:scale-125 transition-all duration-300 md:order-none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: var(--primaryColor)" d="M14.875 3.06279C14.875 3.00534 14.8637 2.94845 14.8417 2.89537C14.8197 2.84229 14.7875 2.79406 14.7469 2.75343C14.7062 2.71281 14.658 2.68058 14.6049 2.65859C14.5518 2.63661 14.495 2.62529 14.4375 2.62529H12.25C11.1485 2.57042 10.07 2.95376 9.25026 3.69155C8.43049 4.42934 7.93606 5.4616 7.875 6.56279V8.92529H5.6875C5.57147 8.92529 5.46019 8.97139 5.37814 9.05343C5.29609 9.13548 5.25 9.24676 5.25 9.36279V11.6378C5.25 11.7538 5.29609 11.8651 5.37814 11.9472C5.46019 12.0292 5.57147 12.0753 5.6875 12.0753H7.875V17.9378C7.875 18.0538 7.92109 18.1651 8.00314 18.2472C8.08519 18.3292 8.19647 18.3753 8.3125 18.3753H10.9375C10.995 18.3753 11.0518 18.364 11.1049 18.342C11.158 18.32 11.2062 18.2878 11.2469 18.2472C11.2875 18.2065 11.3197 18.1583 11.3417 18.1052C11.3637 18.0521 11.375 17.9952 11.375 17.9378V12.0753H13.6675C13.7648 12.0767 13.8598 12.0456 13.9374 11.987C14.0151 11.9283 14.071 11.8455 14.0963 11.7515L14.7263 9.47654C14.7437 9.4119 14.746 9.34412 14.7331 9.27843C14.7202 9.21274 14.6924 9.15089 14.6518 9.09764C14.6112 9.04439 14.559 9.00116 14.4991 8.97128C14.4392 8.9414 14.3732 8.92567 14.3063 8.92529H11.375V6.56279C11.3968 6.34621 11.4985 6.14551 11.6603 5.9999C11.8221 5.85428 12.0323 5.7742 12.25 5.77529H14.4375C14.5535 5.77529 14.6648 5.7292 14.7469 5.64715C14.8289 5.5651 14.875 5.45382 14.875 5.33779V3.06279Z"></path>
                            </svg>
                            <svg class="order-3 cursor-pointer hover:scale-125 transition-all duration-300 md:order-none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: var(--primaryColor)" d="M10.5788 11.479C9.75975 13.1695 8.63888 15.4585 8.08237 16.491C7.54338 17.4307 7.09625 17.3056 6.74188 16.5164C5.51163 13.6105 2.9855 8.51535 1.79725 5.65848C1.57763 5.1326 1.41137 4.79485 1.25563 4.66185C1.09725 4.5306 0.770875 4.45185 0.273875 4.42473C0.090125 4.40373 0 4.3591 0 4.2856V3.88748L0.0455 3.8481C0.854 3.84373 4.77138 3.8481 4.77138 3.8481L4.816 3.88748V4.26723C4.816 4.37135 4.75038 4.42123 4.61912 4.42123L4.12563 4.44835C3.70125 4.47373 3.4895 4.59185 3.4895 4.82985C3.4895 4.94798 3.53588 5.1186 3.63475 5.35573C4.5815 7.67098 7.8505 14.5616 7.8505 14.5616L7.9695 14.6019L10.0791 10.3931L9.65737 9.45948L8.20662 6.60348C8.20662 6.60348 7.92837 6.03123 7.83213 5.84048C7.19513 4.57785 7.20912 4.51223 6.566 4.4256C6.38487 4.40548 6.29213 4.38185 6.29213 4.29523V3.88573L6.34462 3.84635H10.1001L10.199 3.87873V4.27335C10.199 4.36523 10.1325 4.4046 10.0004 4.4046L9.73088 4.44573C9.03788 4.4991 9.1525 4.7791 9.61187 5.68998L10.9961 8.53548L12.5344 5.46948C12.7908 4.90948 12.7382 4.7686 12.6315 4.64085C12.5702 4.56735 12.3646 4.44835 11.921 4.43085L11.7451 4.41248C11.6989 4.41274 11.6541 4.39697 11.6182 4.36785C11.5997 4.35555 11.5846 4.33874 11.5744 4.31899C11.5641 4.29925 11.559 4.27722 11.5596 4.25498V3.88135L11.613 3.84198C12.7041 3.83498 15.1506 3.84198 15.1506 3.84198L15.2022 3.88135V4.26285C15.2022 4.36873 15.1506 4.4186 15.0334 4.4186C14.4681 4.44485 14.3491 4.50173 14.1383 4.80273C14.0333 4.96548 13.8101 5.3181 13.573 5.71185L11.5596 9.45073L11.5028 9.56885L13.9458 14.5669L14.0945 14.6089L17.941 5.4756C18.0758 5.10635 18.0539 4.84385 17.885 4.69248C17.7126 4.54198 17.5823 4.4536 17.1351 4.43435L16.7676 4.42035C16.7202 4.42169 16.6736 4.4079 16.6346 4.38098C16.597 4.3556 16.5716 4.31535 16.5716 4.27685V3.89535L16.6233 3.85598H20.9641L21 3.89535V4.27773C21 4.38185 20.9352 4.43523 20.8171 4.43523C20.2501 4.46148 19.831 4.59273 19.5545 4.8036C19.2797 5.02673 19.0671 5.3426 18.9105 5.73723C18.9105 5.73723 15.3729 13.838 14.1628 16.5339C13.7034 17.415 13.2414 17.3362 12.8476 16.5067C12.348 15.4821 11.2963 13.194 10.5324 11.5105L10.5788 11.479Z"></path>
                            </svg>
                            <svg class="order-4 cursor-pointer hover:scale-125 transition-all duration-300 md:order-none" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style="fill: var(--primaryColor)" d="M8.55791 16.3187L8.80291 12.6174L15.5229 6.56241C15.8204 6.29116 15.4617 6.15991 15.0679 6.39616L6.77291 11.6374L3.18541 10.4999C2.41541 10.2812 2.40666 9.74741 3.36041 9.36241L17.3342 3.97241C17.9729 3.68366 18.5854 4.12991 18.3404 5.10991L15.9604 16.3187C15.7942 17.1149 15.3129 17.3074 14.6479 16.9399L11.0254 14.2624L9.28416 15.9512C9.08291 16.1524 8.91666 16.3187 8.55791 16.3187Z"></path>
                            </svg>																																							
                        </div>
                    </div>
        
                    <div class="flex flex-col gap-5 justify-center text-center items-center md:items-end w-32">
                        <h3 style="color: var(--primaryColor)" class="font-extrabold lg:text-xl">Hypomelk</h3>
                        <ul class="flex flex-col text-center gap-3 md:text-right">
                            <NuxtLink to="/about" onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4 hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">درباره ما</li></NuxtLink>
                            <NuxtLink to="/contact" onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4 hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">تماس با ما</li></NuxtLink>
                            <NuxtLink to="/weblog" onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4 hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">وبلاگ</li></NuxtLink>
                            <NuxtLink to="/contact#villaYab" onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4 hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">ویلایاب</li></NuxtLink>
                        </ul>
                    </div>
                    
                    <div class="flex flex-col gap-5 justify-center text-center items-center md:items-end w-32 lg:w-[9rem]">
                        <h3 style="color: var(--primaryColor)" class="font-extrabold lg:text-xl">دسته بندی</h3>
                        <ul class="flex flex-col text-center gap-3 md:text-right">
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?estate_type=V"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">ویلا</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?estate_type=A"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">آپارتمان</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?estate_type=G"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">باغ</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?estate_type=L"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">زمین</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?estate_type=B"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">مغازه و تجاری</li></NuxtLink>
                        </ul>
                    </div>
    
                    <div class="flex flex-col gap-5 justify-center text-center items-center md:items-end w-32">
                        <h3 style="color: var(--primaryColor)" class="font-extrabold lg:text-xl">موقعیت</h3>
                        <ul class="flex flex-col text-center gap-3 md:text-right">
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?town=true"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">شهری</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?jungle=true"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">جنگلی</li></NuxtLink>
                            <NuxtLink onmouseenter="this.style.color= 'var(--primaryColor)'" onmouseout="this.style.color = ''" to="propertyCode?beach=true"><li class="cursor-pointer relative text-[13px] hover:opacity-80 hover:pr-4  hover:after:content-['<'] whitespace-nowrap transition-all duration-300 after:absolute after:right-0 lg:text-base">ساحلی</li></NuxtLink>
                        </ul>
                    </div>
    
                    <div class="flex flex-col gap-5 justify-center text-center items-center w-full md:items-end md:w-1/2 lg:w-1/4">
                        <h3 style="color: var(--primaryColor)" class="font-extrabold lg:text-xl">از جدیدترین کالاهای ما با خبر شوید</h3>
                        <form class="relative h-[51px] w-5/6 lg:w-full">
                            <span id="resultFooterPhone" class="text-red-700 absolute -bottom-8 h-0 overflow-hidden right-0 transition-all duration-300">لطفا فقط از اعداد استفاده کنید</span>
                            <input id="footerInputNumber" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" maxlength="11" v-model="phoneNumber" class="h-full w-full bg-secondary dark:bg-graytext/40 dark:placeholder:text-black dark:text-black rounded-lg text-right p-4 outline-none border-0" type="text" placeholder="شماره همراه خود را وارد کنید" />
                            <button style="background-color: var(--primaryColor)" @click.prevent="sendPhoneNumber" type="submit" class="btn hover:opacity-80 !rounded-lg py-2 px-4 cursor-pointer absolute left-[5px] top-[5px] h-4/5">ثبت</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div style="background-color: var(--primaryColor-20)" class="flex flex-col text-center justify-center items-center px-10 py-5 gap-6 bg-sec222831 dark:bg-[#DFDFDF] lg:flex-row-reverse lg:px-12">
            <p class="text-xs lg:hidden">کلیه حقوق این وب‌سایت به شرکت <span>{{ title }}</span> تعلق دارد و هرگونه کپی برداری ممنوع بوده و پیگرد قانونی دارد.<br>2022</p>
            <p class="text-xs lg:hidden">اجراء و پیاده سازی : <a href="hyponet.ir" target="_blank" class="text-sm font-extrabold">آژانس دیجیتال مارکتینگ هایپونت</a></p>
            <p class="hidden lg:block text-sm w-1/2 text-right">کلیه حقوق این وب‌سایت به <span class="text-base font-bold">{{ title }}</span> تعلق دارد و هرگونه کپی برداری ممنوع بوده و پیگرد قانونی دارد.</p>
            <span class=" hidden lg:inline-block h-8 border-[1px] border-[rgba(255, 255, 255, 0.27)] dark:border-[#BEBEBE]"></span>
            <div class="hidden lg:flex justify-between w-1/2">
                <span class="text-sm">Copyright &copy; 2021 Hypomelk | All Rights Reserved</span>
                <p class="text-sm">اجراء و پیاده سازی : <a href="https://www.hyponet.ir" target="_blank" class="font-bold">آژانس دیجیتال مارکتینگ هایپونت</a></p>
            </div>
        </div>
    </footer>

    <div id="modal" class="opacity-0 transition-all duration-300">
        <Transition>
            <div v-show="isOpenModalSearch" class="fixed flex justify-center z-40 items-center bg-graytext/[.5] backdrop-blur-sm transition-all duration-300">
                <div v-click-out-side="closeModal" class="flex flex-col gap-3 w-[550px] bg-secondary dark:bg-whiteSecondary rounded-[46px] p-8 pt-5">
                    <div class="flex justify-between items-start">
                        <span class="w-[65px]"></span>
                        
                        <NuxtLink to="/">
                            <img class="inline-block dark:hidden h-[65px] object-cover" :src="logo_dark">
                            <img class="dark:inline-block hidden h-[65px] object-cover" :src="logo_white">
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
                        <p class="text-sm md:text-2xl md:font-semibold py-7">جستجوی کد ملکی</p>
                        <input type="text" v-model="estateType" class="bg-primary dark:bg-whiteSecondary p-4 md:p-6 outline-none border-graytext border rounded-[21px] inputNumber" placeholder="کد ملکی رو جستجو کنید...">
                        <p v-if="estateType && estateType.length >= 1 && isNaN(Number(estateType))" class="p-3 text-red-500 transition-all duration-300">لطفا مقدار صحیح وارد کنید :)</p>
                    </div>
                    
                    <div class="flex">
                        <p class="text-xs md:text-lg pb-8">کد ملکی موردنظر خود را برای جستجوی سریع تر وارد کنید .</p>
                    </div>
    
                    <NuxtLink v-if="!isNaN(Number(estateType)) && estateType.length >= 1" style="background-color: var(--primaryColor)" :to="`propertyCode?estate_code=${estateType}`" class="hover:opacity-80 btn md:text-2xl md:p-5">جستجو</NuxtLink>
                    <p v-if="isNaN(Number(estateType)) || estateType.length == 0" style="background-color: var(--primaryColor)" class="opacity-70 btn dark:bg-bluePrimary/80 bg-primaryOrange/80 md:text-2xl !cursor-not-allowed md:p-5">جستجو</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';
import { toast } from 'vue3-toastify';

import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { useAuth } from "~/stores/Auth"
const authStore = useAuth()

const route = useRoute()

const estateType = ref()

const phoneNumber = ref("")

const sendPhoneNumber = () => {
    validateFooterP()

    if(validateFooterP()) {
        fetch(`${apiRootStore.api}/real/footer/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: phoneNumber.value,
            })
        }).then(res => {
            res.json();
            console.log(res);
            if(res.status >= 200 && res.status < 400) {
                phoneNumber.value = '';
                toast.success('شماره همراه شما ثبت شد :D', {position: toast.POSITION.BOTTOM_CENTER,autoClose: 40000,});
            }
        })
        .catch(err => {
            console.log(err, 'Error')
            toast.warning('لطفا از شماره تکراری یا اشتباه استفاده نکنید.', {position: toast.POSITION.BOTTOM_CENTER,autoClose: 40000,});
        })
    } else {
        toast.warning('لطفا شماره خود را درست وارد کنید.', {position: toast.POSITION.BOTTOM_CENTER,autoClose: 4000,});
    }
}

const isOpenModalSearch = ref(false)
const searchMelkBtn = ref()
const modalElem = ref()
const exitModalBtn = ref()

const homePage_pic = ref()
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

    searchMelkBtn.value = document.getElementById('searchMelkBtn')
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
});

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

// Validate Footer Phone Number
function validateFooterPhoneNumber (phone) {
	const re = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
	return re.test(phone);
};
  
function validateFooterP () {
	const result = document.getElementById('resultFooterPhone')
	const phone = document.getElementById('footerInputNumber').value;

	if (validateFooterPhoneNumber(phone)) {
		result.style.height = '0px';
		return true;
	} else {
		result.style.height = '30px';
	}
	return false;
};
</script>
