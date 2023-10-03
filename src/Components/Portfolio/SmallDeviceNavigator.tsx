'use client'
import classNames from 'classnames'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaLinkedin, FaHouseChimney, FaMoon, FaSun } from "react-icons/fa6";

const SmallDeviceNavigator = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    if(theme == "dark"){
      setTheme("light")
    }else{
      setTheme("dark")
    }
  }
  return (
      <div className={
          classNames(
          "sticky bottom-0 h-[60px] md:hidden z-[3]",
          "grid grid-cols-5",
          "bg-secondary/90",
          "dark:bg-secondary/95",
          "border py-2 rounded-md-top",
          "border-primary"
          )
        }>
          <div className='col-span-2 text-primary mx-auto py-2'>
            
              <Link href="https://www.facebook.com/ksetrmvr.penano/" target='_blank'>  <FaFacebook className="text-[26px] mx-4 inline-block"/></Link>
              <Link href="https://www.linkedin.com/in/lawrence-penano-cpa-4b4205193/" target='_blank'>      <FaLinkedin className="text-[26px] mx-4 inline-block"/></Link>
          
          </div>
          <div className='relative col-span-1 flex justify-center'>
              <button
                    className={
                      classNames(
                        "text-secondary",
                        "bg-primary",
                        "absolute",
                        "h-[75px] w-[75px] rounded-full",
                        "border-secondary/80 border-2",
                        "top-[-30px] right-auto"
                      )
                    }
                >
                  <span className='font-bold text-sm'>Hire Me</span>
              </button>
          </div>
          <div className='col-span-2 text-primary mx-auto flex items-center justify-center py-2'>
              <button type='button' onClick={handleChangeTheme}> { theme === "dark" ?  <FaSun className="text-[26px] mx-4 inline-block"/> :  <FaMoon className="text-[26px] mx-4 inline-block"/>} </button>
              <Link href="#"><FaHouseChimney className="text-[26px] mx-4  inline-block"/> </Link>
          </div>
      </div>
  )
}

export default SmallDeviceNavigator