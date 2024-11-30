/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "cursor-pointer rounded-xl relative bg-gray-100 dark:bg-neutral-900 w-full h-full flex flex-col bg-transparent transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.95]"
      )}
    >
      <div
        className={cn(
          "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full h-full transition-all duration-300 ease-out"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          sizes="100%"
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 select-none">
            {card.info}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "mt-4 text-xl",
          hovered === index ? "text-sky-400 font-bold" : ""
        )}
      >
        {card.title}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  info?: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4 gap-8 mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
