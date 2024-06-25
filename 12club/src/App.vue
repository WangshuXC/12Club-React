<script setup lang="ts">
import UiHeader from '@/components/ui-headerBar.vue';
</script>

<template>
  <UiHeader></UiHeader>
  <div class="h-[60px]"></div>
  <div class="relative min-h-[85vh] z-10">
    <RouterView />
  </div>
</template>

<style scoped></style>
