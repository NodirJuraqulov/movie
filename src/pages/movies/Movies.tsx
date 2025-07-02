import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const [params, setParams] = useSearchParams();

  const page: number = parseInt(params.get("page") ?? "1", 10);                
  const pageSize: number = parseInt(params.get("pageSize") ?? "20", 10);       

  const { data: genreData } = getGenres();
  const { data } = getMovies({limit: pageSize, skip: pageSize * (page - 1), without_genres: "18,36,27,10749" });

  const handleChangePage = (page: number , pageS: number) => {   
    if (pageS !== pageSize) {
      params.set("pageSize", pageS.toString());
      params.set("page", "1");
    } else {
      params.set("page", page.toString());
    }
    setParams(params);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Genre data={genreData?.genres} />

      <MovieView data={data?.results} />

      <div className="mt-6 h-[60px] flex items-center justify-center">
        <Pagination
          current={page}
          onChange={handleChangePage}
          pageSize={pageSize}
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
