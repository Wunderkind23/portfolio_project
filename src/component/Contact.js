import React from 'react'
import Title from './Title'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='text-neutral-500 py-4 text-sm'>
        <Title title='Get In Touch'/>
        <div className='flex flex-col gap-1 items-center '>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            >Akasolori estate,Sabo, Ikorodu,Lagos State</motion.p>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
            >08029015664</motion.p>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            >johnbrolin32@gmail.com</motion.p>
            
        </div>
    </div>
  )
}

export default Contact