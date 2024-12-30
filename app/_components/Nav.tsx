'use client';
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const links = ['About', 'Galery', 'Contact'];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const targetAttr = e.currentTarget.getAttribute('href');
    if (targetAttr && !targetAttr.endsWith('.pdf')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetAttr) as HTMLElement;
      if (targetElement) {
        const location = targetElement.offsetTop;
        window.scrollTo({
          top: location - 80,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };
  // bg-[#2c268a]

  return (
    <nav
      ref={headerRef}
      className={`fixed top-5 w-full flex justify-between items-center h-[80px] px-4 md:px-[8rem] z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl bg-[#2c268a] bg-opacity-70 text-white' : ' text-white'
      }`}
    >
      <div className="flex items-center h-full">
       
      <Link href="/">
       
        <Image
          src='/heider.png'
          alt='heider Logo'
          width={130}
          height={40}
          className={`cursor-pointer object-contain h-full`}
        />
        </Link>
      </div>
      {/* <div>OUR SCHOOL</div> */}
      <div className='flex-grow'></div>
      <ul className='hidden md:flex items-center gap-6 list-none font-semibold'>
        {links.map(link => (
          <li key={link}>
            <a
              href={link === 'WhitePaper' ? '/WhitePaper.pdf' : `#${link.toLowerCase().replace(' ', '-')}`}
              onClick={handleClick}
              target="_blank"
              className='text-lg  hover:text-[#c68958] transition-colors duration-200'
            >
              {link}
            </a>
          </li>
        ))}
        <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg  transition-transform duration-300 hover:scale-105'>
        <a href="/signup" className="text-[#303085]">Apply Online</a>
          </button>
        {/* <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg  transition-transform duration-300 hover:scale-105'>
        <a href="/signin" className="text-[#4B478A]">Sign In</a>
         
          </button> */}
        <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg text-[#4B478A] transition-transform duration-300 hover:scale-105'>
          Email us
        </button>

      </ul>

      <div className='md:hidden' onClick={() => setIsOpen(true)}>
        {!isOpen && (
          <FontAwesomeIcon
            icon={faBars}
            className='h-8 w-8 text-white cursor-pointer text-sm'
          />
        )}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#2c268a] bg-opacity-70 backdrop-filter backdrop-blur-lg flex flex-col items-start transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {isOpen && (
          <>
            <div className='px-4 w-full h-[80px] flex items-center justify-between'>
              <Image
               src='/heider.png'
               alt='heider Logo'
               width={130}
               height={30}
               className={`cursor-pointer object-contain h-full`}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className='h-8 w-8 cursor-pointer text-white text-sm'
                onClick={() => setIsOpen(false)}
              />
            </div>
            <ul className='flex flex-col gap-4 list-none text-white font-semibold mt-4 px-4'>
              {links.map(link => (
                <li key={link}>
                  <a
                    href={link === 'WhitePaper' ? '/WhitePaper.pdf' : `#${link.toLowerCase().replace(' ', '-')}`}
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className='hover:text-[#c68958] text-lg transition-colors duration-200'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg  transition-transform duration-300 hover:scale-105'>
              <a href="/signup" className="text-[#303085]">Apply Online</a>
            </button>
        <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg  transition-transform duration-300 hover:scale-105'>
        <a href="/signin" className="text-[#4B478A]">Sign In</a>
         
          </button>
            <button className='bg-[#c68958] text-[#4B478A] p-3 px-10 rounded-lg font-medium mt-4 mx-4 transition-transform duration-300 hover:scale-105'>
              Email us 
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
