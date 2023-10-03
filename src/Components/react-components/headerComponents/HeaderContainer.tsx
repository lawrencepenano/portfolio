import React from 'react'

interface componentProps {
    title: string;
    children: React.ReactNode
}

const HeaderContainer = ( { title, children } : componentProps ) => {
  return (
      <div className='w-11/12 mx-auto o py-8'>
            <h1 className='text-lg sm:text-xl font-bold'>
                {title}
            </h1>
            <div className='flex flex-col h-[500px] bg-white border-2 rounded-md '>
                {children}
                <div className='border-dashed border-4 h-full my-4 sm:mx-6 mx-4 
                    flex justify-center items-center text-slate-800/70 font-bold'>
                    CONTENT AREA
                </div>    
            </div>
        </div>
  )
}


export default HeaderContainer