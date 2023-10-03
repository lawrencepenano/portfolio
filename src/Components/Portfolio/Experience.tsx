import classNames from 'classnames'
import React, { useRef, useEffect } from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import NOAH from '../../../public/images/noah-logo.png'
import Guerilla360 from '../../../public/images/guerilla360-logo.png'
import Sevron from '../../../public/images/sevron-logo.png'
import CloudEmployee from '../../../public/images/cloud-employee-logo.png'
import Image from 'next/image';

const Experience = () => {
  return (
    <>
        <section id="experience" className={
            classNames(
            "pt-4 items-center pb-8 bg-primary",
            "flex flex-col",
            "md:px-[8%]",
            "lg:px-[14%]",
            )
        }>
            
            <h1 className='font-bold mb-2 text-secondary md:text-3xl md:py-10'>
               My Professional Experience 
            </h1>
            {/* My Experience in FPTI */}
            <div className='w-full sm:w-11/12 md:5/6 flex flex-row mt-7 h-56'>
                <div className='w-2/4 border-r-4 border-secondary relative flex justify-center items-center'>
                    <div className='absolute h-12 w-12 -right-[30px] -top-[15px] rounded-full bg-secondary flex justify-center items-center animate-bounce z-[2]'>
                        <FaAnglesDown className="text-xl font-bold text-primary"/>
                    </div>
                    <div className='p-4 py-8 text-sm indent-0'>
                        <h1 className='font-bold text-lg text-left text-secondary/80 md:text-3xl'>NOAH</h1>
                        <h1 className='font-bold text-xs text-left text-secondary/60 mb-2 md:text-xl'>Makati, Philippines </h1>
                        <p className='text-secondary md:text-xl'>This was my entry point into the IT realm, working as a Business Process Analyst / SQL Developer. </p>
                    </div>
                </div>      
                <div className='w-2/4 border-l-4 border-secondary h-auto flex items-center relative'>
                    <div className={
                        classNames(
                            "relative bg-white",
                            "w-[120px] h-[120px]", // small screen
                            "md:w-[200px] md:h-[200px]", // larger screen
                            "m-5 ml-auto z-[1] rounded-full border-2 border-secondary"
                        )
                    }> 
                        <Image 
                            src={NOAH} 
                            alt="NOAH"
                            priority
                            className='rounded-full'
                        />
                    </div>
                    <div className='absolute w-3/4 border-4 border-solid border-secondary'/>
                </div>          
            </div>
            {/* My Experience in Guerilla360 */}
            <div className='w-full flex flex-row h-56'>
                <div className='w-2/4 border-r-4 border-secondary h-auto flex items-center relative'>
                    <div className={
                        classNames(
                            "relative bg-white",
                            "w-[120px] h-[120px]", // small screen
                            "md:w-[200px] md:h-[200px]", // larger screen
                            "m-5 mr-auto z-[1] bg-primary rounded-full border-2 border-secondary flex items-center"
                        )
                    }> 
                        <Image 
                            src={Guerilla360} 
                            alt="Guerilla360"
                            priority
                            // fill
                            // objectFit='contain'
                            className='rounded-full'
                        />
                    </div>
                    <div className='absolute w-3/4 border-4 border-solid left-1/4 border-secondary'/>
                </div>   
                <div className='w-2/4  border-l-4 border-secondary flex justify-center items-center'>
                    <div className='p-4 py-8 text-sm indent-0'>
                        <h1 className='font-bold text-lg text-left text-secondary/80  md:text-3xl'>Guerilla 360 </h1>
                        <h1 className='font-bold text-xs text-left text-secondary/60 mb-2  md:text-xl'>Makati, Philippines </h1>
                        <p className='text-secondary  md:text-xl'>My first job in the industry is as a full-stack developer, working with Laravel and React JS. </p>
                    </div>
                </div>   
            </div>
            {/* Sevron Experience */}
            <div className='w-full sm:w-11/12 md:5/6 flex flex-row h-56'>
                <div className='w-2/4 border-r-4 border-secondary relative flex justify-center items-center'>
                    <div className='p-4 py-8 text-sm indent-0'>
                        <h1 className='font-bold text-lg text-left text-secondary/80 md:text-3xl'>Sevron</h1>
                        <h1 className='font-bold text-xs text-left text-secondary/60 mb-2  md:text-xl'>United Kingdom </h1>
                        <p className='text-secondary md:text-xl'>I held a position at this company, where I served as a full-stack developer, utilizing Jquery, Laravel (Blade), and React JS in my role.. </p>
                    </div>
                </div>      
                <div className='w-2/4 border-l-4 border-secondary h-auto flex items-center relative'>
                    <div className={
                        classNames(
                            "relative bg-white",
                            "w-[120px] h-[120px]", // small screen
                            "md:w-[200px] md:h-[200px]", // larger screen
                            "m-5 ml-auto z-[1] rounded-full border-2 border-secondary flex items-center"
                        )
                    }> 
                        <Image 
                            src={Sevron} 
                            alt="Sevron"
                            priority
                            // fill
                            // objectFit='contain'
                            className='rounded-full'
                        />
                    </div>
                    <div className='absolute w-3/4 border-4 border-secondary'/>
                </div>          
            </div>
            {/* Cloud Employee */}
            <div className='w-full flex flex-row h-56'>
                <div className='w-2/4 border-r-4 border-secondary h-auto flex items-center relative'>
                    <div className={
                        classNames(
                            "relative bg-primary",
                            "w-[120px] h-[120px]", // small screen
                            "md:w-[200px] md:h-[200px]", // larger screen
                            "m-5 mr-auto z-[1] bg-primary rounded-full border-2 border-secondary"
                        )
                    }> 
                        <Image 
                            src={CloudEmployee} 
                            alt="Cloud Employee"
                            priority
                            className='rounded-full'
                        />
                    </div>
                    <div className='absolute w-3/4 border-4 left-1/4 border-secondary'/>
                </div>   
                <div className='w-2/4  border-l-4 border-secondary flex justify-center items-center'>
                    <div className='p-4 py-8 text-sm indent-0'>
                        <h1 className='font-bold text-lg text-left text-secondary/80  md:text-3xl'>Cloud Employee </h1>
                        <h1 className='font-bold text-xs text-left text-secondary/60 mb-2  md:text-xl'>Makati, Philippines </h1>
                        <p className='text-secondary  md:text-xl'>I was employed as a front-end developer, concentrating on React JS and establishing integrations with third-party APIs and to our an in-house backend system. </p>
                    </div>
                </div>   
            </div>
        </section>
        
    </>
  )
}

export default Experience