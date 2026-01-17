import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-28 sm:w-34 md:w-42 cursor-pointer">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
