<script setup lang="ts">
import UiHeadBar from '@/components/ui-headBar.vue';
</script>

<template>
  <UiHeadBar></UiHeadBar>

  <div class="relative min-h-[85vh] z-10">
    <RouterView />
  </div>
</template>

<style scoped></style>
