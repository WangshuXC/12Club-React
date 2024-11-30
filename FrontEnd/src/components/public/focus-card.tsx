import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCard() {
  const cards = [
    {
      title: "Forest Adventure",
      info: `坐在久世政近邻桌的艾莉同学，看政近的目光总是很冷淡。然而她又时不时地用俄语向他表露心意……而这些话语从未被政近错过。原来，政近其实有着母语级别的俄语听力！！艾莉同学对此一无所知，时不时地说着真心话。政近明明能听懂她的心意，却要装作听不懂。令人止不住嘴角上扬的恋爱故事究竟会如何发展？！`,
      src: "/cover/01.avif",
    },
    {
      title: "Valley of life",
      src: "/cover/02.avif",
    },
    {
      title: "Sala behta hi jayega",
      src: "/cover/03.avif",
    },
    {
      title: "Camping is for pros",
      info: `憧憬着成为像漫画里那样超人气角色的学长“北浜瑛二”，以及在演技方面天赋异禀的“七仓凛” 。七仓同学在和学长的相处过程中，常常扮演不同性格作为演技练习，小剧场式的相处模式让他们的校园生活变得有趣许多。同处戏剧社的两人之间会产生什么火花？ 七仓凛能够以真实的自己将心意传达给学长吗？！`,
      src: "/cover/04.avif",
    },
    {
      title: "The road not taken",
      src: "/cover/05.avif",
    },
    {
      title: "The First Rule",
      src: "/cover/06.avif",
    },
  ];

  return <FocusCards cards={cards} />;
}
