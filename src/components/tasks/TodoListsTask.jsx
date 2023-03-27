import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { getDateDDMMYYYY, getRemainingDay } from '../../utils/helperFunction';
import { AppIcon } from '../../assets/asset-lists';
import { useDispatch } from 'react-redux';
import FormAddTask from './FormAddTask';
import OptionsTask from './OptionsTask';

function TodoListsTask({ todoLists }) {
  const dispatch = useDispatch();

  const handleChange = (e, id) => console.log(`id: ${id} => ${e.target.value}`);

  const handdleDatePicker = (e) =>
    console.log(new Date(e.target.value).toISOString());

  return (
    <fieldset>
      <div className="mt-[60px] grid grid-cols-1 divide-y">
        {todoLists.map(({ id, label, content, date, done }) => (
          <div key={id} className="flex flex-col py-[22px]">
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="flex items-center justify-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="z-0 h-[18px] w-[18px] mr-[22px] rounded border-gray-300  text-indigo-600 focus:ring-white ring-0 outline-none"
                    />
                    <Disclosure.Button className="z-10 flex items-stretch w-full justify-between rounded-lg px-4 py-2 text-left text-sm focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <label
                        className={`self-start max-w-xs mr-auto text-[12px] font-bold w-full text-primary-gray-medium line-clamp-3  ${
                          done ? 'line-through' : null
                        }`}
                      >
                        {label}
                      </label>
                      <div className="flex gap-x-3 self-start mr-2">
                        {getRemainingDay(date) <= 10 ? (
                          <p className="text-indicator-red text-regular-12 w-max">
                            {getRemainingDay(date)} Days Left
                          </p>
                        ) : null}
                        <div>
                          <p className="text-primary-gray-dark text-regular-12">
                            {getDateDDMMYYYY(date)}
                          </p>
                        </div>
                      </div>
                      <ChevronUpIcon
                        className={`${
                          open ? '' : 'rotate-180 transform'
                        } self-start h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <div className="self-start mt-3 h-[14px] relative">
                      <OptionsTask />
                    </div>
                  </div>
                  <Disclosure.Panel className="flex flex-col px-4 pt-4 gap-y-[13px] pb-2 text-sm text-gray-500">
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
                        className="w-full p-0 border-none rounded-md no-scrollbar focus:ring-primary-gray-medium resize-none bg-white/50"
                        rows="3"
                        wrap="hard"
                        defaultValue={content}
                        onChange={(e) => handleChange(e, id)}
                      />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
        <FormAddTask />
      </div>
    </fieldset>
  );
}

export default TodoListsTask;
