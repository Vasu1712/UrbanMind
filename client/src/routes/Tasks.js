import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profileimage from '../assets/images/profile_image.png';
import coins from '../assets/images/coins.png';
import Footer from './Footer';



const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>

      <div className="mt-8 px-3">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Have a look!</h2>
            <p className="text-sm text-gray-500 mb-6">Track your peers' activities</p>     
        </div>
        <div className="mt-6 w-full max-w-md overflow-x-auto flex-col gap-x-3">
            <div className="min-w-[200px] h-40 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between drop-shadow-lg border-b-2 border-y-rose-800">
            <h4 className="text-white font-light">Featured Task</h4>
            <span>
                <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Reception Dusting</p>
                <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
            </span>
            </div>
            <div className="min-w-[200px] h-40 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between ">
            <h4 className="text-white font-light">Upcoming Task</h4>
            <span>
                <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Tuition Classes</p>
                <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
            </span>
            </div>
            <div className="min-w-[200px] h-40 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between">
            <h4 className="text-white font-light">Featured Task</h4>
            <span>
                <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Reception Dusting</p>
                <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
            </span>
            </div>
        </div>
        <Link to="/leaderboard">
            <span className="flex gap-x-1 justify-center items-center pt-4 italic text-blue-500 font-semibold">
                See your leaderboard rankings 
                <Icon icon="material-symbols-light:social-leaderboard-outline" width="28" className="my-auto" />
            </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;
