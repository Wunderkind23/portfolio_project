import React from 'react'
import john2 from '../asset/john2.jpeg'
import john1 from '../asset/john1.jpeg'
import {motion} from 'framer-motion'

const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay},
  },
})
const Hero = () => {
  return (
    <div className='py-8 flex justify-center'>
      <div className='max-w-[900px] flex justify-between flex-col lg:flex-row  items-center lg:items-start'>
        <div className='text-neutral-500 lg:w-[50%] w-[350px]'>
          <motion.h1 
          variants={container(0)}
          initial='hidden'
          animate='visible'
          className='text-4xl lg:text-start text-center text-white'>Anukua John Brolin</motion.h1>
          <motion.h3 
          variants={container(0.5)}
          initial='hidden'
          animate='visible'
          className='mt-8 mb-4 lg:text-start text-center'>Frontend <span className='text-[#7877C6]'>Developer</span></motion.h3>
          <motion.p 
          variants={container(1)}
          initial='hidden'
          animate='visible'
          className='text-sm text-center lg:text-start'>I am a passionate frontend developer with a knack for crafting robust and scalable wb applications. With 3years of hands-on experience, I have honed my skills in front-end tecnologies like React, Javascript, Css and Html. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experience.</motion.p>
        
        </div>

        <div className='lg:w-[400px] w-[350px] h-[350px] lg:mt-0 mt-8'> 
          <div className='lg:w-full h-full sm:w-[350px] '>
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:1.2}}
            src={john1} 
            className='w-full h-full rounded-lg object-cover' alt='about me'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero