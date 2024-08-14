'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Logo from '../../../public/images/NURCOOP LOGO 2.png'
import { Divider } from 'antd';



function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    return (
        <main className='w-full flex flex-col items-start lg:items-center px-4 lg:px-10 bg-[#070112] mt-20 pb-10'>
            <div className='2xl:w-[80%]  mt-6'>
                <div className='flex flex-col items-start md:items-center justify-between mt-4'>
                    <Image src={Logo} alt=''/>
                    <div className='mt-6'>
                        <ul className='flex flex-row gap-10  text-[16px] font-[600] text-[white]'>
                            {Navcontent.map((item, i: number) => (
                                <li className='hover:underline'><Link href={item.link}>{item.name}</Link></li>
                            ))}



                        </ul>



                    </div>
                </div>

            <div>
                <Divider className='bg-[#475467]'/>

                <div className='w-full flex justify-between'>
                    <p className='text-[white]'>© {`${year} `}  NoorCoop. All rights reserved.</p>
                    <ul className='flex flex-row gap-10  text-[16px] font-[600] text-[white]'>
                            {Navcontent2.map((item, i: number) => (
                                <li className='hover:underline'><Link href={item.link}>{item.name}</Link></li>
                            ))}



                        </ul>

                </div>
            </div>

           
            </div>
        </main>
    )
}

export default Footer

const Navcontent2 = [
    {
        link: '',
        name: 'Terms'
    },
    {
        link: '',
        name: 'Privacy'
    },
    {
        link: '',
        name: 'Cookies'
    },


]

const Navcontent = [
    {
        link: '',
        name: 'About NoorCoop'
    },
    {
        link: '',
        name: 'Products'
    },
    {
        link: '',
        name: 'Help'
    },

    {
        link: '',
        name: 'Privacy'
    },

]