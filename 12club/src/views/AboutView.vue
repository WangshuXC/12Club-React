<template>
	<div class="background bg-cover h-[200vh] font-sans font-black bg-clip-text text-[37rem] overflow-hidden relative text-center select-none"
		ref="background">
		<span>12Club</span>
	</div>
</template>

<style>
.background {
	/* background-image: url('/src/assets/light_LE_auto_x2.jpg'); */
	background-image: url('/src/assets/mlight_LE_auto_x2.jpg');
	background-position: 50% 50%;
	line-height: 90vh;
	-webkit-text-fill-color: transparent;
}

.background::before {
	content: '';
	background-size: cover;
	background-image: inherit;
	background-position: 50% 50%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -99;
}

.dark .background {
	/* background-image: url("/src/assets/dark_LE_auto_x2.jpg"); */
	background-image: url('/src/assets/mdark_LE_auto_x2.jpg');
}



.background::before {
	filter: blur(var(--before-blur));
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const background = ref<HTMLElement | null>(null);

onMounted(() => {
	const handleScroll = () => {
		const scrollY = window.scrollY;
		const blur = scrollY * 0.02;

		// if (scrollY >= window.innerHeight * 0.5) {
		// 	return;
		// }

		if (scrollY !== 0) {
			if (background.value) {
				background.value!.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
				background.value!.style.setProperty('--before-blur', `${blur}px`);
			}
		} else {
			if (background.value) {
				background.value!.style.backgroundPosition = '';
				background.value!.style.setProperty('--before-blur', '0px');
			}
		}
	};

	document.addEventListener('scroll', handleScroll);

	return () => {
		document.removeEventListener('scroll', handleScroll);
	};
});
</script>