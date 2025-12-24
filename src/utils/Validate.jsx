

 export const checkValidData = (name, email, password, isSignInForm) => {
  const errors = {};

  
  // Name validation (only for signUp Page)
  
   if (!name && !isSignInForm) {  // only check name on Sign Up
    errors.nameError = "*Name is required";
  }

  // Email validation
  
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!email) {
    errors.emailError = "*Email is required";
  } else if (!isEmailValid) {
    errors.emailError = "*Invalid email format";
  }

  
// Password validation

const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);

  if (!password) {
    errors.passwordError = "*Password is required";
  } else if (!isPasswordValid) {
    errors.passwordError = "*Password must be at least 8 characters and include letters and numbers";
  }

  // Return errors object (errors = empty here)
  return errors;
};


