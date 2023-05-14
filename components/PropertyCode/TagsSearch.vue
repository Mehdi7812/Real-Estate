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
            <span>{{ estateChange(route.query.estate_type) }}</span>

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
            <span>قیمت از <span v-html="getNumber(route.query.unit_price__gte)"></span></span>

            <svg @click="removeTag('unit_price__gte', route.query.unit_price__gte)" class="cursor-pointer" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61133 9.47452L8.389 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.389 9.47452L1.61133 1.59149" stroke="white" stroke-width="1.45236" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                                    
        </p>

        <p v-if="route.query.unit_price__lte" class="flex items-center justify-around bg-secondary dark:bg-[#BEBEBE] rounded-lg px-4 gap-3">
            <span>قیمت تا <span v-html="getNumber(route.query.unit_price__gte)"></span></span>

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

const route = useRoute()

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
};

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

const removeTag = (item, value) => {
    let url = route.fullPath
    let newUrl = url.replace(`${item}=${value}`, '')
    navigateTo(newUrl)
};
</script>