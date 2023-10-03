import classNames from 'classnames'
import placeholderLogo from '@images/logo-placeholder-image.png';
import Image from 'next/image';

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  const HeaderFour = () => {
    return (
      <header className="bg-slate-800 mx-4 sm:mx-6 radius-t-md mt-2">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-slate-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                    <Image  alt="place holdlder logo" 
                        src={placeholderLogo} 
                        className='h-8 w-auto sm:h-16'
                        width={200}
                        height={200}
                  />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} onClick={e => e.preventDefault()} className="text-base font-medium text-white hover:text-slate-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <button
                type="button"
                className="inline-block bg-slate-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </button>
              <button
                type="button"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-800 mx-6 radius-t-md hover:bg-slate-50"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} onClick={e => e.preventDefault()} className="text-base font-medium text-white hover:text-slate-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }

  export default HeaderFour