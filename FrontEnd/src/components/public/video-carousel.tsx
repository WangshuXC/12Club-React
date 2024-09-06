"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface VideoCarouselItem {
  title: string;
  summary: string;
  img: string;
}

const VideoCarousel = ({
  videoCarouselList,
}: {
  videoCarouselList: VideoCarouselItem[];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imageList = videoCarouselList.map((item) => item.img);

  const styleList = [
    "20px",
    "calc(33.5% + 20px)",
    "calc(63% + 20px)",
    "calc(92.5% + 20px)",
    "calc(122% + 20px)",
    "calc(151.5% + 20px)",
    "calc(181% + 20px)",
    "calc(210.5% + 20px)",
    "calc(240% + 20px)",
    "calc(269.5% + 20px)",
  ];

  const handleClick = (index: number) => {
    if (selectedIndex !== index) {
      setSelectedIndex(index);
    }
  };

  const changeImage = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  }, [imageList]);

  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  }, [selectedIndex, changeImage]);

  return (
    <div className="videoCarousel contentWrap w-full h-[600px] relative z-10">
      <div className="infoWrap flex flex-row-reverse absolute top-[5%] right-0 bottom-0 left-[5%] base-bg-100 overflow-hidden rounded-xl">
        <div className="infoContentWrap flex flex-col justify-end w-[42.1%] h-full relative pl-5 pb-5">
          <div
            className="cover absolute top-0 bottom-0 left-0 right-0 opacity-[0.04] bg-cover"
            style={{ backgroundImage: `url(${imageList[selectedIndex]})` }}
          ></div>
          <div className="title base-text mb-2 w-full h-[40px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-3xl pl-5 pr-10">
            {videoCarouselList[selectedIndex].title}
          </div>
          <div className="description base-text mb-3 w-full pl-5 pr-10 text-sm">
            {videoCarouselList[selectedIndex].summary}
          </div>
          <div className="buttonWrap pl-5 flex ">
            <div className="playButton w-[48px] h-[48px] flex items-center justify-center bg-slate-300 dark:bg-slate-500 base-text relative cursor-pointer rounded-full text-2xl">
              <IconPlayerPlayFilled className="h-full text-white" />
            </div>
          </div>
          <div className="carouselWrap w-full h-[22%] mt-10 flex flex-row relative overflow-hidden">
            {imageList.map((item, index) => (
              <div
                key={index}
                style={{
                  left: styleList[
                    (index - selectedIndex + imageList.length) %
                      imageList.length
                  ],
                  ...(selectedIndex ===
                  (index + 1 + imageList.length) % imageList.length
                    ? { left: "0" }
                    : {}),
                }}
                onClick={() => handleClick(index)}
                className={`carouselItemWrap w-[27%] h-full cursor-pointer overflow-hidden rounded-xl absolute opacity-70 flex items-center ${
                  selectedIndex === index ? "carouselSelect" : ""
                } ${
                  selectedIndex ===
                  (index + 1 + imageList.length) % imageList.length
                    ? "carouselEdge"
                    : ""
                } ${
                  selectedIndex ===
                  (index + 2 + imageList.length) % imageList.length
                    ? "noAnimation"
                    : ""
                }`}
              >
                <div
                  className={`w-full relative ${
                    selectedIndex === index ? "pb-[75%]" : "pb-[55%]"
                  }`}
                >
                  <div
                    className={`carouselImage absolute top-0 bottom-0 left-0 right-0 border-4 dark:border-white border-slate-500 border-opacity-60 ${
                      selectedIndex === index ? "border-none" : "rounded-xl"
                    }`}
                  >
                    <Image
                      src={item}
                      alt="ImageCover"
                      fill
                      className={`object-cover ${
                        selectedIndex !== index ? "rounded-lg" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="imageWrap absolute w-[60%] h-[90%] overflow-hidden">
        <AnimatePresence initial={false}>
          {imageList.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0 w-full h-full bg-cover rounded-xl"
              style={{
                backgroundImage: `url(${image})`,
                zIndex: index === selectedIndex ? 2 : 1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === selectedIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              layout
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoCarousel;
