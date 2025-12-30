import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
 
  const langKey = useSelector((store) => store.config.lang);

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
      >
        <input
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
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
