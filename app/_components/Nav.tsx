// components/Nav.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const links = ['About', 'Gallery', 'Contact'];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            src='/beerta.png'
            alt='beerta Logo'
            width={70}
            height={10}
            className={`cursor-pointer object-contain h-full`}
          />
        </Link>
      </div>

      <div className='flex-grow'></div>
      <ul className='hidden md:flex items-center gap-6 list-none font-semibold'>
        {links.map(link => (
          <li key={link}>
            <a
              href={link === 'WhitePaper' ? '/WhitePaper.pdf' : `#${link.toLowerCase().replace(' ', '-')}`}
              onClick={handleClick}
              target="_blank"
              className='text-lg hover:text-[#c68958] transition-colors duration-200'
            >
              {link}
            </a>
          </li>
        ))}
        <li className="relative">
          <button
            className="text-lg hover:text-[#c68958] transition-colors duration-200 flex items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Zoo Categories <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              <li>
                <Link href="/Zoo-Categories/Lions" className="block px-4 py-2 hover:bg-gray-100" target='_blank'>Lions</Link>
              </li>
              <li>
                <Link href="/Zoo-Categories/Snakes" className="block px-4 py-2 hover:bg-gray-100" target='_blank'>Snakes</Link>
              </li>
              <li>
                <Link href="/Zoo-Categories/Hyenas" className="block px-4 py-2 hover:bg-gray-100" target='_blank'>Hyenas</Link>
              </li>
            </ul>
          )}
        </li>
        <button className='hidden md:block bg-[#c68958] p-3 px-10 rounded-lg transition-transform duration-300 hover:scale-105'>
          <a href="/signup" className="text-[#303085]">Apply Online</a>
        </button>
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
                src='/beerta.png'
                alt='beerta Logo'
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
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='text-lg hover:text-[#c68958] transition-colors duration-200 flex items-center'
                >
                  Zoo Categories <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                {isDropdownOpen && (
                  <ul className="bg-[#2c268a] text-white rounded-lg py-2">
                    <li>
                      <Link href="/lions" className="block px-4 py-2 hover:bg-gray-100">Lions</Link>
                    </li>
                    <li>
                      <Link href="/snakes" className="block px-4 py-2 hover:bg-gray-100">Snakes</Link>
                    </li>
                    <li>
                      <Link href="/hyenas" className="block px-4 py-2 hover:bg-gray-100">Hyenas</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
            <button className='bg-[#c68958] text-[#4B478A] p-3 px-10 rounded-lg font-medium mt-4 mx-4 transition-transform duration-300 hover:scale-105'>
              Email us
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

// Lions Component
export const Lions = () => (
  <section className="p-8">
    <h2 className="text-4xl font-bold mb-4">Lions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <img
          key={i}
          src={`/images/lions/lion${i}.jpg`}
          alt={`Lion ${i}`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  </section>
);

// Snakes Component
export const Snakes = () => (
  <section className="p-8">
    <h2 className="text-4xl font-bold mb-4">Snakes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <img
          key={i}
          src={`/images/snakes/snake${i}.jpg`}
          alt={`Snake ${i}`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  </section>
);

// Hyenas Component
export const Hyenas = () => (
  <section className="p-8">
    <h2 className="text-4xl font-bold mb-4">Hyenas</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <img
          key={i}
          src={`/images/hyenas/hyena${i}.jpg`}
          alt={`Hyena ${i}`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      ))}
    </div>
  </section>
);
