import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US&sort_by=popularity.desc&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
