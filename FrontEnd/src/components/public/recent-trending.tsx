"use client";

import { Tabs } from "../ui/tabs";
import { FocusCard } from "./focus-card";

export function RecentTrending() {
  const tabs = [
    {
      title: "番剧热播",
      value: "anime",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-2xl p-4 bg-slate-200">
          <FocusCard></FocusCard>
        </div>
      ),
    },
    {
      title: "小说热读",
      value: "novel",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-2xl p-4 bg-slate-200">
          <FocusCard></FocusCard>
        </div>
      ),
    },
    {
      title: "音乐热听",
      value: "music",
      content: (
        <div className="flex w-full overflow-hidden relative h-full rounded-2xl p-4 bg-slate-200">
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[72rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start my-40 base-bg-100 p-10 rounded-2xl">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="object-cover object-left-top h-full  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"></div>
  );
};
