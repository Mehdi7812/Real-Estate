import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalMessage = defineStore("modalMessage", () => {
    const isOpenModalMessage = ref(false)
    const idPost = ref(0)
    const userNameMessage = ref("")
    
    return { isOpenModalMessage, idPost, userNameMessage }
})