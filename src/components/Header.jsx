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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

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

  return (
    <div className=" absolute top-0 left-0 px-8 py-2 bg-linear-to-b from-black/80 to-transparent w-full z-50 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {/* when i have user then load this part only */}
      {user && (
        <div className="flex items-center">
          <button
            className=" px-5 py-2 rounded-md text-white
                        border border-blue-700
                        bg-blue-800/40
                        hover:bg-blue-700/30
                        hover:border-blue-600
                        transition-all duration-200 cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            GPT Search
          </button>
          <img
            alt="user-icon"
            className="w-12 h-12 mx-4 rounded-md cursor-pointer hover:ring-2 hover:ring-white/50 transition-all duration-200"
            src={user?.photoURL}
          />

          <button
            onClick={handleSignOut}
            className="px-6 py-3 my-8 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 active:bg-red-700 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
