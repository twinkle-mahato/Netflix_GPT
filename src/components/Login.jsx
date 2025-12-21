import { useState, useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/Validate";

const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true);
  
  //const[errorMessage, setErrorMessage] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
   
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

      //  console.log(email.current.value);
      //  console.log(password.current.value);

    // This is a function that checks if the form fields are valid 
     const errors = checkValidData(
        name.current?.value || "",   //the Name input value (or empty string if nothing is entered).
        email.current.value,
        password.current.value,
        isSignInForm,
      );
      
  setNameError(errors.nameError || null);
  setEmailError(errors.emailError || null);
  setPasswordError(errors.passwordError || null);
       
    }

    const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

    // clear errors when toggling form
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);

    // clear input values
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
         <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg' alt='background-iamge'/> 
         </div>

         {/* login form */}
         <form onSubmit={(e) => e.preventDefault()}
         className="absolute p-12 bg-black/85 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded">

         <h1 
         className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
   
         {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
            nameError ? "border-red-600" : "border-gray-400 focus:border-white"
         }`}
          />
        )}

        {nameError && <p className="text-red-500 text-sm mb-2">{nameError}</p>}

          

        <input 
         ref={email} 
         type="text" 
         placeholder="Email Address" 
         className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
         emailError ? "border-red-600" : "border-gray-400 focus:border-white"
         }`} />  

         {emailError && <p className="text-red-600 text-sm">{emailError}</p>}    
      
        <input 
        ref={password} 
        type="password" 
        placeholder="Password"
        className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
        passwordError ? "border-red-600" : "border-gray-400 focus:border-white"
        }`} />

      {passwordError && <p className="text-red-600 text-sm">{passwordError}
      </p>
       }
         

        <button className="p-3 mt-6 bg-red-700 w-full rounded font-semibold hover:bg-red-600 cursor-pointer"
          onClick={handleButtonClick}> 
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

         {/* Sign Up form */}
         <p 
         className="mt-6 text-lg cursor-pointer" 
         onClick={toggleSignInForm}> 
         {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In now"} 
         </p>
         </form>
    </div>
  )
}

export default Login