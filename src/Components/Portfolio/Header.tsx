'use client'
import classNames from 'classnames';
import React, { useState, useEffect, useRef, useDeferredValue } from 'react'
import { FaBars } from "react-icons/fa6";
import NavModal from '../common/NavModal';
import Link from 'next/link';
import _ from 'lodash';
import { useTheme } from 'next-themes';
import { FaFacebook, FaLinkedin, FaRegEnvelope, FaMoon, FaSun } from "react-icons/fa6";

const navLinks = [
    "about",
    "experience",
    "frontend",
    // "backend"
]
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setactiveSection] = useState("")
    const togglePopover = () => {
      setIsOpen(!isOpen)
    };
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      if (typeof window !== 'undefined') {
        const currentPath = window.location.href;
        const url = new URL(currentPath);
        const fragment = url.hash;
        const section = fragment.slice(1);
        setactiveSection(section || "about")
    }   

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const { theme, setTheme } = useTheme();

    const handleChangeTheme = () => {
        if(theme == "dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

  return (
    <>
       <header className={
            classNames(
                "sticky top-0 h-16 flex flex-row justify-center align-middle ", 
                "backdrop-blur transition-colors duration-500",
                "border-primary/60 border-b-2 px-120 z-[3]",
                {"bg-secondary/90": isScrolled}, 
                {"bg-secondary": !isScrolled}, 
                {"dark:bg-secondary/80": isScrolled}, 
                {"dark:bg-secondary": !isScrolled}, 
                // For md and aboce devices
                "md:justify-between md:px-8",
            )
        }>
            <Link href="/" className={
                classNames(
                    "flex flex-col justify-center leading-none text-center hover:cursor-pointer",
                    // For md and aboce devices
                    "md:text-left"
                )
            }>
                <h1 className={
                classNames(
                    "self-center", 
                    "text-primary",
                    "font-bold slate-900",
                )
                }>
                Lawrence Peñano, CPA
                </h1>
                <small className='text-primary/60 font-semibold'>Full-stack Developer</small>
            </Link>

            <div className={
                classNames(
                    "flex-row justify-center items-center hidden",
                    // For md and aboce devices
                    "md:flex md:text-left",
                )
            }>
                {
                    navLinks.map((ea)=>{
                        return (
                            <Link href={`#${ea}`}
                                key={ea}
                                className={
                                    classNames(
                                        "font-bold mx-2 transition-colors duration-500",
                                        {"text-green-400 underline dark:text-green-400": activeSection == ea},
                                        {"text-primary": activeSection != ea}
                                        // For md and aboce devices
                                    )
                                }
                                onClick={()=>setactiveSection(ea)}
                            >
                                {_.capitalize(ea)}
                            </Link>
                        )
                    })
                }
                {/* Action Button */}
                 <div className={
                    classNames(
                    "border-l-2 border-primary/80 pl-3 ml-2 flex items-center"
                    )
                 }>
                    <button className='mx-2 'type='button' onClick={handleChangeTheme}> { theme === "dark" ?  <FaSun className="text-xl "/> :  <FaMoon className="text-xl"/>} </button>
                    <Link className='mx-2' type='button' href="https://www.facebook.com/ksetrmvr.penano/" target='_blank'>  <FaFacebook className="text-xl"/></Link>
                    <Link className='mx-2' type='button' href="https://www.linkedin.com/in/lawrence-penano-cpa-4b4205193/" target='_blank'> <FaLinkedin className="text-xl"/></Link>
                    <Link className='mx-2' type='button' href="mailto:lawrence.olegario.penano@gmail.com" target='_blank'> <FaRegEnvelope className="text-xl"/></Link>
                </div>
            </div>
            
            {/* Burger Menu for Small Devices */}
            <button className={
                classNames(
                    "absolute",
                    "text-primary",
                    "right-5 bottom-4",
                    "block",
                    "md:hidden",
                )
                }
                type='button'
                onClick={togglePopover}
            >
                <FaBars className="text-[30px]"/> 
            </button>
      </header>
      {isOpen && (
        <NavModal navLinks={navLinks} togglePopover={togglePopover}/>
      )}
      </>
  )
}

export default Header