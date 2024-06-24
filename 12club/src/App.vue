<script setup lang="ts">
import UiHeader from './components/ui-header.vue';
</script>

<template>
  <div class="opacity-20 h-full w-full z-0 " />
  <UiHeader></UiHeader>
  <div class="relative min-h-[85vh] z-10">
    <RouterView />
  </div>

</template>

<style scoped></style>
