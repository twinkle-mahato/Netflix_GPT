import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="items-center gap-4
          grid grid-cols-12
          bg-black/75
          border border-white/30
          rounded-xl
          px-10 py-3
          shadow-2xl
          backdrop-blur-md"
      >
        <input
          type="text"
          className="col-span-10
            bg-transparent
            text-white
            placeholder-gray-300
            text-lg
            outline-none"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />

        <button
          className="bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            px-6 py-3
            rounded-lg
            transition-all
            duration-200
            active:scale-95
            col-span-2
            cursor-pointer
            "
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
