<template>
	<div name="head-bar"
		class="font-sans flex flex-row fixed top-0 h-[60px] w-full justify-around items-center z-[999] transition-all"
		:class="{
			'shadow bg-opacity-50 backdrop-blur-xl': isOutTop && !isOpen,
			'base-bg bg-opacity-100': isOpen,
		}">

		<div class="mx-2 mr-4 flex h-[45px] w-[45px] cursor-pointer justify-center items-center">
			<img src='https://vio.vin/site-favicon.ico' class="object-cover rounded-xl shadow-md">
		</div>

		<div
			class="flex flex-row w-full h-full justify-center items-center mr-4 lg:w-[80%] md:w-full sm:w-full xl:max-w-[1000px] xl:w-[80%]">
			<div class="flex flex-row w-full justify-around items-center">
				<div class="hidden justify-center items-center z-1000 lg:flex md:flex sm:flex xl:flex"
					:class="{ fixed: isFixed, relative: !isFixed }">
					<header ref="headerRef" class="m-auto fixed flex justify-center items-center" :style="{
						...styles,
						position: isFixed ? 'relative' : 'fixed',
					}">
						<ul class="border rounded-full flex flex-row h-[40px] items-center transition-all dark:text-white"
							:class="{
								'mt-[52px] border-[#eee] bg-[#f5f5f5] dark:bg-slate-700 dark:border-slate-600 dark:shadow-slate-700  shadow backdrop-blur-2xl':
									!isFixed,
								' border-[#eee]  bg-[#f5f5f5] dark:bg-slate-700 dark:border-slate-600 dark:shadow-slate-700 shadow backdrop-blur bg-opacity-50':
									!isOutTop,
								'border-transparent': isOutTop,
							}">
							<li v-for="link in links" :key="link.href">
								<RouterLink :to="`${link.href}`" class="head-link" :prefetch="true">
									{{ link.name }}
								</RouterLink>
							</li>
						</ul>
					</header>
				</div>
			</div>
		</div>

		<div class="flex base-text lg:hidden md:hidden sm:hidden xl:hidden" name="openMenu" @click="isOpen = !isOpen">
			<span class="mr-4 transform scale-150" v-html="icon" />
		</div>

		<div class="hidden w-[50px] lg:flex md:flex sm:flex xl:flex">
			<uiDarkToggle></uiDarkToggle>
		</div>
	</div>

	<div class="h-[60px] base-bg"></div>

	<div name="mobile-head-bar"
		class="bg-white flex fixed h-0 w-[100vw] justify-end top-[60px] z-[6000] transition-all lg:hidden md:hidden sm:hidden xl:hidden base-bg"
		:class="{ 'h-[100vh]': isOpen }">
		<Transition name="slide-fade">
			<ul v-if="isOpen" class="flex flex-col items-end">
				<li v-for="link in links" :key="link.href" class="mobile-head-link" @click="isOpen = !isOpen">
					<RouterLink :to="`${link.href}`" :prefetch="true">
						{{ link.name }}
					</RouterLink>
				</li>
				<!-- <li v-if="hasAuth()" class="mobile-head-link" @click="isOpen = !isOpen">
					<RouterLink to="/violet" class="header-link">
						Admin
					</RouterLink>
				</li> -->
				<li class="mobile-head-link">
					<uiDarkToggle @click="isOpen = !isOpen" />
				</li>
			</ul>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from "vue"
import { useFixedHeader } from 'vue-use-fixed-header'
import { useWindowScroll } from '@vueuse/core'
import uiDarkToggle from './ui-darkToggle.vue'

const menuIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='M21 18v2H3v-2zM7 3.5v10l-5-5zM21 11v2h-9v-2zm0-7v2h-9V4z'/></svg>`
const closeMenuIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z'/></svg>`
const isOpen = ref(false);
const icon = computed(() => {
	return isOpen.value ? closeMenuIcon : menuIcon;
});

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Anime',
		href: '/anime',
	},
	{
		name: 'Novel',
		href: '/novel',
	},
	{
		name: 'About',
		href: '/about',
	},
];

const { y } = useWindowScroll();
const showTitleY = ref(100);
const isOutTop = ref(false);

onMounted(() => {
	watchEffect(() => {
		isOutTop.value = y.value > showTitleY.value
	})
})

const isFixed = computed(
	() => y.value < showTitleY.value,
);
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef, {
	watch: isFixed, // Will perform a check everytime the value changes
})

</script>
