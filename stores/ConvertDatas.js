import { defineStore } from "pinia"

export const useConvertDatas = defineStore("convertDatas", () => {
    const estateTypeRender = (type) => {
        if(type== 'G') {
            return 'باغ'
        } else if (type == "A") {
            return 'آپارتمان'
        } else if (type == "H") {
            return 'ویلا باغ'
        } else if (type == "L") {
            return 'زمین'
        } else if (type == "B") {
            return 'مغازه و واحد تجاری'
        } else if (type == "V") {
            return 'خانه ویلایی'
        } else{
            return 'انتخاب کنید'
        }
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
    
    const dateCalc = (prevDate) => {
        let now = new Date().toJSON()
        let seconds = (Date.parse(now) - Date.parse(prevDate)) / 1000
        let days = Math.floor(seconds / (3600*24))
    
        if(days <= 0) {
            return 'امروز'
        } else if (days >= 1 && days <= 31) {
            return `${days} روز پیش`
        } else {
            return `${Math.round(days/31)} ماه پیش`
        }
    }

    return { estateTypeRender, getNumber, dateCalc }
})