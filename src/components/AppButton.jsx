import React from 'react';

function AppButton({ name, className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-primary-blue h-fit text-white text-[12px] font-bold  rounded-md px-4 py-[13px] capitalize ${className}`}
    >
      {name}
    </button>
  );
}

export default AppButton;
