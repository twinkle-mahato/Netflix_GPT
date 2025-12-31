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
    <div className="pt-[10%] flex justify-center">
      <form
        className="items-center gap-4
          grid grid-cols-12
          bg-black
          border border-white/30
          rounded-xl
          px-5 py-3
          shadow-2xl
          backdrop-blur-md
          w-[45%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-10
            bg-transparent
            text-white
            placeholder-gray-300
            text-lg
            outline-none"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />

        <button
          className="bg-red-600
            hover:bg-red-700
            text-white
            px-6 py-3
            rounded-lg
            transition-all
            duration-200
            active:scale-95
            col-span-2
            cursor-pointer
            "
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
