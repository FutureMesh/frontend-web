import React from 'react';
import { Button } from '../components/Button';
import Logo from '../assets/logo.png';

const Main = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="p-8 max-w-md text-center bg-white shadow-md rounded">
      <img src={Logo} alt="FutureMesh Logo" className="w-40 h-40 mb-8 mx-auto" />
      <h1 className="text-2xl font-bold mb-3">Welcome to FutureMesh</h1>
      <p className="text-xl text-gray-700 mb-8">
        Discover your future with AI insights.
      </p>
      <Button
        className="bg-blue-500 text-white text-lg py-4 px-8 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => alert('Start button clicked')}
      >
        Start
      </Button>
    </div>
  </div>
);

export default Main;
