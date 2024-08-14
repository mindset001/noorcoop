'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import { Raleway, Inter } from 'next/font/google';
import Link from 'next/link'; // Import Link from next/link for external link
import { Link as ScrollLink } from 'react-scroll'; 

const rale = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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

        <div className='w-[80%] flex flex-row justify-between items-center'>

          <div className='flex items-center gap-16'>
          <div>
          <ScrollLink 
                    to='/'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                  >
                    <Image src={Logo} alt='' className='w-[143px] h-[50.86px]' />
                  </ScrollLink>
            
          </div>
          <div className='hidden lg:block'>
            <ul className='flex flex-row gap-3 text-[#000] text-[16px] font-[700]'>
              {Navcontent.map((item, i: number) => (
                <li className={inter.className} key={i}>
                  <ScrollLink 
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          </div>
          
              <div className='flex gap-6'>
                <button><Link href='https://member.noorcoop.com/'>Log in</Link></button>
                <button className='bg-[#4F269F] text-[#fff] p-2 rounded-[8px]'><Link href='https://member.noorcoop.com/'>Apply now</Link></button>
              </div>

        
        </div>


      
  
    </main>
  );
}

export default Navbar;

const Navcontent = [
  {
    link: 'about',
    name: 'About NoorCoop'
  },
  {
    link: 'lending',
    name: 'Our Services'
  },
//   {
//     link: 'competencies',
//     name: 'Core Competencies'
//   },
  {
    link: 'products',
    name: 'Products'
  },
  {
    link: 'trustees',
    name: 'Trustees'
  },
  {
    link: 'contact',
    name: 'Contact Us'
  }
];
