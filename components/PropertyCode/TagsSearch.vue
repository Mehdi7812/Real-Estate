<template>
    <div class="flex gap-2 flex-wrap text-sm lg:text-base dark:text-white px-6 lg:px-10">
        <template x-for="item in Object.keys($store.buildUrl.paramsQuery)">
            <template x-if="$store.buildUrl.paramsQuery[item]">
                <div x-data="tags">
                    <template x-if="item == 'special'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>فروش ویژه</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>
                    
                    <template x-if="item == 'image_status'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>آگهی عکس دار</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'pre_payment_status'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>پیش پرداخت</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'document_type'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span x-text="documentTypeChange($store.buildUrl.paramsQuery.document_type)"></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'estate_type'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span x-text="estateChange($store.buildUrl.paramsQuery.estate_type)"></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'rooms__lte'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span><span x-text="convertToPersianNumber($store.buildUrl.paramsQuery[item])"></span> خواب</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'land_size__gte'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>متراژ از <span x-text="convertToPersianNumber($store.buildUrl.paramsQuery[item])"></span></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'land_size__lte'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>متراژ تا <span x-text="convertToPersianNumber($store.buildUrl.paramsQuery[item])"></span></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'unit_price__gte'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>قیمت از <span x-text="getNumber($store.buildUrl.paramsQuery[item])"></span></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'unit_price__lte'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>قیمت تا <span x-text="getNumber($store.buildUrl.paramsQuery[item])"></span></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'building_age'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>سن بنا <span x-text="convertToPersianNumber($store.buildUrl.paramsQuery[item])"></span> سال </span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'jungle'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>جنگلی</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item == 'beach'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span>ساحلی</span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>

                    <template x-if="item != 'estate_type' && item != 'document_type' && item != 'pre_payment_status' && item != 'rooms__lte' && item != 'land_size__gte' && item != 'land_size__lte' && item != 'unit_price__gte' && item != 'unit_price__lte' && item != 'building_age' && item != 'jungle' && item != 'beach' && item != 'image_status' && item != 'special'">
                        <p class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
                            <span x-text="$store.buildUrl.paramsQuery[item]"></span>

                            <svg @click="removeTag(item)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </p>
                    </template>
                </div>
            </template>
        </template>
    </div>
</template>