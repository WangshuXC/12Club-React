<template>
    <div class="recentTrending w-[80%] h-[55rem] base-bg-100 rounded-xl p-8 pt-4 mb-16">
        <div class="buttonWrap w-full flex flex-row h-max-[5%] relative">
            <div v-for="(item, index) in ['热门番剧', '热门小说', '热门音乐']" :key="index"
                class="buttonItem h-full relative rounded-3xl flex py-3 px-4 justify-center items-center text-2xl mr-5 select-none"
                @click="switchTag(index)" ref="buttonItemRefs">
                <div class="bg-slate-300 absolute rounded-full inset-0 cursor-pointer" :style="{
                    opacity: index !== targetTag ? 0 : 100,
                    transform: index === nowTag ? `translateX(${translateX})` : '',
                    transition: 'transform 0.4s ease-in-out,opacity 0s 0.4s'
                }" />
                <span class="relative block z-20 cursor-pointer">{{ item }}</span>
            </div>
        </div>
        <div class="contentWrap relative w-full h-full mt-5">
            <div v-for="(item, index) in ['热门番剧', '热门小说', '热门音乐']" :key="index"
                class="w-full h-[85%] absolute top-0 left-0 mt-[5%]" style="transition: all 0.4s;"
                :style="contentWrapList[index]">
                <div
                    class="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br base-bg">
                    <p class="base-text">{{ item }} tab</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const nowTag = ref(0);
const targetTag = ref(0);
const translateX = ref('');
const generaContentList = (count: number) => {
    const list = [];

    for (let index = 0; index < count; index++) {
        const item = {
            top: `${index * -35 / 16}rem`,
            zIndex: `${30 - index * 10}`,
            opacity: `${1 - 0.2 * index}`,
            scale: `${1 - 0.05 * index}`,
        };
        list.push(item);
    }
    return list;
};

const contentWrapList = computed(() => generaContentList(3));

const switchContentItems = () => {
    [contentWrapList.value[nowTag.value], contentWrapList.value[targetTag.value]] = [
        contentWrapList.value[targetTag.value],
        contentWrapList.value[nowTag.value],
    ];
};

const buttonItemRefs = ref<Array<HTMLElement | null>>([]);
const switchTag = (index: number) => {
    nowTag.value = targetTag.value;
    targetTag.value = index;
    switchContentItems();
    const direction = targetTag.value - nowTag.value;
    const buttonRef = buttonItemRefs.value[index];
    if (buttonRef) {
        const translate = `${buttonRef.clientWidth}`;
        translateX.value = `calc(${direction}*(${translate}px + 1.25rem))`;
        console.log(nowTag.value, '->', targetTag.value)
    }
}


</script>

<style></style>