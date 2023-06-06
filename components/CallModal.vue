<template>
    <Transition>
        <div v-show="modalCallStore.isOpenModalCall" id="modalCall" class="relative z-50 transition-all duration-300 overflow-hidden">
            <div class="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden flex justify-center z-40 items-center bg-graytext/[.5] backdrop-blur-sm transition-all duration-300">
                <div v-click-out-side="closeModal" class="flex flex-col gap-2 lg:gap-3 w-[550px] bg-secondary dark:bg-white rounded-[26px] p-3 lg:p-5 pt-0">
                    <div class="flex justify-between items-center p-2">
                        <span class="text-[17px] font-bold">درخواست تماس</span>
        
                        <span @click="closeModal" class="cursor-pointer transition-all duration-300 hover:bg-graytext/[.2] rounded-md p-4 px-5">
                            <svg id="modallCallExitBtn"  width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.76284 10.0456L0.904382 2.18712C0.501636 1.78437 0.501637 1.11641 0.904383 0.713659C1.30713 0.310913 1.9751 0.310913 2.37784 0.713659L10.2363 8.57211C10.639 8.97486 10.639 9.64283 10.2363 10.0456C9.83355 10.4483 9.16558 10.4483 8.76284 10.0456Z" fill="#777777"/>
                                <path d="M0.904326 10.0456C0.50158 9.64283 0.50158 8.97486 0.904326 8.57211L8.76278 0.713659C9.16553 0.310913 9.8335 0.310913 10.2362 0.713659C10.639 1.11641 10.639 1.78437 10.2362 2.18712L2.37779 10.0456C1.97504 10.4483 1.30707 10.4483 0.904326 10.0456Z" fill="#777777"/>
                            </svg>                       
                        </span>
                    </div>
        
                    <div class="w-full h-auto overflow-hidden transition-all duration-300">
                        <div class="flex flex-col items-center gap-3 lg:gap-5 p-1 lg:p-2">
                            <!-- person info(image name ...) -->
                            <a :href="`propertyUser?user=${modalCallStore.userId}`" class="flex flex-col items-center p-2 lg:p-4 gap-2">
                                <img class="w-16 h-16 rounded-xl object-cover" :src="`${apiRootStore.api}/${modalCallStore.userImg}`">
                                <p class="text-xl font-bold">{{ modalCallStore.userName }}</p>
                                <p class="text-graytext">{{ modalCallStore.userActivity }}</p>
                            </a>
        
                            <!-- Call Btn -->
                            <a :href="`tel:${modalCallStore.userNumber}`" class="flex justify-center items-center gap-3 bg-[#0DA049] dark:text-white tracking-widest text-lg lg:text-xl dark:bg-bluePrimary dark:hover:bg-bluePrimary/80 p-2 lg:p-4 rounded-xl lg:rounded-2xl w-full transition-all duration-300 hover:bg-[#0DA049]/50" href="tel:+989111111111">
                                <span>{{ PN.convertEnToPe(modalCallStore.userNumber) }}</span>
                                
                                <svg class="w-5 lg:w-[22px]" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.1398 16.8028C20.1398 17.1328 20.0665 17.472 19.9106 17.802C19.7548 18.132 19.5532 18.4437 19.2873 18.737C18.8382 19.232 18.3431 19.5895 17.784 19.8187C17.234 20.0478 16.6382 20.167 15.9965 20.167C15.0615 20.167 14.0623 19.947 13.0082 19.4978C11.954 19.0487 10.8998 18.4437 9.85482 17.6828C8.80065 16.9128 7.80148 16.0603 6.84815 15.1162C5.90398 14.1628 5.05148 13.1637 4.29065 12.1187C3.53898 11.0737 2.93398 10.0287 2.49398 8.99285C2.05398 7.94785 1.83398 6.94868 1.83398 5.99535C1.83398 5.37201 1.94398 4.77618 2.16398 4.22618C2.38398 3.66701 2.73232 3.15368 3.21815 2.69535C3.80482 2.11785 4.44648 1.83368 5.12482 1.83368C5.38148 1.83368 5.63815 1.88868 5.86732 1.99868C6.10565 2.10868 6.31648 2.27368 6.48148 2.51201L8.60815 5.50951C8.77315 5.73868 8.89232 5.94951 8.97482 6.15118C9.05732 6.34368 9.10315 6.53618 9.10315 6.71035C9.10315 6.93035 9.03898 7.15035 8.91065 7.36118C8.79148 7.57201 8.61732 7.79201 8.39732 8.01201L7.70065 8.73618C7.59982 8.83701 7.55398 8.95618 7.55398 9.10285C7.55398 9.17618 7.56315 9.24035 7.58148 9.31368C7.60898 9.38701 7.63648 9.44201 7.65482 9.49701C7.81982 9.79951 8.10398 10.1937 8.50732 10.6703C8.91982 11.147 9.35982 11.6328 9.83648 12.1187C10.3315 12.6045 10.8082 13.0537 11.294 13.4662C11.7707 13.8695 12.1648 14.1445 12.4765 14.3095C12.5223 14.3278 12.5773 14.3553 12.6415 14.3828C12.7148 14.4103 12.7882 14.4195 12.8707 14.4195C13.0265 14.4195 13.1457 14.3645 13.2465 14.2637L13.9432 13.5762C14.1723 13.347 14.3923 13.1728 14.6032 13.0628C14.814 12.9345 15.0248 12.8703 15.254 12.8703C15.4281 12.8703 15.6115 12.907 15.8132 12.9895C16.0148 13.072 16.2257 13.1912 16.4548 13.347L19.489 15.5012C19.7273 15.6662 19.8923 15.8587 19.9931 16.0878C20.0848 16.317 20.1398 16.5462 20.1398 16.8028Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M16.9583 8.25033C16.9583 7.70033 16.5275 6.85699 15.8858 6.16949C15.2992 5.53699 14.52 5.04199 13.75 5.04199" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.1667 8.25035C20.1667 4.70285 17.2975 1.83368 13.75 1.83368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                
                            </a>
        
                            <!-- Star Person -->
                            <div class="flex flex-col items-center justify-center p-4 lg:p-6 w-full rounded-2xl bg-[#F8C623]/80 gap-5">
                                <p class="text-black font-bold">چه امتیازی به <span>{{ modalCallStore.userName }}</span> میدین؟</p>
                                
                                <div id="loadingPuls" style="display: none" class="loading-pulse"></div>
                                <star-rating id="starRating" ref="starRate" @update:rating ="setRating" :rating="0" active-color="black" :star-size="30" :rounded-corners="true" :border-width="2" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="direction: ltr;" :rtl="true" :show-rating="false"></star-rating>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { useApiRoot } from "~/stores/ApiRoot"
const apiRootStore = useApiRoot()

import PN from "persian-number";
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside';
import { toast } from 'vue3-toastify';

import { useModalCall } from "~/stores/CallModal"
const modalCallStore = useModalCall();

const setRating = (newRate) => {
    document.getElementById("loadingPuls").style.display = 'block'
    document.getElementById("starRating").style.display = 'none';

    fetch(`${apiRootStore.api}/real/cases/${modalCallStore.idCase}/rate/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'new_rate':newRate
        }),
        }).then(response => {
            console.log(response);
            if(response.status >= 200 && response.status < 400) {
                toast.success('رای شما ثبت شد.');
                document.getElementById("starRating").style.pointerEvents = 'none';
            } else {
                toast.warning('رای شما ثبت نشد.');
            }
            document.getElementById("starRating").style.display = 'flex';
            document.getElementById("loadingPuls").style.display = 'none';
        })
        .catch(err => {
            toast.warning('لطفا دوباره امتحان کنید.');
            document.getElementById("starRating").style.display = 'flex';
            document.getElementById("loadingPuls").style.display = 'none';
        })
}

const closeModal = () => {
    modalCallStore.isOpenModalCall = false
};
</script>