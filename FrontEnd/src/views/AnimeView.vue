<template>
	<div class="h-[60px] base-bg"></div>

	<div class="pt-4 flex flex-col items-center justify-center lg:pt-5 md:pt-6 sm:pt-6 xl:pt-16">
		<div class="w-full flex flex-col items-center lg:w-[80%] md:w-full sm:w-full xl:max-w-[1600px] xl:w-[80%]">
			<UiItemList :itemList="animeItemList"></UiItemList>
			<uiPageSwitch></uiPageSwitch>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTestDataStore } from '@/stores/testData'
import UiItemList from "@/components/ui-itemList.vue"
import uiPageSwitch from '@/components/ui-pageSwitch.vue';

const animeItemList = useTestDataStore().animeItemList;
</script>
