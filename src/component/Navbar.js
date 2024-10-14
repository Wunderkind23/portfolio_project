import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[70px] text-neutral-500 '>
        <div>
            <p className='font-bold text-white text-2xl '>Ajb</p>
        </div>
        <div className='flex gap-4 '>
          <a href='https://www.linkedin.com/in/john-anukua/' target='_blank' >
            <FaLinkedin className='text-[15px] sm:text-[20px] lg:text-[30px]' />
          </a>
          <a href='https://github.com/Wunderkind23' target='_blank' >
            <FaGithub className='text-[15px] sm:text-[20px] lg:text-[30px]' />
          </a>
          <a href='https://x.com/wunderkind45' target='_blank' >
            <FaSquareXTwitter className='text-[15px] sm:text-[20px] lg:text-[30px]'/>
          </a>
          <a href='https://www.instagram.com/wunderkind245/' target='_blank' >
            <FaInstagram className='text-[15px] sm:text-[20px] lg:text-[30px]'/>
          </a>

        </div>
    </div>
  )
}

export default Navbar