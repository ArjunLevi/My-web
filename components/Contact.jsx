import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Upper from '../components/Upper';

import ContactImg from '../public/assets/logo.jpg'

const Contact = () => {

  return (
    <>
    <div id='contact' className='w-screen h-screen sm:h-100 bottom-0 lg:h-screen text-black dark:text-gray-400'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full flex flex-col items-center'>
        <h2 className=''>Get In Touch</h2>
        <div className=' grid max-h-fit gap-1 grid-cols-4 lg:grid-cols-6 md:gap-2'>
          {/* left */}
          <div className='col-span-4 hidden md:grid lg:col-span-2 w-full max-h-fit rounded-xl p-4 '>
          <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl dark:opacity-75 overlay'
                  src={ContactImg}
                  width='200'
                  height='190'
                  alt='/'
                />
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://www.linkedin.com/in/naga-arjun-1a382b242'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </Link>  
                  <Link
                    href='https://github.com/ArjunLevi'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full   p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </Link>

                  <div className='rounded-full   p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
            
                      <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-4 lg:col-span-3 lg:col-start-4 w-full h-full rounded-xl lg:p-4'>
            <div className='p-4 '>
              <form
                action='https://getform.io/f/bfff5953-a35c-44c8-888a-b58e3655fe4d'
                method='POST'
                encType ='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-2 w-full py-1 '>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-600 opacity-25 dark:opacity-50'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-900 opacity-25 dark:opacity-50'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-2 border-gray-900 opacity-25 dark:opacity-50'
                    rows='2'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4  mt-4 shadow-md text-white'
                >
                  Send Message 
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='relative  '>
        </div>
      </div>
    </div>
    <Upper />
    </>
  );
};

export default Contact;
