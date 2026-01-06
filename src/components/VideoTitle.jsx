import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen bg-linear-to-r z-20  aspect-video from-black to-transparent text-white px-4 sm:px-8 md:px-16 pt-[30%] sm:pt-[20%] md:pt-[20%]">

      <h1 className=" text-2xl sm:text-3xl md:text-6xl font-bold">{title}</h1>

      <p className="hidden sm:line-clamp-3 mt-1 md:mt-3 text-sm md:text-lg w-1/4">{overview}</p>

      <div className=" mt-2 md:mt-6 gap-3 flex">
        <button className="bg-white text-black px-3 p-1 md:p-3 md:px-10 md:text-xl rounded-md font-semibold hover:bg-white/80 cursor-pointer">
          ▶ Play
        </button>

        <button className=" hidden sm:block bg-gray-500/50 text-white p-2 md:p-3 md:px-8 md:text-xl bg-opacity-50 rounded-md cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
