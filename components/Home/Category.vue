<template>
    <section class="container -mt-[90px] lg:mt-0 m-auto p-5 mb-15 md:py-10 lg:px-12 lg:relative">
            <div class="py-10 flex flex-col gap-5 lg:flex-row lg:bg-primary lg:dark:bg-[#E6E6E6] lg:-top-[120px] lg:p-1 lg:rounded-2xl lg:justify-between lg:absolute lg:left-0 lg:right-0 lg:w-11/12 lg:m-auto">
                <div class="relative w-full flex flex-col gap-5 lg:flex-row lg:gap-0 lg:w-4/6 before:-rotate-[35deg] after:rotate-[35deg]">
                    <!-- Region -->
                    <div @click="openListRegion" v-click-out-side="closeListRegion" class="bg-primary dark:bg-[#E6E6E6] w-full group cursor-pointer rounded-xl relative h-16 flex justify-between items-center px-5 lg:justify-around lg:p-0 lg:relative lg:after:absolute lg:after:left-0  lg:after:w-[1px] lg:after:h-7 lg:after:bg-graytext lg:dark:after:bg-[#cbcbcb]">
                        <span id="selectName">منطقه شما:</span>
                        
                        <div class="flex items-center gap-2">
                            <span dir="ltr" class="w-5 whitespace-nowrap">{{ region ? region : 'انتخاب کنید' }}</span>
                            
                            <span class="searchListSvg w-6 relative after:absolute after:w-3 after:bg-white dark:after:bg-graytext after:h-[2px] after:right-[10px] before:right-0 before:absolute before:w-3 before:origin-left after:origin-right before:bg-white dark:before:bg-graytext before:h-[2px] after:rounded-full before:rounded-full before:transition-all after:transition-all before:duration-300 after:duration-300 group-hover:before:-rotate-[35deg] group-hover:after:rotate-[35deg]"></span>
                        </div>

                        <div v-show="openRegionList" class="searchLists absolute z-10 top-[69px] left-0 right-0 shadow-lg bg-[#525050] dark:bg-[#dfdfdf] rounded-md h-[220px] overflow-y-scroll overflow-x-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 py-2">
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="" class="hover:opacity-80 transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="آمل" class="hover:opacity-80 transition-all duration-300 py-2">آمل</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="واز" class="hover:opacity-80 transition-all duration-300 py-2">واز</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="جاده نور" class="hover:opacity-80 transition-all duration-300 py-2">جاده نور</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="امام رضا" class="hover:opacity-80 transition-all duration-300 py-2">امام رضا</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="هراز" class="hover:opacity-80 transition-all duration-300 py-2">هراز</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectRegion" valueItem="گزناسرا" class="hover:opacity-80 transition-all duration-300 py-2 pb-0">گزناسرا</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Estate_type -->
                    <div @click="openListEstateType" v-click-out-side="closeListEstate" class="bg-primary dark:bg-[#E6E6E6] w-full group cursor-pointer rounded-xl relative h-16 flex justify-between items-center px-5 lg:justify-around lg:p-0 lg:relative lg:after:absolute lg:after:left-0  lg:after:w-[1px] lg:after:h-7 lg:after:bg-graytext lg:dark:after:bg-[#cbcbcb]">
                        <span id="selectName">نوع ملک</span>

                        <div class="flex gap-2 items-center">
                            <span dir="ltr" class="whitespace-nowrap w-5">{{ estateChange(estate_type) }}</span>

                            <span class="searchListSvg w-6 relative after:absolute after:w-3 after:bg-white dark:after:bg-graytext after:h-[2px] after:right-[10px] before:right-0 before:absolute before:w-3 before:origin-left after:origin-right before:bg-white dark:before:bg-graytext before:h-[2px] after:rounded-full before:rounded-full before:transition-all after:transition-all before:duration-300 after:duration-300 group-hover:before:-rotate-[35deg] group-hover:after:rotate-[35deg]"></span>
                        </div>

                        <div v-show="openEstateTypeList" class="searchLists absolute z-10 top-[69px] left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] rounded-lg h-[220px]  overflow-y-scroll overflow-x-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 py-2">
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="" class="hover:opacity-80 transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="V" class="hover:opacity-80 transition-all duration-300 py-2">خانه ویلایی</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="B" class="hover:opacity-80 transition-all duration-300 py-2">مغازه و واحد تجاری</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="L" class="hover:opacity-80 transition-all duration-300 py-2">زمین</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="A" class="hover:opacity-80 transition-all duration-300 py-2">آپارتمان</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectEstate_type" valueItem="H" class="hover:opacity-80 transition-all duration-300 py-2 pb-0">ویلا باغ</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Price__Lte&gte -->
                    <div class="bg-primary dark:bg-[#E6E6E6] group w-full cursor-pointer rounded-xl relative h-16">
                        
                        <div @click="openListPrice($refs.unitLte)" v-click-out-side="closeListPrice" class="w-full h-full flex justify-between items-center px-5 lg:justify-around lg:p-0">
                            <span id="selectName">بازه قیمتی</span>

                            <div class="flex gap-2 items-center">
                                <span v-if="unit_price__gte == '' && unit_price__lte == ''" class="whitespace-nowrap">انتخاب کنید</span>
                                <p v-if="unit_price__gte !== '' || unit_price__lte !== ''" class="whitespace-nowrap"><span>{{ unit_price__lte == '' ? 'انتخاب کنید' : unit_price__lte }}</span> ~ <span>{{ unit_price__gte == '' ? 'انتخاب کنید' : unit_price__gte }}</span></p>
    
                                <span class="relative w-6 after:absolute after:w-3 after:bg-white dark:after:bg-graytext after:h-[2px] after:right-[10px] before:right-0 before:absolute before:w-3 before:origin-left after:origin-right before:bg-white dark:before:bg-graytext before:h-[2px] after:rounded-full before:rounded-full before:transition-all after:transition-all before:duration-300 after:duration-300 group-hover:before:-rotate-[35deg] group-hover:after:rotate-[35deg]"></span>
                            </div>
                        </div>


                        <div v-show="isOpenList" :style="isOpenList ? 'height: 220px' : ''" class="searchLists absolute flex flex-col z-10 top-[69px] left-0 lg:left-auto right-0 bg-[#525050] dark:bg-[#dfdfdf] rounded-lg h-0 overflow-y-scroll overflow-x-hidden transition-all duration-300">
                            <div class="flex p-5 pb-0">
                                <p class="flex justify-between items-center w-full"><span class="w-1/2 bg-primary py-2 px-[25px] rounded-[6px] whitespace-nowrap dark:text-white">{{ unit_price__gte ? PN.convertEnToPe(unit_price__gte) : 'انتخاب کنید' }}</span><span class="px-3"> تا </span><span class="w-1/2 bg-primary py-2 px-[25px] rounded-[6px] whitespace-nowrap dark:text-white">{{ unit_price__lte ? PN.convertEnToPe(unit_price__lte) : 'انتخاب کنید' }}</span></p>
                            </div>
                            <div class="flex justify-between w-full">
                                <ul ref="unitLte" id="unitLte" class="flex p-5 flex-col gap-2 py-2 w-1/2">
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">مهم نیست</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="50000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">50 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="100000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">100 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="150000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">150 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="200000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">200 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">250 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="300000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">300 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="350000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">350 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="400000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">400 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="450000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">450 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">500 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="600000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">600 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="700000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">700 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="800000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">800 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="900000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">900 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="1000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="1250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫250 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="1500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="1750000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫750 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="2000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="2250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫250 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="2500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="2750000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫750 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="3000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">3 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="3500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">3٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="4000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">4 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="4500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">4٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="5000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">5 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="6000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">6 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="7000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">7 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="8000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">8 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="9000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">9 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceGte" valueItem="10000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">10 میلیارد</li>
                                </ul>
                                
                                <ul ref="unitGte" id="unitGte" class="unitGte flex p-5 flex-col gap-2 py-2 transition-all duration-300 opacity-0 -z-10 w-1/2">
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">مهم نیست</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="50000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">50 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="100000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">100 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="150000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">150 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="200000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">200 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">250 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="300000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">300 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="350000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">350 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="400000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">400 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="450000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">450 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">500 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="600000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">600 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="700000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">700 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="800000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">800 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="900000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">900 میلیون</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="1000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="1250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫250 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="1500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="1750000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">1٫750 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="2000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="2250000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫250 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="2500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="2750000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">2٫750 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="3000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">3 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="3500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">3٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="4000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">4 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="4500000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">4٫500 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="5000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">5 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="6000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">6 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="7000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">7 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="8000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">8 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="9000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">9 میلیارد</li>
                                    <li onmouseenter="this.style.color='var(--primaryColor)'" onmouseout="this.style.color=''" @click="selectPriceLte" valueItem="10000000000" class="hover:bg-[#474747] hover:rounded-[6px] pr-2 transition-all duration-300 py-2">10 میلیارد</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <NuxtLink :to="`propertyCode?region=${region}&estate_type=${estate_type}&unit_price__lte=${unit_price__lte}&unit_price__gte=${unit_price__gte}`" style="background-color: var(--primaryColor)" class="btn hover:opacity-80 w-full text-[17px] lg:w-1/6 py-8">جستجوی ملک</NuxtLink>
            </div>

            <div class="py-4">
                <p style="color: var(--primaryColor)" class="font-bold lg:text-xl">دسته بندی</p>
                <h2 class="text-white dark:text-black text-xl font-extrabold mt-2 mb-11 lg:text-4xl">دسته بندی ملک ها</h2>
            </div>

            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-9 pb-8 lg:grid-cols-3">
                <NuxtLink to="propertyCode?estate_type=A" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/Aparteman.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M14.625 24.75H5.625C3.375 24.75 2.25 23.625 2.25 21.375V12.375C2.25 10.125 3.375 9 5.625 9H11.25V21.375C11.25 23.625 12.375 24.75 14.625 24.75Z" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3737 4.5C11.2837 4.8375 11.25 5.20875 11.25 5.625V9H5.625V6.75C5.625 5.5125 6.6375 4.5 7.875 4.5H11.3737Z" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.75 9V14.625" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.25 9V14.625" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.125 19.125H16.875C16.2562 19.125 15.75 19.6313 15.75 20.25V24.75H20.25V20.25C20.25 19.6313 19.7437 19.125 19.125 19.125Z" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 14.625V19.125" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.25 21.375V5.625C11.25 3.375 12.375 2.25 14.625 2.25H21.375C23.625 2.25 24.75 3.375 24.75 5.625V21.375C24.75 23.625 23.625 24.75 21.375 24.75H14.625C12.375 24.75 11.25 23.625 11.25 21.375Z" stroke="#F6E9E9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                     
                        <svg class="hidden dark:inline-block" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M14.625 24.75H5.625C3.375 24.75 2.25 23.625 2.25 21.375V12.375C2.25 10.125 3.375 9 5.625 9H11.25V21.375C11.25 23.625 12.375 24.75 14.625 24.75Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3737 4.5C11.2837 4.8375 11.25 5.20875 11.25 5.625V9H5.625V6.75C5.625 5.5125 6.6375 4.5 7.875 4.5H11.3737Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.75 9V14.625" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.25 9V14.625" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.125 19.125H16.875C16.2562 19.125 15.75 19.6313 15.75 20.25V24.75H20.25V20.25C20.25 19.6313 19.7437 19.125 19.125 19.125Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 14.625V19.125" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.25 21.375V5.625C11.25 3.375 12.375 2.25 14.625 2.25H21.375C23.625 2.25 24.75 3.375 24.75 5.625V21.375C24.75 23.625 23.625 24.75 21.375 24.75H14.625C12.375 24.75 11.25 23.625 11.25 21.375Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                     
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">آپارتمان</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>

                <NuxtLink to="propertyCode?estate_type=V" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/khaneVilayi.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M1.125 24.75H25.875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.252 24.7612V19.7437" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.2758 12.2513C20.9033 12.2513 19.8008 13.3538 19.8008 14.7263V17.28C19.8008 18.6525 20.9033 19.755 22.2758 19.755C23.6483 19.755 24.7508 18.6525 24.7508 17.28V14.7263C24.7508 13.3538 23.6483 12.2513 22.2758 12.2513Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.36328 24.75V6.78381C2.36328 4.52256 3.48834 3.38629 5.72709 3.38629H12.7358C14.9746 3.38629 16.0883 4.52256 16.0883 6.78381V24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.52539 9.28125H12.0942" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.52539 13.5H12.0942" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.28125 24.75V20.5312" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="dark:inline-block hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M1.125 24.75H25.875" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.252 24.7612V19.7437" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.2758 12.2513C20.9033 12.2513 19.8008 13.3538 19.8008 14.7263V17.28C19.8008 18.6525 20.9033 19.755 22.2758 19.755C23.6483 19.755 24.7508 18.6525 24.7508 17.28V14.7263C24.7508 13.3538 23.6483 12.2513 22.2758 12.2513Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.36328 24.75V6.78381C2.36328 4.52256 3.48834 3.38629 5.72709 3.38629H12.7358C14.9746 3.38629 16.0883 4.52256 16.0883 6.78381V24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.52539 9.28125H12.0942" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.52539 13.5H12.0942" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.28125 24.75V20.5312" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">خانه ویلایی</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>
                
                <NuxtLink to="propertyCode?estate_type=G" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/bagh.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.25 24.75H24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.31836 24.75L3.37461 11.2163C3.37461 10.53 3.70086 9.87758 4.24086 9.45008L12.1159 3.31881C12.9259 2.68881 14.0621 2.68881 14.8834 3.31881L22.7584 9.43882C23.3096 9.86632 23.6246 10.5188 23.6246 11.2163V24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M17.4375 12.375H9.5625C8.62875 12.375 7.875 13.1288 7.875 14.0625V24.75H19.125V14.0625C19.125 13.1288 18.3712 12.375 17.4375 12.375Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.25 18.2812V19.9688" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8125 8.4375H15.1875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="dark:inline-block hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.25 24.75H24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.31836 24.75L3.37461 11.2163C3.37461 10.53 3.70086 9.87758 4.24086 9.45008L12.1159 3.31881C12.9259 2.68881 14.0621 2.68881 14.8834 3.31881L22.7584 9.43882C23.3096 9.86632 23.6246 10.5188 23.6246 11.2163V24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M17.4375 12.375H9.5625C8.62875 12.375 7.875 13.1288 7.875 14.0625V24.75H19.125V14.0625C19.125 13.1288 18.3712 12.375 17.4375 12.375Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.25 18.2812V19.9688" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8125 8.4375H15.1875" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">باغ</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>
                
                <NuxtLink to="propertyCode?estate_type=L" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/zamin.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.16602 9.74999V7.04166C2.16602 4.34416 4.34352 2.16666 7.04102 2.16666H9.74935" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.25 2.16666H18.9583C21.6558 2.16666 23.8333 4.34416 23.8333 7.04166V9.74999" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.834 17.3333V18.9583C23.834 21.6558 21.6565 23.8333 18.959 23.8333H17.334" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.74935 23.8333H7.04102C4.34352 23.8333 2.16602 21.6558 2.16602 18.9583V16.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="dark:inline-block hidden" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.16602 9.74999V7.04166C2.16602 4.34416 4.34352 2.16666 7.04102 2.16666H9.74935" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.25 2.16666H18.9583C21.6558 2.16666 23.8333 4.34416 23.8333 7.04166V9.74999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.834 17.3333V18.9583C23.834 21.6558 21.6565 23.8333 18.959 23.8333H17.334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.74935 23.8333H7.04102C4.34352 23.8333 2.16602 21.6558 2.16602 18.9583V16.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">زمین</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>

                <NuxtLink to="propertyCode?estate_type=B" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/maghaze.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M14.063 24.7501H4.59055C3.28555 24.7501 2.2168 23.7039 2.2168 22.4214V5.72637C2.2168 2.77887 4.41055 1.44012 7.0993 2.75637L12.0943 5.20887C13.1743 5.73762 14.063 7.14387 14.063 8.33637V24.7501Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.7162 16.9426V21.1951C24.7162 23.6251 23.5912 24.7501 21.1612 24.7501H14.0625V11.7226L14.5913 11.8351L19.6537 12.9714L21.9375 13.4776C23.4225 13.8039 24.6375 14.5689 24.705 16.7289C24.7162 16.7964 24.7162 16.8639 24.7162 16.9426Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.1875 10.1251H10.0913" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.1875 14.6251H10.0913" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.6543 12.9714V16.5939C19.6543 17.9889 18.518 19.1251 17.123 19.1251C15.728 19.1251 14.5918 17.9889 14.5918 16.5939V11.8351L19.6543 12.9714Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.7055 16.7289C24.638 18.0564 23.5355 19.1251 22.1855 19.1251C20.7905 19.1251 19.6543 17.9889 19.6543 16.5939V12.9714L21.938 13.4776C23.423 13.8039 24.638 14.5689 24.7055 16.7289Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="dark:inline-block hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M14.063 24.7501H4.59055C3.28555 24.7501 2.2168 23.7039 2.2168 22.4214V5.72637C2.2168 2.77887 4.41055 1.44012 7.0993 2.75637L12.0943 5.20887C13.1743 5.73762 14.063 7.14387 14.063 8.33637V24.7501Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.7162 16.9426V21.1951C24.7162 23.6251 23.5912 24.7501 21.1612 24.7501H14.0625V11.7226L14.5913 11.8351L19.6537 12.9714L21.9375 13.4776C23.4225 13.8039 24.6375 14.5689 24.705 16.7289C24.7162 16.7964 24.7162 16.8639 24.7162 16.9426Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.1875 10.1251H10.0913" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.1875 14.6251H10.0913" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.6543 12.9714V16.5939C19.6543 17.9889 18.518 19.1251 17.123 19.1251C15.728 19.1251 14.5918 17.9889 14.5918 16.5939V11.8351L19.6543 12.9714Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24.7055 16.7289C24.638 18.0564 23.5355 19.1251 22.1855 19.1251C20.7905 19.1251 19.6543 17.9889 19.6543 16.5939V12.9714L21.938 13.4776C23.423 13.8039 24.638 14.5689 24.7055 16.7289Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">مغازه و واحد تجاری</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>
                
                <NuxtLink to="propertyCode?estate_type=H" class="relative rounded-xl h-48 lg:h-full overflow-hidden cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300">
                    <img src="/vilabagh.webp" class="w-full h-full object-cover">
                    <span class="absolute top-4 right-4 p-3 rounded-full bg-secondary dark:bg-whiteSecondary opacity-90">
                        <svg class="dark:hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.25 24.75H24.75" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.8863 24.7387L3.38626 24.7612L3.375 7.95375C3.375 7.2 3.75752 6.50246 4.37627 6.08621L8.87627 3.08248C9.63002 2.57623 10.62 2.57623 11.3737 3.08248L15.8737 6.08621C16.5037 6.50246 16.875 7.2 16.875 7.95375L16.8863 24.7387Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.4766 24.7613V20.25" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.5 13.5C21.2625 13.5 20.25 14.5125 20.25 15.75V18C20.25 19.2375 21.2625 20.25 22.5 20.25C23.7375 20.25 24.75 19.2375 24.75 18V15.75C24.75 14.5125 23.7375 13.5 22.5 13.5Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.375 15.75H16.875" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.125 24.75V20.5312" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.125 11.8125C11.057 11.8125 11.8125 11.057 11.8125 10.125C11.8125 9.19302 11.057 8.4375 10.125 8.4375C9.19302 8.4375 8.4375 9.19302 8.4375 10.125C8.4375 11.057 9.19302 11.8125 10.125 11.8125Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="dark:inline-block hidden" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M2.25 24.75H24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.8863 24.7387L3.38626 24.7612L3.375 7.95375C3.375 7.2 3.75752 6.50246 4.37627 6.08621L8.87627 3.08248C9.63002 2.57623 10.62 2.57623 11.3737 3.08248L15.8737 6.08621C16.5037 6.50246 16.875 7.2 16.875 7.95375L16.8863 24.7387Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.4766 24.7613V20.25" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.5 13.5C21.2625 13.5 20.25 14.5125 20.25 15.75V18C20.25 19.2375 21.2625 20.25 22.5 20.25C23.7375 20.25 24.75 19.2375 24.75 18V15.75C24.75 14.5125 23.7375 13.5 22.5 13.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.375 15.75H16.875" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.125 24.75V20.5312" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.125 11.8125C11.057 11.8125 11.8125 11.057 11.8125 10.125C11.8125 9.19302 11.057 8.4375 10.125 8.4375C9.19302 8.4375 8.4375 9.19302 8.4375 10.125C8.4375 11.057 9.19302 11.8125 10.125 11.8125Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <div class="absolute bottom-2 left-2 right-2 bg-secondary dark:bg-whiteSecondary opacity-90 flex justify-between p-4 rounded-xl text-white dark:text-black items-center">
                        <span class="text-sm font-bold lg:text-2xl">ویلا باغ</span>
                        <span class="text-graytext font-normal text-xs lg:text-sm"><span x-text="countType.toLocaleString('fa-ir')"></span> ملک</span>
                    </div>
                </NuxtLink>
            </div>
        </section>
