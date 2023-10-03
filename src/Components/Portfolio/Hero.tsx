import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/images/hero-image.png'
import Link from 'next/link'


const Hero = () => {
  return (
    <section id="about" className={
        classNames(
        "pt-4 items-center flex pb-8 xl:h-screen",
        "flex-col", // Small Screens
        "md:flex-row md:w-10/12 md:mx-auto md:py-20", // Bigger Screens
        )
      }>
        {/* div For Image */}
        <div className='text-center'> 
            <div className={
              classNames(
                "relative",
                "w-[200px] h-[200px]", // small screen
                "md:w-[300px] md:h-[300px]", // larger screen
                "lg:w-[400px] lg:h-[400px]", // larger screen
                "m-5 bg-primary rounded-full border-secondary border-8"
              )
            }> <Image 
                  src={heroImage} 
                  alt="Hero Image"
                  priority
                  className='rounded-full'
                />
            </div>
        </div>
        {/* div for Cover Letter*/}
        <div className='flex flex-col'>
          <p className='text-justify text-primary mb-4 w-10/12 mx-auto md:text-xl lg:text-3xl '>
            I am an Accountancy graduate with a strong foundation in financial principles and a keen eye for detail, I have 
            successfully transitioned into a developer role. Leveraging my analytical skills and dedication to accuracy, I&#39;ve 
            embraced coding and software development to create efficient and innovative solutions.
          </p>
          <Link href="/resume.pdf" target='_blank' className='text-center bg-primary/95 text-primary-foreground rounded-full px-8 py-4 w-8/10 self-center font-bold md:w-3/4' >
            Download Resume
          </Link>
          {/* <button className='bg-secondary/95 textprimary border-4 rounded-full px-8 py-4 w-2/4 self-center font-bold md:w-3/4 hidden md:block md:mt-2'>
            Download Resume
          </button> */}
        </div>
    </section>
  )
}

export default Hero