import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import umlogo from '../assets/images/umlogo.svg';

const icons = [
  { id: 1, name: 'Home', icon: 'heroicons:home-20-solid' },
  { id: 2, name: 'Traffic', icon: 'ri:traffic-light-line' },
  { id: 3, name: 'Weather', icon: 'cbi:weather-page-alt' },
  { id: 4, name: 'Events', icon: 'fluent-emoji-high-contrast:party-popper' },
  { id: 5, name: 'Sports', icon: 'material-symbols:sports-handball-rounded' },
  { id: 6, name: 'Magic', icon: 'fluent-emoji-high-contrast:magic-wand' },
];

const DashboardSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="absolute top-0 left-0 h-full z-10 px-6 py-40">
      <div className="w-20 bg-black bg-opacity-75 text-white rounded-xl flex flex-col gap-y-4 justify-center items-center transition-all duration-300">
        <div className="flex flex-col gap-3 justify-center items-center pt-12">
          <img src={umlogo} className="w-10" alt="um-logo" />
        </div>
        <hr className="w-16 h-0.5 border-white" />
        <div className="flex flex-col gap-y-8 justify-center items-center mt-5 pb-12">
          {icons.map((item) => (
            <div
              key={item.id}
              className="flex items-center w-full group"
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Icon icon={item.icon} width="24" style={{ color: '#ffffff' }} />
              
              <span
                className={`ml-4 text-sm transition-all duration-300 whitespace-nowrap overflow-hidden ${
                  hoveredIcon === item.id ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                }`}
              >
                {hoveredIcon === item.id && item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
