import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="flex overflow-auto [&::-webkit-scrollbar]:hidden scrollbar-width-none gap-2 container my-12">
      <div className="text-nowrap bg-slate-200 dark:bg-[#111111] text-[16px] font-medium leading-5 px-8 py-3 rounded-md text-black dark:text-white">All</div>
      {data?.map((item: IGenre) => (
        <div className="text-nowrap bg-slate-200 dark:bg-[#111111] text-[16px] font-medium leading-5 px-8 py-3 rounded-md text-black dark:text-white" key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
