import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const links = [
  { href: '/personal-erands', label: 'Personal Errands' },
  { href: '/urgent-to-do', label: 'Urgent To-Do' },
];

function MenuTask() {
  return (
    <Menu as="div" className="grid justify-items-center">
      <div>
        <Menu.Button className="inline-flex rounded-lg justify-center text-bold-14 px-4 py-2 bg-white text-primary-gray-dark border-2 border-primary-gray-medium focus:ring-primary-gray-dark focus:border-primary-gray-medium">
          My Tasks
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-primary-gray-dark "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="mt-2 w-full origin-top-right divide-y divide-primary-gray-medium rounded-md border-2 border-primary-gray-medium bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <a
                  className={`${
                    active
                      ? 'bg-violet-500 text-white'
                      : 'text-primary-gray-dark'
                  } group flex w-full items-center px-2 py-2 text-bold-14`}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MenuTask;
