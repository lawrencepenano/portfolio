import React from 'react'

interface componentProps {
    title: string;
    children: React.ReactNode
}

const SidebarContainer = ( { title, children } : componentProps ) => {
  return (
      <div className='w-11/12 mx-auto o py-8'>
            <h1 className='text-lg sm:text-xl font-bold'>
                {title}
            </h1>
            <div className='flex flex-row bg-white border-2 rounded-md '>
                <div className='w-80'>
                    {children}
                </div>
                <div className='border-dashed border-4 w-full my-4 sm:mx-6 mx-4 
                    flex justify-center items-center text-slate-800/70 font-bold'>
                    CONTENT AREA
                </div>    
            </div>
        </div>
  )
}


export default SidebarContainer