<template>
    <section class="mb-12 dark:text-white md:py-10 lg:px-12 lg:mb-0 lg:pb-0">
        <div class="container m-auto p-5">
            <!-- خرید ویلاهای جنگلی -->
            <NuxtLink to="propertyCode?jungle=true" class="relative my-28 rounded-xl overflow-hidden hidden sm:block lg:mt-10">
                <div class=" w-full h-[117px] lg:h-[223px]">
                    <div style="background: linear-gradient(to right, var(--primaryColor) 55%, transparent)" class="absolute left-0 top-0 bottom-0 w-5/6 bg-gradient-to-r from-primaryOrange via-primaryOrange after:from-bluePrimary after:via-bluePrimary z-10"></div>
                    <div class="bg-cover bg-right h-full w-3/5" style="background-image: url(favImg1.webp);"></div>
                    <div class="flex items-center absolute left-[10%] top-0 bottom-0 z-20 cursor-pointer">
                        <h3 class="w-20 text-center dark:text-white text-sm font-extrabold lg:text-3xl lg:w-40">خرید ویلاهای جنگلی</h3>

                        <svg class="w-5 h-5 md:w-10 md:h-10" width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7935 0.717834H4.20683C1.78016 0.717834 0.333496 2.1645 0.333496 4.59117V10.1712C0.333496 12.6045 1.78016 14.0512 4.20683 14.0512H9.78683C12.2135 14.0512 13.6602 12.6045 13.6602 10.1778V4.59117C13.6668 2.1645 12.2202 0.717834 9.7935 0.717834ZM11.0002 7.8845H4.20683L6.2135 9.89117C6.40683 10.0845 6.40683 10.4045 6.2135 10.5978C6.1135 10.6978 5.98683 10.7445 5.86016 10.7445C5.7335 10.7445 5.60683 10.6978 5.50683 10.5978L2.64683 7.73783C2.5535 7.6445 2.50016 7.51783 2.50016 7.3845C2.50016 7.25117 2.5535 7.1245 2.64683 7.03117L5.50683 4.17117C5.70016 3.97783 6.02016 3.97783 6.2135 4.17117C6.40683 4.3645 6.40683 4.6845 6.2135 4.87783L4.20683 6.8845H11.0002C11.2735 6.8845 11.5002 7.11117 11.5002 7.3845C11.5002 7.65783 11.2735 7.8845 11.0002 7.8845Z" fill="white"/>
                        </svg>     
                    </div>
                </div>
            </NuxtLink>

            <!-- خرید ویلاهای ساحلی sm -->
            <div class="relative my-20 rounded-xl overflow-hidden sm:hidden">
                <NuxtLink to="propertyCode?beach=true" class="block w-full h-[117px] bg-no-repeat bg-right" style="background-image: url(favImg2.webp);">
                    <div style="background: linear-gradient(to right, var(--primaryColor) 55%, transparent)" class="absolute left-0 top-0 bottom-0 w-5/6 bg-gradient-to-r from-primaryOrange via-primaryOrange after:from-bluePrimary after:via-bluePrimary z-10"></div>
                    <div class="flex items-center absolute left-[10%] top-0 bottom-0 z-20 cursor-pointer">
                        <h3 class="w-20 text-center text-sm font-extrabold">خرید ویلاهای ساحلی</h3>

                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7935 0.717834H4.20683C1.78016 0.717834 0.333496 2.1645 0.333496 4.59117V10.1712C0.333496 12.6045 1.78016 14.0512 4.20683 14.0512H9.78683C12.2135 14.0512 13.6602 12.6045 13.6602 10.1778V4.59117C13.6668 2.1645 12.2202 0.717834 9.7935 0.717834ZM11.0002 7.8845H4.20683L6.2135 9.89117C6.40683 10.0845 6.40683 10.4045 6.2135 10.5978C6.1135 10.6978 5.98683 10.7445 5.86016 10.7445C5.7335 10.7445 5.60683 10.6978 5.50683 10.5978L2.64683 7.73783C2.5535 7.6445 2.50016 7.51783 2.50016 7.3845C2.50016 7.25117 2.5535 7.1245 2.64683 7.03117L5.50683 4.17117C5.70016 3.97783 6.02016 3.97783 6.2135 4.17117C6.40683 4.3645 6.40683 4.6845 6.2135 4.87783L4.20683 6.8845H11.0002C11.2735 6.8845 11.5002 7.11117 11.5002 7.3845C11.5002 7.65783 11.2735 7.8845 11.0002 7.8845Z" fill="white"/>
                        </svg>     
                    </div>
                </NuxtLink>
            </div> 

            <!-- Arrow navigation -->
            <div class="flex justify-between">
                <div>
                    <p style="color: var(--primaryColor)" class="lg:text-xl">بهشت خودت را پیدا کن</p>
                    <h2 class="text-xl dark:text-black font-extrabold mt-2 mb-8 lg:text-4xl">منطقه های محبوب</h2>
                </div> 
            </div>

            <div class="hidden lg:grid grid-cols-4 grid-rows-2 gap-5" style="direction: ltr;">
                <NuxtLink to="propertyCode?city=چمستان" class="relative cursor-pointer flex justify-center items-center h-64 rounded-xl overflow-hidden bg-cover bg-no-repeat" style="background-image: url(/chamestan.webp);">
                    <span class="backdrop-brightness-50 w-full h-full text-center leading-[256px] text-2xl font-bold hover:backdrop-brightness-100 transition-all duration-300">چمستان</span>
                </NuxtLink>

                <NuxtLink to="propertyCode?city=سرخ رود" class="relative cursor-pointer flex justify-center items-center h-64 rounded-xl overflow-hidden bg-cover bg-no-repeat" style="background-image: url(/sorkhRood.webp);">
                    <span class="backdrop-brightness-50 w-full h-full text-center leading-[256px] text-2xl font-bold hover:backdrop-brightness-100 transition-all duration-300">سرخ رود</span>
                </NuxtLink>

                <NuxtLink to="propertyCode?city=نوشهر" x-data="favouritePlaces('نوشهر')" class="col-span-2 row-span-2 relative cursor-pointer rounded-xl overflow-hidden bg-cover bg-no-repeat" style="background-image: url(/noshahr.webp);">
                    <div class="flex flex-col justify-end h-full items-end p-6 after:transition-all after:duration-300 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-36 after:rounded-b-[12px] hover:after:h-0">
                        <span class="text-3xl font-bold z-10">{{ favouritePlaceCount('نوشهر') }} نوشهر</span>
                        <p class="text-lg z-10"><span>{{ favouritePlaceCount('نوشهر') }}</span> ملک ثبت شده </p>
                    </div>
                </NuxtLink>

                <NuxtLink to="propertyCode?city=نور" class="relative cursor-pointer flex justify-center items-center h-64 rounded-xl overflow-hidden bg-cover bg-no-repeat" style="background-image: url(/noor.webp);">
                    <span class="backdrop-brightness-50 w-full h-full text-center leading-[256px] text-2xl font-bold hover:backdrop-brightness-100 transition-all duration-300">نور</span>
                </NuxtLink>

                <NuxtLink to="propertyCode?city=متل قو" class="relative cursor-pointer flex justify-center items-center h-64 rounded-xl overflow-hidden bg-cover bg-no-repeat" style="background-image: url(/motelGhoo.webp);">
                    <span class="backdrop-brightness-50 w-full h-full text-center leading-[256px] text-2xl font-bold hover:backdrop-brightness-100 transition-all duration-300">متل قو</span>
                </NuxtLink>
            </div>

            <!-- خرید ویلاهای ساحلی lg -->
            <NuxtLink to="propertyCode?beach=true" class="hidden relative my-24 rounded-xl overflow-hidden lg:block">
                <div class=" w-full h-[223px]">
                    <div style="background: linear-gradient(to right, var(--primaryColor) 55%, transparent)" class="absolute left-0 top-0 bottom-0 w-5/6 bg-gradient-to-r from-primaryOrange via-primaryOrange after:from-bluePrimary after:via-bluePrimary z-10"></div>
                    <div class="bg-right bg-cover h-full w-3/5" style="background-image: url(favImg2.webp);"></div>
                    
                    <div class="flex items-center absolute left-[10%] top-0 bottom-0 z-20 cursor-pointer">
                        <h3 class="w-20 text-center text-sm dark:text-white font-bold lg:text-3xl lg:w-40">خرید ویلاهای ساحلی</h3>

                        <svg width="40" height="40" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7935 0.717834H4.20683C1.78016 0.717834 0.333496 2.1645 0.333496 4.59117V10.1712C0.333496 12.6045 1.78016 14.0512 4.20683 14.0512H9.78683C12.2135 14.0512 13.6602 12.6045 13.6602 10.1778V4.59117C13.6668 2.1645 12.2202 0.717834 9.7935 0.717834ZM11.0002 7.8845H4.20683L6.2135 9.89117C6.40683 10.0845 6.40683 10.4045 6.2135 10.5978C6.1135 10.6978 5.98683 10.7445 5.86016 10.7445C5.7335 10.7445 5.60683 10.6978 5.50683 10.5978L2.64683 7.73783C2.5535 7.6445 2.50016 7.51783 2.50016 7.3845C2.50016 7.25117 2.5535 7.1245 2.64683 7.03117L5.50683 4.17117C5.70016 3.97783 6.02016 3.97783 6.2135 4.17117C6.40683 4.3645 6.40683 4.6845 6.2135 4.87783L4.20683 6.8845H11.0002C11.2735 6.8845 11.5002 7.11117 11.5002 7.3845C11.5002 7.65783 11.2735 7.8845 11.0002 7.8845Z" fill="white"/>
                        </svg>     
                    </div>
                </div>
            </NuxtLink>

            <div class="swiper swiperFavourite lg:!hidden">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"> 
                        <NuxtLink to="propertyCode?city=متل قو" class="h-72 bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden flex flex-col justify-end pr-5 pb-3 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:rounded-b-[12px]" style="background-image: url(motelGhoo.webp);">
                            <p class="font-extrabold text-[15px] z-10">متل قو</p>
                            <p class="text-lg z-10"><span>{{ favouritePlaceCount('متل قو') }}</span> ملک ثبت شده </p>
                        </NuxtLink>
                    </div>
                    
                    <div class="swiper-slide"> 
                        <NuxtLink to="propertyCode?city=نور" class="h-72 bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden flex flex-col justify-end pr-5 pb-3 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:rounded-b-[12px]" style="background-image: url(/noor.webp);">
                            <p class="font-extrabold text-[15px] z-10">نور</p>
                            <p class="text-lg z-10"><span>{{ favouritePlaceCount('نور') }}</span> ملک ثبت شده </p>
                        </NuxtLink>
                    </div>

                    <div class="swiper-slide">
                        <NuxtLink to="propertyCode?city=چمستان" class="h-72 bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden flex flex-col justify-end pr-5 pb-3 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:rounded-b-[12px]" style="background-image: url(/chamestan.webp);">
                            <p class="font-extrabold text-[15px] z-10">چمستان</p>
                            <p class="text-lg z-10"><span>{{ favouritePlaceCount('چمستان') }}</span> ملک ثبت شده </p>
                        </NuxtLink>
                    </div>

                    <div class="swiper-slide">
                        <NuxtLink to="propertyCode?city=سرخ رود" class="h-72 bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden flex flex-col justify-end pr-5 pb-3 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:rounded-b-[12px]" style="background-image: url(/sorkhRood.webp);">
                            <p class="font-extrabold text-[15px] z-10">سرخ رود</p>
                            <p class="text-lg z-10"><span>{{ favouritePlaceCount('سرخ رود') }}</span> ملک ثبت شده </p>
                        </NuxtLink>
                    </div>

                    <div class="swiper-slide">
                        <NuxtLink to="propertyCode?city=نوشهر" class="h-72 bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden flex flex-col justify-end pr-5 pb-3 after:bg-gradient-to-t after:from-black50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-16 after:rounded-b-[12px]" style="background-image: url(/noshahr.webp);">
                            <p class="font-extrabold text-[15px] z-10">نوشهر</p>
                            <p class="text-lg z-10"><span>{{ favouritePlaceCount('نوشهر') }}</span> ملک ثبت شده </p>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="flex gap-2 justify-center mt-5">
                <div class="lg:hidden">
                    <a style="background-color: var(--primaryColor);" class="swiperFavImg1-next hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300" href="#">
                        <svg width="20" height="20" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7144 12L18.4286 7L12.7144 2" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 7H18.4286" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>
                </div>

                <div class="lg:hidden">
                    <a style="background-color: var(--primaryColor);" class="swiperFavImg1-prev hover:opacity-80 p-3 lg:p-5 flex justify-center items-center rounded-lg hover:bg-hoverPrimaryOrange transition-all duration-300" href="#">
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
const favouritePlaceCount = async (city) => {
    const response = await fetch(`https://api.hypomelk.ir/real/cases/?city=${city}`)
    const data = await response.json()

    return data.count
};

onMounted(() => {
    // const swiperFavourite = new Swiper(".swiperFavourite", {
    //     direction: "horizontal",
    //     // loop: true,
    //     spaceBetween: 20,

    //     navigation: {
    //         nextEl: ".swiperFavImg1-next",
    //         prevEl: ".swiperFavImg1-prev",
    //     },

    //     breakpoints: {
    //         768: {slidesPerView: 2, spaceBetween: 10},
    //         1024: {slidesPerView: 3, spaceBetween: 10}
    //     }
    // });
});
</script>