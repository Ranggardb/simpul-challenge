import React from 'react';
import { image } from '../assets/asset-lists';

function LoadingSpin({ name }) {
  return (
    <>
      <img className="animate-spin" src={image.loadingSpinner} />
      <div className="text-bold-14 text-primary-gray-dark capitalize">
        Loading {name}...
      </div>
    </>
  );
}

export default LoadingSpin;
