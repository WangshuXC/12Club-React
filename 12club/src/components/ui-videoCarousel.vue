<template>
    <div class="contentWrap w-full h-[500px] relative">
        <div
            class="infoWrap flex flex-row-reverse absolute top-[5%] right-0 bottom-0 left-[5%] base-bg-100 overflow-hidden rounded-xl">
            <!-- <div class="mask absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.2)]"></div> -->
            <div class="infoContentWrap flex flex-col justify-end w-[42.1%] h-full relative pl-5 pb-5">
                <div class="cover absolute top-0 bottom-0 left-0 right-0 opacity-[0.04] bg-cover"
                    :style="{ backgroundImage: 'url(' + imageList[selectedIndex] + ')' }">
                </div>
                <div
                    class="title base-text mb-2 w-full h-[40px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-3xl pl-5 pr-10">
                    新世界之门</div>
                <div class="description base-text mb-3 w-full h-16 pl-5 pr-10 text-sm">
                    线上游戏《THE NEW GATE》
                    这个拥有众多玩家的虚拟空间某日突然风云突变，将人们困在游戏的世界中大肆折磨。
                    为了打破现状，一个名为“进”的青年，身为游戏内最强玩家挺身而出。
                    阻挡在他面前的，是...</div>
                <div class="buttonWrap pl-5 flex">
                    <div
                        class="playButton w-[48px] h-[48px] flex items-center justify-center bg-slate-300 dark:bg-slate-500 base-text relative cursor-pointer rounded-full text-2xl">
                        ▶
                    </div>
                </div>
                <div class="carouselWrap w-full h-[22%] mt-10 flex flex-row relative overflow-hidden">
                    <div v-for="(item, index) in styleList" :key="index" :style="{
                        left: styleList[(index - selectedIndex + styleList.length) % styleList.length],
                        ...(selectedIndex === (index + 1 + styleList.length) % styleList.length ? { left: '0' } : {})
                    }" @click="handleClick(index)"
                        class="carouselItemWrap w-[27%] h-full cursor-pointer overflow-hidden rounded-xl absolute opacity-70 flex items-center"
                        :class="{ carouselSelect: selectedIndex === index, carouselEdge: selectedIndex === (index + 1 + styleList.length) % styleList.length, noAnimation: selectedIndex === (index + 2 + styleList.length) % styleList.length }">
                        <div class="pb-[55%] w-full relative">
                            <div class="carouselImage absolute top-0 bottom-0 left-0 right-0 bg-cover border-4 dark:border-white border-slate-500 border-opacity-60"
                                :class="{ 'border-none': selectedIndex === index, 'rounded-xl': selectedIndex !== index, }">
                                <img :src="imageList[index]" alt="ImageCover" class="object-cover w-full h-full"
                                    :class="{ 'rounded-lg': selectedIndex !== index }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="imageWrap absolute flex w-[60%] bg-cover h-[90%] rounded-xl"
            :style="{ backgroundImage: 'url(' + imageList[selectedIndex] + ')' }">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedIndex = ref(0);
const styleList = ref<string[]>([
    '20px',
    'calc(33.5% + 20px)',
    'calc(63% + 20px)',
    'calc(92.5% + 20px)',
    'calc(122% + 20px)',
    'calc(151.5% + 20px)'
]);
const imageList = ref<string[]>([
    'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
])
const handleClick = (index: number) => {
    if (selectedIndex.value !== index) {
        selectedIndex.value = index;
    }
};
</script>