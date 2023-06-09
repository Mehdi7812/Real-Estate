import { defineStore } from "pinia"
import { useApiRoot } from "~/stores/ApiRoot"
import { toast } from 'vue3-toastify';

export const useAuth = defineStore("auth", () => {
    const apiRootStore = useApiRoot()
    
    const isLogin = ref(false);
    const userInfo = ref("");

    const checkLogin = () => {
        if(localStorage.getItem("token")) {
            fetch(`${apiRootStore.api}/auth/users/me`, {
                method: 'GET',
                headers: {
                    'Authorization': "JWT " + localStorage.getItem('token')
                }
            })
            .then(res => {
                if(res.status >=200 && res.status < 400) {
                    isLogin.value = true
                } else {
                    isLogin.value = false
                }
                
                return res.json()
            }) 
            .then(data => {
                if(isLogin.value){
                    userInfo.value = data
                }
            })
        }
    };

    const exitUser = () => {
        isLogin.value = false;
        localStorage.removeItem('token')
        toast.warning('شما خارج شدید.');
    };
    
    return { isLogin, userInfo, checkLogin, exitUser };
})