<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup>
import { useApiRoot } from "~/stores/ApiRoot";
const apiRootStore = useApiRoot();

let title = ref("");

onMounted(async () => {
	if (localStorage.getItem("darkMode") == "true") {
		document.documentElement.classList.remove("dark");
	} else {
		document.documentElement.classList.add("dark");
	}
	
	let firstTheme = "orange";
	let secondTheme = "blue";

	const response = await fetch(`${apiRootStore.api}/real/HomePage`);
	const data = await response.json();
	title.value = data[0].homePage_title;

	firstTheme = data[0].theme_white;
	secondTheme = data[0].theme_dark;

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
	
	useHead({
		title: `${title.value}`,
	});
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
