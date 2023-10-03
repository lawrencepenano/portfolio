'use client';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
 
const Index = () => {
    const router = useRouter();

    if (typeof window !== 'undefined') {
        const currentPath = window.location.href;
        const url = new URL(currentPath);
        const fragment = url.hash;
        const section = fragment.slice(1);
        if(!section){
            router.replace('/react-components/headers');
        }
    }   

  return (
    <>
        <div className='h-screen text-center flex justify-center items-center'>
              <h1 className='text-3xl'> Loading Components... </h1>
        </div>
    </>
  )
}

export default Index