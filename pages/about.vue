<template>
    <HeaderViaBackground :pageName="'درباره ما'" :customImage="homePagePic" />

    <main>
        <section class="relative -top-20">
            <div class="container m-auto">
                <div class="relative bg-secondary dark:bg-[#f0f3f7] shadow-md p-4 rounded-3xl flex flex-col gap-10 md:rounded-[20px] overflow-hidden">
                    <div style="background-color: var(--primaryColor-20)" class="absolute top-0 bottom-0 right-0 left-0"></div>
                    
                    <main v-if="!data" class="mostSearch">
                        <ul class="o-vertical-spacing o-vertical-spacing--l">
                            <li class="blog-post o-media">
                                <div class="o-media__figure w-1/3 h-80 rounded-lg overflow-hidden">
                                <span class="skeleton-box" style="width:100%;height:320px;"></span>
                                </div>
                                <div class="o-media__body mr-11">
                                <div class="o-vertical-spacing">
                                    <h3 class="blog-post__headline">
                                    <span class="skeleton-box" style="width:55%;"></span>
                                    </h3>
                                    <p>
                                    <span class="skeleton-box" style="width:80%;"></span>
                                    <span class="skeleton-box" style="width:90%;"></span>
                                    <span class="skeleton-box" style="width:83%;"></span>
                                    <span class="skeleton-box" style="width:80%;"></span>
                                    </p>
                                    <div class="blog-post__meta">
                                    <span class="skeleton-box" style="width:70px;"></span>
                                    </div>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </main>

                    <div v-if="data" class="z-[1] flex flex-col lg:flex-row items-center lg:items-stretch w-full gap-4 lg:gap-14">
                        <div class="w-full lg:w-1/2 rounded-[20px] lg:rounded-l-none">
                            <img class="w-full h-full rounded-[20px] lg:rounded-l-none object-cover" :src="homePagePic">
                        </div>
                        
                        <div class="flex flex-col gap-3 lg:mt-9 xl:mt-12 text-center lg:text-right lg:w-1/2">
                            <div class="flex flex-col lg:flex-row items-center gap-3 relative -mt-[55px] lg:mt-0 lg:-right-[103px]">
                                <div class="bg-secondary dark:bg-[#f0f3f7] w-[90px] h-[90px] lg:w-[105px] lg:h-[105px] rounded-full flex justifu-center items-center relative">
                                    <div class="absolute top-0 left-0 right-0 bottom-0 rounded-full" style="background-color: var(--primaryColor-20);"></div>
                                    <img class="block w-[75px] h-[75px] lg:w-[90px] lg:h-[90px] rounded-full object-cover m-auto z-[1]" :src="data.manager_pic" alt="Person">
                                </div>
                                
                                <h4 class="lg:text-[22px]">به مدیریت : <span class="font-semibold">{{ data.manager_name }}</span></h4>
                            </div>
                            
                            <div class="flex flex-col justify-between">
                                <p style="color: var(--primaryColor)" class="text-[13px] mb-2 mt-8 lg:mt-0 text-primaryOrange dark:text-bluePrimary lg:text-2xl">{{ data.manager_activity }}</p>
                                <p class="text-[#DCDCDC] dark:text-black text-[10px] lg:text-lg lg:py-8">{{ data.manager_description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="-mt-8 mb-8 md:mb-28 md:-mt-0">
            <div class="container m-auto">
                <h2 class="text-center mb-8 md:text-2xl md:font-extrabold md:mb-12">اعضاء مشاورین املاک هوم لند</h2>
                <div class="swiper text-center lg:px-4">
                    <div class="swiper-wrapper">
                        <div v-for="person in dataConsultants" :key="person.id" class="swiper-slide">
                            <div style="background-color: var(--primaryColor-20)" class="bg-primary dark:bg-[#f0f3f7] rounded-2xl flex flex-col justify-center items-center p-5 gap-3">
                                <img style="border-color: var(--primaryColor)" class="rounded-full border-primaryOrange dark:border-bluePrimary border-2 w-11 h-11 lg:w-24 lg:h-24 lg:border-4 object-cover" :src="person.picture">
                                <p class="text-[10px] font-bold lg:text-base">{{ person.full_name }}</p>
                                <p class="text-[10px] text-graytext font-bold lg:text-base">{{ person.activity_type }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="personsPrev hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:top-[35%] lg:left-0 lg:z-10 lg:bg-[#393e46] lg:bg-opacity-50 lg:w-12 lg:h-12 lg:rounded-full">
                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.65973 17.8277C9.97038 17.5171 9.99862 17.031 9.74446 16.6884L9.65973 16.5903L2.11218 9.04232L9.65973 1.49437C9.97038 1.18372 9.99862 0.697615 9.74446 0.355068L9.65973 0.256929C9.34909 -0.0537148 8.86298 -0.081955 8.52044 0.172209L8.4223 0.256929L0.255631 8.4236C-0.0550127 8.73424 -0.0832539 9.22035 0.17091 9.5629L0.255631 9.66103L8.4223 17.8277C8.76401 18.1694 9.31803 18.1694 9.65973 17.8277Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="personsNext hidden lg:flex lg:justify-center lg:items-center lg:absolute lg:top-[35%] lg:right-0 lg:z-10 lg:bg-[#393e46] lg:bg-opacity-50 lg:w-12 lg:h-12 lg:rounded-full">
                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.256282 17.8267C-0.0543628 17.5161 -0.0826032 17.03 0.17156 16.6874L0.256282 16.5893L7.80383 9.04134L0.256282 1.49339C-0.0543628 1.18275 -0.0826032 0.696638 0.17156 0.354091L0.256282 0.255953C0.566926 -0.0546908 1.05303 -0.0829318 1.39558 0.171232L1.49372 0.255953L9.66038 8.42262C9.97103 8.73327 9.99927 9.21937 9.74511 9.56192L9.66038 9.66006L1.49372 17.8267C1.15201 18.1684 0.59799 18.1684 0.256282 17.8267Z" fill="white"/>
                        </svg>                            
                    </div>
                    
                    <div class="swiper-paginationPersons my-9 lg:hidden"></div> 
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const homePagePic = ref("")
const homePage_header = ref("")
const data = ref("")
const dataConsultants = ref("")

onMounted(async () => {
    const resAbout = await fetch(`https://api.hypomelk.ir/real/AboutUs/`)
    const dataAbout = await resAbout.json()
    data.value = dataAbout[0]
    homePagePic.value = dataAbout[0].estate_picture

    const resConsultants = await fetch('https://api.hypomelk.ir/real/consultants/')
    const dataCon = await resConsultants.json()
    dataConsultants.value = dataCon;

    const response = await fetch("https://api.hypomelk.ir/real/HomePage/")
    const dataHomePage = await response.json()
    homePage_header.value = dataHomePage[0].homePage_header
});

useHead({
    titleTemplate: '%s-درباره ما',
})

onUpdated(() => {
    setTimeout(() => {
        new Swiper('.swiper', {
            direction: "horizontal",
            // loop: true,
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-paginationPersons',
                clickable: true,
            },
    
            breakpoints: {
                768: {slidesPerView: 4, spaceBetween: 10},
                1024: {slidesPerView: 5, spaceBetween: 20},
            },
    
            navigation: {
                nextEl: '.personsNext',
                prevEl: '.personsPrev',
            }
        })
    }, 10);
});

</script>