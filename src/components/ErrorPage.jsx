import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-black/90 via-black to-gray-900 px-4">
      <div className="bg-black/70 p-8 rounded-xl flex flex-col items-center gap-6 text-white">
        <h1 className="text-6xl md:text-8xl font-bold animate-pulse">404</h1>
        <p className="text-lg md:text-2xl text-center">
          Oops! Something went wrong or the page does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-md font-semibold transition-all duration-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
