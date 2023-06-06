<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';
import { toast } from 'vue3-toastify';

import { useModalMessage } from "~/stores/SendMessage"
const modalMessageStore = useModalMessage()

// validate Name 
function validateName (name) {
	const re = /^[آ-ی]{2,30}$/;
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
// validate Text 
function validateText (text) {
	const re = /^[آ-ی]{2,30}$/;
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

const customer_name = ref("")
const customer_phone = ref("")
const text = ref("")

const fetchSendMessage = (e) => {
    e.target.style.pointerEvents = 'none'
    e.target.classList.add('opacity-80')

    validateN()
    validateP()
    validateT()

    if(validateN() && validateP() && validateT()) {
        fetch(`${apiRootStore.api}/real/cases/${modalMessageStore.idPost}/conversation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_name: customer_name.value,
                customer_phone: customer_phone.value,
                text: text.value,
            })
        }).then(res => {
            console.log(res)
            if(res.status >= 200 && res.status < 400) {
                customer_name.value = "";
                customer_phone.value = "";
                text.value = "";

                toast.success('پیام شما ارسال شد.');
                closeModal()
            } else{
                toast.warning('لطفا دوباره تلاش کنید.');
            }
            
            e.target.style.pointerEvents = 'auto'
            e.target.classList.remove('opacity-80')
        })
        .catch(err => {
            console.log(err, 'Error')
            toast.warning('لطفا دوباره تلاش کنید.');
            
            e.target.style.pointerEvents = 'auto'
            e.target.classList.remove('opacity-80')
        })
        
        e.target.style.pointerEvents = 'auto'
        e.target.classList.remove('opacity-80')
    } else {
        toast.warning('لطفا همه ی مقادیر را به درستی وارد کنید.');

        e.target.style.pointerEvents = 'auto'
        e.target.classList.remove('opacity-80')
    }

    e.target.style.pointerEvents = 'auto'
    e.target.classList.remove('opacity-80')
}

const closeModal = () => {
    modalMessageStore.isOpenModalMessage = false
};
</script>

<template>
    <!-- Modal Send Message -->
    <Transition>
        <div v-show="modalMessageStore.isOpenModalMessage" id="modalMessage" class="relative z-50 transition-all duration-300 overflow-hidden">
            <div class="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto flex justify-center z-40 items-center bg-graytext/[.5] backdrop-blur-sm transition-all duration-300">
                <div v-click-out-side="closeModal" class="flex flex-col gap-3 w-[550px] bg-secondary dark:bg-white rounded-2xl lg:rounded-[26px] p-2 md:p-5 pt-0">
                    <div class="flex justify-between items-center p-2">
                        <span class="text-[17px] font-bold">ارسال پیام</span>

                        <span @click="closeModal" class="cursor-pointer transition-all duration-300 hover:bg-graytext/[.2] rounded-md p-4">
                            <svg id="modallMessageExitBtn" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.76284 10.0456L0.904382 2.18712C0.501636 1.78437 0.501637 1.11641 0.904383 0.713659C1.30713 0.310913 1.9751 0.310913 2.37784 0.713659L10.2363 8.57211C10.639 8.97486 10.639 9.64283 10.2363 10.0456C9.83355 10.4483 9.16558 10.4483 8.76284 10.0456Z" fill="#777777"/>
                                <path d="M0.904326 10.0456C0.50158 9.64283 0.50158 8.97486 0.904326 8.57211L8.76278 0.713659C9.16553 0.310913 9.8335 0.310913 10.2362 0.713659C10.639 1.11641 10.639 1.78437 10.2362 2.18712L2.37779 10.0456C1.97504 10.4483 1.30707 10.4483 0.904326 10.0456Z" fill="#777777"/>
                            </svg>                       
                        </span>
                    </div>

                    <div dir="ltr" class="w-full h-auto overflow-hidden transition-all duration-300">
                        <div class="flex flex-col items-center gap-5 rounded-[21px] p-2 md:p-5 pt-5 md:pt-12 whitespace-nowrap">
                            <!-- name Input -->
                            <div class="relative w-full">
                                <span id="resultName" class="text-red-700 absolute -top-5 h-0 overflow-hidden right-0 transition-all duration-300">لطفا از حروف فارسی استفاده کنید</span>
                                <input id="name" v-model="customer_name" class="w-full bg-primary dark:bg-whiteSecondary outline-none p-3 lg:p-5 rounded-md lg:rounded-lg text-graytext placeholder:text-sm lg:placeholder:text-base placeholder:text-graytext text-right" type="text" placeholder=":نام و نام خانوادگی" />
                            </div>
                            
                            <!-- call Input -->
                            <div class="relative w-full">
                                <span id="resultPhone" class="text-red-700 absolute -top-5 h-0 overflow-hidden right-0 transition-all duration-300">لطفا فقط از اعداد انگلیسی استفاده کنید</span>
                                <input id="phoneNumber" maxlength="11" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" v-model="customer_phone" class="w-full bg-primary dark:bg-whiteSecondary outline-none p-3 lg:p-5 rounded-md lg:rounded-lg text-graytext placeholder:text-sm lg:placeholder:text-base placeholder:text-graytext text-right" type="text" placeholder=":شماره تماس" />
                            </div>
                            
                            <!-- text Area Input -->
                            <div class="relative w-full">
                                <span id="resultText" class="text-red-700 absolute -top-5 h-0 overflow-hidden right-0 transition-all duration-300">لطفا از حروف فارسی استفاده کنید</span>
                                <textarea id="text" v-model="text" class="w-full bg-primary dark:bg-whiteSecondary outline-none p-3 lg:p-5 rounded-md lg:rounded-lg text-graytext placeholder:text-sm lg:placeholder:text-base placeholder:text-graytext text-right" rows="5" placeholder="متن پیام شما"></textarea>
                            </div>
                        
                            <!-- send Btn -->
                            <a @click.prevent="fetchSendMessage" class="bg-[#0DA049] dark:bg-bluePrimary dark:text-white dark:hover:bg-bluePrimary/80 p-3 md:p-5 w-full rounded-md lg:rounded-lg text-center text-sm lg:text-[17px] font-bold cursor-pointer transition-all duration-300 hover:bg-[#0DA049]/50">ارسال پیام</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>