<template>
    <div class="flex flex-col lg:w-4/6">
        <main v-if="!posts || pending" class="mostSearch" style="margin-top: 0;">
            <ul class="o-vertical-spacing o-vertical-spacing--l">
            <li class="blog-post o-media bg-primary md:rounded-[31px] dark:bg-[#f0f3f7] rounded-2xl p-3">
                <div class="o-media__figure md:w-5/12">
                <span class="skeleton-box md:rounded-[31px] rounded-lg overflow-hidden" style="width:100%;height:12rem;"></span>
                </div>
                <div class="o-media__body mr-4">
                <div class="o-vertical-spacing">
                    <h3 class="blog-post__headline">
                    <span class="skeleton-box" style="width:55%;"></span>
                    </h3>
                    <p>
                    <span class="skeleton-box" style="width:80%;"></span>
                    <span class="skeleton-box" style="width:90%;"></span>
                    <span class="skeleton-box" style="width:83%;"></span>
                    <span class="skeleton-box" style="width:80%;"></span>
                    </p>
                    <div class="blog-post__meta">
                    <span class="skeleton-box" style="width:70px;"></span>
                    </div>
                </div>
                </div>
            </li>
            <li class="blog-post o-media bg-primary md:rounded-[31px] dark:bg-[#f0f3f7] rounded-2xl p-3">
                <div class="o-media__figure md:w-5/12">
                <span class="skeleton-box md:rounded-[31px] rounded-lg overflow-hidden" style="width:100%;height:12rem;"></span>
                </div>
                <div class="o-media__body mr-4">
                <div class="o-vertical-spacing">
                    <h3 class="blog-post__headline">
                    <span class="skeleton-box" style="width:55%;"></span>
                    </h3>
                    <p>
                    <span class="skeleton-box" style="width:80%;"></span>
                    <span class="skeleton-box" style="width:90%;"></span>
                    <span class="skeleton-box" style="width:83%;"></span>
                    <span class="skeleton-box" style="width:80%;"></span>
                    </p>
                    <div class="blog-post__meta">
                    <span class="skeleton-box" style="width:70px;"></span>
                    </div>
                </div>
                </div>
            </li>
            <li class="blog-post o-media bg-primary md:rounded-[31px] dark:bg-[#f0f3f7] rounded-2xl p-3">
                <div class="o-media__figure md:w-5/12">
                <span class="skeleton-box md:rounded-[31px] rounded-lg overflow-hidden" style="width:100%;height:12rem;"></span>
                </div>
                <div class="o-media__body mr-4">
                <div class="o-vertical-spacing">
                    <h3 class="blog-post__headline">
                    <span class="skeleton-box" style="width:55%;"></span>
                    </h3>
                    <p>
                    <span class="skeleton-box" style="width:80%;"></span>
                    <span class="skeleton-box" style="width:90%;"></span>
                    <span class="skeleton-box" style="width:83%;"></span>
                    <span class="skeleton-box" style="width:80%;"></span>
                    </p>
                    <div class="blog-post__meta">
                    <span class="skeleton-box" style="width:70px;"></span>
                    </div>
                </div>
                </div>
            </li>
            </ul>
        </main>

        <Transition>
            <div class="flex flex-col gap-6" v-if="posts">
                <div v-if="!pending" v-for="data in posts.results" :key="data.id" class="postCard bg-secondary dark:bg-[#fcfcfc] rounded-2xl shadow-lg md:rounded-[31px] p-3 group cursor-pointer md:flex md:gap-8">
                    <NuxtLink :to="`/weblog/${data.slug}`" class="block relative md:w-5/12">
                        <img :src="`${apiRootStore.api}/${data.cover}`" class="w-full h-48 object-cover rounded-2xl md:rounded-[31px] overflow-hidden" :alt="data.title" />
    
                        <div class="absolute top-3 left-3 right-3 flex justify-between">
                            <div class="flex gap-2 items-center">
                                <div class="bg-[#6DC175] dark:text-white p-1 rounded-md flex items-center relative w-24 md:w-7 overflow-hidden group-hover:w-24 transition-all duration-300">
                                    <span>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.4269 10.4896C16.4269 14.3133 13.3236 17.4167 9.49984 17.4167C5.67609 17.4167 2.57275 14.3133 2.57275 10.4896C2.57275 6.66583 5.67609 3.5625 9.49984 3.5625C13.3236 3.5625 16.4269 6.66583 16.4269 10.4896Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.5 6.33337V10.2917" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.125 1.58337H11.875" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>   
                                    </span>
                                    <p class="text-[10px] absolute right-7 whitespace-nowrap"><span>{{PN.convertEnToPe(data.time)}}</span> دقیقه مطالعه</p>
                                </div>
                            </div>
    
                                <div>
                                    <p class="bg-white text-[10px] text-[#535353] py-2 px-3 rounded-md md:opacity-0 group-hover:opacity-100 transition-all duration-300">{{ dateCalc(data.placed_at) }}</p>
                                </div>
                        </div>
    
                        <div class="absolute bottom-3 dark:text-white right-3 left-3 flex justify-end items-end gap-2">
                            <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-6 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                <span class="absolute bottom-5">{{ Number(data.review_count).toLocaleString('fa-ir') }}</span>
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.66683 12.6667H5.3335C2.66683 12.6667 1.3335 12 1.3335 8.66671V5.33337C1.3335 2.66671 2.66683 1.33337 5.3335 1.33337H10.6668C13.3335 1.33337 14.6668 2.66671 14.6668 5.33337V8.66671C14.6668 11.3334 13.3335 12.6667 10.6668 12.6667H10.3335C10.1268 12.6667 9.92683 12.7667 9.80016 12.9334L8.80016 14.2667C8.36016 14.8534 7.64016 14.8534 7.20016 14.2667L6.20016 12.9334C6.0935 12.7867 5.84683 12.6667 5.66683 12.6667Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.6641 7.33333H10.6701" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.99715 7.33333H8.00314" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.32967 7.33333H5.33566" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                                                                                    
                                </span>
                            </div>
    
                            <div>
                                <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-6 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                    <span class="absolute bottom-5">{{ Number(data.view).toLocaleString('fa-ir') }}</span>
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3866 8.00007C10.3866 9.32007 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32007 5.61328 8.00007C5.61328 6.68007 6.67995 5.6134 7.99995 5.6134C9.31995 5.6134 10.3866 6.68007 10.3866 8.00007Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1266 14.0732 9.72665C14.6732 8.78665 14.6732 7.20665 14.0732 6.26665C12.5466 3.86665 10.3532 2.47998 7.9999 2.47998C5.64656 2.47998 3.45323 3.86665 1.92656 6.26665C1.32656 7.20665 1.32656 8.78665 1.92656 9.72665C3.45323 12.1266 5.64656 13.5133 7.9999 13.5133Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>                                                                                                                                                                    
                                    </span>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
    
                    <div class="flex gap-4 flex-col md:w-7/12 md:justify-between">
                        <NuxtLink :to="`/weblog/${data.slug}`" class="py-3">
                            <h2 class="text-[15px] font-bold md:text-xl group-hover:text-primaryOrange dark:group-hover:text-bluePrimary transition-all duration-300">{{ data.title }}</h2>
        
                            <p class="text-[10px] text-right md:text-[14px] text-[#9EA1AC]">{{ data.introduction }}</p>
                        </NuxtLink>

                        <NuxtLink :to="`/propertyCode?user=${data.user_id}`" class="flex gap-3">
                            <img class="object-cover w-[35px] h-[35px] md:w-11 md:h-11 cursor-pointer rounded-lg" :src="`${apiRootStore.api}/${data.user_picture}`" :alt="data.username" />
                            <div class="flex flex-col justify-around">
                                <span class="text-[10px] md:text-base">{{ data.username }}</span>
                                <span class="text-[8px] text-[#B1B1B1] md:text-[11px]">{{ data.user_activity }}</span>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
    
                <button v-if="posts.next" style="background-color: var(--primaryColor-20)" ref="nextBtn" @click="seeMore(posts.next, $refs.nextBtn)" class="hover:opacity-80 bg-primaryOrange dark:bg-bluePrimary/40 bg-opacity-20 w-44 h-11 m-auto rounded-[14px] outline-none text-primaryOrange dark:text-bluePrimary hover:bg-opacity-50 dark:hover:bg-bluePrimary/60 transition-all duration-300 my-11"> 
                    <p style="color: var(--primaryColor)" class="flex justify-center items-center gap-3">مشاهده بیشتر
                        <span>
                            <svg class="dark:inline-block hidden" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5502 1.56875L5.6252 5.64375C6.10645 6.125 6.89395 6.125 7.3752 5.64375L11.4502 1.56875" stroke="#519fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                
                            <svg class="dark:hidden" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5502 1.56875L5.6252 5.64375C6.10645 6.125 6.89395 6.125 7.3752 5.64375L11.4502 1.56875" stroke="#E16428" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                    
                        </span>
                    </p>
                    <div id="loadRingPuls" style="display: none" class="load-4"><div class="ring-1LoadPuls"></div></div>
                </button>
            </div>
        </Transition>

        <div v-if="!pending && posts && posts.results.length < 1" class="flex flex-col items-center gap-6 rounded-[31px] py-24 bg-secondary dark:bg-[#fcfcfc]">
            <svg class="dark:hidden" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.7575 0.0100708C14.1997 0.0100708 0.707031 13.5027 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5027 47.3154 0.0100708 30.7575 0.0100708ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0656C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0656V18.0404ZM33.5222 43.2227C33.3719 43.6133 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8454C31.5388 44.9957 31.1482 45.0858 30.7575 45.0858C30.3669 45.0858 29.9762 44.9957 29.6156 44.8454C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6133 27.9929 43.2227C27.8426 42.8621 27.7525 42.4714 27.7525 42.0808C27.7525 41.6901 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6767 29.255 39.4664 29.6156 39.3161C30.3368 39.0156 31.1782 39.0156 31.8995 39.3161C32.2601 39.4664 32.5906 39.6767 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6901 33.7626 42.0808C33.7626 42.4714 33.6724 42.8621 33.5222 43.2227Z" fill="#EDEDED"/>
            </svg>
            
            <svg class="hidden dark:inline-block" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.7575 0.0100708C14.1997 0.0100708 0.707031 13.5027 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5027 47.3154 0.0100708 30.7575 0.0100708ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0656C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0656V18.0404ZM33.5222 43.2227C33.3719 43.6133 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8454C31.5388 44.9957 31.1482 45.0858 30.7575 45.0858C30.3669 45.0858 29.9762 44.9957 29.6156 44.8454C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6133 27.9929 43.2227C27.8426 42.8621 27.7525 42.4714 27.7525 42.0808C27.7525 41.6901 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6767 29.255 39.4664 29.6156 39.3161C30.3368 39.0156 31.1782 39.0156 31.8995 39.3161C32.2601 39.4664 32.5906 39.6767 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6901 33.7626 42.0808C33.7626 42.4714 33.6724 42.8621 33.5222 43.2227Z" fill="black"/>
            </svg>

            <p>همچین پستی یافت نشد !</p>
        </div>
    </div>
    
</template>

<script setup>
// Api Root Address Store
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

// Convert diigits func Store
const { dateCalc } = useConvertDatas()

import PN from "persian-number";

const route = useRoute()

const seeMore = (nextPage, btn) => {
    btn.style.pointerEvents = 'none'
    btn.style.cursor = 'not-allowed'
    btn.querySelector('p').style.display = 'none'
    btn.querySelector('#loadRingPuls').style.display = 'block'
    
    fetch(nextPage)
        .then(res => res.json())
        .then(data => {
            btn.querySelector('#loadRingPuls').style.display = 'none'
            btn.querySelector('p').style.display = 'flex'

            posts.value.next = data.next
            posts.value.results.push(...data.results)
            btn.style.pointerEvents = 'auto'
            btn.style.cursor = 'pointer'
        })
};

const { data: posts, pending, refresh, error } = await useFetch(() => `${apiRootStore.api}/real/weblog/?search=${route.query.search ? route.query.search : ''}&weblog_type=${route.query.weblog_type ? route.query.weblog_type : ''}`);
</script>