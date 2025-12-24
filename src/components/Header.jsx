import React from 'react'
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const Header = () => {
const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

  // Sign-out successfull then naviagte to my home page
       navigate("/");
   })
   .catch((error) => {
  // An error happened
    navigate("/error");
});
  }

  return (
    <div className='absolute px-8 py-2 bg-linear-to-b from-black w-full z-10 flex justify-between'>
     <img className ="w-44" 
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>

 {/* when i have user then load this part only */}
      { user && ( 
        <div className='flex gap-3 items-center'>

      <img alt ="user-icon" 
        className='w-12 h-12 ' 
        src={user?.photoURL}/>

      <button onClick={handleSignOut}
      className='text-white font-semibold hover:underline cursor-pointer'>
        Sign Out
      </button>

      </div>
)}
    </div>
      
  )
}

export default Header