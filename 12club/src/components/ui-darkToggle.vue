<template>
    <button
        class="w-[36px] h-[36px] border hover:bg-gray-100 border-neutral-300 dark:hover:bg-gray-700 dark:border-zinc-400 justify-around inline-flex items-center rounded-md shadow-sm cursor-pointer"
        @click="useToggleDark">
        <span v-html="icon"></span>
    </button>

</template>

<script setup lang="ts">
import { ref, watchEffect, nextTick } from 'vue';
import { useDarkModeStore } from '../stores/baseStatus';

const darkModeStore = useDarkModeStore();
const toggleDarkMode = darkModeStore.toggleDarkMode;

const lightIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' ><path fill='currentColor' d='M6.341 14A6 6 0 1 1 12 18v-4zM6 20h9v2H6zm-5-9h3v2H1zm1 5h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2z'/></svg>`
const darkIcon = `<svg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' style='color: white'><path fill='currentColor' d='M16 20.335V18h-2v-4H3.332A9.512 9.512 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724a9.505 9.505 0 0 1-5.99 8.4M7 20h7v2H7zm-5-4h10v2H2z'/></svg>`;

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
                    duration: 1000,
                    easing: 'ease-out',
                    pseudoElement: darkModeStore.isDarkMode
                        ? '::view-transition-old(root)'
                        : '::view-transition-new(root)',
                },
            )
        })
}
</script>