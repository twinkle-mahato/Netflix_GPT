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

  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black w-full z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />

      {/* when i have user then load this part only */}
      {user && (
        <div className="flex items-center">
          <img
            alt="user-icon"
            className="w-12 h-12 m-3 rounded-md"
            src={user?.photoURL}
          />

          <button
            onClick={handleSignOut}
            className="px-6 py-3 my-8 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 active:bg-red-700 active:scale-95 transition-all duration-200s cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
