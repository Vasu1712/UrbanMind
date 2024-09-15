import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import LoginIcon from '../assets/images/login_icon.png';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignInWithGoogle = async () => {
    setErrorMessage(''); // Reset the error message
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Signed in with Google:', user);
      navigate('/profile');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
      setErrorMessage(error.message);
    }
  };

  const handleSignInWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in with email:', userCredential.user);
      navigate('/profile');
    } catch (error) {
      console.error('Error signing in with email and password:', error.message);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="w-full max-w-xs mt-10">
        <div>
          <h1 className="text-3xl font-bold text-darkpurple mb-2">Hi, Welcome back!</h1>
          <p className="text-xl font-light text-gray-500 mb-8">Log in to your account</p>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <img src={LoginIcon} alt="Login Icon" className="h-40" />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-deeppurple bg-grad1 rounded-lg shadow-sm placeholder-deeppurple placeholder:font-light placeholder:px-4"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-deeppurple bg-grad1 rounded-lg shadow-sm placeholder-deeppurple placeholder:font-light placeholder:px-4"
          />
          <p className="text-right text-gray-500 font-light italic text-sm">
            Forgot Password?
          </p>
          <Link to="/profile">
            <button
              onClick={handleSignInWithEmail}
              className="flex justify-center items-center mx-auto w-36 mt-6 gap-x-2 bg-white text-darkpurple py-2 px-4 rounded-full shadow-lg">
              Login
            </button>
          </Link>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            onClick={handleSignInWithGoogle}
            className="flex justify-center items-center mx-auto gap-x-2 bg-deeppurple text-white py-2 px-6 rounded-full shadow-lg font-light">
            Sign in with Google
          </button>
          {errorMessage && (
            <span className="text-red-400 italic text-sm mb-4 block">
              {errorMessage}
            </span>
          )}
          <p className="mt-6 text-center text-gray-700">
            Don't have an account?{' '}
            <Link to="/signup" className="text-deeppurple font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
