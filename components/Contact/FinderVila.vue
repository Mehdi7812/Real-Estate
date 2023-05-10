<template>
    <section id="villaYab" class="px-4 relative">
        <div class="container m-auto">
            <h2 class="text-2xl font-bold py-14 md:pb-28 text-center md:text-[32px]">
                ویلا یاب
            </h2>
            <div class="bg-secondary dark:bg-[#f0f3f7] flex justify-center py-4 rounded-2xl md:rounded-[50px] relative overflow-hidden">
                <div style="background-color: var(--primaryColor-20)" class="absolute top-0 bottom-0 right-0 left-0"></div>
                <form id="recaptcha-form" x-data="villaYab" class=" z-[1] flex flex-col md:w-2/3">
                    <div x-data id="finderInputs" class="flex flex-col gap-4 py-8 p-6 md:text-lg md:font-medium xl:flex-row xl:flex-wrap xl:gap-10">
                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="customer_name" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300" type="text" id="name" required/>
                            <label class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="name">نام و نام خانوادگی</label>
                                <span id="resultName" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا نام خود را درست وارد کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="phone" id="phoneNumber" maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                class="border-b-2 border-graytext bg-transparent autofill:bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" required/>
                            <label class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="phoneNumber">شماره همراه</label>
                                <span id="resultPhone" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا شماره همراه خود را درست وارد کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[95%] relative md:h-[66px]">
                            <input v-model="province"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="ostan" required/>
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="ostan">استان</label>
                                <span id="resultOstan" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="city"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="city" required/>
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="city">شهرستان</label>
                                <span id="resultCity" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="region"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="mantaghe" required/>
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="mantaghe">منطقه</label>
                                <span id="resultRegion" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input x-ref="minPrice" v-model="min_price" x-mask:dynamic="$money($input)" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" required id="minPrice"/>
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="minPrice">کمترین قیمت به تومان</label>
                                <span id="resultMinPrice" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا فقط از اعداد استفاده کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="max_price" x-mask:dynamic="$money($input)" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="maxPrice" required/>
                            <label class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="maxPrice">بیشترین قیمت به تومان</label>
                                <span id="resultMaxPrice" class="absolute h-0 overflow-hidden -bottom-8 transition-all duration-300 text-red-700">لطفا فقط از اعداد استفاده کنید</span>
                        </div>
                    </div>

                    <div class="group">
                        <div class="flex gap-10 flex-wrap p-6" id="groupType">
                            <div class="flex gap-2 relative">
                                <input type="radio" value="ویلای فلت" name="type" class="cursor-pointer opacity-0" id="vila" />
                                <label class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] after:transition-all after:duration-200 before:transition-all before:duration-300" for="vila">ویلا</label>
                            </div>

                            <div class="flex before:z-10 gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="تجاری"
                                    class="cursor-pointer opacity-0"
                                    id="maghaze"
                                    checked
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="maghaze"
                                    >مغازه و تجاری</label
                                >
                            </div>
                            
                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="آپارتمان"
                                    class="cursor-pointer opacity-0"
                                    id="aparteman"
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="aparteman"
                                    >آپارتمان</label
                                >
                            </div>

                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="خانه ویلایی"
                                    class="cursor-pointer opacity-0"
                                    id="vilaBagh"
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="vilaBagh"
                                    >خانه ویلایی</label
                                >
                            </div>
                            
                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="باغ"
                                    class="cursor-pointer opacity-0"
                                    id="bagh"
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="bagh">باغ</label>
                            </div>
                        </div>

                        <div id="vilaList" class="flex h-0 gap-10 flex-wrap px-6 overflow-hidden transition-all duration-300" style="opacity: 0">
                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="ویلای فلت"
                                    class="cursor-pointer opacity-0"
                                    id="vilaFlat"/>
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="vilaFlat">ویلا فلت</label>
                            </div>

                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="ویلای دوبلکس"
                                    class="cursor-pointer opacity-0"
                                    id="vilaDoblex"
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="vilaDoblex"
                                    >ویلای دوبلکس</label>
                            </div>
                            
                            <div class="flex gap-2 relative">
                                <input
                                    type="radio"
                                    name="type"
                                    value="ویلای تریپلکس"
                                    class="cursor-pointer opacity-0"
                                    id="vilaThreeblex"
                                />
                                <label
                                    class="md:text-lg cursor-pointer after:absolute after:w-6 after:h-6 after:rounded-full after:bg-graytext after:-right-2 before:w-2 before:h-4 before:absolute before:border-4 before:rounded-lg before:border-t-0 before:border-l-0 before:border-b-white before:border-r-white before:rotate-45 before:top-[2px] checked:before:z-10 checked:after:bg-primaryOrange dark:group-checked:after:bg-bluePrimary after:transition-all after:duration-200 before:transition-all before:duration-300"
                                    for="vilaThreeblex">ویلای تریپلکس</label>
                            </div>
                        </div>
                    </div>

                    <div class="contactInput flex flex-col-reverse p-6 gap-4 group xl:gap10 relative">
                        <span id="resultText" class="absolute -bottom-6 h-0 overflow-hidden text-red-700 transition-all duration-300">لطفا به فارسی بنویسید</span>
                        <input v-model="text"
                            class="border-b-2 border-graytext bg-transparent outline-none group-focus-within:border-b-primaryOrange dark:group-focus-within:border-b-bluePrimary transition-all duration-300 placeholder:text-xs placeholder:text-graytext md:text-lg md:font-medium placeholder:md:text-lg placeholder:md:font-medium"
                            placeholder="متن خود را بنویسید..."
                            type="text"
                            id="text"/>
                        <label class="text-graytext text-xs md:text-lg md:font-medium group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold transition-all duration-300"
                            for="text">متن</label>
                    </div>

                    <div class="p-6">
                        <div class="g-recaptcha flex justify-center" id="html_element" data-callback="onRecaptchaSuccess" data-error-callback="onRecaptchaError" data-expired-callback="onRecaptchaResponseExpiry"></div>
                        
                        <!-- <div class="h-6 flex justify-center my-3">
                            <div id="recaptcha-form-error" style="display: none" class="bg-red-400 text-black dark:text-white rounded py-1 px-2 text-sm sm:text-md">
                                Please fill the recaptcha checkbox.
                            </div>
        
                            <div id="recaptcha-form-success" style="display: none" class="bg-green-400 text-black dark:text-white rounded py-1 px-2 text-sm sm:text-md">
                                Recaptcha validated Successfully..!
                                <a @click="location.reload()" href="#" class="px-2 text-slate-800">Retry</a>
                            </div>
                        </div> -->
                        
                        <input style="background-color: var(--primaryColor)" @click="fetchData" type="submit" class="cursor-pointer btn hover:opacity-80 w-full dark:bg-bluePrimary text-xs md:max-w-sm md:text-lg md:font-bold md:h-14 md:m-auto transition-all duration-300" value="ثبت اطلاعات">
                    </div>
                </form>

                <div class="hidden md:block md:w-1/3 pl-4">
                    <img src="contactFinder.webp" class="block bg-cover bg-center w-full h-full rounded-[50px]" />
                </div>
            </div>

            <svg
                class="hidden md:inline absolute right-0 top-52 -z-10"
                width="246"
                height="514"
                viewBox="0 0 246 514"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.4">
                    <circle
                        cx="257"
                        cy="257"
                        r="256"
                        stroke="#BCBCBC"
                        stroke-opacity="0.76"
                        stroke-width="2"
                    />
                    <circle
                        opacity="0.5"
                        cx="257"
                        cy="257"
                        r="238"
                        fill="url(#paint0_linear_668_697)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_668_697"
                        x1="257"
                        y1="19"
                        x2="257"
                        y2="495"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0.229142"
                            stop-color="#E16428"
                            stop-opacity="0.47"
                        />
                        <stop
                            offset="1"
                            stop-color="#C4C4C4"
                            stop-opacity="0"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </section>
