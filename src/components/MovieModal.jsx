import { IMG_CDN_URL } from "../utils/constants";

 export const MovieModal = ({ movie, onClose }) => {
  
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#181818] text-white w-full max-w-3xl rounded-lg overflow-hidden relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 bg-black/50 hover:bg-white/20 rounded-full p-2 z-10"
        >
          ✕
        </button>

        {/* Poster/Backdrop */}
        <img 
          src={IMG_CDN_URL + (movie.backdrop_path || movie.poster_path)} 
          className="w-full h-64 object-cover" 
          alt="backdrop" 
        />

        {/* Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{movie.title || movie.name}</h1>
          <div className="flex gap-4 mb-4 text-green-400 font-semibold">
            <span>Rating: {movie.vote_average} ⭐</span>
            <span>Release: {movie.release_date || movie.first_air_date}</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};