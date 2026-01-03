import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen bg-linear-to-r z-20  aspect-video from-black to-transparent text-white px-4 md:px-20 pt-[30%] md:pt-[20%]">

      <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>

      <p className="hidden md:block  sm:line-clamp-3 mt-3 md:py-6 md:text-lg md:w-1/4">{overview}</p>

      <div className=" mt-3 md:mt-4  gap-3 flex">
        <button className="bg-white text-black px-3 p-1 md:p-3 md:px-10 md:text-xl rounded-md font-semibold hover:bg-white/80 cursor-pointer">
          ▶ Play
        </button>

        <button className=" hidden md:block bg-gray-500/50 text-white md:p-3 md:px-10 md:text-xl bg-opacity-50 rounded-md cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
