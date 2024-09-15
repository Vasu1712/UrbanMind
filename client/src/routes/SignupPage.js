import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'tailwindcss/tailwind.css';
import '../custom.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignUp = () => {
    setErrorMessage(''); // Reset the error message
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Created New Account');
          navigate('/login');
        })
        .catch((error) => {
          setErrorMessage(error.message); // Update the error message state
          console.error('Error:', error.message);
        });
    } else {
      setErrorMessage("Passwords don't match"); // Update the error message state
    }
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="w-full max-w-xs mt-20">
        <div>
          <h1 className="text-5xl font-bold text-darkpurple mb-4">Sign Up!</h1>
          <p className="text-xl font-light text-gray-500 mb-8">Create a new account</p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-deeppurple bg-grad1 rounded-lg shadow-sm placeholder-deeppurple"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-deeppurple bg-grad1 rounded-lg shadow-sm placeholder-deeppurple"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-deeppurple bg-grad1 rounded-lg shadow-sm placeholder-deeppurple"
          />
          {errorMessage && (
            <span className="text-red-400 italic text-sm mb-4 block">
              {errorMessage}
            </span>
          )}
          <button
            onClick={handleSignUp}
            className="flex justify-center items-center mx-auto w-36 gap-x-2 bg-white text-darkpurple py-2 px-4 rounded-full shadow-lg"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-deeppurple font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
