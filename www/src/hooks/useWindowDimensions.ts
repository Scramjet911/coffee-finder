import { useEffect, useState } from 'react';

function getWindowDimensions() {
  if (!window) {
    return null;
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (window) {
      window.addEventListener('resize', handleResize);
    }
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
