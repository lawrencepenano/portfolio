import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

const FrontEndShowCase = () => {
  return (
    <section id="frontend" className={
        classNames(
        "py-8 items-center bg-secondary",
        "flex flex-col",
        "md:w-10/12 md:mx-auto md:py-20", // Bigger Screens
        )
    }>
         <h1 className='font-bold mb-2 text-primary text-xl md:text-3xl md:mb-4'>
            Front End Showcase
        </h1>
        <p className='text-primary text-justify w-10/12 mx-auto md:text-xl md:mb-4'>
            Welcome to a showcase of some exciting React components I&#39;ve had the pleasure of crafting. 
            As a dedicated front-end developer, I&#39;ve poured my creativity and expertise into these components to bring innovation and interactivity to 
            web applications. Each of these examples represents a unique solution to common challenges in web development. Feel free to explore them and 
            witness how they can enhance user experiences and add a touch of elegance to your projects.
        </p>
        <Link href={"/react-components/headers"} className='text-center bg-primary/95 text-primary-foreground rounded-full px-8 py-2 w-3/4 self-center font-bold my-4 md:text-xl md:mb-4'>
            Explore React Components
        </Link>
        <div className='text-primary w-10/12 md:text-xl'>
            <h1>Front-End Skill Set</h1>
            <div className='flex flex-row justify-between lg:justify-start'>
                <div className='lg:mr-16'>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> Javascript </li>
                    <li> Typescript </li>   
                    <li> React </li>                 
                    <li> Jquery </li>
                </div>
                <div>
                    <li> Laravel Blade </li>
                    <li> NextJS </li>
                    <li> TailwindCSS </li>
                    <li> Tailwind UI</li>
                    <li> Bootstrap </li>
                    <li> Ant Design </li>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FrontEndShowCase