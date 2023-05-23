import { defineStore } from "pinia"
import { useApiRoot } from "~/stores/ApiRoot"

export const useAuth = defineStore("auth", () => {
    const apiRootStore = useApiRoot()
    
    const isLoggin = ref(false)
    let userInfo = ref("")

    const looger = () => {
        // if(localStorage.getItem("token")) {
        //     fetch(`${apiRootStore.api}/auth/users/me`, {
        //         method: 'GET',
        //         headers: {
        //             'Authorization': "JWT " + localStorage.getItem('token')
        //         }
        //     })
        //     .then(res => {
        //         if(res.status >=200 && res.status < 400) {
        //             isLoggin.value = true
        //         } else {
        //             isLoggin.value = false
        //         }
        //         return res.json()
        //         }) 
        //     .then(data => {
        //         if(isLoggin.value){
        //             userInfo.value = data
        //         }
        //     })
        // }
    }
    
    return { isLoggin, userInfo, looger }
})