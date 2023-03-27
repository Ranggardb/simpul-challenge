import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AppIcon } from '../../assets/asset-lists';

function OptionsTask() {
  return (
    <Menu as="div" className="flex items-start justify-start mr-2">
      <Menu.Button>
        <img className="h-[14px]" src={AppIcon.options} alt="" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-2 top-[23px]  divide-y rounded-md bg-white ring-0 outline-none z-40">
          <Menu.Item>
            <button className="bg-white border border-primary-gray-medium shadow-lg text-indicator-red group flex w-full items-center rounded-md py-[15px] px-[18px] text-sm min-w-[126px]">
              Delete
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default OptionsTask;
