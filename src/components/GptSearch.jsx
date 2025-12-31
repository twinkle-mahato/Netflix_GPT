import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import background_image from "../assets/background_img.jpg"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearGptMovieResults } from "../utils/gptSlice";

const GptSearch = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearGptMovieResults());
  }, []);
  
  return (
    <div>
         <div className="fixed -z-10">
             <img src={background_image} 
             alt="background-iamge" />
         </div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    
  );
};

export default GptSearch;
