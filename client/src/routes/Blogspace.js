import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profileimage from '../assets/images/profile_image.png';
import Footer from './Footer';

const generateAvatar = (seed) => `https://api.dicebear.com/9.x/micah/svg?seed=${seed}`; 


const BlogSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">BlogSpace</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>

      <div className="mt-8 px-3">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Explore</h2>
            <p className="text-sm text-gray-500 mb-6">Track your peers' activities</p>
            <div className="flex gap-x-6 max-w-md overflow-x-auto p-1">
                <div className="min-w-14 h-14 ring ring-lightpink2 ring-offset-1 rounded-full bg-reallavender flex items-center justify-center">
                <Icon icon="icon-park-outline:plus" width="32" className="text-white" />
                </div>
                <div className="min-w-14 h-14 ring ring-lightpink2 ring-offset-1 rounded-full bg-skyblue">
                <img src={generateAvatar('explore1')} alt="Avatar" className="rounded-full" />
                </div>
                <div className="min-w-14 h-14 ring ring-lightpink2 ring-offset-1 rounded-full bg-skyblue">
                <img src={generateAvatar('explore2')} alt="Avatar" className="rounded-full" />
                </div>
                <div className="min-w-14 h-14 ring ring-lightpink2 ring-offset-1 rounded-full bg-skyblue">
                <img src={generateAvatar('explore3')} alt="Avatar" className="rounded-full" />
                </div>
                <div className="min-w-14 h-14 ring ring-lightpink2 ring-offset-1 rounded-full bg-skyblue">
                <img src={generateAvatar('explore4')} alt="Avatar" className="rounded-full" />
                </div>
            </div>
            </div>


        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 py-4">Explore Lives</h2>
          <div className="flex space-x-6 overflow-x-auto">
            <div className="min-w-32 h-36 bg-[#DEDAF9] rounded-2xl flex flex-col items-end justify-end">
              <Icon icon="fluent:live-24-regular" width="28" className="text-gray-900 mb-2 mr-3" />
              <img src={generateAvatar('live1')} alt="Live" className="h-24" />
            </div>
            <div className="min-w-32 h-36 bg-[#DEDAF9] rounded-2xl flex flex-col items-end justify-end">
              <Icon icon="material-symbols-light:podcasts-rounded" width="28" className="text-gray-900 mb-2 mr-3" />
              <img src={generateAvatar('live2')} alt="Live" className="h-24" />
            </div>
            <div className="min-w-32 h-36 bg-[#DEDAF9] rounded-2xl flex flex-col items-end justify-end">
              <Icon icon="ph:google-podcasts-logo" width="28" className="text-gray-900 mb-2 mr-3" />
              <img src={generateAvatar('live3')} alt="Live" className="h-24" />
            </div>
          </div>
        </div>

        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Threads</h2>
          <div className="flex justify-around items-center space-x-4 mb-4 pt-3">
            <span className="text-deepblue2 font-bold text-xl">For you</span>
            <span className="text-gray-500">Trending</span>
            <span className="text-gray-500">Saved</span>
            <span className="text-gray-500">Shared by You</span>
          </div>
          <div className="bg-grad3 rounded-2xl p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-x-1">
                <img src={generateAvatar('thread1')} alt="Profile" className="h-12 rounded-full mr-2" />
                <div className="">
                  <h3 className="text-lg font-semibold">Jishnu Hari</h3>
                  <p className="text-xs text-gray-500">2 hrs Ago</p>
                </div>
              </div>
              <Icon icon="mdi:dots-horizontal" width="24" className="text-gray-500" />
            </div>
            <p className="text-sm text-gray-800 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="text-blue-600 text-sm font-base">Read More</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogSpace;
