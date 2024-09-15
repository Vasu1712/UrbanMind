import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Tesseract from 'tesseract.js';
import profileimage from '../assets/images/profile_image.png';
import Footer from './Footer';

const Scan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => {
          console.error("Error accessing the camera: ", err);
        });
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataURL = canvasRef.current.toDataURL('image/png');
    setCapturedImage(dataURL);
    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  };

  const extractReceiptData = (text) => {
    
    const storeNameRegex = /Sweetgreen/;
    const amountRegex = /Order Total\s+\$([\d\.]+)/;
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;
    const timeRegex = /\d{1,2}:\d{2}:\d{2} (AM|PM)/;

    const storeNameMatch = text.match(storeNameRegex);
    const amountMatch = text.match(amountRegex);
    const dateMatch = text.match(dateRegex);
    const timeMatch = text.match(timeRegex);

    const storeName = storeNameMatch ? storeNameMatch[0] : 'Sweetgreen';
    const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;
    const received_date = dateMatch ? dateMatch[0] : new Date().toISOString().split('T')[0];
    const received_time = timeMatch ? timeMatch[0] : new Date().toISOString().split('T')[1].split('.')[0];

    return {
      paid_to: storeName,
      amount: amount,
      received_date: received_date,
      received_time: received_time
    };
  };

  const handleSubmit = () => {
    if (!capturedImage) {
      console.error('No image captured');
      return;
    }

    Tesseract.recognize(capturedImage, 'eng', {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      console.log('OCR Result:', text);

      const scannedData = extractReceiptData(text);

      navigate('/profile', { state: { scannedData } });
    }).catch((err) => {
      console.error('Error processing receipt:', err);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to="/profile" className="text-deepblue2">
          <Icon icon="mdi:arrow-left" width="28" className="my-auto" />
        </Link>
        <h1 className="text-2xl font-semibold">Scan Receipt</h1>
        <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
      </div>
      <div className="flex flex-col justify-between items-center py-6">
        <video ref={videoRef} width="320" height="320" autoPlay className="mb-6 border border-deeppurple"></video>
        <div className="flex justify-around items-center gap-x-4 mb-4 w-full px-6">
          <button onClick={startCamera} className="w-2/3 rounded-lg bg-gradient-to-b from-deepblue1 to-deepblue2 text-white px-6 py-2 rounded-xl drop-shadow-lg">Scan</button>
          <button onClick={captureImage} className="w-2/3 bg-gradient-to-br from-pink1 to-pink2 text-white px-4 py-2 rounded-xl drop-shadow-lg">Capture</button>
        </div>
        <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }}></canvas>
        {capturedImage && <img src={capturedImage} alt="Captured" className="mx-4 mb-2" />}
        <button onClick={handleSubmit} className="w-4/5 mx-4 bg-purple-500 text-white px-4 py-2 rounded-xl bg-gradient-to-br from-lavender1 to-lavender2 drop-shadow-lg mt-4">Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default Scan;
