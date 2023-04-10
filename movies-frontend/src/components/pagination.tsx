import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({
  pages = [1],
  cur = 1,
  nextPage,
  prevPage,
  setCur,
}: any) => {
  return (
    <div className="flex rounded-lg font-semibold">
      <button
        onClick={prevPage}
        className="h-12 border-2 border-r-0 border-red-600
                px-4 rounded-l-lg hover:bg-red-500 text-red-600 hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pages.map((pg: number) => (
        <button
          key={pg}
          onClick={setCur}
          className={`h-12 border-2 border-r-0 border-red-600
                w-12 text-red-600 ${cur === pg && "text-white bg-red-100"}`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={nextPage}
        className="h-12 border-2  border-red-600
                px-4 rounded-r-lg hover:bg-red-500 hover:text-white text-red-600"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
