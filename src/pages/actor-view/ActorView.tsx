import { useMovie } from "@/api/hooks/usePerson";
import { IMAGE_URL } from "@/const";
import React from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import MovieView from "@/components/movie-view/MovieView";

const ActorView = () => {
  const { id } = useParams();

  const { getPersonSingle, getPersonSimilar } = useMovie();

  const { data } = getPersonSingle(id || "");
  const { data: imgData } = getPersonSimilar(id || "", "images");
  const { data: movieData } = getPersonSimilar(id || "", "movie_credits");

  return (
    <div>
      <div>
        <h1>{data?.name}</h1>
      </div>

      <div className="flex flex-wrap">
        {imgData?.profiles?.slice(0, 30)?.map((item: any, inx: number) => (
          <Image key={inx} width={200} src={IMAGE_URL + item.file_path} />
        ))}
      </div>

      <div>
        <MovieView data={movieData?.cast?.slice(0,8)} />
      </div>
    </div>
  );
};

export default React.memo(ActorView);
