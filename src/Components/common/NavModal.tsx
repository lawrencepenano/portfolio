
import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef , useEffect, useState, useLayoutEffect } from 'react'
import {  AiFillCloseCircle  } from "react-icons/ai";
import _ from 'lodash';

interface modalProps {
    togglePopover: () => void;
    navLinks: string[];
    isSection?: boolean;
}

const NavModal = ({
    togglePopover,
    navLinks,
    isSection = true
}: modalProps) => {
    const modalRef = useRef<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [activeSection, setActiveSection] = useState("")
    const delayedClosingOfModal =  async () => {
        setShowModal(false)
        const delay = 500;
        const timer = await setTimeout(() => {
           togglePopover()
        }, delay);
        return () => clearTimeout(timer);
    }

    useEffect(()=>{
        setShowModal(true)
    },[])

    useEffect(()=>{
        const currentPath = window.location.href;
        const url = new URL(currentPath);
        const fragment = url.hash;
        const section = fragment.slice(1);
        setActiveSection(section || "about")
    },[])  

    useEffect(() => {
       const  handleOutsideClick = async (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            // Click occurred outside the modal content
            delayedClosingOfModal()
        }
        }
    
        document.addEventListener('click', handleOutsideClick);
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);
    
  return (
    <div className="fixed bottom-0 right-0 flex items-center justify-end bg-gray-900 bg-opacity-50 z-50 w-full ">
        <div ref={modalRef} className={
                classNames(
                    "w-80 transform transition-transform h-screen bg-secondary duration-500",
                    {"translate-x-[0%]": showModal},
                    {"translate-x-[100%]": !showModal},
                )
            }>
            <div className='relative h-[65px] w-full text-right px-4 flex items-center justify-end border-b-2 border '>
                <button type='button' onClick={delayedClosingOfModal} className='text-primary/90 text-bold text-4xl'>
                    <AiFillCloseCircle className="text-[32px]"/> 
                </button>
            </div>
            <nav className='bg-secaondary h-full flex flex-col relative'>
                {
                    navLinks.map(each => {
                        return (
                            <Link key={each} href={ isSection ? `#${each}` : `/react-components/${each}`} onClick={()=>setActiveSection(each)} 
                                className={
                                    classNames(
                                        'w-full p-4  text-primary border-2 font-bold rounded-sm',
                                        {'bg-primary/95 text-secondary' : activeSection == each },
                                        {'dark:bg-primary/85 text-secondary' : activeSection == each }
                                    )}            
                                >
                                {_.capitalize(each)}
                            </Link>
                        )
                    })
                }
                <Link href="/resume.pdf" target="_blank" className='bg-primary w-3/4 mx-auto text-secondary px-8 py-4 rounded-2xl absolute bottom-20 right-0 left-0 font-bold text-center'>
                    Download Resume
                </Link>
            </nav>
        </div>
    </div>
  )
}

export default NavModal