import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface NavListProps {
    label: string;
    href: string;
    active?: boolean;
}

const NavList: React.FC<NavListProps> = ({label, href, active}) => {
  return (
    <Link
        href={href}
        className={twMerge(`bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] active:bg-[length:100%_100%] transition-all`,
        active && 'bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:100%_2px]'
        )}
    >
        {label}
    </Link>
  )
}

export default NavList