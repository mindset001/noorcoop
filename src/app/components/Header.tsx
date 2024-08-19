'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import { Raleway, Inter } from 'next/font/google';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'; 
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const rale = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Navcontent = [
  { link: 'about', name: 'About NoorCoop', type: 'scroll' },
  { link: 'lending', name: 'Our Services', type: 'scroll' },
  { link: 'products', name: 'Products', type: 'scroll' },
  { link: '/team', name: 'Trustees', type: 'external' },
  { link: '/contact', name: 'Contact Us', type: 'external' }
];

function Navbar() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  const handleShow = () => {
    setHide(true);
    setShow(false);
  };
  
  const handleHide = () => {
    setShow(true);
    setHide(false);
  };

  return (
    <main className='hero w-full flex flex-col justify-between items-center py-4'>

      <div className='hidden w-[80%] md:flex flex-row justify-between items-center'>
        <div className='flex items-center gap-16'>
          <Link href='/' className='cursor-pointer'>
            <Image src={Logo} alt='Logo' className='w-[143px] h-[50.86px]' />
          </Link>
          <div className='hidden lg:block'>
            <ul className='flex flex-row gap-3 text-[#000] text-[16px] font-[500]'>
              {Navcontent.map((item, i) => (
                <li className={inter.className} key={i}>
                  {item.type === 'scroll' ? (
                    <ScrollLink 
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className='cursor-pointer'
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link href={item.link} passHref>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex gap-6'>
          {/* <button><Link href='https://member.noorcoop.com/' passHref>Log in</Link></button> */}
          <button className='bg-[#4F269F] text-[#fff] py-2 px-4 rounded-[8px]'>
            <Link href='https://member.noorcoop.com/' passHref>Log in</Link>
          </button>
        </div>
      </div>

      <div className='w-[90%] flex items-center md:hidden justify-between'>
        <Link href='/' className='cursor-pointer'>
          <Image src={Logo} alt='Logo' className='w-[143px] h-[50.86px]' />
        </Link>
        <div>
          {show && <MenuOutlined onClick={handleShow} />}
          {hide && <CloseOutlined onClick={handleHide} />}
        </div>
      </div>

      {hide && (
        <div className='block lg:hidden bg-[#fff] w-full px-4 top-20 pb-10'>
          <ul className='flex flex-col gap-3 text-[#000] text-[16px] font-[600]'>
            {Navcontent.map((item, i) => (
              <li className={inter.className} key={i}>
                {item.type === 'scroll' ? (
                  <ScrollLink 
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link href={item.link} passHref>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className='flex gap-6 mt-4'>
            {/* <button><Link href='https://member.noorcoop.com/' passHref>Log in</Link></button> */}
            <button className='bg-[#4F269F] text-[#fff] p-2 rounded-[8px]'>
              <Link href='https://member.noorcoop.com/' passHref>Log in</Link>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Navbar;
