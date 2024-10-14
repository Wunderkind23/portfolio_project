import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import Title from './Title';
import {animate, motion} from 'framer-motion'

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:'reverse'
        }
    }
})

const Technologies = () => {
  return (
    <div className='text-neutral-500 py-8'>
        <Title title='Technologies'/>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className='flex gap-2 justify-center '>
            <motion.div 
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className='p-4 border rounded-md'>
                <FaReact className='text-[20px] sm:text-[30px] lg:text-[40px]'   style={{color:'aqua'}}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className='p-4 border rounded-md'>
                <SiNginx className='text-[20px] sm:text-[30px] lg:text-[40px]'  style={{color:'white'}}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial='initial'
            animate='animate'
            className='p-4 border rounded-md'>
                <SiMongodb className='text-[20px] sm:text-[30px] lg:text-[40px]'  style={{color:'green'}}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial='initial'
            animate='animate'
            className='p-4 border rounded-md'>
                <FaNodeJs className='text-[20px] sm:text-[30px] lg:text-[40px]'  style={{color:'green'}}/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className='p-4 border rounded-md'>
                <BiLogoPostgresql className='text-[20px] sm:text-[30px] lg:text-[40px]'  style={{color:'blue'}}/>
            </motion.div>
        
        
        
        
        </motion.div>

    </div>
  )
}

export default Technologies