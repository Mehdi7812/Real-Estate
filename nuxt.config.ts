// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets",
    },
    modules: [
        'nuxt-swiper',
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
            title: "Site Title",
            bodyAttrs: {
                class: "rtl bg-secondary dark:bg-[#fcfcfc] dark:text-black text-white",
            },
            link: [
                { rel: 'stylesheet', href: '/Swiper.css' },
                { rel: 'stylesheet', href: '/Skelton.css' },
              ],
            script: [
                { innerHTML: `
                if (localStorage.getItem("darkMode") == "true") {
                    document.documentElement.classList.remove("dark");
                } else {
                    document.documentElement.classList.add("dark");
                }
                
                let firstTheme = "orange";
                let secondTheme = "blue";
                
                fetch("https://api.hypomelk.ir/real/HomePage/")
                    .then((res) => res.json())
                    .then((data) => {
                        firstTheme = data[0].theme_white;
                        secondTheme = data[0].theme_dark;
                
                        if (document.documentElement.classList == "dark") {
                            localStorage.setItem("darkMode", "false");
                            myFunction_set(firstTheme);
                        } else {
                            localStorage.setItem("darkMode", "true");
                            myFunction_set(secondTheme);
                        }
                    });
                
                let rootEl = document.querySelector(":root");
                
                function myFunction_set(color) {
                    rootEl.style.setProperty("--primaryColor", color);
                    rootEl.style.setProperty("--primaryColor-20", (color += 20));
                }
                
                ` },
                { src: "/Swiper.js" }
            ],
        }
    },
    ssr: false
});
