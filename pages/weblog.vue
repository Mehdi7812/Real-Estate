<template>
    <HeaderViaBackground :pageName="'وبلاگ'" />


<main dir="rtl">
    <section>
        <div class="container m-auto px-2">
            <div class="flex flex-col lg:flex-row relative -top-20" :class="route.params.slug ? '' : 'gap-6'">
                <!-- Right Section -->
                <NuxtPage />
                
                <!-- Left Section -->
                <WeblogLeftSection />
            </div>
        </div>
    </section>
    
    <section>
        <div class="container m-auto md:my-32 px-4">
            <a href="/propertyCode?unit_price__gte=7000000000" class="relative mb-10 md:my-28 rounded-xl overflow-hidden dark:text-white lg:mt-0 block">
                <div class=" w-full h-[117px] lg:h-[223px]">
                    <div style="background: linear-gradient(to right, var(--primaryColor) 55%, transparent)" class="absolute left-0 top-0 bottom-0 w-5/6 bg-gradient-to-r from-primaryOrange via-primaryOrange after:from-bluePrimary after:via-bluePrimary z-10"></div>

                    <div class="bg-cover bg-right h-full w-3/5" style="background-image: url(/weblog2Img6.webp);"></div>
                    <div class="flex items-center gap-4 absolute left-[10%] top-0 bottom-0 z-20 cursor-pointer">
                        <h3 class="w-20 text-center text-sm font-extrabold lg:text-3xl lg:w-48">خرید ویلاهای لوکس و لاکچری</h3>

                        <svg class="md:w-9 md:h-9" width="24" height="24" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7935 0.717834H4.20683C1.78016 0.717834 0.333496 2.1645 0.333496 4.59117V10.1712C0.333496 12.6045 1.78016 14.0512 4.20683 14.0512H9.78683C12.2135 14.0512 13.6602 12.6045 13.6602 10.1778V4.59117C13.6668 2.1645 12.2202 0.717834 9.7935 0.717834ZM11.0002 7.8845H4.20683L6.2135 9.89117C6.40683 10.0845 6.40683 10.4045 6.2135 10.5978C6.1135 10.6978 5.98683 10.7445 5.86016 10.7445C5.7335 10.7445 5.60683 10.6978 5.50683 10.5978L2.64683 7.73783C2.5535 7.6445 2.50016 7.51783 2.50016 7.3845C2.50016 7.25117 2.5535 7.1245 2.64683 7.03117L5.50683 4.17117C5.70016 3.97783 6.02016 3.97783 6.2135 4.17117C6.40683 4.3645 6.40683 4.6845 6.2135 4.87783L4.20683 6.8845H11.0002C11.2735 6.8845 11.5002 7.11117 11.5002 7.3845C11.5002 7.65783 11.2735 7.8845 11.0002 7.8845Z" fill="white"/>
                        </svg>     
                    </div>
                </div>
            </a>
        </div>
    </section>
</main>
</template>

<script setup>
const route = useRoute();

useHead({
    titleTemplate: '%s-وبلاگ',
})
</script>