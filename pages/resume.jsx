import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Arjun | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/navLogo.png' />
      </Head>

      <div className='w-full h-screen mx-auto p-2  text-white font-inter '>
        
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTwZebQRr1QJDh0uZEFJ1V8Cigm0dyfpkAGrl8CWVWl34aR03jxWNO5LMttE2hISsly593jZ-mnT6Ca/pub" width="100%" 
            height="100%"></iframe>
        
      </div>
    </>
  );
};

export default resume;