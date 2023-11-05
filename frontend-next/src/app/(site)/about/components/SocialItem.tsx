import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

interface SocialItemProps {
    id: string;
    href: string;
    icon: IconType;
    at: string;
    alt: string;
}

const socials: SocialItemProps[] = [
    {
        id: 'LinkedIn',
        href: 'https://www.linkedin.com/in/almer-naufaly/',
        icon: IoLogoLinkedin,
        at: 'linkedin/almer-naufaly',
        alt: 'LinkedIn',
    },
    {
        id: 'Github',
        href: 'https://github.com/AL-NFLY',
        icon: IoLogoGithub,
        at: 'github/AL-NFLY',
        alt: 'Github Logo',
      },
      {
        href: 'mailto://almer.nfly@gmail.com',
        icon: IoMail,
        id: 'Email',
        at: 'almer.nfly@gmail.com',
        alt: 'email logo',
    },
]

const SocialItem = () => {
  return (
    <div>
        <ul className='flex flex-col gap-y-2 max-sm:mt-4'>
            {socials.map((social) => (
                <li
                    key={social.id}
                >
                    <Link
                        href={social.href}
                        target='_blank'
                        className='flex items-center w-full py-2 px-4 gap-x-3 rounded-md hover:bg-zinc-800/50'
                    >
                        <>
                            <social.icon className='w-8 h-auto' />
                        </>
                        <div className='flex flex-col overflow-hidden font-medium truncate'>
                            <p className='text-sm'>{social.id}</p>
                            <p className='text-xs text-zinc-400'>{social.at}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialItem