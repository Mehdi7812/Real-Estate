<template>
    <section id="villaYab" class="px-4 relative">
        <div class="container m-auto">
            <h2 class="text-2xl font-bold py-14 md:pb-28 text-center md:text-[32px]">
                ویلا یاب
            </h2>
            <div class="bg-secondary dark:bg-[#f0f3f7] flex justify-center py-4 rounded-2xl md:rounded-[50px] relative overflow-hidden">
                <div style="background-color: var(--primaryColor-20)" class="absolute top-0 bottom-0 right-0 left-0"></div>
                <form id="recaptcha-form" class=" z-[1] flex flex-col md:w-2/3">
                    <div id="finderInputs" class="flex flex-col gap-4 py-8 p-6 md:text-lg md:font-medium xl:flex-row xl:flex-wrap xl:gap-10">
                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="customer_name" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300" type="text" id="name" />
                            <label class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="name">نام و نام خانوادگی</label>
                            <span id="resultName" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا نام خود را درست وارد کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="phone" id="phoneNumber" maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                class="border-b-2 border-graytext bg-transparent autofill:bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" />
                            <label class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="phoneNumber">شماره همراه</label>
                                <span id="resultPhone" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا شماره همراه خود را درست وارد کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[95%] relative md:h-[66px]">
                            <input v-model="province"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="ostan" />
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="ostan">استان</label>
                                <span id="resultOstan" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="city"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="city" />
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="city">شهرستان</label>
                                <span id="resultCity" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="region"
                                class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="mantaghe" />
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="mantaghe">منطقه</label>
                                <span id="resultRegion" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا به فارسی بنویسید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input x-ref="minPrice" v-model="min_price" x-mask:dynamic="$money($input)" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text"  id="minPrice"/>
                            <label
                                class="text-graytext relative top-[30px] group-focus-within:top-0 md:group-focus-within:text-lg text-xs group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary group-focus-within:font-bold md:text-base md:group-focus-within:font-medium transition-all duration-300"
                                for="minPrice">کمترین قیمت به تومان</label>
                                <span id="resultMinPrice" class="absolute h-0 overflow-hidden transition-all duration-300 -bottom-8 text-red-700">لطفا فقط از اعداد استفاده کنید</span>
                        </div>

                        <div class="contactInput flex flex-col-reverse gap-2 group xl:w-[45%] relative md:h-[66px]">
                            <input v-model="max_price" x-mask:dynamic="$money($input)" class="border-b-2 border-graytext bg-transparent outline-none focus:border-b-primaryOrange dark:focus:border-b-bluePrimary transition-all duration-300"
                                type="text" id="maxPrice" />
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
                        
                        <button style="background-color: var(--primaryColor)" @click.prevent="fetchData" type="submit" class="cursor-pointer btn hover:opacity-80 w-full dark:bg-bluePrimary text-xs md:max-w-sm md:text-lg md:font-bold md:h-14 md:m-auto transition-all duration-300">ثبت اطلاعات</button>
                    </div>
                </form>

                <div class="hidden md:block md:w-1/3 pl-4">
                    <img src="/contactFinder.webp" class="block bg-cover bg-center w-full h-full rounded-[50px]" alt="ویلا یاب" />
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
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { toast } from 'vue3-toastify';

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
    validateN();
    validateP();
    validateO();
    validateC();
    validateR();
    validateMP();
    validateMxP();
    validateT();

    if(validateN() && validateP() && validateO() && validateC() && validateR() && validateMP() && validateMxP() && validateT()) {
        let minPriceNumber = changeToNumberprice(min_price.value)
        let maxPriceNumber = changeToNumberprice(max_price.value)
    
        if(minPriceNumber >= maxPriceNumber) {
            toast.warning('حداقلِ قیمت نباید از حداکثر قیمت بیشتر باشد.');
            return
        }
        let ele = document.getElementsByName('type');
                      
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            demand_type.value = ele[i].value
        };
    
        if(isRecaptchaValidated) {
            fetch(`${apiRootStore.api}/real/vilayab/`, {
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
                    toast.success('پیام شما ارسال شد.');
                    clearInputs()
                } else {
                    toast.warning('لطفا همه مقادیر را به درستی وارد کنید.');
                }
            }). catch(err => {
                toast.warning('لطفا دوباره تلاش کنید.');
            })
        } else {
            toast.warning('لطفا کپچا را کامل کنید.');

        }

    // Else Validate
    } else {
        toast.warning('لطفا همه مقادیر را به درستی وارد کنید.');
    }
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

useHead({
    script: [
        {
			innerHTML: `
                var onloadCallback = function() {
                    grecaptcha.render(document.getElementById('html_element'), {
                    'sitekey' : '6LcyDlcjAAAAAJjUldF0P9wg-EGkl_WssAicoT1i'
                    });
                };
                `,
		},

		{
			src: "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit",
			async: true,
			defer: true,
            body: true
		},
        { src: '/recaptcha.js', body: true }
    ]
});

// Validate Form Vila Yab
// validate Name 
function validateName (name) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(name);
};
function validateN () {
	const nameInput = document.getElementById('name');
	nameInput.addEventListener('keyup', validateN)

	const result = document.getElementById('resultName')
	const name = document.getElementById('name').value;

	if (validateName(name)) {
		result.style.height = '0px';
		return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate Phone Number
function validatePhoneNumber (phone) {
	const re = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
	return re.test(phone);
};
function validateP () {
	const phoneInput = document.getElementById('phoneNumber');
	phoneInput.addEventListener('keyup', validateP)

	const result = document.getElementById('resultPhone')
	const phone = document.getElementById('phoneNumber').value;

	if (validatePhoneNumber(phone)) {
		result.style.height = '0px';
		return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate Ostan 
function validateOstan (ostan) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(ostan);
};
function validateO () {
	const ostanInput = document.getElementById('ostan');
	ostanInput.addEventListener('keyup', validateO)

	const result = document.getElementById('resultOstan')
	const ostan = document.getElementById('ostan').value;

	if (validateOstan(ostan)) {
		result.style.height = '0px';
		return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate city 
function validateCity (city) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(city);
};
function validateC () {
	const cityInput = document.getElementById('city');
	cityInput.addEventListener('keyup', validateC)

	const result = document.getElementById('resultCity')
	const city = document.getElementById('city').value;

	if (validateCity(city)) {
		result.style.height = '0px';return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate Region 
function validateRegion (region) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(region);
};
function validateR () {
	const regionInput = document.getElementById('mantaghe');
	regionInput.addEventListener('keyup', validateR)

	const result = document.getElementById('resultRegion')
	const region = document.getElementById('mantaghe').value;

	if (validateRegion(region)) {
		result.style.height = '0px';return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate min Price 
function validateMinPrice (minPrice) {
	const re = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
	return re.test(minPrice);
};
function validateMP () {
	const minPriceInput = document.getElementById('minPrice');
	minPriceInput.addEventListener('keyup', validateMP)

	const result = document.getElementById('resultMinPrice')
	const minPrice = document.getElementById('minPrice').value;

	if (validateMinPrice(minPrice)) {
		result.style.height = '0px';return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate Max Price 
function validateMaxPrice (maxPrice) {
	const re = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
	return re.test(maxPrice);
};
function validateMxP () {
	const maxPriceInput = document.getElementById('maxPrice');
	maxPriceInput.addEventListener('keyup', validateMxP)

	const result = document.getElementById('resultMaxPrice')
	const maxPrice = document.getElementById('maxPrice').value;

	if (validateMaxPrice(maxPrice)) {
		result.style.height = '0px';return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// validate Text 
function validateText (text) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(text);
};
function validateT () {
	const textInput = document.getElementById('text');
	textInput.addEventListener('keyup', validateT)

	const result = document.getElementById('resultText')
	const text = document.getElementById('text').value;

	if (validateText(text)) {
		result.style.height = '0px';return true;
	} else {
		result.style.height = '30px';
	}
	return false;
}
// Validate Form Vila Yab
</script>

<style scoped>
    #vila:checked + label:after, #maghaze:checked + label:after, #aparteman:checked + label:after, #vilaBagh:checked + label:after, #bagh:checked + label:after, #vilaFlat:checked + label:after, #vilaDoblex:checked + label:after, #vilaThreeblex:checked + label:after {
  background: var(--primaryColor)!important;
}

#vila + label:before, #maghaze + label:before, #aparteman + label:before, #vilaBagh + label:before, #bagh + label:before, #vilaFlat + label:before, #vilaDoblex + label:before,#vilaThreeblex + label:before {
  right: 0;
}

#vila:checked + label:before, #maghaze:checked + label:before, #aparteman:checked + label:before, #vilaBagh:checked + label:before, #bagh:checked + label:before, #vilaFlat:checked + label:before, #vilaDoblex:checked + label:before, #vilaThreeblex:checked + label:before {
  right: 0;
  z-index: 10;
}
</style>