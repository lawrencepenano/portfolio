import classNames from 'classnames'
import React from 'react'

const BackEndShowCase = () => {
  return (
    <section id="backend" className={
        classNames(
        "py-8 items-center pb-8 bg-primary",
        "flex flex-col",
        "md:px-[8%]",
        )
    }>
         <h1 className='font-bold mb-2 text-secondary text-xl md:text-3xl'>
            Back End
        </h1>
        <p className='text-secondary text-justify w-10/12 mx-auto md:text-xl'>
            Capturing my backend development skills in a few words can be challenging. Instead, I invite you to connect with me directly.
            I&#39;m excited to share the details of my projects and the specific skills that have contributed to their success. 
            Through our discussion, I can provide in-depth insights into the intricacies of the projects, 
            the innovative technologies employed, and the unique challenges we&#39;ve overcome. 
            You&#39;ll gain a deeper understanding of how I&#39;ve applied my expertise to drive project accomplishments and 
            the impact it has had on the businesses and industries I&#39;ve worked in. Feel free to reach out, 
            and we can embark on a comprehensive journey through my experiences as a backend developer.
        </p>
        {/* <button className='bg-secondary/95 text-primary rounded-full px-8 py-2 w-3/4 self-center font-bold my-4 md:text-xl'>
            Discover My Backend Works
        </button> */}
        <div className='text-secondary w-10/12 md:text-xl my-4'>
            <h1>Back-End Skill Set</h1>
            <div className='flex flex-row justify-between'>
                <div>
                    <li> PHP </li>
                    <li> Laravel </li>
                    <li> NodeJS </li>
                    <li> MSSQL / MySQL </li>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackEndShowCase