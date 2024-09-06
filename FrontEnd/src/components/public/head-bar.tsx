"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  IconBook,
  IconBrandBilibili,
  IconDotsCircleHorizontal,
  IconHome,
  IconMusic,
} from "@tabler/icons-react";

export function Headbar() {
  const [isHovering, setIsHovering] = useState(false);
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full" />,
      href: "#",
    },

    {
      title: "Anime",
      icon: <IconBrandBilibili className="h-full" />,
      href: "/anime",
    },
    {
      title: "Novel",
      icon: <IconBook className="h-full" />,
      href: "/novel",
    },
    {
      title: "Music",
      icon: <IconMusic className="h-full" />,
      href: "/music",
    },

    {
      title: "About",
      icon: <IconDotsCircleHorizontal className="h-full" />,
      href: "/about",
    },
  ];
  const placeholders = [
    "不时用俄语小声说真心话的邻桌艾莉同学",
    "疑似后宫",
    "青春猪头少年不会梦到兔女郎学姐",
    "迷宫饭",
    "葬送的芙莉莲",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex items-center justify-between w-full mt-4 h-[70px] gap-4 px-[5%] z-20">
      <div className="w-fit mr-auto">
        <motion.div
          className="relative z-20"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <Link
            href={"/404"}
            className={`text-2xl rounded-full px-4 py-2 font-bold text-sky-400 ${
              isHovering ? "bg-sky-400 text-white" : ""
            }`}
          >
            12Club
          </Link>
          <AnimatePresence>
            {isHovering && (
              <motion.div
                className="hover-shape absolute top-9 pt-4 z-20"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => {
                  setIsHovering(true);
                }}
              >
                <div
                  className="py-2 pr-2 rounded-xl bg-slate-100 dark:bg-slate-700 bg-opacity-70 shadow-lg flex flex-row items-center justify-between px-4 gap-2"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  {links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className={`flex flex-row items-center p-2 hover:rounded-xl text-neutral-500 dark:text-neutral-300 hover:bg-sky-400 hover:text-white`}
                    >
                      {link.icon}
                      <span className="text-sm mt-1 ml-1">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className=" relative w-fit mr-auto"></div>
    </div>
  );
}
