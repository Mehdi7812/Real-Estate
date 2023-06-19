<template>
    <section class="lg:w-4/6">
        <div class="flex flex-col bg-secondary dark:bg-[#fcfcfc] rounded-[31px] rounded-l-none">
            <!-- Loading Page -->
            <main v-if="!weblogItem" class="mostSearch w-4/5 p-5">
                <ul class="o-vertical-spacing o-vertical-spacing--l">
                    <li class="blog-post o-media">
                    <div class="o-media__body">
                        <div class="o-vertical-spacing">
                        <h3 class="blog-post__headline">
                            <span class="skeleton-box" style="width:55%;"></span>
                        </h3>
                        <p>
                            <span class="skeleton-box" style="width:80%;"></span>
                            <span class="skeleton-box" style="width:90%;"></span>
                        </p>
                        <div class="blog-post__meta">
                            <span class="skeleton-box" style="width:70px;"></span>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </main>
            
            <div v-if="weblogItem && weblogItem.detail == undefined" class="flex flex-col gap-5 md:gap-7 p-4 md:p-11">
                <!-- <h3 class="text-right font-bold md:text-[28px]">{{ weblogItem.title }}</h3> -->

                <img class="h-52 md:h-[450px] w-full rounded-[20px] object-cover" :src="`${apiRootStore.api}${weblogItem.cover}`" :alt="weblogItem.title" />

                <div v-html="weblogItem.text" class="text-xs md:text-base"></div>
            
                <div class="flex justify-between">

                    <NuxtLink :to="`/propertyCode?user=${weblogItem.user_id}`" class="flex gap-4">
                        <img class="w-12 h-12 object-cover md:w-16 md:h-16 rounded-lg" :src="`${apiRootStore.api}/${weblogItem.user_picture}`" :alt="weblogItem.username" />

                        <div class="flex flex-col justify-between">
                            <span class="text-sm md:text-xl">{{ weblogItem.username }}</span>
                            <span class="text-xs md:text-base text-graytext">{{ weblogItem.user_activity }}</span>
                        </div>
                    </NuxtLink>

                    <div class="flex flex-col items-end justify-center">
                        <div>
                            <p class="flex gap-2 text-[9px] md:text-base">
                                <span>
                                    <svg class="w-3 h-3 md:w-5 md:h-5" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path style="stroke: var(--primaryColor)" d="M7.33203 1.83325V4.58325" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M14.668 1.83325V4.58325" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M3.20703 8.33228H18.7904" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M19.25 7.79159V15.5833C19.25 18.3333 17.875 20.1666 14.6667 20.1666H7.33333C4.125 20.1666 2.75 18.3333 2.75 15.5833V7.79159C2.75 5.04159 4.125 3.20825 7.33333 3.20825H14.6667C17.875 3.20825 19.25 5.04159 19.25 7.79159Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M14.3888 12.5583H14.3971" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M14.3888 15.3083H14.3971" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M10.9963 12.5583H11.0045" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M10.9963 15.3083H11.0045" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M7.60466 12.5583H7.6129" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path style="stroke: var(--primaryColor)" d="M7.60466 15.3083H7.6129" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <span class="text-graytext ">نوشته شده در: </span>
                            
                                <p class="text-[9px] md:text-base">{{ convertDatas.dateCalc(weblogItem.placed_at) }}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Next And Prev Post-->
            <div class="mt-16 flex justify-between gap-3 lg:px-8 relative">
                <div class="w-1/2">
                    <NuxtLink :to="`/weblog/${weblogItem.prev_post.slug}`" v-if="weblogItem.prev_post" style="color: var(--primaryColor)" onmouseover="this.style.backgroundColor = 'var(--primaryColor-20)'" onmouseout="this.style.backgroundColor = ''" class="nextAndPrevPostWeblog bg-primary dark:bg-[#dfdfdf] block py-5 px-3 hover:text-primaryOrange dark:hover:text-bluePrimary transition-all duration-300 rounded-2xl border-[1px] border-[#DAD6D6] hover:border-primaryOrange/20 md:py-9 md:px-6 md:rounded-[28px]">
                        <p class="text-[9px] md:text-base mb-2">پست قبلی</p>
                        <h3 class="text-[10px] md:text-xl">{{ weblogItem.prev_post.title }}</h3>
                    
                        <span class="hidden lg:inline-block absolute right-0 top-[42%] cursor-pointer">
                            <svg class="dark:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4297 5.93005L20.4997 12.0001L14.4297 18.0701" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg class="hidden dark:inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4297 5.93005L20.4997 12.0001L14.4297 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                                
                        </span>
                    </NuxtLink>
                </div>

                <div class="w-1/2">
                    <NuxtLink :to="`/weblog/${weblogItem.next_post.slug}`" v-if="weblogItem.next_post" style="color: var(--primaryColor)" onmouseover="this.style.backgroundColor = 'var(--primaryColor-20)'" onmouseout="this.style.backgroundColor = ''" class="nextAndPrevPostWeblog bg-primary dark:bg-[#dfdfdf] block py-5 px-3 hover:text-primaryOrange dark:hover:text-bluePrimary transition-all duration-300 rounded-2xl border-[1px] border-[#DAD6D6] hover:bg-primaryOrange/20 dark:hover:bg-bluePrimary/40 hover:border-primaryOrange/20 md:py-9 md:px-6 md:rounded-[28px]">
                        <p class="text-[9px] md:text-base mb-2">پست بعدی</p>
                        <h3 class=" text-[10px] md:text-xl">{{ weblogItem.next_post.title }}</h3>
                    
                        <span class="hidden lg:inline-block absolute left-0 top-[42%] cursor-pointer">
                            <svg class="dark:hidden" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.96875 5.93005L3.28011 12.0001L8.96875 18.0701" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.2119 12H3.4393" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                            <svg class="hidden dark:inline-block" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.96875 5.93005L3.28011 12.0001L8.96875 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.2119 12H3.4393" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>   
                        </span>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex flex-col lg:flex-col-reverse">
                <!-- Comments -->
                <div class="flex flex-col">
                    <p class="text-center text-lg font-semibold md:text-xl mt-20">کامنت ها</p>
                    
                    <div class="flex flex-col gap-4">
                        <div v-if="reviews.length == 0" class="flex gap-5 items-center justify-center py-14 mt-8 lg:mt-10 lg:text-lg rounded-xl bg-primary dark:bg-[#eaeaea]">
                            <svg class="dark:hidden" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.3333 11.2499C35.8646 11.2499 37.9167 9.19789 37.9167 6.66659C37.9167 4.13528 35.8646 2.08325 33.3333 2.08325C30.802 2.08325 28.75 4.13528 28.75 6.66659C28.75 9.19789 30.802 11.2499 33.3333 11.2499Z" fill="white"/>
                                <path opacity="0.4" d="M33.332 13.3333C29.6487 13.3333 26.6654 10.3499 26.6654 6.66659C26.6654 5.44992 27.0154 4.31659 27.5987 3.33325H11.6654C7.06536 3.33325 3.33203 7.04992 3.33203 11.6333V21.5999V23.2666C3.33203 27.8499 7.06536 31.5666 11.6654 31.5666H14.1654C14.6154 31.5666 15.2154 31.8666 15.4987 32.2333L17.9987 35.5499C19.0987 37.0166 20.8987 37.0166 21.9987 35.5499L24.4987 32.2333C24.8154 31.8166 25.3154 31.5666 25.832 31.5666H28.332C32.932 31.5666 36.6654 27.8499 36.6654 23.2666V12.3999C35.682 12.9833 34.5487 13.3333 33.332 13.3333Z" fill="white"/>
                                <path d="M19.9987 20.0001C19.0654 20.0001 18.332 19.2501 18.332 18.3334C18.332 17.4167 19.082 16.6667 19.9987 16.6667C20.9154 16.6667 21.6654 17.4167 21.6654 18.3334C21.6654 19.2501 20.932 20.0001 19.9987 20.0001Z" fill="white"/>
                                <path d="M26.6667 20.0001C25.7333 20.0001 25 19.2501 25 18.3334C25 17.4167 25.75 16.6667 26.6667 16.6667C27.5833 16.6667 28.3333 17.4167 28.3333 18.3334C28.3333 19.2501 27.6 20.0001 26.6667 20.0001Z" fill="white"/>
                                <path d="M13.3346 20.0001C12.4013 20.0001 11.668 19.2501 11.668 18.3334C11.668 17.4167 12.418 16.6667 13.3346 16.6667C14.2513 16.6667 15.0013 17.4167 15.0013 18.3334C15.0013 19.2501 14.268 20.0001 13.3346 20.0001Z" fill="white"/>
                            </svg>

                            <svg class="hidden dark:inline-block" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.3333 11.2499C35.8646 11.2499 37.9167 9.19789 37.9167 6.66659C37.9167 4.13528 35.8646 2.08325 33.3333 2.08325C30.802 2.08325 28.75 4.13528 28.75 6.66659C28.75 9.19789 30.802 11.2499 33.3333 11.2499Z" fill="#1D1D1D"/>
                                <path opacity="0.4" d="M33.332 13.3333C29.6487 13.3333 26.6654 10.3499 26.6654 6.66659C26.6654 5.44992 27.0154 4.31659 27.5987 3.33325H11.6654C7.06536 3.33325 3.33203 7.04992 3.33203 11.6333V21.5999V23.2666C3.33203 27.8499 7.06536 31.5666 11.6654 31.5666H14.1654C14.6154 31.5666 15.2154 31.8666 15.4987 32.2333L17.9987 35.5499C19.0987 37.0166 20.8987 37.0166 21.9987 35.5499L24.4987 32.2333C24.8154 31.8166 25.3154 31.5666 25.832 31.5666H28.332C32.932 31.5666 36.6654 27.8499 36.6654 23.2666V12.3999C35.682 12.9833 34.5487 13.3333 33.332 13.3333Z" fill="#1D1D1D"/>
                                <path d="M19.9987 20.0001C19.0654 20.0001 18.332 19.2501 18.332 18.3334C18.332 17.4167 19.082 16.6667 19.9987 16.6667C20.9154 16.6667 21.6654 17.4167 21.6654 18.3334C21.6654 19.2501 20.932 20.0001 19.9987 20.0001Z" fill="#1D1D1D"/>
                                <path d="M26.6667 20.0001C25.7333 20.0001 25 19.2501 25 18.3334C25 17.4167 25.75 16.6667 26.6667 16.6667C27.5833 16.6667 28.3333 17.4167 28.3333 18.3334C28.3333 19.2501 27.6 20.0001 26.6667 20.0001Z" fill="#1D1D1D"/>
                                <path d="M13.3346 20.0001C12.4013 20.0001 11.668 19.2501 11.668 18.3334C11.668 17.4167 12.418 16.6667 13.3346 16.6667C14.2513 16.6667 15.0013 17.4167 15.0013 18.3334C15.0013 19.2501 14.268 20.0001 13.3346 20.0001Z" fill="#1D1D1D"/>
                            </svg>

                            <span class="dark:text-black">اولین نفری باشید که کامنت میگذارد</span>
                        </div>
                    
                        <div v-if="reviews.length >= 1" v-for="comment in reviews" class="flex flex-col gap-5 mb-5">
                            <div class="flex gap-3 pl-16">
                                <div class="hidden lg:block w-14 h-14 text-white rounded-lg overflow-hidden" :style="`background-color: ${stringToHslColor(comment.name)}`">
                                    <span class="flex justify-center items-center h-full">{{ splitName(comment.name) }}</span>
                                </div>

                                <div class="flex flex-col gap-3 w-full">
                                    <div class="flex justify-between items-center">
                                        <span class="text-xs">{{ comment.name }}</span>
                                        <p class="text-[10px] text-graytext">
                                                <span>{{ convertDatas.dateCalc(comment.review_date) }}</span>
                                            نوشته شده
                                        </p>
                                    </div>

                                    <div class="flex flex-col bg-primary dark:bg-whiteSecondary px-5 py-4 rounded-lg shadow-sm">
                                        <p class="pl-6 text-[10px] md:text-sm">{{ comment.review }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Reply -->
                            <div v-if="comment.answer" class="pr-16">
                                <div class="flex gap-3">
                                    <div class="hidden lg:block w-14 h-14 overflow-hidden rounded-lg" :style="`background-color: ${stringToHslColor(comment.user)}`" >
                                        <img class="w-full h-full bg-cover" :src="`${apiRootStore.api}/${comment.user_picture}`" :alt="comment.user" />
                                    </div>
                                    
                                    <div class="flex flex-col gap-3 w-full">
                                        <div class="flex justify-between items-center">
                                            <p class="flex gap-2 text-xs text-graytext">پاسخ<span class="text-white dark:text-black">{{ comment.user }} </span>به <span class="text-white dark:text-black">{{ comment.name }}</span></p>
                                            <p class="text-[10px] text-graytext">
                                                    <span>{{ convertDatas.dateCalc(comment.answer_date) }}</span>
                                                نوشته شده
                                            </p>
                                        </div>

                                        <div class="flex flex-col bg-primary dark:bg-whiteSecondary px-5 py-4 rounded-lg">
                                            <p class="pl-6 text-[10px] md:text-sm">{{ comment.answer }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="text-center text-lg font-semibold md:text-2xl my-20">کامنت بگذارید</p>

                    <form @submit.prevent="sendComment" id="recaptcha-form" class="flex flex-col gap-3">
                        <div class="flex flex-col lg:flex-row gap-3 lg:justify-between">
                            <div class="flex flex-col-reverse gap-2 lg:w-1/2 group">
                                <input v-model="name" class="formCommentInput bg-transparent outline-none text-xs md:text-sm border-[1px] border-graytext px-5 py-4 rounded-lg group-focus-within:border-primaryOrange dark:group-focus-within:border-bluePrimary transition-all duration-300" id="fullName" type="text" placeholder="نام کامل" >
                                <label class="group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary transition-all duration-300" for="fullName">نام کامل <span id="resultName" class="text-red-500 opacity-0 transition-all duration-300">باید به فارسی نوشته شود</span></label>
                            </div>

                            <div class="flex flex-col-reverse gap-2 lg:w-1/2 group">
                                <input v-model="email" class="formCommentInput bg-transparent outline-none text-xs md:text-sm border-[1px] border-graytext px-5 py-4 rounded-lg group-focus-within:border-primaryOrange dark:group-focus-within:border-bluePrimary transition-all duration-300" id="email" type="email" placeholder="آدرس ایمیل" >
                                <label class="group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary transition-all duration-300" for="email">آدرس ایمیل <span id="resultEmail" class="text-red-500 opacity-0 transition-all duration-300">را درست وارد کنید</span></label>
                            </div>
                        </div>

                        <div class="flex flex-col-reverse gap-2 group">
                            <textarea v-model="review" class="formCommentInput bg-transparent outline-none text-xs md:text-sm border-[1px] border-graytext px-5 py-4 rounded-lg group-focus-within:border-primaryOrange dark:group-focus-within:border-bluePrimary transition-all duration-300" name="message" id="message" cols="30" rows="10" placeholder="پیام خود را بنویسید..." ></textarea>
                            <label class="group-focus-within:text-primaryOrange dark:group-focus-within:text-bluePrimary transition-all duration-300" for="message">پیام شما</label>
                        </div>

                        
                        <div class="flex flex-col">
                            <div class="g-recaptcha flex justify-center md:justify-start" id="html_element" data-callback="onRecaptchaSuccess" data-error-callback="onRecaptchaError" data-expired-callback="onRecaptchaResponseExpiry"></div>

                            <button style="background-color: var(--primaryColor)" type="submit" class="hover:opacity-80 cursor-pointer btn dark:bg-bluePrimary dark:hover:bg-bluePrimary/80 w-full py-3 md:w-1/4">ارسال نظر</button>
                        </div>
                    </form>
                </div>

                <!-- similar Posts -->
                <div v-if="weblogItem && weblogItem.detail == undefined" class="flex flex-col">
                    <p class="text-center text-lg font-semibold md:text-xl my-20">پست های مرتبط</p>

                    <div class="flex flex-col md:flex-row gap-2">

                        <div v-if="similarPosts.length == 0" class="flex flex-col justify-center w-full items-center mt-4 py-[40px] gap-7">
                            <svg class="dark:hidden" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.7575 0.0100708C14.1997 0.0100708 0.707031 13.5027 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5027 47.3154 0.0100708 30.7575 0.0100708ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0656C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0656V18.0404ZM33.5222 43.2227C33.3719 43.6133 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8454C31.5388 44.9957 31.1482 45.0858 30.7575 45.0858C30.3669 45.0858 29.9762 44.9957 29.6156 44.8454C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6133 27.9929 43.2227C27.8426 42.8621 27.7525 42.4714 27.7525 42.0808C27.7525 41.6901 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6767 29.255 39.4664 29.6156 39.3161C30.3368 39.0156 31.1782 39.0156 31.8995 39.3161C32.2601 39.4664 32.5906 39.6767 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6901 33.7626 42.0808C33.7626 42.4714 33.6724 42.8621 33.5222 43.2227Z" fill="#EDEDED"/>
                            </svg>
                            <svg class="dark:inline-block hidden" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.7575 0.0100708C14.1997 0.0100708 0.707031 13.5027 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5027 47.3154 0.0100708 30.7575 0.0100708ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0656C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0656V18.0404ZM33.5222 43.2227C33.3719 43.6133 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8454C31.5388 44.9957 31.1482 45.0858 30.7575 45.0858C30.3669 45.0858 29.9762 44.9957 29.6156 44.8454C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6133 27.9929 43.2227C27.8426 42.8621 27.7525 42.4714 27.7525 42.0808C27.7525 41.6901 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6767 29.255 39.4664 29.6156 39.3161C30.3368 39.0156 31.1782 39.0156 31.8995 39.3161C32.2601 39.4664 32.5906 39.6767 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6901 33.7626 42.0808C33.7626 42.4714 33.6724 42.8621 33.5222 43.2227Z" fill="black"/>
                            </svg>

                            <p class="text-2xl text-center">پست مشابهی یافت نشد!</p>
                        </div>
                        
                        <NuxtLink :to="`/weblog/${post.slug}`" v-if="similarPosts.length >= 1" v-for="post in similarPosts" :key="post.id" class="postCard w-full lg:w-1/2 bg-primary dark:bg-whiteSecondary shadow-md dark:text-white rounded-2xl md:rounded-[15px] p-3 group cursor-pointer flex flex-col md:gap-4">
                            <div class="relative h-60">
                                <img :src="`${apiRootStore.api}${post.cover}`" class="w-full h-full rounded-2xl object-cover md:rounded-[15px] overflow-hidden" :alt="post.title" />
        
                                <div class="absolute top-3 left-3 right-3 flex justify-between">
                                    <div class="flex gap-2 items-center">
                                        <div class="bg-[#6DC175] p-1 rounded-md flex items-center relative w-24 md:w-7 overflow-hidden group-hover:w-24 transition-all duration-300">
                                            <span>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.4269 10.4896C16.4269 14.3133 13.3236 17.4167 9.49984 17.4167C5.67609 17.4167 2.57275 14.3133 2.57275 10.4896C2.57275 6.66583 5.67609 3.5625 9.49984 3.5625C13.3236 3.5625 16.4269 6.66583 16.4269 10.4896Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9.5 6.33337V10.2917" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7.125 1.58337H11.875" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>   
                                            </span>
                                            <p class="text-[10px] whitespace-nowrap absolute right-7"><span>{{ post.time }}</span> دقیقه مطالعه</p>
                                        </div>
                                    </div>
        
                                    <p class="bg-primary text-[10px] py-2 px-3 rounded-md md:opacity-0 group-hover:opacity-100 transition-all duration-300">{{ convertDatas.dateCalc(post.placed_at) }}</p>
                                </div>
        
                                <div class="absolute bottom-3 right-3 left-3 flex justify-end items-end gap-2">
                                    <div>
                                        <div class="bg-[#101737] py-1 px-2 rounded-md flex flex-col justify-end items-center h-11 md:h-6 relative group-hover:h-11 overflow-hidden transition-all duration-300">
                                            <span class="absolute bottom-5">{{ Number(post.view).toLocaleString('fa-ir') }}</span>
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.3866 8.00007C10.3866 9.32007 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32007 5.61328 8.00007C5.61328 6.68007 6.67995 5.6134 7.99995 5.6134C9.31995 5.6134 10.3866 6.68007 10.3866 8.00007Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M7.9999 13.5133C10.3532 13.5133 12.5466 12.1266 14.0732 9.72665C14.6732 8.78665 14.6732 7.20665 14.0732 6.26665C12.5466 3.86665 10.3532 2.47998 7.9999 2.47998C5.64656 2.47998 3.45323 3.86665 1.92656 6.26665C1.32656 7.20665 1.32656 8.78665 1.92656 9.72665C3.45323 12.1266 5.64656 13.5133 7.9999 13.5133Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>                                                                                                                                                                    
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="py-3 flex gap-4 flex-col md:justify-between">
                                <h3 class="text-[15px] font-bold md:text-xl dark:text-black dark:group-hover:text-bluePrimary group-hover:text-primaryOrange transition-all duration-300">{{ post.title }}</h3>

                                <p class="text-[10px] text-right md:text-[14px] h-11 text-[#9EA1AC]">{{ post.introduction }}</p>
                            </div>

                            <div class="flex-row-reverse justify-between">
                                <NuxtLink :to="`/propertyCode?user=${weblogItem.user_id}`" class="flex gap-3">
                                    <img class="object-cover w-[35px] h-[35px] md:w-11 md:h-11 cursor-pointer rounded-lg" :src="`${apiRootStore.api}/${weblogItem.user_picture}`" :alt="weblogItem.username" />
                                    <div class="flex flex-col justify-around">
                                        <span class="text-[10px] dark:text-black md:text-base">{{ weblogItem.username }}</span>
                                        <span class="text-[8px] text-[#B1B1B1] dark:text-black md:text-[11px]">{{ weblogItem.user_activity }}</span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- اگر پیدا نشد -->
            <div v-if="weblogItem && weblogItem.detail" class="my-10 m-auto flex flex-col gap-5 md:gap-7 p-4 lg:w-4/5 md:p-11 items-center">
                <svg class="dark:hidden" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.7575 0.0101013C14.1997 0.0101013 0.707031 13.5028 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5028 47.3154 0.0101013 30.7575 0.0101013ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0657C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0657V18.0404ZM33.5222 43.2227C33.3719 43.6134 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8455C31.5388 44.9957 31.1482 45.0859 30.7575 45.0859C30.3669 45.0859 29.9762 44.9957 29.6156 44.8455C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6134 27.9929 43.2227C27.8426 42.8621 27.7525 42.4715 27.7525 42.0808C27.7525 41.6902 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6768 29.255 39.4664 29.6156 39.3162C30.3368 39.0157 31.1782 39.0157 31.8995 39.3162C32.2601 39.4664 32.5906 39.6768 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6902 33.7626 42.0808C33.7626 42.4715 33.6724 42.8621 33.5222 43.2227Z" fill="#EDEDED"/>
                </svg>

                <svg class="dark:inline-block hidden" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.7575 0.0101013C14.1997 0.0101013 0.707031 13.5028 0.707031 30.0606C0.707031 46.6184 14.1997 60.1111 30.7575 60.1111C47.3154 60.1111 60.808 46.6184 60.808 30.0606C60.808 13.5028 47.3154 0.0101013 30.7575 0.0101013ZM28.5037 18.0404C28.5037 16.8083 29.5255 15.7866 30.7575 15.7866C31.9896 15.7866 33.0113 16.8083 33.0113 18.0404V33.0657C33.0113 34.2977 31.9896 35.3194 30.7575 35.3194C29.5255 35.3194 28.5037 34.2977 28.5037 33.0657V18.0404ZM33.5222 43.2227C33.3719 43.6134 33.1616 43.9139 32.8911 44.2144C32.5906 44.4848 32.2601 44.6952 31.8995 44.8455C31.5388 44.9957 31.1482 45.0859 30.7575 45.0859C30.3669 45.0859 29.9762 44.9957 29.6156 44.8455C29.255 44.6952 28.9245 44.4848 28.6239 44.2144C28.3535 43.9139 28.1431 43.6134 27.9929 43.2227C27.8426 42.8621 27.7525 42.4715 27.7525 42.0808C27.7525 41.6902 27.8426 41.2995 27.9929 40.9389C28.1431 40.5783 28.3535 40.2477 28.6239 39.9472C28.9245 39.6768 29.255 39.4664 29.6156 39.3162C30.3368 39.0157 31.1782 39.0157 31.8995 39.3162C32.2601 39.4664 32.5906 39.6768 32.8911 39.9472C33.1616 40.2477 33.3719 40.5783 33.5222 40.9389C33.6724 41.2995 33.7626 41.6902 33.7626 42.0808C33.7626 42.4715 33.6724 42.8621 33.5222 43.2227Z" fill="black"/>
                </svg>

                <p>همچین پستی یافت نشد!</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { toast } from 'vue3-toastify';

// Api Root Address Store
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

// Convert diigits func Store
import { useConvertDatas } from "~/stores/ConvertDatas"
const convertDatas = useConvertDatas()

const route = useRoute()

const weblogItem = ref("")
const reviews = ref("")
const similarPosts = ref("")

// Review _ Comment
const name = ref("")
const email = ref("")
const review = ref("")

const splitName = (name) => {
    let splitedNames = name.split(' ');
    let characters = []
    splitedNames.forEach(word => {
        characters.push(word.split('')[0])
    })
    return characters
};
const stringToHslColor = (str, s='80', l='40') => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    let h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
}

const sendComment = () => {
    validateE()
    validateN()

    if(validateE() && validateN()) {
        if(isRecaptchaValidated) {
            fetch(`${apiRootStore.api}/real/weblog/${route.params.slug}/review/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    review: review.value,
                })
            }).then(res => {
                if(res.status >=200 && res.status < 400) {
                    toast.success('کامنت شما ثبت شد:D.');
    
                    name.value = '';
                    email.value = '';
                    review.value = '';
                } else {
                    toast.warning('لطفا مقادیر درست وارد کنید.');
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err, 'Error')
                toast.warning('لطفا دوباره تلاش کنید.');
            })
        } else {
            toast.warning('لطفا کپچا را کامل کنید.');
        }

    // Else Validate
    } else {
        toast.warning('لطفا مقادیر درست وارد کنید.');
    }
}
// Review _ Comment //

const response = await fetch(`${apiRootStore.api}/real/weblog/${route.params.slug}`)
const data = await response.json()
weblogItem.value = data
const emit = defineEmits(['titlePost'])
emit('titlePost', 'weblogItem.title');

const resReview = await fetch(`${apiRootStore.api}/real/weblog/${route.params.slug}/review/`)
const dataReview = await resReview.json()
reviews.value = dataReview

const resSimilarPosts = await fetch(`${apiRootStore.api}/real/weblog/${route.params.slug}/similarposts/`)
const dataSimilar = await resSimilarPosts.json()
similarPosts.value = dataSimilar

useHead({
    titleTemplate: `${route.params.slug}-%s`,
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
        
        { src: '/recaptcha.js', body: true },

        {
            type: 'application/ld+json', innerHTML: `
            {
            "@context": "https://schema.org",
            "@type": "Article",
            "url": "{full-blog-url}",
            "wordCount": "",
            "mainEntityOfPage": {
                "@type": "Webpage",
                "@id": "https://google.com/article"
            },
            "headline": "{blog-title}",
            "image": {
                "@type": "ImageObject",
                "url": "{full-img-url}",
                "width": "885px",
                "height": "375px"
            },
            "datePublished": "",
            "dateModified": "",
            "description": "",
            "identifier": "programming/{slug}",
            "publisher": {
                "@type": "Organization",
                "name": "Hyponet",
                "logo": {
            "@type": "ImageObject",
            "url": "{full-logo-url}",
            "width": "700",
            "height": "700"
                }
            },
            "author": {
                "@type": "Organization",
                "name": "Hyponet"
            },
            "genre": "{Blog-Topic}"
            }
            `
        }
    ]
});

// validate Name 
function validateName (name) {
	const re = /^[آ-ی\s]{2,30}$/;
	return re.test(name);
};
function validateN () {
	const nameInput = document.getElementById('fullName');
	nameInput.addEventListener('keyup', validateN)

	const result = document.getElementById('resultName')
	const name = document.getElementById('fullName').value;

	if (validateName(name)) {
		result.style.opacity = '0';
		return true;
	} else {
		result.style.opacity = '1';
	}
	return false;
}
// validate Email 
function validateEmail (email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
function validateE () {
	const emailInput = document.getElementById('email');
	emailInput.addEventListener('keyup', validateE)

	const result = document.getElementById('resultEmail')
	const email = document.getElementById('email').value;

	if (validateEmail(email)) {
		result.style.opacity = '0';
		return true;
	} else {
		result.style.opacity = '1';
	}
	return false;
}
</script>