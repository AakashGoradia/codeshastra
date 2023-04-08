import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as PANOLENS from 'panolens';
import test from '../assets/test.jpg';


const RoomViewer = () => {
    const imageSrc = test
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a panorama viewer
    const viewer = new PANOLENS.Viewer({
      container: containerRef.current
    });

    // Create a panorama image
    const panorama = new PANOLENS.ImagePanorama(imageSrc);

    // Set the starting position
    panorama.addEventListener('enter-fade-start', function(){
      viewer.setPanorama(panorama);
    });

    // Add the panorama to the viewer
    viewer.add(panorama);

    return () => {
      // Clean up the viewer when the component unmounts
      viewer.destroy();
    };
  }, [imageSrc]);

  return (
    <div className="w-full h-screen" ref={containerRef}></div>
  );
};

export default RoomViewer;
