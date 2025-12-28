import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import background_image from "../assets/background_img.jpg"

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
             <img src={background_image} 
             alt="background-iamge" />
         </div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    
  );
};

export default GptSearch;
