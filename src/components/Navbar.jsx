import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, setSearch } from "../features/navbarSlice";
import { FaBars } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { api_key } from "../data/apikey";
import MovieList from "./MovieList";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.navbarSearch);
  const url = "https://api.themoviedb.org/3/search/movie";

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(
      `${url}?query=${searchText}&page=1&api_key=${api_key}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies(searchText);
    // localStorage.setItem("search", searchTerm);
  }, [searchText]);

  return (
    <>
      <nav className="bg-gray-800 px-4 py-3 flex justify-between">
        <div className="flex items-center text-xl">
          <FaBars
            className="text-white me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <h1
            className="text-2x cursor-pointer  text-red-500 text-xl font-bold capitalize"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            <span className="hidden lg:block">
              {sidebarToggle ? "Open Sidebar" : "Close Sidebar"}
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
              <button className="hidden md:block p-1 focus:outline-none text-white md:text-gray-400">
                <BiSearch />
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 bg-gray-700 rounded-full shadow outline-none  md:block text-gray-200"
              placeholder="Search Movies"
              value={searchText}
              onChange={(e) => {
                dispatch(setSearch(e.target.value));
                searchMovies(searchText);
              }}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") searchMovies(searchTerm);
              // }}
            />
          </div>
        </div>
      </nav>
      {searchText && (
        <div className="ml-10 py-10">
          <MovieList movies={movies} searchTerm={searchText} />
        </div>
      )}
    </>
  );
};

export default Navbar;
