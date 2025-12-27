import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute  w-screen aspect-video bg-linear-to-r from-black to-transparent text-white px-24 pt-[20%] ">

      <h1 className="text-6xl font-bold">{title}</h1>

      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="gap-3 flex">
        <button className="bg-white text-black p-4  px-12 text-xl rounded-md font-semibold hover:bg-white/80 cursor-pointer">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
