/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import {
    HiCalendar,
    HiChartBar,
    HiFolder,
    HiHome,
    HiInbox,
    HiUser
} from "react-icons/hi"
import classNames from 'classnames'
import Image from 'next/image'
import placeholderLogo from '@images/logo-placeholder-image.png';

const navigation = [
  { name: 'Dashboard', icon: HiHome, current: true, href: '#' },
  {
    name: 'Team',
    icon: HiUser,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: HiFolder,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    icon: HiCalendar,
    current: false,
    children: [
    ],
  },
  {
    name: 'Documents',
    icon: HiInbox,
    current: false,
    children: [
    ],
  },
  {
    name: 'Reports',
    icon: HiChartBar,
    current: false,
    children: [
    ],
  },
]

const SideBarTwo = () => {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto min-h-[500px]">
        <div className="flex items-center flex-shrink-0 px-4 text-slate-800/80 font-bold">
            <Image  
                alt="place holdlder logo" 
                src={placeholderLogo} 
                className='h-8 w-auto sm:h-20'
                width={200}
                height={200}
            />
            LP Dashboard
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      {
                        !!item?.children.length && (
                            <svg
                                className={classNames(
                                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                            </svg>
                        )
                      }
                    
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          onClick={e => e.preventDefault()}
                          href={subItem.href}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  )
}

export default SideBarTwo