import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="inset-0 -z-10 overflow-hidden">
      <iframe
        className="h-full w-full aspect-video scale-130 pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0" +
          "&loop=1&playlist=" +
          trailerVideo?.key +
          "&modestbranding=1&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="autoplay;  encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
