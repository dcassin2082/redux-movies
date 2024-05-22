import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch } from "../features/navbarSlice";

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  return (
    <main className="items-center justify-center">
      {/* <div
        className="items-center justify-center container mb-10 rounded-sm"
        style={{
          height: "20vw",
          width: "70vw",
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg)",
        }}
      >
        <div className="bottom-left ">
          <h1 className="text-white">movie title</h1>
        </div>
      </div> */}
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center mr-12">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                onClick={() => dispatch(clearSearch())}
              >
                <MovieCard movie={movie} id={movie.id} />
                <h5 className="text-lg wrapper text-white text-center text-ellipsis overflow-hidden">
                  {movie.title}
                </h5>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MovieList;
