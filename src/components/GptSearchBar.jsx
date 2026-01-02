import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import genai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search Movie in TMDb
  const searchMovieTMDb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // make an API call gemini and get Movie  Results

    const genaiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result  given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Geya ";

    const genaiResults = await genai.models.generateContent({
      contents: genaiQuery,
      model: "gemini-2.5-flash",
    });

    // error handling for not getting result
    if (!genaiResults.candidates) {
      console.error("GPT Search Error ❌");
    }

    console.log("RAW RESULT 👉", genaiResults);

    // by using split(","),  after this it will give me array of movies
    const genaiMovies =
      genaiResults?.candidates?.[0]?.content?.parts[0]?.text.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    console.log("Gemini Text 👉", genaiMovies);

    // for each movie i will search TMDB API
    const promiseArray = genaiMovies.map((movie) => searchMovieTMDb(movie));
    // [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: genaiMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-[45%] bg-black grid grid-cols-12 rounded-lg overflow-hidden border border-white/30"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 md:m-3 m-2 bg-white/10 text-white outline-line col-span-9 md:col-span-10 placeholder-white/60  border border-white rounded-lg focus:outline-none 
         focus:border-blue-500 transition duration-200"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />

        <button
          className=" col-span-3 md:col-span-2 m-2 md:m-3 py-2  bg-red-600 text-white rounded-lg cursor-pointer shadow-md hover:shadow-red-500/30 transition duration-200 ease-in-out active:scale-95"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
