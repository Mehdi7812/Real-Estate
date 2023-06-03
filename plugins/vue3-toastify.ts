import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 4000, rtl: true });

  return {
    provide: { toast },
  };
});