import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ page, info, name }) => {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= info.pages) {
      router.push(`?page=${newPage}&name=${name}`);
    }
  };

  return (
    <article className="flex items-center justify-center gap-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={!info.prev}
        className={`border py-1 px-3 rounded-md border-green-400 text-white sm:py-2 sm:px-5 
          ${
            !info.prev
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600 transition duration-300"
          }`}
      >
        Anterior
      </button>
      <span className="border py-1 px-3 rounded-md border-[#6eeb0040] shadow-sm shadow-[#6eeb0040] text-white sm:py-2 sm:px-5">
        {page}
      </span>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={!info.next}
        className={`border py-1 px-3 rounded-md border-green-400 text-white sm:py-2 sm:px-5 
          ${
            !info.next
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600 transition duration-300"
          }`}
      >
        Siguiente
      </button>
    </article>
  );
};

export default Pagination;