</template>

<script setup>
import PN from "persian-number";
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';

const openRegionList = ref(false);
const openEstateTypeList = ref(false);
const isOpenList = ref(false);

const region = ref("")
const estate_type = ref("")
const unit_price__gte = ref("")
const unit_price__lte = ref("")

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

const estateChange = (estate_type) => {
    if(estate_type == 'V'){
        return 'خانه ویلایی'
    } else if (estate_type == 'G') {
        return 'باغ'
    } else if (estate_type == 'L') {
        return 'زمین'
    } else if (estate_type == 'A') {
        return 'آپارتمان'
    } else if (estate_type == 'B') {
        return 'مغازه و واحد تجاری'
    } else if (estate_type == 'H') {
        return 'ویلا باغ'
    } else{
        return 'انتخاب کنید'
    }
}

const openListRegion = () => {
    setTimeout(() => {
        openRegionList.value = !openRegionList.value
    },1)
}
const selectRegion = (e) => {
    region.value = e.target.getAttribute("valueItem")
    setTimeout(() => {
        openRegionList.value = false
    }, 5);
}
const openListEstateType = () => {
    setTimeout(() => {
        openEstateTypeList.value = !openEstateTypeList.value
    },1)
}
const selectEstate_type = (e) => {
    estate_type.value = e.target.getAttribute("valueItem")
    setTimeout(() => {
        openEstateTypeList.value = false
    }, 10);
}
const openListPrice = (priceLte) => {
    setTimeout(() => {
        isOpenList.value = !isOpenList.value;
        priceLte.classList.remove('opacity-0')
        priceLte.classList.remove('-z-10')
    }, 1)
}

