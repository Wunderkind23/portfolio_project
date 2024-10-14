import React from 'react'
import {project} from './data'
import Title from './Title'
import {motion} from 'framer-motion'

const Project = () => {
  return (
    <div className='text-neutral-500 py-8'>
        <Title title='Project'/>
        <div className='flex flex-col items-center'>
            {project.map((link) =>{
                const {img,desc,name,id,href} = link

                return  <div key={id} className='max-w-[800px]  flex justify-between py-4 flex-col lg:flex-row items-start'>
                
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className='lg:w-[200px] lg:h-[200px] w-[350px] '> 
                        <img className='h-full object-cover' src={img} alt='' />
                </motion.div>
                
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='lg:w-[70%] w-[350px] flex flex-col items-center lg:items-start pt-2 lg:pt-0 '>
                    <h4 className='text-white text-center lg:text-start cursor-pointer hover:underline'><a href={href} target='_blank'>{name}</a></h4>
                    <p className='mt-2 text-sm text-center lg:text-start'>{desc}</p>
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4 lg:w-[80%] w-full'>
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


export default Project