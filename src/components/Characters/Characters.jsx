import React from "react";
import CardCharacter from "./CardCharacter";
import Pagination from "./Pagination";

const Characters = ({ data, page, name }) => {
  return (
    <section className="w-full flex flex-col gap-8 p-6 pt-12 bg-[#272b34] sm:pt-24">
      <Pagination page={page} info={data.info} name={name} />
      <ul className="w-full flex flex-wrap items-center justify-center gap-8">
        {data &&
          data.results.map((item) => (
            <li key={item.id}>
              <CardCharacter data={item} />
            </li>
          ))}{" "}
      </ul>
      <Pagination page={page} info={data.info} />
    </section>
  );
};

export default Characters;
