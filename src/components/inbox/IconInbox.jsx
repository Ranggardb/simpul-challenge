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

function IconInbox() {
  const dispatch = useDispatch();

  const isInboxOpen = useSelector(selectMenuIsInboxOpen);
  const isTaskOpen = useSelector(selectMenuIsTaskOpen);

  const toggleHandler = () => {
    if (!isInboxOpen) {
      dispatch(setIsInboxOpen(true));
      dispatch(setIsTaskOpen(false));
    } else {
      dispatch(setIsInboxOpen(false));
    }
  };

  return (
    <Popover>
      {({ open }) => {
        return (
          <>
            <Popover.Panel className="absolute bottom-[89px] right-0">
              <div className=" bg-white rounded-md w-[80vw] h-[60vh] lg:w-[35vw] lg:h-[60vh] 2xl:w-[734px] 2xl:h-[737px] grid justify-items-center py-6 px-8">
                <SearchBar />
                <div className="content-center">
                  <LoadingSpin name="chats" />
                </div>
              </div>
            </Popover.Panel>
            <Popover.Button className="outline-none" onClick={toggleHandler}>
              {open ? (
                <div className="flex relative">
                  <div className="w-[68px] h-[68px] absolute right-[16px] bg-primary-gray-dark rounded-full"></div>
                  <img className="self-end z-10" src={icon.inboxInverse} />
                </div>
              ) : (
                <div className="flex flex-col items-stretch">
                  {isInboxOpen || isTaskOpen ? null : (
                    <h2 className="text-bold-16 text-center text-[#f2f2f2] mb-3">
                      Inbox
                    </h2>
                  )}
                  <img className="self-end" src={icon.inbox} />
                </div>
              )}
            </Popover.Button>
          </>
        );
      }}
    </Popover>
  );
}

export default IconInbox;
