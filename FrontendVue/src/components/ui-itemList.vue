<template>
    <div class="itemList w-full flex flex-wrap rounded-xl base-bg-100 p-8 gap-x-[1.25%] gap-y-7">
        <div v-for="item, index in itemList" :key="index"
            class="w-[19%] p-3 cursor-pointer relative hover:scale-105 transition-all duration-300 bg-opacity-0 rounded-xl base-text bg-black hover:bg-opacity-10">
            <img :src="item.img" class="rounded-xl mb-2">
            <span class="mt-2">{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 设置组件参数
const props = defineProps<{
    itemList: Item[]
}>()

interface Item {
    title: string
    summary: string;
    img: string
}

const { itemList } = props;
</script>