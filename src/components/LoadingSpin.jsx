import React from 'react';
import { AppImage } from '../assets/asset-lists';

function LoadingSpin({ name, className }) {
  return (
    <div className="w-full flex flex-col items-center">
      <img className="animate-spin" src={AppImage.loadingSpinner} />
      <p
        className={`text-bold-14 text-primary-gray-dark capitalize ${className}`}
      >
        Loading {name}...
      </p>
    </div>
  );
}

export default LoadingSpin;
