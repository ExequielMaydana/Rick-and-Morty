import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchCharacter = () => {
  const [nameCharacter, setNameCharacter] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`?name=${nameCharacter}`);
  };
  return (
    <article className="flex items-center justify-center gap-4">
      <label htmlFor="inputText">
        <input
          type="text"
          id="inputText"
          value={nameCharacter}
          placeholder="Nombre de un personaje"
          onChange={(e) => setNameCharacter(e.target.value)}
          className="w-[250px] py-2 border border-green-400 bg-gray-800 text-green-200 pl-2 rounded-md shadow-lg outline-none focus:ring-2 focus:ring-green-500 sm:w-[300px] transition duration-300"
        />
      </label>
      <button
        onClick={handleSearch}
        className="py-2 px-4 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-500 transition duration-300"
      >
        Buscar
      </button>
    </article>
  );
};

export default SearchCharacter;
