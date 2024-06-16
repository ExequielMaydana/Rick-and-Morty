import React, { useState } from "react";
import SearchCharacter from "./SearchCharacter";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col items-center gap-4 py-6 font-rubik relative w-full">
      <SearchCharacter />
      <button
        onClick={toggleNavbar}
        className="flex items-center justify-center gap-2 ml-1 text-sm border border-green-400 rounded-lg px-2 py-1 sm:px-4 sm:py-1 bg-green-500 text-white hover:bg-green-600 transition duration-300 sm:hidden"
      >
        Filtros avanzados <i className="bx bx-filter text-lg"></i>
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#272b34] transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col items-center p-4 sm:hidden`}
      >
        <button
          onClick={toggleNavbar}
          className="self-end text-white text-2xl mb-4"
        >
          &times;
        </button>
        <h2 className="text-center text-zinc-100 sm:text-lg mb-4 sm:hidden">
          Filtrar personajes
        </h2>
        <form className="flex flex-col items-center gap-4 w-full max-w-md">
          <div className="w-full">
            <label className="text-zinc-100" htmlFor="status">
              Status:
            </label>
            <select
              id="status"
              className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
            >
              <option value="">Estado</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-zinc-100 sm:text-black" htmlFor="species">
              Species:
            </label>
            <select
              id="species"
              className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
            >
              <option value="">Todos</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
              <option value="robot">Robot</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-zinc-100 sm:text-black" htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
            >
              <option value="">Todos</option>
              <option value="genetic experiment">Genetic Experiment</option>
              <option value="superhuman">Superhuman</option>
              <option value="parasite">Parasite</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-zinc-100 sm:text-black" htmlFor="gender">
              Gender:
            </label>
            <select
              id="gender"
              className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
            >
              <option value="">Estado</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Aplicar Filtros
          </button>
        </form>
      </div>

      <div className="hidden sm:flex sm:gap-4 sm:w-full sm:justify-center px-4">
        <div className="w-1/4">
          <label className="text-black" htmlFor="status">
            Estado:
          </label>
          <select
            id="status"
            className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
          >
            <option value="">Todos</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="w-1/4">
          <label className="text-black" htmlFor="species">
            Especie:
          </label>
          <select
            id="species"
            className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
          >
            <option value="">Todos</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="robot">Robot</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="w-1/4">
          <label className="text-black" htmlFor="type">
            Tipo:
          </label>
          <select
            id="type"
            className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
          >
            <option value="">Todos</option>
            <option value="genetic experiment">Genetic Experiment</option>
            <option value="superhuman">Superhuman</option>
            <option value="parasite">Parasite</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="w-1/4">
          <label className="text-black" htmlFor="gender">
            Género:
          </label>
          <select
            id="gender"
            className="w-full mt-1 p-2 bg-[#3a3f47] border border-[#6eeb0040] rounded text-white"
          >
            <option value="">Todos</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filters;
