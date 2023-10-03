import {
    HiCalendar,
    HiChartBar,
    HiFolder,
    HiHome,
    HiInbox,
    HiUser
} from "react-icons/hi"
import classNames from 'classnames'
import Image from "next/image"
import placeholderLogo from '@images/logo-placeholder-image.png';

const navigation = [
  { name: 'Dashboard', icon: HiHome, href: '#', current: true },
  { name: 'Team', icon: HiUser, href: '#', count: 3, current: false },
  { name: 'Projects', icon: HiFolder, href: '#', count: 4, current: false },
  { name: 'Calendar', icon: HiCalendar, href: '#', current: false },
  { name: 'Documents', icon: HiInbox, href: '#', count: 12, current: false },
  { name: 'Reports', icon: HiChartBar, href: '#', current: false },
]

const SideBarOne = () => {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto h-[500px]">
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
        <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              onClick={e => e.preventDefault()}
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
                    'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default SideBarOne;