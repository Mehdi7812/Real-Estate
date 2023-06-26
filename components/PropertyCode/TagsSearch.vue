<template>
    <div class="flex gap-2 flex-wrap text-sm lg:text-base dark:text-white px-6 lg:px-10">
        <p v-if="route.query.special" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>فروش ویژه</span>

            <svg @click="removeTag('special', route.query.special)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>
        
        <p v-if="route.query.image_status" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>آگهی عکس دار</span>

            <svg @click="removeTag('image_status', route.query.image_status)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.pre_payment_status" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>پیش پرداخت</span>

            <svg @click="removeTag('pre_payment_status', route.query.pre_payment_status)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.document_type" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>{{ documentTypeChange(route.query.document_type) }}</span>

            <svg @click="removeTag('document_type', route.query.document_type)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.estate_type" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>{{ convertDatas.estateTypeRender(route.query.estate_type) }}</span>

            <svg @click="removeTag('estate_type', route.query.estate_type)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.rooms__lte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span><span>{{ PN.convertEnToPe(route.query.rooms__lte) }}</span> خواب</span>

            <svg @click="removeTag('rooms__lte', route.query.rooms__lte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.land_size__gte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>متراژ از <span>{{ PN.convertEnToPe(route.query.land_size__gte) }}</span></span>

            <svg @click="removeTag('land_size__gte', route.query.land_size__gte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.land_size__lte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>متراژ تا <span>{{ PN.convertEnToPe(route.query.land_size__lte) }}</span></span>

            <svg @click="removeTag('land_size__lte', route.query.land_size__lte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.unit_price__gte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>قیمت از <span v-html="PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__gte))"></span></span>

            <svg @click="removeTag('unit_price__gte', route.query.unit_price__gte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.unit_price__lte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>قیمت تا <span v-html="PN.convertEnToPe(convertDatas.getNumber(route.query.unit_price__lte))"></span></span>

            <svg @click="removeTag('unit_price__lte', route.query.unit_price__lte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.building_age" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>سن بنا <span>{{ PN.convertEnToPe(route.query.building_age) }}</span> سال </span>

            <svg @click="removeTag('building_age', route.query.building_age)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.jungle" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>جنگلی</span>

            <svg @click="removeTag('jungle', route.query.jungle)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.beach" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>ساحلی</span>

            <svg @click="removeTag('beach', route.query.beach)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.province" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>{{ route.query.province }}</span>

            <svg @click="removeTag('province', route.query.province)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.city" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>{{ route.query.city }}</span>

            <svg @click="removeTag('city', route.query.city)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>
        
        <p v-if="route.query.region" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>{{ route.query.region }}</span>

            <svg @click="removeTag('region', route.query.region)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>
    </div>
</template>

<script setup>
import PN from "persian-number";

// Convert digits func Store
import { useConvertDatas } from "~/stores/ConvertDatas"
const convertDatas = useConvertDatas()

const route = useRoute()

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
    } else if (document_type == 'AR') {
        return 'تک برگ عرصه'
    } else if (document_type == 'AG') {
        return 'تک برگ عرصه و اعیان'
    } else if (document_type == 'CO') {
        return 'نک برگ شورایی'
    } else if (document_type == 'A') {
        return 'وکالتی'
    } else{
        return 'انتخاب کنید'
    }
}

const removeTag = (item, value) => {
    let url = route.fullPath
    let newUrl = url.replace(`${item}=${value}`, '')
    navigateTo(newUrl)
};
</script>