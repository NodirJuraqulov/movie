import React, { type FC } from "react";
import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { Rate } from 'antd';
import NoImg from "@/assets/noimage.png"
import { useNavigate } from "react-router-dom";

interface Props {
  data: undefined | IMovie[];
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {data?.map((movie: IMovie) => (
        <div className="dark:bg-[#111111] bg-slate-200 rounded-lg" key={movie.id}>
          <div className="relative overflow-hidden">
            <img
              loading="lazy"
              onClick={()=> navigate(`/movie/${movie.id}`)}
              src={movie.poster_path ? IMAGE_URL + movie.poster_path : NoImg}
              alt={movie.title}
              className="rounded-t-lg hover:scale-102 object-contain cursor-pointer"
            />
            <p className="absolute top-2 left-2 text-white bg-red-500 px-2 rounded text-sm">{movie.release_date.split("-")[0]}</p>
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
