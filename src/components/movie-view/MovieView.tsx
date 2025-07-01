import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { type FC } from "react";
import { Rate } from 'antd';

interface Props {
  data: undefined | IMovie[];
}

const MovieView: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {data?.map((movie: IMovie) => (
        <div className="dark:bg-[#111111] bg-slate-200 rounded-lg" key={movie.id}>
          <div>
            <img
              loading="lazy"
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-2">
            <h3
              title={movie.title}
              className="text-xl font-semibold line-clamp-1 my-2"
            >
              {movie.title}
            </h3>
            <Rate allowHalf defaultValue={movie.vote_average / 2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(MovieView);
