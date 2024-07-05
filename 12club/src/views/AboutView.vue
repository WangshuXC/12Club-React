<template>
	<div class="background bg-cover" ref="background">
		<span>12Club</span>
	</div>
</template>

<style>
.background {
	/* background-image: url('/src/assets/light_LE_auto_x2.jpg'); */
	background-image: url('/src/assets/mlight_LE_auto_x2.jpg');
	background-size: cover;
	background-position: 50% 50%;
	height: 200vh;
	font: 900 37rem '';
	line-height: 90vh;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	position: relative;
	text-align: center;
	overflow: hidden;
	user-select: none;
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

h2 {
	position: absolute;
	letter-spacing: 2px;
	top: 120vh;
	width: 60%;
	color: #fff;
	left: 50%;
	transform: translateX(-50%);
	padding: 30px;
	background-color: rgba(0, 0, 0, .3);
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const background = ref<HTMLElement | null>(null);

onMounted(() => {
	const handleScroll = () => {
		const scrollY = window.scrollY;
		const blur = scrollY * 0.01;

		if (scrollY >= window.innerHeight * 0.5) {
			return;
		}

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