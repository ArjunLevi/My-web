import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div id='about' className='w-screen min-h-screen p-8 flex items-center bg-[#f8fafc] dark:bg-[#0b1217] text-[#0b1712] transition-colors duration-300'>
      <div className='max-w-[1240px] m-auto grid md:grid-cols-3 gap-12 items-center'>
        
        {/* Left Side: Content */}
        <motion.div 
          className='md:col-span-2'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex items-center gap-2 mb-4'>
            <span className='h-[2px] w-10 bg-emerald-500'></span>
            <p className='uppercase text-emerald-500 font-bold tracking-widest text-sm'>Who I Am</p>
          </div>
          
          <h2 className='text-4xl md:text-5xl font-heebo font-bold dark:text-white mb-6'>
            Developing Secure <br /> 
            <span className='text-emerald-500 italic'>On-Chain</span> Futures
          </h2>

          <div className='space-y-6 font-inter text-lg leading-relaxed dark:text-slate-300'>
            <p>
              Fascinated by the intersection of <span className='font-bold text-slate-900 dark:text-white underline decoration-emerald-500/50'>decentralization and security</span>, 
              I’ve spent my journey mastering the art of building interactive Web3 environments. 
              What started as curiosity in 2022 has evolved into a deep dive into Solidity, React, and automated scripting.
            </p>

            {/* Account Focus Cards */}
            <div className='grid sm:grid-cols-2 gap-4 mt-8'>
              <div className='p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl'>
                <Code2 className='text-emerald-500 mb-2' size={24} />
                <h4 className='font-bold dark:text-white'>ArjunLevi</h4>
                <p className='text-sm opacity-70 font-mono'>Core DApp Development & Smart Contracts.</p>
              </div>
              <div className='p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl'>
                <Shield className='text-cyan-500 mb-2' size={24} />
                <h4 className='font-bold dark:text-white'>Arjun-cyper</h4>
                <p className='text-sm opacity-70 font-mono'>Security Research & Blockchain Automation.</p>
              </div>
            </div>

            <p>
              Currently, I am focused on building a full-scale <span className='text-emerald-500 font-semibold'>NFT-Marketplace</span> and refining 
              IBC-scripts. My goal is to join a forward-thinking blockchain company where 
              security and scalability are top priorities.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image/Visual */}
        <motion.div 
          className='w-full h-auto m-auto shadow-2xl shadow-emerald-500/20 rounded-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-br from-emerald-500 to-cyan-600'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='bg-slate-900 rounded-xl overflow-hidden'>
            <Image src={AboutImg} className='rounded-xl opacity-80 group-hover:opacity-100 transition-opacity' alt='Arjun Development' />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;