import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalCall = defineStore("modalCall", () => {
    const isOpenModalCall = ref(false)
    const idCase = ref(0)
    const userId = ref(0)
    const userName = ref("")
    const userActivity = ref("")
    const userNumber = ref("")
    const userImg = ref("")
    
    return { isOpenModalCall, idCase, userId, userName, userActivity, userNumber, userImg }
})