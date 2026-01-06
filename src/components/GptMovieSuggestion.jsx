import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="m-2 sm:m-3 md:m-4 bg-black/90 text-white rounded-lg">
      <div>

        {movieNames.map((movieName, index) => (
          <MovieList 
          key={movieName} 
          title={movieName}
           movies={movieResults[index]} />
        ))}

      </div>
    </div>
  );
};

export default GptMovieSuggestion;
