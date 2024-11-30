import React from "react";
import VideoCarousel from "@/components/public/video-carousel";
import { RecentTrending } from "@/components/public/recent-trending";
// import { ExpandableCard } from "@/components/public/expandable-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const videoCarouselList = [
  {
    title: "不时用俄语小声说真心话的邻桌艾莉同学",
    summary: `坐在久世政近邻桌的艾莉同学，看政近的目光总是很冷淡。然而她又时不时地用俄语向他表露心意……而这些话语从未被政近错过。原来，政近其实有着母语级别的俄语听力！！艾莉同学对此一无所知，时不时地说着真心话。政近明明能听懂她的心意，却要装作听不懂。令人止不住嘴角上扬的恋爱故事究竟会如何发展？！`,
    img: "/carousel/01.webp",
  },
  {
    title: "百变的七仓同学",
    summary: `憧憬着成为像漫画里那样超人气角色的学长“北浜瑛二”，以及在演技方面天赋异禀的“七仓凛” 。七仓同学在和学长的相处过程中，常常扮演不同性格作为演技练习，小剧场式的相处模式让他们的校园生活变得有趣许多。同处戏剧社的两人之间会产生什么火花？ 七仓凛能够以真实的自己将心意传达给学长吗？！`,
    img: "/carousel/02.webp",
  },
  {
    title: "青春猪头少年不会梦到兔女郎学姐",
    summary: `青春期症候群——这是一种只发生在易敏感和不稳定的青春期的、不可思议的现象。例如，在梓川咲太面前出现的野生兔女郎。她的真实身份是高中高年级学生，明星活动休止的女演员樱岛麻衣。她迷人的身姿，不知为何在周围的人眼里看不出来。咲太决定解开这一谜题。在与麻衣一起度过的时间里，咲太知道了她秘密的想法……女主人公们一个接一个地出现在咲太的周围，她们都有着“青春期症候群”。在天空和大海都很闪耀的小镇上，开始了令人激动的故事。`,
    img: "/carousel/03.webp",
  },
  {
    title: "迷宫饭",
    summary: `迷宫饭。是“吃”，还是“被吃”，这是一个问题。在迷宫深处，莱欧斯眼看着红龙吃掉了妹妹，自己在将死之际回到了地面。尽管他想要马上再次挑战迷宫，但是钱和粮食都被留在了最深处。面对妹妹可能会被消化掉的危机，莱欧斯下定了决心。“食物就在迷宫中自给自足吧！”史莱姆，蛇尾鸡，宝箱怪，还有龙！吃着来袭的魔物们，打通迷宫吧，冒险者！`,
    img: "/carousel/04.webp",
  },
  {
    title: "葬送的芙莉莲",
    summary: `寿命逾千年的魔法使芙莉莲，以曾经共同战胜魔王的勇者辛美尔之死为契机，踏上了了解人类的旅途。邂逅了同属勇者小队的僧侣海塔与战士艾泽分别培养出的菲伦与休塔尔克，芙莉莲与二人一同前往灵魂安眠之地。为了前去需要【一级魔法使】资格，因此芙莉莲与菲伦前往魔法都市维萨斯特，参加一级魔法使选拔测验。在那里有着形形色色的卓越魔法使…此刻，最顶尖的魔法将在维萨斯特展开激烈碰撞！`,
    img: "/carousel/05.webp",
  },
  {
    title: "孤独摇滚",
    summary: `绰号“小孤独”的后藤独，是一个喜爱吉他的孤独少女。经常在家里独自弹奏吉他，但因为一些事情，加入了伊地知虹夏领衔的“纽带乐队”。不敢在他人面前演奏的后藤，能否成为一个出色的乐队成员呢……`,
    img: "/carousel/06.webp",
  },
];

export default function Home() {
  return (
    <>
      <VideoCarousel videoCarouselList={videoCarouselList} />
      <RecentTrending />
      {/* <ExpandableCard></ExpandableCard> */}
    </>
  );
}
