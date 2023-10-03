import React from 'react'

interface componentProps {
    title: string;
    children: React.ReactNode
}

const TableContainer = ( { title, children } : componentProps ) => {
  return (
      <div className='w-11/12 mx-auto o py-8'>
            <h1 className='text-lg sm:text-xl font-bold'>
                {title}
            </h1>
            <div className='flex flex-row bg-white border-2 rounded-md p-6'>
                {children}
            </div>
        </div>
  )
}


export default TableContainer