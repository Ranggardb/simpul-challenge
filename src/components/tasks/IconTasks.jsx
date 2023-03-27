import React from 'react';
import { Popover } from '@headlessui/react';
import { AppIcon } from '../../assets/asset-lists';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTask } from '../../app/slices/taskSlice';

import {
  selectMenuIsInboxOpen,
  selectMenuIsTaskOpen,
  setIsInboxOpen,
  setIsTaskOpen,
} from '../../app/slices/menuSlice';
import LoadingSpin from '../LoadingSpin';
import HeaderTask from './HeaderTask';
import TodoListsTask from './TodoListsTask';

function IconTasks() {
  const dispatch = useDispatch();
  const todoLists = useSelector(selectAllTask);
  // const todoLists = [];

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
              <div className="bg-white rounded-md w-[80vw] h-[60vh] lg:w-[35vw] lg:h-[60vh] 2xl:w-[734px] 2xl:h-[737px] flex flex-col py-6 pl-[32px] pr-[13px]">
                <HeaderTask />
                <div className="overflow-y-scroll  styled-scrollbar">
                  {todoLists.length ? (
                    <TodoListsTask todoLists={todoLists} />
                  ) : (
                    <LoadingSpin name="tasks" />
                  )}
                </div>
              </div>
            </Popover.Panel>
            <Popover.Button className="outline-none" onClick={toggleHandler}>
              {open ? (
                <div className="flex relative">
                  <div className="w-[68px] h-[68px] absolute right-[16px] bg-primary-gray-dark rounded-full"></div>
                  <img className="self-end z-30" src={AppIcon.taskInverse} />
                </div>
              ) : (
                <div className="flex flex-col items-stretch">
                  {isInboxOpen || isTaskOpen ? null : (
                    <h2 className="text-bold-16 text-center text-[#f2f2f2] mb-3">
                      Task
                    </h2>
                  )}
                  <img className="self-end" src={AppIcon.task} />
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
