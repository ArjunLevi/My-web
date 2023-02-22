import Image from 'next/image';
import React, {useRef} from 'react';
import Solidity from '../public/assets/skills/solidity.png';
import Ethereum from '../public/assets/ethlogo.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Blockchain from '../public/assets/skills/Btc.png';
import Hardhat from '../public/assets/skills/hardhat.png'
import { motion,useInView  } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Skills = () => {
  const skillSet = [
    {
      name:'BlockChain',
      img: Blockchain,
    },
    {
      name:'Solidity',
      img: Solidity,
    },
    {
      name:'Ethereum',
      img: Ethereum,
    },
    {
      name:'Hardhat',
      img: Hardhat,
    },
    {
      name:'Javascript',
      img: Javascript,
    },
    {
      name:'React',
      img: ReactImg,
    },
    {
      name:'Tailwind',
      img: Tailwind,
    },
    {
      name:'Github',
      img: Github,
    },
  
    
  ]

  const boxVariants = {
    out: {
      x: -95,
    },
    in: {
      x: 0,
      transition: {
        duration: 1.1,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 0.1,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5,
      },
    },
  };

  const iconVariants = {
    out: {
      opacity:0.0001
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration:1
      }
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id='skills' className='w-full md:h-screen p-2  '>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full'>
      <Spline className='absolute opacity-30' scene="https://prod.spline.design/SJtS-YZ5kp0rr1Xl/scene.splinecode" />
        <h2 className='tracking-widest uppercase'>
          Skills
        </h2>
        <h2 className='py-4 text-slate-900'></h2>
          <div className='grid grid-cols-2 md:pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ' ref={ref}>
            {skillSet.map((skills)=>(
              <motion.div className='p-6 bg-[#464f51]/40 rounded-xl md:w-[260px] ' key = {skills.name}
              variants = {boxVariants} initial="out" whileInView = "in">
                <motion.div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'
                variants={iconVariants}>
                  <div className='m-auto'>
                    <Image src={skills.img} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h4>{skills.name}</h4>
                  </div>
                </motion.div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default Skills;