const selectPriceGte = (e) => {
    unit_price__gte.value = e.target.getAttribute('valueItem');
    const unitGteElem = document.getElementById("unitGte");
    const unitLteElem = document.getElementById("unitLte");

    if(unit_price__gte.value != 'انتخاب کنید') {
        unitGteElem.classList.add('opacity-100')
        unitGteElem.classList.add('z-0')
        unitLteElem.classList.add('opacity-0')
        unitLteElem.classList.add('-z-10')
        unitGteElem.classList.remove('opacity-0')
        unitGteElem.classList.remove('-z-10')
    } else {
        unit_price__lte = 'انتخاب کنید'
        unitGteElem.classList.add('opacity-0')
        unitGteElem.classList.add('-z-10')
        unitLteElem.classList.remove('opacity-0')
        unitLteElem.classList.remove('-z-10')
        unitGteElem.classList.remove('opacity-100')
        unitGteElem.classList.remove('z-0')
    }
};

const selectPriceLte = (e) => {
    isOpenList.value = false;
    unit_price__lte.value = e.target.getAttribute('valueItem')
};

const closeListRegion = () => {
    openRegionList.value = false;
}
const closeListEstate = () => {
    openEstateTypeList.value = false;
}
const closeListPrice = () => {
    isOpenList.value = false;
}
</script>