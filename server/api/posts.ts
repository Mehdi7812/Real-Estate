export default defineEventHandler( async() => {
    const response = await fetch('https://api.hypomelk.ir/real/cases/')
    const data = await response.json()
    return data.results
});