import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <div id='about' className='w-screen  md:h-screen p-2 flex text-[#0b1712] snap-x snap-start snap-mandatory '
    >
      <motion.div className='w-full m-auto max-w-[1240px] items-center'
      initial = {{
          opacity:0.1
        }}
        whileInView = {{
          opacity: 1
        }}
        transition = {{ duration: 1.5}}>
        <div className='flex flex-col items-'>
        <h2 className='pb-5 pl-2 font-heebo dark:text-slate-300 text-3xl  place-items-center '>
            About
          </h2>
          <h3 className='pb-5 pl-2 font-heebo dark:text-slate-300'>Blockchain web Developer</h3>
          
          <p className='py-2 md:text-left text-center pl-2 font-inter text-xl dark:text-white '>
            I have spent the last six months studying Blockchain development. I have always had a knack for
            technology and working with computers. In 2022 I started working
            with Solidity and JavaScript to make simple projects.
            My short time goal is working with blockchain development company.I want to build my own NFT-Marketplace.
          </p>
          <p className='py-2  pl-2 md:text-left text-center font-inter text-xl dark:text-white'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning Solidity and was even more
            interested to make websites interactive. I am
            now spending my time building projects with React JS, Solidity, and
            learning new technologies.
          </p>
        </div>
        
      </motion.div>
    </div>
  );
};

export default About;
