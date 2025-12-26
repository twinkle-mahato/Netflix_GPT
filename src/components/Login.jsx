import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import background_image from "../assets/background_img.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  //const[errorMessage, setErrorMessage] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [authError, setAuthError] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    //  console.log(email.current.value);
    //  console.log(password.current.value);

    // This is a function that checks if the form fields are valid
    const errors = checkValidData(
      name.current?.value || "", //the Name input value (or empty string if nothing is entered).
      email.current.value,
      password.current.value,
      isSignInForm
    );

    setNameError(errors.nameError || null);
    setEmailError(errors.emailError || null);
    setPasswordError(errors.passwordError || null);

    //  If data is invalid → show errors and STOP. If data is valid → continue and create/sign in user

    // If errors object is NOT empty or greater then zero, return early and stop execution. If errors object is empty or equal to zero, continue with sign up.

    if (Object.keys(errors).length > 0) return;

    // logic for sign In/Up Logic (if not sign in page then it means sign up page)

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setAuthError(null); // Clear error on success

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setAuthError(error.message);
            });
          // console.log("Signed up:",user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed in:", user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

    // clear errors when toggling form
    setAuthError(null);
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);

    // clear input values
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background_image} alt="background-iamge" />
      </div>

      {/* login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/85 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
              nameError
                ? "border-red-600"
                : "border-gray-400 focus:border-white"
            }`}
          />
        )}

        {!authError && nameError && (
          <p className="text-red-500 text-sm mb-2">{nameError}</p>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
            emailError ? "border-red-600" : "border-gray-400 focus:border-white"
          }`}
        />

        {!authError && emailError && (
          <p className="text-red-600 text-sm">{emailError}</p>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className={`p-4 my-2 rounded w-full bg-black/70 border transition-colors duration-200 focus:outline-none ${
            passwordError
              ? "border-red-600"
              : "border-gray-400 focus:border-white"
          }`}
        />

        {!authError && passwordError && (
          <p className="text-red-600 text-sm">{passwordError}</p>
        )}

        {/* firebase auth error */}

        {authError && (
          <div className="bg-[#e87c03] p-3 rounded-md mt-4 text-white text-[14px] flex items-center">
            <span>{authError}</span>
          </div>
        )}

        <button
          className="p-3 mt-6 bg-red-700 w-full rounded font-semibold hover:bg-red-600 cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Sign Up form */}
        <p className="mt-6 text-lg cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
