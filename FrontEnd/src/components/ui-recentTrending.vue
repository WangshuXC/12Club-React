<template>
    <div class="recentTrending w-[80%] h-[55rem] base-bg-100 rounded-xl p-8 pt-4 mb-16">
        <div class="buttonWrap w-full flex flex-row h-max-[5%] relative">
            <div v-for="(item, index) in recentTrendingList" :key="index"
                class="buttonItem h-full relative rounded-3xl flex py-3 px-4 justify-center items-center text-2xl mr-5 select-none"
                @click="switchTag(index)" ref="buttonItemRefs">
                <div class="base-bg absolute rounded-full inset-0 cursor-pointer" :style="{
                    opacity: index !== targetTag ? 0 : 100,
                    transform: index === nowTag ? `translateX(${translateX})` : '',
                    transition: 'transform 0.4s ease-in-out,opacity 0s 0.4s'
                }"></div>
                <span class="relative block z-20 base-text cursor-pointer">{{ item.tab }}</span>
            </div>
        </div>
        <div class="contentWrap relative w-full h-full mt-5">
            <div v-for="(item, index) in recentTrendingList" :key="index"
                class="w-full h-[85%] absolute top-0 left-0 mt-[5%]" style="transition: all 0.4s;"
                :style="contentWrapList[index]">
                <div
                    class="w-full overflow-hidden relative flex flex-wrap h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br base-bg content-around">
                    <div v-for="subItem, index in item.data" :key="index"
                        class="w-[18%] m-[1%] cursor-pointer relative hover:scale-105 transition-all duration-300"
                        @mousemove="event => updateTooltipPosition(event, subItem.title)" @mouseleave="hideTooltip">
                        <img :src="subItem.img" class="rounded-xl">
                        <div
                            class="absolute -top-2 -bottom-2 -left-2 -right-2 inset-0 rounded-3xl overflow-hidden opacity-0 hover:opacity-100 transition-all duration-300 bg-opacity-50 border-[0.5rem] border-slate-300 dark:border-slate-600">
                        </div>
                    </div>
                </div>
            </div>
            <div class="tooltip fixed pointer-events-none z-50 rounded-full base-bg-200 base-text px-4 py-2 flex"
                :style="{ top: tooltipTop + 'px', left: tooltipLeft + 'px', opacity: showTooltipFlag ? 100 : 0, scale: showTooltipFlag ? 1 : 0, transition: 'opacity 0.3s,scale 0.2s' }">
                {{ tooltipContent }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 设置组件参数
const props = defineProps<{
    recentTrendingList: RecentTrending[]
}>()

interface DataItem {
    title: string
    img: string
}

interface RecentTrending {
    tab: string
    data: DataItem[]
}

const { recentTrendingList } = props

// 控制切换页面
const nowTag = ref(0);
const targetTag = ref(0);
const translateX = ref('');
const generaContentList = (count: number) => {
    const list = [];

    for (let index = 0; index < count; index++) {
        const item = {
            top: `${index * -40 / 16}rem`,
            zIndex: `${30 - index * 10}`,
            opacity: `${1 - 0.2 * index}`,
            scale: `${1 - 0.05 * index}`,
        };
        list.push(item);
    }
    return list;
};

const contentWrapList = computed(() => generaContentList(3));

const buttonItemRefs = ref<Array<HTMLElement | null>>([]);
const switchTag = (index: number) => {
    const switchContentItems = () => {
        [contentWrapList.value[nowTag.value], contentWrapList.value[targetTag.value]] = [
            contentWrapList.value[targetTag.value],
            contentWrapList.value[nowTag.value],
        ];
    };

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

// 控制hover效果
const showTooltipFlag = ref(false);
const tooltipContent = ref('');
const tooltipTop = ref(0);
const tooltipLeft = ref(0);

const updateTooltipPosition = (event: MouseEvent, title: string) => {
    showTooltipFlag.value = true;
    tooltipTop.value = event.clientY + 10;
    tooltipLeft.value = event.clientX + 15;
    tooltipContent.value = title;
};


const hideTooltip = () => {
    showTooltipFlag.value = false;
};
</script>
