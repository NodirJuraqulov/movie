import type { IGenre } from "@/types";
import React, { type FC } from "react";
import { useParamsHook } from "../../hooks/useParamsHook";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam, removeParam, clearParams } = useParamsHook();
  const genre = getParam("genre");

  const handleGenre = (id: number) => {
    if (genre === id.toString()) {
      removeParam("genre");
    } else {
      setParam("genre", id.toString());
    }
  };

  const removeGenre = () => {
    clearParams();
  }

  return (
    <div className="flex overflow-auto [&::-webkit-scrollbar]:hidden scrollbar-width-none gap-2 container my-12">
      <div onClick={() => removeGenre()} className={`text-nowrap bg-slate-200 dark:bg-[#111111] cursor-pointer text-[16px] font-medium leading-5 px-8 py-3 rounded-md text-black ${!genre ? "text-red-700 bg-slate-400" : "dark:text-white"}`}>
        All
      </div>
      {data?.map((item: IGenre) => (
        <div
          onClick={() => handleGenre(item.id)}
          className={`text-nowrap bg-slate-200 dark:bg-[#111111] text-[16px] font-medium cursor-pointer leading-5 px-8 py-3 rounded-md text-black ${
            item.id.toString() === genre ? "text-red-700 bg-slate-400" : "dark:text-white"
          }`}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
