import Image from 'next/image';
import  { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/ethlogo.png';
import WhiteNavLogo from '../public/assets/ethlogo.png';
import { Button } from '@mantine/core';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
 
  const [linkColor, setLinkColor] = useState('#c2c2c2');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  
  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Button className=" "
          onClick={() => setTheme('light')}
        > 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          
        </Button>
      )
    } else {
      return (
        <Button className=""
          onClick={() => setTheme('dark')}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="black">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          
          
        </Button>
      )
    }

  }
  const navImageChanger = () =>{
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark'){
      return (
        <Link className='flex jutify-center items-center' href='/'>
            <Image
              src={ NavLogo }
              alt='/'
              width='39'
              height='35'
              className='cursor-pointer  opacity-100  item-center '
            />
          
        </Link>
      ) 
    }else {
      return (
        <Link className='flex jutify-center items-center' href='/'>
            <Image
              src={ WhiteNavLogo }
              alt='/'
              width='39'
              height='35'
              className='cursor-pointer  opacity-100  item-center '
            />
        </Link>
    )}

  }


    const handleNav = () => {
      setNav(!nav);
    };

    const navMenu = [
      { 
        name: 'Home',
        route: '/',
      },
      {
        name: 'About',
        route:'/#about'
      },
      {
        name: 'Skills',
        route:'/#skills'
      },
      {
        name: 'Contact',
        route:'/#contact',
      },
      {
        name: 'Resume',
        route:'/resume'
      },

    ]
      

    
  return (
    <div
      className='fixed w-screen h-35 dark:bg-black z-[100] pt-3 ease-in-out duration-300'
    >
      <div className='flex justify-between items-center h-full px-2 2xl:px-16 '>
      
        {navImageChanger()}
        
        <div className="mr-2 flex">
          {navMenu.map((menu)=>(
           <ul style={{ color: `${linkColor}` }} className='hidden md:flex' key={menu.name} >
              <li className='ml-10 text-sm uppercase flex flex-row hover:border-b text-black dark:text-gray-300' >
                <Link href={menu.route}>{menu.name}</Link>
              </li>
          </ul>
          ))
          
          }
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {renderThemeChanger()}
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-100'  : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-rose-100  dark:bg-gray-900 p-10 ease-in duration-500'
              : 'fixed left-[-1400%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                
                  <Image
                    src={NavLogo}
                    width='43'
                    height='35'
                    alt='/'
                    className='rounded-lg'
                  />
            
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full outline p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-100 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {navMenu.map((menu)=>(
                <Link href={menu.route} key={menu.name}>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-125' >
                  {menu.name}
                </li>
              </Link>
              ))

              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
