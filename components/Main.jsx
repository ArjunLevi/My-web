import Link from 'next/link';
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Main=()=>{

return(
    <div
     id='home' className='w-full h-screen text-white'>
         <Spline className="absolute opacity-30 z-10 w-20" scene="https://prod.spline.design/ZmR3zwRQAeEAzQmS/scene.splinecode"
      />
       <div className=' w-screen h-full mx-auto p-2 flex z-20 justify-center items-center'>
       <motion.div
        initial = {{
            opacity:0,
          }}
          whileInView = {{
            opacity:1,
          }}
          transition={{ duration: 1 }}>
          <h1 className='py-4 text-[#333] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-purple-400 to-pink-600'>
            Hi, I&#39;m <span className='text-[#333] -z-10  text-7xl dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-purple-400 to-pink-600'> Arjun </span>
          </h1>
          <h1 className='py-2 text-[#333] -z-10 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-purple-400 to-pink-600 '>Blockchain Web Developer</h1>
          <p className='py-4 text-[#333] dark:text-slate-200 sm:max-w-[70%] m-auto -z-10'>
            I’m focused on building responsive dapps applications while
            learning back-end technologies like Solidity.
          </p>
          <div className='flex flex-row items-center justify-center max-w-[350px] m-auto py-4'>
           <div className='flex items-center gap-6 justify-center flex-col md:flex-row'>
           <motion.div 
           initial = {{
            x:-90
          }}
          whileInView = {{
            x:1
          }}
          transition={{ duration: 1 }}
          className='flex items-center justify-between gap-6 max-w-[330px] m-auto py-4 z-20'>
              <Link href='https://www.linkedin.com/in/naga-arjun-1a382b242'> 
              <div className='rounded-full bg-black p-6 cursor-pointer hover:scale-110 ease-in duration-100 '>
                <FaLinkedinIn />
              </div>
            </Link>
              <Link href='https://github.com/ArjunLevi'> 
              <div className='rounded-full  bg-black p-6 cursor-pointer hover:scale-110 ease-in duration-100 z-20 '>
                <FaGithub />
              </div>
            </Link>
           </motion.div>
            <motion.div
              initial = {{
              x:90
              }}
              whileInView = {{
                x:1
              }}
              transition={{ duration: 1 }}
              className='flex items-center justify-between gap-6 max-w-[330px] m-auto py-4 z-20'>
              <Link href='/#contact'>
                <div className='rounded-full  bg-black p-6 cursor-pointer hover:scale-110 ease-in duration-100 '>
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='/resume'> 
                <div className='rounded-full  bg-black p-6 cursor-pointer hover:scale-110 ease-in duration-100 '>
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </motion.div>
              </div>
          </div>
        </motion.div>




       </div>
    </div>

);

};

export default Main;