import React from 'react';
import { Popover } from '@headlessui/react';
import { icon } from '../../assets/asset-lists';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMenuIsInboxOpen,
  selectMenuIsTaskOpen,
  setIsInboxOpen,
  setIsTaskOpen,
} from '../../app/slices/menuSlice';
import LoadingSpin from '../LoadingSpin';
import SearchBar from '../SearchBar';
import MenuTask from './MenuTask';

function IconTasks() {
  const dispatch = useDispatch();

  const isTaskOpen = useSelector(selectMenuIsTaskOpen);
  const isInboxOpen = useSelector(selectMenuIsInboxOpen);

  const toggleHandler = () => {
    if (!isTaskOpen) {
      dispatch(setIsTaskOpen(true));
      dispatch(setIsInboxOpen(false));
    } else {
      dispatch(setIsTaskOpen(false));
    }
  };

  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <Popover.Panel className="absolute bottom-[89px] right-0">
              <div className=" bg-white rounded-md w-[80vw] h-[60vh] lg:w-[35vw] lg:h-[60vh] 2xl:w-[734px] 2xl:h-[737px] grid justify-items-stretch py-6 px-8">
                <div className="justify-self-start min-w-[289px]">
                  <MenuTask />
                </div>
                <div className="content-center">
                  <LoadingSpin name="tasks" />
                </div>
              </div>
            </Popover.Panel>
            <Popover.Button className="outline-none" onClick={toggleHandler}>
              {open ? (
                <div className="flex relative">
                  <div className="w-[68px] h-[68px] absolute right-[16px] bg-primary-gray-dark rounded-full"></div>
                  <img className="self-end z-10" src={icon.taskInverse} />
                </div>
              ) : (
                <div className="flex flex-col items-stretch">
                  {isInboxOpen || isTaskOpen ? null : (
                    <h2 className="text-bold-16 text-center text-[#f2f2f2] mb-3">
                      Task
                    </h2>
                  )}
                  <img className="self-end" src={icon.task} />
                </div>
              )}
            </Popover.Button>
          </>
        );
      }}
    </Popover>
  );
}
export default IconTasks;
