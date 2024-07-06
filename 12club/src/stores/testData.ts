import { defineStore } from "pinia";

export const useTestDataStore = defineStore("videoCarouselList", () => {
	const videoCarouselList = [
		{
			title: "蔚蓝档案第一集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/43637/2022/6/17/52233.jpg",
		},
		{
			title: "蔚蓝档案第二集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/43637/2022/6/17/396476.jpg",
		},
		{
			title: "蔚蓝档案第三集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/43637/2022/6/17/80491.jpg",
		},
		{
			title: "蔚蓝档案第四集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/287349/2023/4/9/954808.jpg",
		},
		{
			title: "蔚蓝档案第五集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/287349/2023/4/9/113058.jpg",
		},
		{
			title: "蔚蓝档案第六集",
			summary: `基沃托斯是一座巨大的学术城市,由数千所学校组成。
                    在这里,学生之间持枪打架已成为家常便饭。
                    其中,被沙子覆盖的阿比多斯高中濒临关闭。
                    故事开始于努力逃离困境的“任务委员会”的五名学生遇到了名为“老师”的“大人”...`,
			img: "https://cdnimg.gamekee.com/wiki2.0/images/w_1600/h_1124/829/287349/2023/4/9/83131.jpg",
		},
	];

	const latestUpdateList = [
		{
			title: "不时用俄语小声说真心话的邻桌艾莉同学",
			img: "src/assets/cover/01.avif",
		},
		{
			title: "鬼灭之刃 柱训练篇",
			img: "src/assets/cover/02.avif",
		},
		{
			title: "怪兽8号",
			img: "src/assets/cover/03.avif",
		},
		{
			title: "百变的七仓同学",
			img: "src/assets/cover/04.avif",
		},
		{
			title: "迷宫饭",
			img: "src/assets/cover/07.avif",
		},
	];

	return { videoCarouselList, latestUpdateList };
});
