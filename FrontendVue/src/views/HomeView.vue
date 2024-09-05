<template>
	<!-- <div class="w-[100vw] h-[100vh] dark:bg-slate-800 text-center font-bold text-9xl mt-32 dark:text-white">HOME</div> -->

	<div class="h-[60px] base-bg"></div>

	<div class="pt-4 flex flex-col items-center justify-center lg:pt-5 md:pt-6 sm:pt-6 xl:pt-16">
		<div class="w-full flex flex-col items-center lg:w-[80%] md:w-full sm:w-full xl:max-w-[1600px] xl:w-[80%]">
			<UiVideoCarousel :videoCarouselList="videoCarouselList"></UiVideoCarousel>
			<UiLatestUpdate :latestUpdateList="latestUpdateList" class="mt-[7.5rem]"></UiLatestUpdate>
			<UiRecentTrending :recentTrendingList="recentTrendingList" class="mt-[7.5rem]"></UiRecentTrending>
		</div>
	</div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTestDataStore } from '@/stores/testData'
import UiVideoCarousel from "@/components/ui-videoCarousel.vue"
import UiLatestUpdate from "@/components/ui-latestUpdate.vue"
import UiRecentTrending from "@/components/ui-recentTrending.vue"

const videoCarouselList = useTestDataStore().videoCarouselList;
const latestUpdateList = useTestDataStore().latestUpdateList;
const recentTrendingList = useTestDataStore().recentTrendingList;

onMounted(() => {
	// 预加载其他页面组件
	import('./AnimeView.vue');
	import('./NovelView.vue');
	import('./AboutView.vue');
});
</script>
