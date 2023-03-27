import React from 'react';
import { AppIcon } from '../../assets/asset-lists';

function FormAddTask() {
  const handleChange = (e) => console.log(e.target.value);

  const handdleDatePicker = (e) =>
    console.log(new Date(e.target.value).toISOString());
  return (
    <div>
      <div className="flex flex-col px-4 pt-4 gap-y-[13px] pb-2 text-sm text-gray-500">
        <div className="flex items-center">
          <img className="h-5 w-5 mr-5" src={AppIcon.date} alt="" />
          <input
            type="date"
            name=""
            id=""
            className="rounded-lg "
            onChange={handdleDatePicker}
          />
        </div>
        <div className="flex items-start">
          <img className="h-5 w-5 mr-5" src={AppIcon.edit} alt="" />
          <textarea
            id="descript"
            className="w-full p-2 text-primary-gray-dark border-primary-gray-medium rounded-md no-scrollbar focus:ring-primary-gray-medium resize-none bg-white/50"
            rows="3"
            wrap="hard"
            placeholder="No Description"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default FormAddTask;
