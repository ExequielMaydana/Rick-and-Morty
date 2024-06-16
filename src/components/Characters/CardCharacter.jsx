import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardCharacter = ({ data }) => {
  const lastEpisode = data.episode[0];
  const [dataEpisode, setDataEpisode] = useState({});
  useEffect(() => {
    const getEpisode = async () => {
      const res = await fetch(lastEpisode);
      const data = await res.json();
      setDataEpisode(data);
    };

    getEpisode();
  }, []);
  return (
    <article className="w-full max-w-[300px] h-[600px] gridd rounded-md bg-[#3d3e43]">
      <figure className="w-full h-[300px] rounded-md">
        <Image
          width={1000}
          height={1000}
          src={data.image}
          alt="image character"
          className="w-full h-full object-cover rounded-md"
          fetchPriority={true}
        />
      </figure>
      <ul className="flex flex-col items-start justify-center gap-4 p-2">
        <li className="w-full flex flex-col items-start justify-center">
          <span className="text-2xl text-zinc-50 font-black">{data.name}</span>
          <div className="flex items-center justify-center gap-2 text-zinc-50 text-md">
            <div
              className={`${
                data.status === "Alive"
                  ? "w-3 h-3 rounded-full bg-[#00ff0d] shadow-black shadow-lg"
                  : "w-3 h-3 rounded-full bg-[#ff0004] shadow-black shadow-lg"
              }`}
            ></div>
            <p>
              {data.status} <b>-</b> {data.species}
            </p>
          </div>
        </li>
        <li>
          <span className="text-gray-400">Última localización conocida:</span>
          <p className="text-zinc-200">{data.location.name}</p>
        </li>
        <li>
          <span className="text-gray-400">Última localización conocida:</span>
          <p className="text-zinc-200">{data.location.name}</p>
        </li>
        <li>
          {" "}
          <span className="text-gray-400">Visto por primera vez en:</span>
          <p className="text-zinc-200">{dataEpisode.name}</p>
        </li>
      </ul>
    </article>
  );
};

export default CardCharacter;
