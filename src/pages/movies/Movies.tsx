import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const { data: genreData } = getGenres();
  const { data } = getMovies({ page: 1, without_genres: "18,36,27,10749" });

  return (
    <div>
      <Genre data={genreData?.genres} />

      <MovieView data={data?.results} />

      <div className="mt-6 h-[60px] flex items-center justify-center">
        <Pagination
          total={data?.total_results ?? 0}
          showSizeChanger={false}
          prevIcon={
            <LeftOutlined className="text-black dark:bg-white p-2 rounded-md" />
          }
          nextIcon={
            <RightOutlined className="text-black dark:bg-white p-2 rounded-md" />
          }
          className="text-black bg-slate-200 dark:bg-[#111111] rounded-lg !px-2 flex justify-center items-center h-12"
        />
      </div>
    </div>
  );
};

export default React.memo(Movies);
