import React from 'react'
import {motion} from 'framer-motion'

const Title = ({title}) => {
  return (
    <div>
        <motion.h1 
        whileInView={{opacity:1, y:0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='mb-8 text-center text-4xl text-white'>
        {title}
        </motion.h1>
    </div>
  )
}

export default Title