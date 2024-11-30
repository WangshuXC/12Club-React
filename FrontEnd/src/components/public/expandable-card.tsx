/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`update-${active.update}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                      {active.update}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-sky-400 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-full mx-auto w-full grid grid-cols-2 md:grid-cols-4 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer text-neutral-800 hover:text-sky-400"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-full w-full rounded-xl object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center flex-col">
                <motion.h2
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium dark:text-neutral-200 text-center md:text-left text-xl overflow-hidden text-ellipsis text-nowrap"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`update-${card.update}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-left md:text-left text-sm"
                >
                  {card.update}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "不时用俄语小声说真心话的邻桌艾莉同学",
    update: "更新至第 12 集",
    src: "/cover/01.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          坐在久世政近邻桌的艾莉同学，看政近的目光总是很冷淡。然而她又时不时地用俄语向他表露心意……而这些话语从未被政近错过。原来，政近其实有着母语级别的俄语听力！！艾莉同学对此一无所知，时不时地说着真心话。政近明明能听懂她的心意，却要装作听不懂。令人止不住嘴角上扬的恋爱故事究竟会如何发展？！
        </p>
      );
    },
  },
  {
    title: "迷宫饭",
    update: "更新至第 11 集",
    src: "/cover/02.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          迷宫饭。是“吃”，还是“被吃”，这是一个问题。在迷宫深处，莱欧斯眼看着红龙吃掉了妹妹，自己在将死之际回到了地面。尽管他想要马上再次挑战迷宫，但是钱和粮食都被留在了最深处。面对妹妹可能会被消化掉的危机，莱欧斯下定了决心。“食物就在迷宫中自给自足吧！”史莱姆，蛇尾鸡，宝箱怪，还有龙！吃着来袭的魔物们，打通迷宫吧，冒险者！
        </p>
      );
    },
  },

  {
    title: "葬送的芙莉莲",
    update: "更新至第 10 集",
    src: "/cover/03.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          寿命逾千年的魔法使芙莉莲，以曾经共同战胜魔王的勇者辛美尔之死为契机，踏上了了解人类的旅途。邂逅了同属勇者小队的僧侣海塔与战士艾泽分别培养出的菲伦与休塔尔克，芙莉莲与二人一同前往灵魂安眠之地。为了前去需要【一级魔法使】资格，因此芙莉莲与菲伦前往魔法都市维萨斯特，参加一级魔法使选拔测验。在那里有着形形色色的卓越魔法使…此刻，最顶尖的魔法将在维萨斯特展开激烈碰撞！
        </p>
      );
    },
  },
  {
    title: "百变的七仓同学",
    update: "更新至第 8 集",
    src: "/cover/04.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          憧憬着成为像漫画里那样超人气角色的学长“北浜瑛二”，以及在演技方面天赋异禀的“七仓凛”
          。七仓同学在和学长的相处过程中，常常扮演不同性格作为演技练习，小剧场式的相处模式让他们的校园生活变得有趣许多。同处戏剧社的两人之间会产生什么火花？
          七仓凛能够以真实的自己将心意传达给学长吗？！
        </p>
      );
    },
  },
  {
    title: "不时用俄语小声说真心话的邻桌艾莉同学1",
    update: "更新至第 12 集",
    src: "/cover/01.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          坐在久世政近邻桌的艾莉同学，看政近的目光总是很冷淡。然而她又时不时地用俄语向他表露心意……而这些话语从未被政近错过。原来，政近其实有着母语级别的俄语听力！！艾莉同学对此一无所知，时不时地说着真心话。政近明明能听懂她的心意，却要装作听不懂。令人止不住嘴角上扬的恋爱故事究竟会如何发展？！
        </p>
      );
    },
  },
  {
    title: "迷宫饭1",
    update: "更新至第 11 集",
    src: "/cover/02.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          迷宫饭。是“吃”，还是“被吃”，这是一个问题。在迷宫深处，莱欧斯眼看着红龙吃掉了妹妹，自己在将死之际回到了地面。尽管他想要马上再次挑战迷宫，但是钱和粮食都被留在了最深处。面对妹妹可能会被消化掉的危机，莱欧斯下定了决心。“食物就在迷宫中自给自足吧！”史莱姆，蛇尾鸡，宝箱怪，还有龙！吃着来袭的魔物们，打通迷宫吧，冒险者！
        </p>
      );
    },
  },

  {
    title: "葬送的芙莉莲1",
    update: "更新至第 10 集",
    src: "/cover/03.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          寿命逾千年的魔法使芙莉莲，以曾经共同战胜魔王的勇者辛美尔之死为契机，踏上了了解人类的旅途。邂逅了同属勇者小队的僧侣海塔与战士艾泽分别培养出的菲伦与休塔尔克，芙莉莲与二人一同前往灵魂安眠之地。为了前去需要【一级魔法使】资格，因此芙莉莲与菲伦前往魔法都市维萨斯特，参加一级魔法使选拔测验。在那里有着形形色色的卓越魔法使…此刻，最顶尖的魔法将在维萨斯特展开激烈碰撞！
        </p>
      );
    },
  },
  {
    title: "百变的七仓同学1",
    update: "更新至第 8 集",
    src: "/cover/04.avif",
    ctaText: "播放",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          憧憬着成为像漫画里那样超人气角色的学长“北浜瑛二”，以及在演技方面天赋异禀的“七仓凛”
          。七仓同学在和学长的相处过程中，常常扮演不同性格作为演技练习，小剧场式的相处模式让他们的校园生活变得有趣许多。同处戏剧社的两人之间会产生什么火花？
          七仓凛能够以真实的自己将心意传达给学长吗？！
        </p>
      );
    },
  },
];

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