</template>

<script setup>
const customer_name = ref("");
const phone = ref("");
const province = ref("");
const city = ref("");
const region = ref("");
const demand_type = ref("");
const min_price = ref(null);
const max_price = ref(null);
const text = ref("");

const changeToNumberprice = (num) => {
    return num.split(',').join('')
};

const clearInputs = () => {
    customer_name.value = '';
    phone.value = '';
    province.value = '';
    city.value = '';
    region.value = '';
    demand_type.value = '';
    min_price.value = '';
    max_price.value = '';
    text.value = ''
};

const fetchData = () => {
    let ele = document.getElementsByName('type');
				  
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        demand_type.value = ele[i].value
    };

    let minPriceNumber = changeToNumberprice(min_price.value)
    let maxPriceNumber = changeToNumberprice(max_price.value)

    fetch(`https://api.hypomelk.ir/real/vilayab/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            customer_name: customer_name.value,
            phone: phone.value,
            province: province.value,
            city: city.value,
            region: region.value,
            demand_type: demand_type.value,
            min_price: minPriceNumber,
            max_price: maxPriceNumber,
            text: text.value,
        })
    })
    .then(res => {
        console.log(res.json());
        if(res.status >=200 && res.status < 400) {
            clearInputs()
        }
    })
}

onMounted(() => {
    // vila Check Box
    const vilaInput = document.getElementById('vila')
    const vilaList = document.getElementById('vilaList')
    const groupTypeInputs = document.querySelectorAll('#groupType input')
    const finderInputsElem = document.querySelectorAll('#finderInputs input')
    
    groupTypeInputs.forEach(inputType => {
        inputType.addEventListener('click', () => {
            if (vilaInput.checked) {
                vilaInput.nextElementSibling.classList.add('before:z-10')
                vilaInput.nextElementSibling.classList.remove('after:bg-graytext')
                vilaInput.nextElementSibling.classList.add('inputVila')
                // vilaInput.nextElementSibling.classList.add('after:bg-primaryOrange')
                // vilaInput.nextElementSibling.classList.add('dark:after:bg-bluePrimary')
                document.getElementById('vilaFlat').checked = true
                vilaList.style.height = 'auto';
                vilaList.style.opacity = '1';
            } else {
                vilaInput.nextElementSibling.classList.remove('before:z-10')
                vilaInput.nextElementSibling.classList.add('after:bg-graytext')
                vilaInput.nextElementSibling.classList.remove('inputVila')
                // vilaInput.nextElementSibling.classList.remove('after:bg-primaryOrange')
                // vilaInput.nextElementSibling.classList.remove('dark:after:bg-bluePrimary')
                vilaList.style.opacity = '0'
                setTimeout(() => {
                    vilaList.style.height = '0'
                }, 250);
            }
        })
    })
    
    finderInputsElem.forEach(input => {
        input.addEventListener('keyup', () => {
            if(input.value){
                input.nextElementSibling.classList.add('top-0')
                input.nextElementSibling.classList.remove('top-[30px]')
            } else {
                input.nextElementSibling.classList.remove('top-0')
                input.nextElementSibling.classList.add('top-[30px]')
    
            }
        })
    });
    
});
</script>

<style scoped>
    #vila:checked + label:after, #maghaze:checked + label:after, #aparteman:checked + label:after, #vilaBagh:checked + label:after, #bagh:checked + label:after, #vilaFlat:checked + label:after, #vilaDoblex:checked + label:after, #vilaThreeblex:checked + label:after {
  background: var(--primaryColor)!important;
}

#report1:checked + label:after, #report2:checked + label:after, #report3:checked + label:after, #report4:checked + label:after, #report5:checked + label:after {
  background: var(--primaryColor)!important;
}

#vila + label:before, #maghaze + label:before, #aparteman + label:before, #vilaBagh + label:before, #bagh + label:before, #vilaFlat + label:before, #vilaDoblex + label:before,#vilaThreeblex + label:before, #report1 + label:before, #report2 + label:before, #report3 + label:before, #report4 + label:before, #report5 + label:before {
  right: 0;
}

#vila:checked + label:before, #maghaze:checked + label:before, #aparteman:checked + label:before, #vilaBagh:checked + label:before, #bagh:checked + label:before, #vilaFlat:checked + label:before, #vilaDoblex:checked + label:before, #vilaThreeblex:checked + label:before, #report1:checked + label:before, #report2:checked + label:before, #report3:checked + label:before, #report4:checked + label:before, #report5:checked + label:before {
  right: 0;
  z-index: 10;
}
</style>