import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg' alt='background-iamge'/>
         </div>

         {/* login form */}
         <form className="absolute p-12 bg-black/85 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded">
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
   
         { !isSignInForm && (
         <input type="text" placeholder=" Full Name" className="p-4 my-2 rounded w-full border border-gray-400" />
        )}

         <input type="text" placeholder="Email Address" className="p-4 my-2 border border-gray-400 rounded  w-full " /> 

         <input type="text" placeholder="Password" className="p-4 my-2 rounded w-full border border-gray-400" />

         <button className="p-3 mt-6 bg-red-700 w-full rounded font-semibold hover:bg-red-600 cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>

         {/* Sign Up form */}
         <p className="mt-6 text-lg cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix?Sign up now" : "Already registered?Sign In now"} </p>
         </form>
    </div>
  )
}

export default Login