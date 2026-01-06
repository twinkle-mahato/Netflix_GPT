import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0  md:-mt-65 pl-1 sm:pl-4 relative z-20 md:pl-8 font-medium">

          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

          <MovieList title={"Horror"} movies={movies.horrorMovies} />

          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />

          <MovieList title={"Popular"} movies={movies.popularMovies} />

          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
