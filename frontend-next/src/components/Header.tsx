'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-sanity/studio'
import { useMemo } from 'react'
import { twMerge } from "tailwind-merge";
import NavList from './NavList';

const Header = () => {
  const pathname = usePathname()
  const routes = useMemo(() => [
    {
      label: 'Home',
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'Projects',
      href: '/projects',
      active: pathname.startsWith('/projects'),
    },
    {
      label: 'About',
      href: '/about',
      active: pathname === '/about'
    }
  ], [pathname]);

  return (
    <header className='sticky top-0 z-50'>
      <nav className='flex justify-between items-center px-48 max-sm:px-8 py-4 dark:bg-dark bg-white shadow-sm dark:shadow-none'>
        <Link
          href='/'
          className='flex font-extrabold text-3xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 active:scale-100'
          >
        AL
        </Link>

        <ul className='flex items-center gap-x-6 md:gap-x-12'>
          {routes.map((item) => (
            <li 
              key={item.label}
              className='font-semibold text-sm md:text-base' 
            >
              <NavList 
                {...item}
              />
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header