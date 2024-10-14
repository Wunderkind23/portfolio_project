import React from 'react'
import { experience } from './data'
import Title from './Title'
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <div className='text-neutral-500 py-8'>
        <Title title='Experience'/>
        <div className='flex flex-col items-center'>
            {experience.map((link) =>{
                const {img,year,desc,role,id} = link

                return  <div key={id} className='max-w-[800px] flex flex-col justify-between py-4 flex-col lg:flex-row items-start'>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='lg:w-[200px] lg:h-[200px] w-[350px] flex flex-col'>
                    <span className='text-sm text-center'>{year}</span>
                    <div className='w-full bg-white border'>
                        <img className='w-full' src={img} alt='' />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='lg:w-[70%] w-[350px] flex flex-col items-center lg:items-start pt-2 lg:pt-0'>
                    <h4 className='text-white text-center lg:items-start'>{role}</h4>
                    <p className='mt-2 text-sm text-center lg:text-start'>{desc}</p>
                    <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2 lg:w-[80%] w-full mt-4'>
                        {Object.entries(link.skills).map(([key,value]) => (
                            <span key={key} className='border border-blue-500 px-2 py-1 text-blue-500 rounded-md text-center text-sm'>{value}</span>
                        ))}
                    </div>
                </motion.div>

            </div>
            })}
            
        </div>
    </div>
  )
}

export default Experience