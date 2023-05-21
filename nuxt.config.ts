// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    modules: [
        'nuxt-swiper',
        '@pinia/nuxt',
    //  'nuxt-leaflet',
    ],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
    app: {
        head: {
            bodyAttrs: {
                class: "rtl bg-secondary dark:bg-[#fcfcfc] dark:text-black text-white overflow-x-hidden",
            },
            link: [
                { rel: 'stylesheet', href: '/Swiper.css' },
                { rel: 'stylesheet', href: '/Skelton.css' },
              ],
            script: [
                { src: "/Swiper.js" }
            ],
        }
    },
    // ssr: false
});
