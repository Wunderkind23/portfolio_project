import React from 'react'
import john2 from '../asset/john2.jpeg'
import Title from './Title'
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <div className='py-8 text-neutral-500'> 
        <Title title='About Me' />

      <div className='flex justify-between flex-col lg:flex-row max-w-[900px] items-center lg:items-start mx-auto py-4'>
      
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{x:-100, opacity:0}}
        transition={{duration:0.5, delay:1.2}}
        className=' lg:w-[400px] w-[350px]'>
            <img 
            src={john2} 
            className='w-full h-full rounded-lg' alt='about me'/>
        </motion.div>
        

        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{x:100, opacity:0}}
        transition={{duration:0.5, delay:1.2}}
        className='lg:w-[50%] w-[350px] flex justify-center  lg:mt-0 mt-8'>
      
          <p className='text-sm text-center lg:text-start'>I am a dedicated and versatile front-end developer with a passion for crafting efficient and user friendly web application with 3 years of proffesional experience. I have worked with a variety of technologies including React, Nodejs . My journey with web development began with a deep curiosity for how things work and it has evolved into a career where i continuous strive to learn and adapt to new challenges. i thrive in collaborative environment and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and contributing to open-source projects.</p>
    
        </motion.div>

      </div>
    </div>
  )
}

export default AboutMe