import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profileimage from '../assets/images/profile_image.png';
import Footer from './Footer';
const generateAvatar = (seed) => `https://api.dicebear.com/9.x/micah/svg?seed=${seed}`;

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>

      <div className="mt-8 px-3">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4 bg-violet-200 rounded-full p-2">
            <span className="bg-deepblue2 text-white px-4 py-1 rounded-full">Daily</span>
            <span className="px-4 py-1">Weekly</span>
            <span className="px-4 py-1">Monthly</span>
          </div>
        </div>

        <div className="text-center ">
          <div className="relative flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-skyblue ring-4 ring-yellow-400">
              <img src={generateAvatar('rachel')} alt="Rachel" className="rounded-full" />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Icon icon="mdi:crown" width="28" className="text-yellow-400" />
            </div>
          </div>
          <h2 className="text-xl font-semibold">Rachel</h2>
          <p className="text-gray-600">₹280</p>
        </div>

        <div className="flex justify-around items-baseline mb-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-skyblue ring-4 ring-pink-400">
              <img src={generateAvatar('maria')} alt="Maria" className="rounded-full" />
            </div>
            <h3 className="text-lg">Maria</h3>
            <p className="text-pink-400">₹254</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-skyblue ring-4 ring-red-400">
              <img src={generateAvatar('andrew')} alt="Andrew" className="rounded-full" />
            </div>
            <h3 className="text-lg">Andrew</h3>
            <p className="text-red-400">₹100</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Ranks near you</h2>
          <div className="bg-violet-200 rounded-2xl p-4 mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <img src={profileimage} alt="You" className="h-12 rounded-full mr-4 bg-skyblue" />
                <div>
                  <h3 className="text-lg font-semibold">You</h3>
                  <p className="text-gray-600">₹30</p>
                </div>
              </div>
              <Icon icon="mdi:arrow-up" width="24" className="text-green-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-2 text-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={generateAvatar('martha')} alt="Martha Anderson" className="h-12 rounded-full mr-4 bg-skyblue" />
                <div>
                  <h3 className="text-lg font-semibold">Martha Anderson</h3>
                  <p className="text-gray-400">₹80</p>
                </div>
              </div>
              <Icon icon="mdi:arrow-up" width="24" className="text-green-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-2 text-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={generateAvatar('julia')} alt="Julia Clover" className="h-12 rounded-full mr-4 bg-skyblue" />
                <div>
                  <h3 className="text-lg font-semibold">Julia Clover</h3>
                  <p className="text-gray-400">₹50</p>
                </div>
              </div>
              <Icon icon="mdi:arrow-down" width="24" className="text-red-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-12 text-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={generateAvatar('carrie')} alt="Carrie Henderson" className="h-12 rounded-full mr-4 bg-skyblue" />
                <div>
                  <h3 className="text-lg font-semibold">Carrie Henderson</h3>
                  <p className="text-gray-400">₹40</p>
                </div>
              </div>
              <Icon icon="mdi:arrow-up" width="24" className="text-green-400" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;
