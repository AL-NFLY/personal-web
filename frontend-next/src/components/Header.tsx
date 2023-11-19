'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import ThemeToggle from './ThemeToggle'
import { useMemo } from 'react'
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
      <nav className='flex justify-between items-center md:px-48 px-8 py-4 bg-white dark:bg-dark bg-gradient-to-r from-primary/50 to-secondary/75 dark:from-primary/20 dark:to-secondary/40 bg-bottom bg-no-repeat bg-[length:100%_1.5px]'>
        <Link
          href='/'
          className='flex font-extrabold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 active:scale-100'
          >
        AL
        </Link>

        <ul className='flex items-center gap-x-6 md:gap-x-10'>
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