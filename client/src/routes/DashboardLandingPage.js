import React, { useEffect, useRef } from 'react';
import DashboardSidebar from './DashboardSidebar';

// Google Maps API script loading
const loadGoogleMapsScript = (callback) => {
  const existingScript = document.getElementById('googleMaps');
  const apiKey = process.env.REACT_APP_GMAPS_API_KEY;

  if (!existingScript && apiKey) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.id = 'googleMaps';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google && window.google.maps) {
        callback();
      } else {
        console.error('Google Maps API failed to load');
      }
    };

    script.onerror = () => {
      console.error('Error loading Google Maps API script');
    };
  } else if (existingScript) {
    if (window.google && window.google.maps) {
      callback();
    } else {
      existingScript.onload = () => {
        callback();
      };
    }
  } else {
    console.error('No API key found for Google Maps');
  }
  
};

const DashboardLandingPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMapsScript(() => {
      if (window.google && window.google.maps) {
        const bangalore = { lat: 12.9716, lng: 77.5946 };

        const map = new window.google.maps.Map(mapRef.current, {
          center: bangalore,
          zoom: 12,
          disableDefaultUI: true, // Hide all default controls and markers
          styles: [
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#212121" }]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#212121" }]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#9e9e9e" }]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#bdbdbd" }]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{ "color": "#181818" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#1b1b1b" }]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{ "color": "#2c2c2c" }]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#8a8a8a" }]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{ "color": "#373737" }]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [{ "color": "#3c3c3c" }]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [{ "color": "#4e4e4e" }]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#616161" }]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{ "color": "#000000" }]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#3d3d3d" }]
            }
          ] // Night mode styles
        });
      } else {
        console.error('Google Maps API failed to load');
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-bg1 via-bg2 to-bg1 text-white relative">
      <div
        ref={mapRef}
        style={{ width: '100%', height: '100vh' }}
      />
      <DashboardSidebar />
    </div>
  );
};

export default DashboardLandingPage;
