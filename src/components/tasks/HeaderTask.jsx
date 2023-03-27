import React from 'react';

import AppButton from '../AppButton';
import MenuTask from './MenuTask';

function HeaderTask() {
  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between z-20">
        <div className="min-w-[200px] 2xl:min-w-[289px] ">
          <MenuTask />
        </div>
        <AppButton className="mr-4" name="new task" />
      </div>
    </div>
  );
}

export default HeaderTask;
