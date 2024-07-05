<template>
	<!-- <div class="w-[100vw] h-[100vh] dark:bg-slate-800 text-center font-bold text-9xl mt-32 dark:text-white">HOME</div> -->

	<div class="h-[60px] base-bg"></div>

	<div class="pt-4 flex flex-col items-center justify-center lg:pt-5 md:pt-6 sm:pt-6 xl:pt-16">
		<div class="w-full lg:w-[80%] md:w-full sm:w-full xl:max-w-[1500px] xl:w-[90%]">
			<UiVideoCarousel :videoCarouselList="videoCarouselList"></UiVideoCarousel>
		</div>
	</div>

</template>

<script setup lang="ts">
import { useTestDataStore } from '@/stores/testData'
import UiVideoCarousel from "@/components/ui-videoCarousel.vue"

const videoCarouselList = useTestDataStore().videoCarouselList;
</script>
