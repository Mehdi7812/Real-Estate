import { defineStore } from "pinia"

export const useApiRoot = defineStore("apiRoot", () => {
    const api = "https://api.hypomelk.ir"
    return { api }
})