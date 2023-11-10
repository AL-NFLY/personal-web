import {  IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import Link from 'next/link';
import React from 'react'
import { IconType } from "react-icons";

type Social = {
  href: string;
  icon: IconType;
  id: string;
  alt: string;
}

const socials: Social[] = [
  {
    href: 'https://github.com/AL-NFLY',
    icon: IoLogoGithub,
    id: 'Github',
    alt: 'github logo',
  },
  {
    href: 'https://www.linkedin.com/in/almer-naufaly/',
    icon: IoLogoLinkedin,
    id: 'LinkedIn',
    alt: 'linkedIn logo',
  },
  {
    href: 'mailto://almer.nfly@gmail.com',
    icon: IoMail,
    id: 'Email',
    alt: 'email logo',
  },
];


const Footer = () => {
  return (
    <footer className='xl:px-48 max-sm:px-8 pb-2' id="contact">
      <main className='mt-12 flex flex-col flex-wrap items-center border-t border-zinc-500 text-zinc-600 dark:text-zinc-300'>
        <p className="mt-8">Hit me up!</p>
        <div className='flex space-x-4 mt-1'>
          {socials.map((social) => (
            <>
              <Link 
                href={social.href} 
                target='_blank' 
                className="group rounded-md bg-gradient-to-r hover:from-primary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] duration-150"
              >
                <social.icon className="w-9 h-auto p-1 group-hover:-translate-y-1 group-active:-translate-y-0.5 duration-300"/>
              </Link>
            </>
          ))}
          </div>
        <p className='mt-4 text-sm text-zinc-600 dark:text-zinc-300'>© 2023 Almer Naufaly</p>
      </main>
    </footer> 
    )
}

export default Footer