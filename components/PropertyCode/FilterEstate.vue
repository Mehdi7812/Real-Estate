<template>
    <div class="lg:w-2/6 p-5">
        <div class=" sticky top-10">
            <h4 class="pr-5">فیلتر جستجو</h4>
            <div x-data="filterSearch" class="flex flex-col gap-3 py-6">
                <!-- متراژ -->
                <!-- land_size__lte & land_size__gte -->
                <div class="flex gap-3">
                    <!-- land_size__gte بزرگتر از -->
                    <div ref="landSizeGte" @click="openList($refs.landSizeGte)" class="rounded-lg w-1/2 cursor-pointer relative">
                        <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                            <p class="text-sm">متراژ : <span class="text-graytext text-sm"> از<span class="mr-3">{{ land_size__gte ? land_size__gte : 'انتخاب کنید' }}</span></span> </p>

                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        
                        <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 shadow-lg rounded-lg bg-[#525050] dark:bg-[#dfdfdf] h-0 overflow-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 pt-6">
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="75" class="hover:text-primaryOrange transition-all duration-300 py-2">از 75 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="100" class="hover:text-primaryOrange transition-all duration-300 py-2">از 100 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="125" class="hover:text-primaryOrange transition-all duration-300 py-2">از 125 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="150" class="hover:text-primaryOrange transition-all duration-300 py-2">از 150 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="175" class="hover:text-primaryOrange transition-all duration-300 py-2">از 175 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="200" class="hover:text-primaryOrange transition-all duration-300 py-2">از 200 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="250" class="hover:text-primaryOrange transition-all duration-300 py-2">از 250 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="300" class="hover:text-primaryOrange transition-all duration-300 py-2">از 300 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="400" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 400 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="500" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 500 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="600" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 600 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="700" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 700 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="800" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 800 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="900" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 900 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_gte" valueItem="1000" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">از 1 هزار متر</li>
                            </ul>
                        </div>
                    </div>

                    <!-- land_size__lte کوچکتر از -->
                    <div ref="landSizeLte" @click="openList($refs.landSizeLte)" class="rounded-lg w-1/2 cursor-pointer relative">
                        <div class="inputFilter flex justify-between items-center p-5 bg-[#525050] dark:bg-[#e6e6e6] relative rounded-lg">
                            <p class="text-sm">متراژ : <span class="text-graytext text-sm"> تا<span class="mr-3">{{ land_size__lte ? land_size__lte : 'انتخاب کنید' }}</span></span> </p>

                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        
                        <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 rounded-lg right-0 bg-[#525050] shadow-lg dark:bg-[#dfdfdf] h-0 overflow-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 pt-6">
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="75" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 75 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="100" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 100 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="125" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 125 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="150" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 150 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="175" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 175 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="200" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 200 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="250" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 250 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="300" class="hover:text-primaryOrange transition-all duration-300 py-2">تا 300 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="400" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 400 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="500" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 500 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="600" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 600 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="700" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 700 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="800" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 800 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="900" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 900 متر</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectland_size_lte" valueItem="1000" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">تا 1 هزار متر</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- نوع ملک -->
                <!-- estate_type -->
                <div ref="estateType" @click="openList($refs.estateType)" class="cursor-pointer relative rounded-lg">
                    <div class="inputFilter flex justify-between items-center p-5 rounded-lg relative bg-[#525050] dark:bg-[#e6e6e6]">
                        <p class="text-sm">نوع ملک</p>

                        <p class="flex items-center gap-3">
                            <span class="text-sm text-graytext">{{ estateChange(estate_type) }}</span>
                            <svg class="transition-all duration-300 -rotate-90 svgElemsList text-[#3f3f3f]" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                           
                        </p>
                    </div>

                    <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                        <ul class="flex flex-col gap-2 p-5 pt-6">
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">انتخاب کنید</li>
                            <hr class="border-graytext bg-[#3f3f3f]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="V" class="hover:text-primaryOrange transition-all duration-300 py-2">خانه ویلایی</li>
                            <hr class="border-graytext bg-[#3f3f3f]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="G" class="hover:text-primaryOrange transition-all duration-300 py-2">باغ</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="A" class="hover:text-primaryOrange transition-all duration-300 py-2">آپارتمان</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="L" class="hover:text-primaryOrange transition-all duration-300 py-2">زمین</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="B" class="hover:text-primaryOrange transition-all duration-300 py-2">مغازه و واحد تجاری</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectestate_type" valueItem="H" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">ویلا باغ</li>
                        </ul>
                    </div>
                </div>

                <!-- قیمت -->
                <!-- unit_price__gte & unit_price__lte -->
                <div class="flex gap-3">
                    <!-- unit_price__gte بزرگتر از -->
                    <div ref="priceGte" @click="openList($refs.priceGte)" class="rounded-lg w-1/2 cursor-pointer relative">
                        <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                            <p class="text-sm">قیمت : <span class="text-graytext text-sm"> از<span class="mr-3">{{ unit_price__gte ? unit_price__gte : 'انتخاب کنید' }}</span></span> </p>

                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        
                        <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 pt-6">
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="50000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 50 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="100000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 100 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="150000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 150 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="200000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 200 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 250 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="300000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 300 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="350000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 350 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="400000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 400 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="450000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 450 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 500 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="600000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 600 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="700000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 700 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="800000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 800 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="900000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 900 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="1000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 1 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="1250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 1٫250 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="1500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 1٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="1750000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 1٫750 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="2000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 2 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="2250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 2٫250 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="2500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 2٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="2750000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 2٫750 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="3000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 3 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="3500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 3٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="4000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 4 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="4500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 4٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="5000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 5 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="6000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 6 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="7000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 7 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="8000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 8 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="9000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 9 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__gte" valueItem="10000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">از 10 میلیارد</li>
                            </ul>
                        </div>
                    </div>

                    <!-- کوچکتر از unit_price__lte -->
                    <div ref="priceLte" @click="openList($refs.priceLte)" class="rounded-lg w-1/2 cursor-pointer relative">
                        <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                            <p class="text-sm">قیمت : <span class="text-graytext text-sm"> تا<span class="mr-3">{{ unit_price__lte ? unit_price__lte : 'انتخاب کنید' }}</span></span> </p>

                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        
                        <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 pt-6">
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">مهم نیست</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="50000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 50 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="100000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 100 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="150000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 150 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="200000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 200 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 250 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="300000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 300 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="350000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 350 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="400000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 400 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="450000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 450 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 500 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="600000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 600 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="700000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 700 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="800000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 800 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="900000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 900 میلیون</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="1000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 1 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="1250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 1٫250 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="1500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 1٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="1750000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 1٫750 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="2000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 2 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="2250000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 2٫250 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="2500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 2٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="2750000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 2٫750 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="3000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 3 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="3500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 3٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="4000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 4 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="4500000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 4٫500 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="5000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 5 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="6000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 6 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="7000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 7 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="8000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 8 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="9000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 9 میلیارد</li>
                                <hr class="border-[#c5c5c5]" />
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectunit_price__lte" valueItem="10000000000" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">تا 10 میلیارد</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- تعداد خواب -->
                <!-- rooms__lte -->
                <div ref="roomsLte" @click="openList($refs.roomsLte)" class="cursor-pointer relative rounded-lg">
                    <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                        <p class="text-sm">تعداد خواب</p>

                        <p class="flex items-center gap-3">
                            <span class="text-sm text-graytext">{{ rooms__lte ? rooms__lte : 'انتخاب کنید' }}</span>
                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                            
                        </p>
                    </div>

                    <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                        <ul class="flex flex-col gap-2 p-5 pt-6">
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">مهم نیست</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="1" class="hover:text-primaryOrange transition-all duration-300 py-2">1 خوابه</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="2" class="hover:text-primaryOrange transition-all duration-300 py-2">2 خوابه</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="3" class="hover:text-primaryOrange transition-all duration-300 py-2">3 خوابه</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="4" class="hover:text-primaryOrange transition-all duration-300 py-2">4 خوابه</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="5" class="hover:text-primaryOrange transition-all duration-300 py-2">5 خوابه</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectrooms__lte" valueItem="5" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">5 خوابه به بالا</li>
                        </ul>
                    </div>
                </div>

                <!-- سن بنا -->
                <!-- building_age -->
                <div ref="buildAge" @click="openList($refs.buildAge)" class="rounded-lg cursor-pointer relative">
                    <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                        <p class="text-sm">سن بنا</p>

                        <p class="flex items-center gap-3">
                            <span class="text-sm text-graytext">{{ building_age ? building_age : 'انتخاب کنید' }}</span>
                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                            
                        </p>
                    </div>

                    <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                        <ul class="flex flex-col gap-2 p-5 pt-6">
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">مهم نیست</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="1" class="hover:text-primaryOrange transition-all duration-300 py-2">نوساز</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="3" class="hover:text-primaryOrange transition-all duration-300 py-2">3 سال</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="5" class="hover:text-primaryOrange transition-all duration-300 py-2">5 سال</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="10" class="hover:text-primaryOrange transition-all duration-300 py-2">10 سال</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="15" class="hover:text-primaryOrange transition-all duration-300 py-2">15 سال</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="20" class="hover:text-primaryOrange transition-all duration-300 py-2">20 سال</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectbuilding_age" valueItem="30" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">20 سال</li>
                        </ul>
                    </div>
                </div>

                <!-- نوع سند -->
                <!-- document_type -->
                <div ref="docType" @click="openList($refs.docType)" class="rounded-lg cursor-pointer relative">
                    <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                        <p class="text-sm">نوع سند</p>

                        <p class="flex items-center gap-3">
                            <span class="text-sm text-graytext">{{ documentTypeChange(document_type) }}</span>
                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                            
                        </p>
                    </div>

                    <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                        <ul class="flex flex-col gap-2 p-5 pt-6">
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="" class="hover:text-primaryOrange transition-all duration-300 py-2">انتخاب کنید</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="E" class="hover:text-primaryOrange transition-all duration-300 py-2">ملکی</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="A" class="hover:text-primaryOrange transition-all duration-300 py-2">وکالتی</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="P" class="hover:text-primaryOrange transition-all duration-300 py-2">قولنامه ای</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="EN" class="hover:text-primaryOrange transition-all duration-300 py-2">اوقاف</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="L" class="hover:text-primaryOrange transition-all duration-300 py-2">سرقفلی</li>
                            <hr class="border-[#c5c5c5]" />
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectdocument_type" valueItem="C" class="hover:text-primaryOrange transition-all duration-300 py-2 pb-0">مشاع</li>
                        </ul>
                    </div>
                </div>

                <!-- استان -->
                <!-- province -->
                <div ref="provinceElem" @click="openList($refs.provinceElem)" class="rounded-lg cursor-pointer relative">
                    <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                        <p class="text-sm">استان</p>

                        <p class="flex items-center gap-3">
                            <span class="text-sm text-graytext">{{ province ? province : 'انتخاب کنید' }}</span>
                            <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                                                            
                        </p>
                    </div>

                    <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                        <ul class="flex flex-col gap-2 p-5 pt-6">
                            <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectprovinceEmpty" value="انتخاب کنید" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">مهم نیست</li>
                            <li v-for="state in iranStates" onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectprovince" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">{{ state[0].name }}</li>
                        </ul>
                    </div>
                </div>

                <!-- شهر منطقه -->
                <!-- city & Region -->
                <div class="flex gap-3">
                    <!-- city -->
                    <div ref="cityElem" @click="openListCity($refs.cityElem)" class="rounded-lg w-1/2 cursor-pointer relative">
                        <div class="inputFilter flex justify-between items-center p-5 rounded-lg bg-[#525050] dark:bg-[#e6e6e6] relative">
                            <p class="text-sm">شهر</p>

                            <p class="flex items-center gap-3">
                                <span id="cityElem" class="text-sm text-graytext">{{ city ? city : 'انتخاب کنید' }}</span>
                                <svg class="transition-all duration-300 -rotate-90 svgElemsList" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="stroke-white dark:stroke-graytext" d="M9.46818 1.5144L5.9745 5.00808C5.5619 5.42068 4.88675 5.42068 4.47415 5.00808L0.980469 1.5144" stroke-width="1.28602" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                                           
                            </p>
                        </div>

                        <div class="listElems absolute overflow-y-scroll z-10 top-12 left-0 right-0 bg-[#525050] dark:bg-[#dfdfdf] shadow-lg rounded-lg h-0 overflow-hidden transition-all duration-300">
                            <ul class="flex flex-col gap-2 p-5 pt-6">
                                <li onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectcityEmpty" value="" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">مهم نیست</li>
                                <template v-for="state in iranStates">
                                    <li v-if="state[0].name == province" v-for="cities in state[0].city" onmouseover="this.style.color = 'var(--primaryColor)'" onmouseout="this.style.color = ''" @click="selectcity" class="hover:text-primaryOrange hover:bg-[#474747] hover:rounded-[6px] pr-2 dark:hover:text-bluePrimary transition-all duration-300 py-2">{{ cities }}</li>
                                </template>
                            </ul>
                        </div>
                    </div>

                    <!-- region -->
                    <input v-model="region" @change="changeUrl()" class="flex justify-between items-center pr-5 rounded-lg w-1/2 bg-[#525050] dark:bg-[#e6e6e6] relative outline-none" type="text" placeholder="منطقه شما: ">
                </div>

                <!-- Toggle Btns -->
                <div class="flex flex-col md:flex-row items-center md:gap-3 text-lg md:text-base">
                    <div class="flex justify-between items-center p-3 md:p-5 w-full md:w-1/2">
                        <label dir="ltr" for="viaImg" class="flex flex-wrap w-full justify-between items-center cursor-pointer">
                            <input v-model="image_status" :checked="image_status == 'true' && true" @change="changeUrl()" type="checkbox" id="viaImg" class="toggleBtn sr-only peer">
                            <div class="w-[55px] md:w-[46px] h-7 md:h-6 bg-primary relative border border-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[25px] md:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] md:after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[21px] after:w-[21px] md:after:h-[19px] md:after:w-[19px] after:transition-all peer-checked:bg-primaryOrange dark:peer-checked:bg-bluePrimary"></div>
                            <span>آگهی عکس دار</span>
                        </label>
                    </div>

                    <div class="flex justify-between items-center p-3 md:p-5 w-full md:w-1/2">
                        <label dir="ltr" for="buyPrice" class="flex flex-wrap w-full justify-between items-center cursor-pointer">
                            <input v-model="pre_payment_status" :checked="pre_payment_status == 'true' && true" @change="changeUrl()" type="checkbox" id="buyPrice" class="toggleBtn sr-only peer">
                            <div class="w-[55px] md:w-[46px] h-7 md:h-6 bg-primary relative border border-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[25px] md:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] md:after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-[21px] after:w-[21px] md:after:h-[19px] md:after:w-[19px] after:transition-all peer-checked:bg-primaryOrange dark:peer-checked:bg-bluePrimary"></div>
                            <span>پیش پرداخت</span>
                        </label>
                    </div>
                </div>

                <!-- اعمال فیلتر ها -->
                <NuxtLink :to="filterUrl" style="background-color: var(--primaryColor)" class="btn hover:opacity-80">اعمال فیلترها</NuxtLink>
            </div>

            <!-- جستجوهای اخیر -->
            <div class="flex flex-col gap-7 md:py-8">
                <h4 class="mb-2 md:text-xl">جستجوهای اخیر</h4>

                <NuxtLink v-for="item in dataRes" :to="`estateDetail/${item.id}`" onmouseover="this.style.backgroundColor = 'var(--primaryColor-20)'" onmouseout="this.style.backgroundColor = ''" class="flex gap-2 overflow-hidden rounded-xl md:rounded-[21px] hover:bg-secondary shadow-md dark:hover:bg-[#BEBEBE] transition-all duration-300 cursor-pointer">
                    <img class="rounded-xl h-32 w-32 object-cover overflow-hidden md:rounded-[21px] lg:w-4/5 lg:max-w-[200px]" :src="item.cover" />
                    <div class="flex flex-col justify-around">
                        <h5 class="text-xs md:text-base">{{ item.title }}</h5>

                        <p class="text-[9px] text-graytext md:text-xs"><span class="md:text-xl text-lg text-white dark:text-black ml-2" v-html="getNumber(item.unit_price)"></span> تومان </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import iranStates from '~/assets/iranStates/iranstates.json';

const dataRes = ref("")

const route = useRoute()

const estate_code = ref(route.query.estate_code ? route.query.estate_code : "")
const estate_type = ref(route.query.estate_type ? route.query.estate_type : "")
const document_type = ref(route.query.document_type ? route.query.document_type : "")
const unit_types = ref(route.query.unit_types ? route.query.unit_types : "")
const rooms__lte = ref(route.query.rooms__lte ? route.query.rooms__lte : "")
const unit_price__gte = ref(route.query.unit_price__gte ? route.query.unit_price__gte : "")
const unit_price__lte = ref(route.query.unit_price__lte ? route.query.unit_price__lte : "")
const land_size__gte = ref(route.query.land_size__gte ? route.query.land_size__gte : "")
const land_size__lte = ref(route.query.land_size__lte ? route.query.land_size__lte : "")
const building_size__gte = ref(route.query.building_size__gte ? route.query.building_size__gte : "")
const building_size__lte = ref(route.query.building_size__lte ? route.query.building_size__lte : "")
const building_age = ref(route.query.building_age ? route.query.building_age : "")
const province = ref(route.query.province ? route.query.province : "")
const city = ref(route.query.city ? route.query.city : "")
const region = ref(route.query.region ? route.query.region : "")
const pre_payment_status = ref(route.query.pre_payment_status == true ? route.query.pre_payment_status : "")
const special = ref(route.query.special ? route.query.special : "")
const jungle = ref(route.query.jungle ? route.query.jungle : "")
const town = ref(route.query.town ? route.query.town : "")
const beach = ref(route.query.beach ? route.query.beach : "")
const image_status = ref(route.query.image_status == true ? route.query.image_status : "")

const filterUrl = ref(`propertyCode?estate_code=${estate_code.value}&estate_type=${estate_type.value}&unit_types=${unit_types.value}&document_type=${document_type.value}&rooms__lte=${rooms__lte.value}&unit_price__gte=${unit_price__gte.value}&unit_price__lte=${unit_price__lte.value}&land_size__gte=${land_size__gte.value}&land_size__lte=${land_size__lte.value}&building_size__gte=${building_size__gte.value}&building_size__lte=${building_size__lte.value}&building_age=${building_age.value}&province=${province.value}&city=${city.value}&region=${region.value}&pre_payment_status=${pre_payment_status.value == true ? pre_payment_status.value : "" }&special=${special.value}&jungle=${jungle.value}&town=${town.value}&image_status=${image_status.value == true ? image_status.value : "" }&beach=${beach.value}&user=`)
const changeUrl = () => {
    filterUrl.value = `propertyCode?estate_code=${estate_code.value}&estate_type=${estate_type.value}&unit_types=${unit_types.value}&document_type=${document_type.value}&rooms__lte=${rooms__lte.value}&unit_price__gte=${unit_price__gte.value}&unit_price__lte=${unit_price__lte.value}&land_size__gte=${land_size__gte.value}&land_size__lte=${land_size__lte.value}&building_size__gte=${building_size__gte.value}&building_size__lte=${building_size__lte.value}&building_age=${building_age.value}&province=${province.value}&city=${city.value}&region=${region.value}&pre_payment_status=${pre_payment_status.value == true ? pre_payment_status.value : "" }&special=${special.value}&jungle=${jungle.value}&town=${town.value}&image_status=${image_status.value == true ? image_status.value : "" }&beach=${beach.value}&user=`
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

const openList = (divElem) => {
    let list = divElem.querySelector('div.listElems')
    let svgElem = divElem.querySelector('svg')
    
    
    if(!svgElem.classList.contains('-rotate-90')){
        list.style.height = '0';
        svgElem.classList.add('-rotate-90')
        divElem.querySelector('div:first-child').classList.remove('bg-[#3f3f3f]')
        divElem.querySelector('div:first-child').classList.remove('z-20')
    } else {
        closeAllLists();
        list.style.height = '220px';
        svgElem.classList.remove('-rotate-90')
        divElem.querySelector('div:first-child').classList.add('bg-[#3f3f3f]')
        divElem.querySelector('div:first-child').classList.add('z-20')
    }
}

const closeAllLists = () => {
    let listsElem = document.querySelectorAll('.listElems')
    let svgElemsElem = document.querySelectorAll('.svgElemsList')
    let inputFilters = document.querySelectorAll('.inputFilter')

    inputFilters.forEach(input => {
        input.classList.add('bg-[#525050]')
        input.classList.remove('bg-[#3f3f3f]')
        input.classList.remove('z-20')
    })

    listsElem.forEach(list => {
        list.style.height = '0';
    })

    svgElemsElem.forEach(svg => {
        svg.classList.add('-rotate-90');
    })
}

const documentTypeChange = (document_type) => {
    if(document_type == 'E'){
        return 'ملکی'
    } else if (document_type == 'P') {
        return 'قولنامه ای'
    } else if (document_type == 'EN') {
        return 'اوقاف'
    } else if (document_type == 'L') {
        return 'سرقفلی'
    } else if (document_type == 'C') {
        return 'مشاع'
    } else if (document_type == 'A') {
        return 'وکالتی'
    } else{
        return 'انتخاب کنید'
    }
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

const selectland_size_gte = (e) => {
    let selectItem = e.target.getAttribute('valueItem');
    land_size__gte.value = selectItem
    changeUrl()
};
const selectland_size_lte = (e) => {
    let selectItem = e.target.getAttribute('valueItem');
    land_size__lte.value = selectItem
    changeUrl()
};
const selectestate_type = (e) => {
    let selectItem = e.target.getAttribute('valueItem');
    estate_type.value = selectItem
    changeUrl()
};
const selectunit_price__gte = (e) => {
    let selectItem = e.target.getAttribute('valueItem');
    unit_price__gte.value = selectItem
    changeUrl()
};
const selectunit_price__lte = (e) =>{
    let selectItem = e.target.getAttribute('valueItem');
    unit_price__lte.value = selectItem
    changeUrl()
};
const selectrooms__lte = (e) =>{
    let selectItem = e.target.getAttribute('valueItem');
    rooms__lte.value = selectItem
    changeUrl()
};
const selectbuilding_age = (e) =>{
    let selectItem = e.target.getAttribute('valueItem');
    building_age.value = selectItem
    changeUrl()
};
const selectdocument_type = (e) =>{
    let selectItem = e.target.getAttribute('valueItem');
    document_type.value = selectItem
    changeUrl()
};
const selectprovince = (e) =>{
    let text = e.target.textContent
    province.value = text
    city.value = ''
    changeUrl()
};
const selectprovinceEmpty = (e) =>{
    province.value = ''
    city.value = ''
    document.getElementById("provinceElem").textContent = "انتخاب کنید"
    changeUrl()
};
const selectcity = (e) =>{
    let selectItem = e.target.textContent
    city.value = selectItem
    changeUrl()
};
const selectcityEmpty = (e) => {
    city.value = ''
    changeUrl()
};

const openListCity = (divElem) => {
    let list = divElem.querySelector('div.listElems')
    let svgElem = divElem.querySelector('svg')
    
    if(!svgElem.classList.contains('-rotate-90')){
        list.style.height = '0';
        svgElem.classList.add('-rotate-90')
        divElem.querySelector('div:first-child').classList.remove('bg-[#3f3f3f]')
        divElem.querySelector('div:first-child').classList.remove('z-20')
    } else {
        closeAllLists();
        if(province.value) {
            list.style.height = '220px';
        } else {
            list.style.height = '70px';
        }
        svgElem.classList.remove('-rotate-90')
        divElem.querySelector('div:first-child').classList.add('bg-[#3f3f3f]')
        divElem.querySelector('div:first-child').classList.add('z-20')
    }
}

onMounted(async () => {
    const resMostView = await fetch(`https://api.hypomelk.ir/real/mostviewcase/`)
    const mostViewData = await resMostView.json()
    dataRes.value = mostViewData
});
</script>