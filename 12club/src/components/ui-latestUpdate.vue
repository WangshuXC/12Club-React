<template>
    <div class="w-[80%] h-96 base-bg-100 rounded-xl p-2.5">
        <div class="title h-[2.5rem] text-2xl font-bold base-text ml-5">最近更新</div>
        <div class="base-bg w-full h-[calc(100%-2.5rem)] rounded-lg p-4 flex flex-row justify-center">
            <div v-for="data, index in dataList" :key="index" class="h-full w-[calc(20% - 6rem)] mx-4 relative"
                @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave(index)">
                <div class="absolute bottom-[30%] left-[5%] w-[90%] h-14 flex flex-col items-center justify-center"
                    :style="{
                        opacity: styleList[index].value.opacity,
                        zIndex: styleList[index].value.zIndex,
                        transform: `
                            translateY(${styleList[index].value.rotate * 0.15}rem)
                            scale(${styleList[index].value.scaleTitle})`,
                        transition: 'all 0.3s ease-in 0.1s,z-index 0.1s 0.08s',
                    }">
                    <div
                        class=" w-auto h-full base-bg-200 rounded-2xl p-1 px-6 flex flex-row items-center justify-center">
                        <span
                            class="w-full cursor-pointer base-text text-center hover:text-sky-400 hover:font-bold transition text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
                            {{ data.title }}
                        </span>
                    </div>
                </div>
                <img :src="data.img" class="h-full w-full rounded-xl cursor-pointer"
                    :class="{ 'shadow-[0_8px_16px_rgb(0_0_0/0.4)]': styleList[index].value.opacity !== 0 }" :style="{
                        zIndex: styleList[index].value.zIndex + 10,
                        transform: `
                            rotateX(${styleList[index].value.rotate}deg) 
                            translateY(-${styleList[index].value.rotate * 0.08}rem) 
                            scale(${styleList[index].value.scalePic})`,
                        transition: 'all 0.4s'
                    }">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onBeforeMount } from 'vue';

const props = defineProps({
    latestUpdateList: {
        type: Array as () => Array<{ title: string, img: string }>,
        required: true
    }
});

const dataList = ref(props.latestUpdateList);
const styleList = props.latestUpdateList.map(() => ref({ rotate: 0, scalePic: 1, scaleTitle: 0, opacity: 0, zIndex: 0 }));
const handleMouseOver = (index: number) => {
    styleList[index].value.rotate = 40;
    styleList[index].value.scalePic = 0.9;
    styleList[index].value.scaleTitle = 1;
    styleList[index].value.opacity = 40;
    styleList[index].value.zIndex = 20;
};

const handleMouseLeave = (index: number) => {
    styleList[index].value.rotate = 0;
    styleList[index].value.scalePic = 1;
    styleList[index].value.scaleTitle = 0;
    styleList[index].value.opacity = 0;
    styleList[index].value.zIndex = 0
};

</script>