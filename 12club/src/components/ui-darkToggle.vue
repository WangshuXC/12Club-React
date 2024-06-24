<template>
    <button @click="useToggleDark">
        <span v-html="icon"></span>
    </button>
</template>

<script setup lang="ts">
import { ref, watchEffect, nextTick } from 'vue';
import { useDarkModeStore } from '../stores/user.ts';

const darkModeStore = useDarkModeStore();
const toggleDarkMode = darkModeStore.toggleDarkMode;

const lightIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-2v-12a6 6 0 0 1 0 12'/></svg>`
const darkIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='M16 20.335V18h-2v-4H3.332A9.512 9.512 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724a9.505 9.505 0 0 1-5.99 8.4M7 20h7v2H7zm-5-4h10v2H2z'/></svg>`

const icon = ref(``);
watchEffect(() => {
    if (darkModeStore.isDarkMode) {
        icon.value = darkIcon;
        document.documentElement.classList.add('dark');
    }
    else {
        icon.value = lightIcon;
        document.documentElement.classList.remove('dark');
    }
})

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
function useToggleDark(event: MouseEvent) {
    // @ts-expect-error experimental API
    const isAppearanceTransition = document.startViewTransition
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
        toggleDarkMode()
        return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
        toggleDarkMode()
        await nextTick()
    })
    transition.ready
        .then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
            document.documentElement.animate(
                {
                    clipPath: darkModeStore.isDarkMode
                        ? [...clipPath].reverse()
                        : clipPath,
                },
                {
                    duration: 400,
                    easing: 'ease-out',
                    pseudoElement: darkModeStore.isDarkMode
                        ? '::view-transition-old(root)'
                        : '::view-transition-new(root)',
                },
            )
        })
}
</script>