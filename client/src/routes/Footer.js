import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ScanReceipt from './ScanReceipt';

const Footer = () => {
  const [activeLink, setActiveLink] = useState('');
  const [showScan, setShowScan] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleScanComplete = (text) => {
    console.log('Scanned Receipt Text:', text);
    setShowScan(false);
    // Process the scanned text and convert it to JSON as needed
  };

  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full h-16 py-2 bg-white/5 backdrop-blur-md backdrop-filter shadow-lg flex justify-around items-center">
        <Link to="/tasks" onClick={() => setActiveLink('/tasks')} className={activeLink === '/tasks' ? 'text-deepblue2' : 'text-gray-500'}>
          <Icon icon="carbon:task-star" width="28" className="my-auto hover:text-deepblue2"/>
        </Link>
        <Link to="/transactions" onClick={() => setActiveLink('/transactions')} className={activeLink === '/transactions' ? 'text-deepblue2' : 'text-gray-500'}>
          <Icon icon="fluent:history-32-filled" width="28" className="my-auto hover:text-deepblue2"/>
        </Link>
        <Link to="/profile" onClick={() => setActiveLink('/profile')}>
          <div className="mt-[-40px] z-10 bg-gradient-to-b from-deepblue1 to-deepblue2 h-16 w-16 flex justify-center items-center text-white rounded-full shadow-xl">
            <Icon icon="mdi:rupee" width="36" className="my-auto text-white"/>
          </div>
        </Link>
        <Link to="/scan" onClick={() => setShowScan(true)} className={activeLink === '/scan' ? 'text-deepblue2' : 'text-gray-500'}>
          <Icon icon="mage:box-3d-scan" width="28" className="my-auto hover:text-deepblue2"/>
        </Link>
        <Link to="/statistics" onClick={() => setActiveLink('/statistics')} className={activeLink === '/statistics' ? 'text-deepblue2' : 'text-gray-500'}>
          <Icon icon="octicon:graph-24" width="28" className="my-auto hover:text-deepblue2"/>
        </Link>
      </div>
      {showScan && <ScanReceipt onScanComplete={handleScanComplete} />}
    </div>
  );
};

export default Footer;
