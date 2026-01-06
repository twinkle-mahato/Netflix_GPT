import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import NETFLIX_LOGO from "../assets/netflix_logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //if my user signed in then disptach this action addUser action
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //if my user signed out then disptach this action addUser action
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
   // console.log(e.target.value);
   dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
     <div className="flex flex-row items-center justify-between px-2 py-3 bg-linear-to-b from-black/90 to-transparent">

      <img className="w-30 sm:w-45 md:mx-0" src={NETFLIX_LOGO} alt="logo" />

      {/* when i have user then load this part only */}
      {user && (
        <div className="flex items-center gap-2 md:gap-0">

          {showGptSearch && (
          <select
            className="hidden md:block mr-4 px-5 py-2 rounded-md bg-black/60 text-white text-sm border border-white/50 backdrop-blur-sm  hover:border-white/40 focus:outline-none
           focus:ring-2 focus:ring-blue-500/60 transition-all duration-200 cursor-pointer"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="bg-gray-900 text-white"
              >
                {lang.identifier}
              </option>
            ))}
          </select>
          )}

          <button
            className=" px-1 sm:px-2 md:px-4 sm:py-2 py-1 rounded-md
              text-white text-sm font-medium
              bg-blue-700/50
              border border-blue-100/60
              hover:bg-blue-600/70
              hover:border-blue-400
              focus:ring-2 focus:ring-blue-500/60
              transition-all duration-200 cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <img
            alt="user-icon"
            className="hidden md:block w-12 h-11 mx-4 rounded-md border border-white/20 hover:scale-105 cursor-pointer  hover:ring-white/40 transition-all duration-200"
            src={user?.photoURL}
          />

          <button
            onClick={handleSignOut}
            className=" px-2 sm:px-2 md:px-4 py-1  sm:py-2 my-5 md:my-4 bg-red-600 text-white rounded-md hover:bg-red-500 active:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer  font-medium"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Header;
