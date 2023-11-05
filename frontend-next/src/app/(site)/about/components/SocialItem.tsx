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
        <ul>
            {socials.map((social) => (
                <li
                    key={social.id}
                >
                    <Link
                        href={social.href}
                        target='_blank'
                    >
                        <>
                            <social.icon className='w-9 h-auto' />
                        </>
                        <div className='truncate'>
                            <p>{social.id}</p>
                            <p className='text-xs'>{social.at}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialItem