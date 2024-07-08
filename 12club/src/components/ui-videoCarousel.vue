<template>
    <div class="videoCarousel contentWrap w-full h-[600px] relative">
        <div
            class="infoWrap flex flex-row-reverse absolute top-[5%] right-0 bottom-0 left-[5%] base-bg-100 overflow-hidden rounded-xl">
            <!-- <div class="mask absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.2)]"></div> -->
            <div class="infoContentWrap flex flex-col justify-end w-[42.1%] h-full relative pl-5 pb-5">
                <div class="cover absolute top-0 bottom-0 left-0 right-0 opacity-[0.04] bg-cover"
                    :style="{ backgroundImage: 'url(' + imageList[selectedIndex] + ')' }">
                </div>
                <div
                    class="title base-text mb-2 w-full h-[40px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-3xl pl-5 pr-10">
                    {{ props.videoCarouselList[selectedIndex].title }}</div>
                <div class="description base-text mb-3 w-full h-16 pl-5 pr-10 text-sm">
                    {{ props.videoCarouselList[selectedIndex].summary }}
                </div>
                <div class="buttonWrap pl-5 flex">
                    <div
                        class="playButton w-[48px] h-[48px] flex items-center justify-center bg-slate-300 dark:bg-slate-500 base-text relative cursor-pointer rounded-full text-2xl">
                        ▶
                    </div>
                </div>
                <div class="carouselWrap w-full h-[22%] mt-10 flex flex-row relative overflow-hidden">
                    <div v-for="(item, index) in imageList" :key="index" :style="{
                        left: styleList[(index - selectedIndex + imageList.length) % imageList.length],
                        ...(selectedIndex === (index + 1 + imageList.length) % imageList.length ? { left: '0' } : {})
                    }" @click="handleClick(index)"
                        class="carouselItemWrap w-[27%] h-full cursor-pointer overflow-hidden rounded-xl absolute opacity-70 flex items-center"
                        :class="{ carouselSelect: selectedIndex === index, carouselEdge: selectedIndex === (index + 1 + imageList.length) % imageList.length, noAnimation: selectedIndex === (index + 2 + imageList.length) % imageList.length }">
                        <div class="w-full relative"
                            :class="{ 'pb-[75%]': selectedIndex === index, 'pb-[55%]': selectedIndex !== index }">
                            <div class="carouselImage absolute top-0 bottom-0 left-0 right-0 border-4 dark:border-white border-slate-500 border-opacity-60"
                                :class="{ 'border-none': selectedIndex === index, 'rounded-xl': selectedIndex !== index, }">
                                <img :src="imageList[index]" alt="ImageCover" class="object-cover w-full h-full"
                                    :class="{ 'rounded-lg': selectedIndex !== index }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="imageWrap absolute w-[60%] h-[90%] overflow-hidden">
            <transition name="imageFade">
                <div :key="imageList[selectedIndex]" class="w-full h-full bg-cover rounded-xl"
                    :style="{ backgroundImage: 'url(' + imageList[selectedIndex] + ')' }"></div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{
    videoCarouselList: VideoCarouselItem[];
}>();

interface VideoCarouselItem {
    title: string,
    summary: string,
    img: string;
}

const imageList = ref<string[]>(props.videoCarouselList.map(item => item.img))


const selectedIndex = ref(0);
const styleList = ref<string[]>([
    '20px',
    'calc(33.5% + 20px)',
    'calc(63% + 20px)',
    'calc(92.5% + 20px)',
    'calc(122% + 20px)',
    'calc(151.5% + 20px)',
    'calc(181% + 20px)',
    'calc(210.5% + 20px)',
    'calc(240% + 20px)',
    'calc(269.5% + 20px)'
]);

const handleClick = (index: number) => {
    if (selectedIndex.value !== index) {
        selectedIndex.value = index;
    }
};
</script>