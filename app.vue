<template>
	<NuxtLayout>
		<NuxtLoadingIndicator color="#348feb" height="5" />
		<NuxtPage />
	</NuxtLayout>
		
	<!-- DarkMode Elem -->
	<div v-show="themeStatus == 'هر دو'" class="opacity-0" :class="themeStatus == 'هر دو' ? 'opacity-100' : 'opacity-0'" id="darkModeEl">
		<div :class="route.name == 'estateDetail-id' ? 'bottom-[90px] lg:bottom-4' : 'bottom-4' " class="theme-container shadow-dark fixed left-4 cursor-pointer w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] z-30">
			<img class="w-5 h-5 lg:w-7 lg:h-7" id="theme-icon" src="/moon.svg" alt="ERR">
		</div>
	</div>
</template>
<script setup>
import { useApiRoot } from "~/stores/ApiRoot";
const apiRootStore = useApiRoot();
const route = useRoute()

const title = ref("");
const themeStatus = ref("");

const keywords = ref("")
const description = ref("")

onMounted(async () => {
	if (localStorage.getItem("darkMode") == "true") {
		document.documentElement.classList.remove("dark");
	} else {
		document.documentElement.classList.add("dark");
	}
	
	let firstTheme = "#d94a23";
	let secondTheme = "#2f3bc2";

	const response = await fetch(`${apiRootStore.api}/real/HomePage`);
	const data = await response.json();
	title.value = data[0].homePage_title;

	description.value = data[0].homePage_text
	// set Keyword Meta tag
	data[0].keywords_list.forEach((key, index) =>  {
		if(data[0].keywords_list.length == index + 1) {
			keywords.value += `${key}`
		} else {
			keywords.value += `${key}, `
		}
	})

	themeStatus.value = data[0].theme_status;
	setWithApi(data[0].theme_status)

	firstTheme = data[0].theme_white ? data[0].theme_white : firstTheme;
	secondTheme = data[0].theme_dark ? data[0].theme_dark : secondTheme;

	let rootEl = document.querySelector(":root");
	
	const myFunction_set = (color) => {
		rootEl.style.setProperty("--primaryColor", color);
		rootEl.style.setProperty("--primaryColor-20", (color += 20));
	};
	
	if (document.documentElement.classList == "dark") {
		localStorage.setItem("darkMode", "false");
		myFunction_set(firstTheme);
	} else {
		localStorage.setItem("darkMode", "true");
		myFunction_set(secondTheme);
	};

	const toggleDark = document.getElementById('darkModeEl')

	toggleDark.addEventListener('click', () => {
		document.documentElement.classList.toggle('dark')

		if(document.documentElement.classList == 'dark') {
			localStorage.setItem('darkMode', 'false')
			myFunction_set(firstTheme)
		} else {
			localStorage.setItem('darkMode', 'true')
			myFunction_set(secondTheme)
		}
	});

	useHead({
		title: data[0].homePage_title,
	});

});

useHead({
	script: [
		{ innerHTML: `
			<!-- Crisp Chat -->
			window.$crisp=[];window.CRISP_WEBSITE_ID="23f3cfed-8c0f-49d4-9708-dfafe3f3eb3f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
		` }
	],
	meta: [
		{ name: "keywords", content: keywords },
		{ name: "description", content: description },
		{ name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1" },
	]
});
</script>

<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
