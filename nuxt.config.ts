// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		assets: "/<rootDir>/assets",
	},
	modules: [
		"@pinia/nuxt",
		"nuxt-vue-map-ui",
		"nuxt-swiper",
		"@nuxt/content",
		"nuxt-simple-sitemap",
	],
	sitemap: {
		siteUrl: "https://amlank.ir",
		exclude: [
			'/user',
		],
		defaults: { priority: 1.0 },
	},
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
				{ rel: "stylesheet", href: "/Skelton.css" },
				{ rel: "stylesheet", href: "/darkMode.css" },
				{ rel: "stylesheet", href: "/loadingPuls.css" },
			],
			script: [{ src: "/darkMode.js", defer: true }],
		},
	},
});
