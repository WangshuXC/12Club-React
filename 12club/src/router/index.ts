import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/HomeView.vue"),
		},
		{
			path: "/anime",
			name: "anime",
			component: () => import("../views/AnimeView.vue"),
		},
		{
			path: "/novel",
			name: "novel",
			component: () => import("../views/NovelView.vue"),
		},
		{
			path: "/music",
			name: "music",
			component: () => import("../views/MusicView.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
	],
});

export default router;
