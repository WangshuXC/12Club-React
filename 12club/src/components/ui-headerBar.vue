<template>
	<div class="font-sans flex flex-row fixed top-0 h-[60px] w-full justify-around items-center z-[999] transition-all"
		:class="{
			'shadow dark:bg-opacity-50 bg-opacity-50 backdrop-blur-xl': isOutTop && !isOpen,
			'bg-white dark:bg-dark dark:bg-opacity-100 bg-opacity-100': isOpen,
		}">

		<div class="mx-2 mr-4 flex h-[45px] w-[45px] cursor-pointer justify-center items-center">
			<img src='@/assets/pic.avif' class="object-cover rounded-xl shadow-md">
		</div>

		<div
			class="flex flex-row w-full justify-center items-center mr-4 lg:w-[80%] md:w-full sm:w-full xl:max-w-[1000px] xl:w-[80%]">
			<div class="flex flex-row w-full justify-around items-center">
				<div class="justify-center items-center z-1000 lg:flex md:flex sm:flex xl:flex"
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
								<RouterLink :to="`${link.href}`"
									class="px-3 mx-1 py-2 transition-all duration-150 hover:text-sky-400 hover:cursor-pointer font-bold"
									:prefetch="true">
									{{ link.name }}
								</RouterLink>
							</li>
						</ul>
					</header>
				</div>
			</div>
		</div>

		<uiDarkToggle></uiDarkToggle>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from "vue"
import { useFixedHeader } from 'vue-use-fixed-header'
import { useWindowScroll } from '@vueuse/core'
import uiDarkToggle from './ui-darkToggle.vue'


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
const isOpen = ref(false);
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
