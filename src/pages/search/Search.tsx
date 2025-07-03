import React from "react";
import { Input } from "antd";
import SearchIcon from "@/assets/search-line.svg";

const SearchMovie = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center my-12">
      <Input
        rootClassName="tw-input"
        placeholder="Search movies..."
        allowClear
        prefix={
          <img
            src={SearchIcon}
            alt="Qidirish"
            style={{ width: 16, height: 16, marginRight: 12 }}
          />
        }
        size="large"
        className="dark:!bg-[#111]"
        style={{ width: 380, height: 64, padding: 20, border: 0 }}
      />

      <div className="flex flex-col items-center justify-center">
        <p className="text-[20px] leading-6 text-[#4D4D4D] font-medium mt-[120px]">
          Nothing here yet.
        </p>
        {/* <p className="text-[20px] leading-6 text-[#4D4D4D] font-medium">
          Nothing found for your search.
        </p> */}
      </div>
    </div>
  );
};

export default React.memo(SearchMovie);
