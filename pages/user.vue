<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import { toast } from 'vue3-toastify';

const username = ref("")
const password = ref("")
const showPassword = ref(true)

const fetchData = () => {
    document.getElementById("loadingPuls").style.display = 'block'
    document.getElementById("loginBtn").style.display = 'none'

    fetch(`${apiRootStore.api}/admin/jwt/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "JWT " + localStorage.getItem('token')
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        })
    })
    .then(res => {
        if(res.status >= 200 && res.status < 400) {
            toast.success('شما وارد شدید.');

            return res.json()
        } else {
            toast.warning('نام کاربری یا رمز ورود اشتباه است!');
        }
    })
    .then(data => {
        // console.log(data)
        localStorage.setItem('token', data.access)
        navigateTo("/")
    })
    .catch(err => {
        console.log(err)
        document.getElementById("loginBtn").style.display = 'block'
        document.getElementById("loadingPuls").style.display = 'none'
        toast.warning('لطفا دوباره امتحان کنید!');
    })
}

useHead({
    titleTemplate: 'ورود کاربر-%s',
});
</script>

<template>
    <HeaderViaBackground :pageName="'ورود کاربر'" />

    <main class="px-2">
        <section class="relative -top-20">
            <div class="container m-auto">
                <div class="relative bg-primary dark:bg-[#f0f3f7] shadow-md p-5 rounded-3xl flex flex-col justify-center items-center gap-10 md:p-10 md:rounded-[20px] overflow-hidden">
                    <h1 class="font-bold text-[29px] my-12">ورود به حساب کاربری</h1>

                    <form class="flex flex-col gap-7 w-full lg:w-1/2">
                        <input v-model="username" class="bg-[#525050] dark:bg-[#E6E6E6] p-5 w-full rounded-lg outline-none border-0" type="text" placeholder="نام کاربری" />
                        
                        <div class="relative w-full">
                            <input v-model="password" class="bg-[#525050] dark:bg-[#E6E6E6] p-5 rounded-lg w-full outline-none border-0" :type="showPassword ? 'password' : 'text'" placeholder="رمز عبور" />
                            <span @click="showPassword = !showPassword" class="absolute left-5 cursor-pointer top-0 bottom-0 m-auto flex items-center">
                                <!-- Hide -->
                                <svg :class="{'hidden': showPassword, 'block': !showPassword }" width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.5095 12.7C15.2495 14.11 14.0995 15.26 12.6895 15.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.47 14.53L2 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.9993 2L14.5293 9.47" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                                <!-- Show -->
                                <svg :class="{'hidden': !showPassword, 'block':showPassword }" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3343 9.5C12.3343 11.0675 11.0677 12.3342 9.50018 12.3342C7.93268 12.3342 6.66602 11.0675 6.66602 9.5C6.66602 7.9325 7.93268 6.66583 9.50018 6.66583C11.0677 6.66583 12.3343 7.9325 12.3343 9.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.50036 16.0471C12.2949 16.0471 14.8995 14.4004 16.7124 11.5504C17.4249 10.4342 17.4249 8.55792 16.7124 7.44167C14.8995 4.59167 12.2949 2.94501 9.50036 2.94501C6.70578 2.94501 4.1012 4.59167 2.28828 7.44167C1.57578 8.55792 1.57578 10.4342 2.28828 11.5504C4.1012 14.4004 6.70578 16.0471 9.50036 16.0471Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                            </span>
                        </div>

                        <button @click.prevent="fetchData" class="p-5 flex justify-center rounded-lg cursor-pointer text-white hover:opacity-80 transition-all duration-300" type="submit" style="background-color: var(--primaryColor)">
                            <div id="loadingPuls" style="display: none" class="loading-pulse"></div>
                            <span id="loginBtn">ورود</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>