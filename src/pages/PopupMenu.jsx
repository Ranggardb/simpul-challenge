import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
import { ReactComponent as QuicksIcon } from '../assets/icon-quicks.svg';
import {
  selectMenuIsInboxOpen,
  selectMenuIsTaskOpen,
} from '../app/slices/menuSlice';

import IconInbox from '../components/inbox/IconInbox';
import IconTasks from '../components/tasks/IconTasks';

const menu = [
  {
    name: 'Task',
    icon: <IconTasks />,
  },
  {
    name: 'Inbox',
    href: '##',
    icon: <IconInbox />,
  },
];

function PopupMenu() {
  const isInboxOpen = useSelector(selectMenuIsInboxOpen);
  const isTaskOpen = useSelector(selectMenuIsTaskOpen);

  return (
    <div className="fixed bottom-0 right-3 md:bottom-[27px] md:right-[34px] ">
      <Popover className="relative">
        {({ open }) => {
          return (
            <div className="flex items-end">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="flex gap-[26px]">
                  {menu.map((item) => (
                    <div
                      className="cursor-pointer flex items-end"
                      key={item.name}
                    >
                      <div>{item.icon}</div>
                    </div>
                  ))}
                </Popover.Panel>
              </Transition>
              <Popover.Button className="outline-none">
                {isInboxOpen || isTaskOpen ? (
                  open ? (
                    ''
                  ) : (
                    <QuicksIcon className="ml-6" />
                  )
                ) : (
                  <QuicksIcon className="ml-6" />
                )}
              </Popover.Button>
            </div>
          );
        }}
      </Popover>
    </div>
  );
}
export default PopupMenu;
