import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import _ from 'lodash';

const WelcomeOverlay = ()  => {
    const [showStatus, setShowStatus] = useState(false);

    useEffect(()=>{
        setShowStatus(true)
    },[])

    
    const handleHideWelcomPage = () => {
        setShowStatus(false)
    }
    
    return (
        <div className={
            classNames(
                "fixed h-screen w-full top-0 bottom-0 left-0 right-0 z-50",
                "flex justify-center items-center flex-col tranform bg-secondary",
                { "scale-0" : !showStatus}, // Base bg
                { "scale-100" : showStatus}, // Base bg
                "duration-1000 transition-fill", // Transtion effectt
            )
        }>  
           <h1 className={
                classNames(
                "text-3xl font-bold w-10/12 text-center text-primary", // Small Screen 
                "md:text-5xl"
            )
           }>
              Welcome to My React Component Libraries
           </h1>
            <p className={
                classNames(
                "text-md font-bold text-primary/60 text-justify w-10/12 mt-4",
                "md:text-xl"
                )
            }>
                My collection of components is a testament to the creativity and inspiration drawn from various sources,
                including renowned libraries such as Tailwind UI and Shadcn/UI. As a result, you&#39;ll find a diverse and versatile 
                set of components that can be seamlessly integrated into your projects.Feel free to explore my offerings and discover the possibilities 
                that await in our component library.
            </p>
           <button 
            type='button'
            onClick={handleHideWelcomPage}
                className={
                    classNames(
                        "hover:bg-primary/90 hover:text-secondary transition-color duration-1000 bg-primary", // Effects
                        "w-2/4 py-4 mt-5 font-bold text-md border rounded-lg", // Small Screen
                        "md:text-xl md:w-1/5 text-secondary", // Larger Screem
                    )
                }
            >
             Continue
           </button>
        </div>
    )
}

export default WelcomeOverlay