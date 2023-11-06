'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-sanity/studio'
import { useMemo } from 'react'

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
      active: pathname === '/projects',
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
          className='flex font-extrabold text-3xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
          >
        AL
        </Link>

        <ul className='flex items-center gap-x-6 md:gap-x-12'>
          {routes.map((item) => (
            <li 
              key={item.label}
              className='font-semibold text-sm md:text-base' 
            >
              <Link 
                href={item.href}
                aria-labelledby={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* <ul className='flex items-center gap-12 max-sm:gap-6 font-semibold max-sm:text-sm '>
          <li>
            <a href="/" className='bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] active:bg-[length:100%_100%] transition-all'>
            Home 
            </a>
          </li>

          <li>
            <a href="/projects" className='bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] active:bg-[length:100%_100%] transition-all'>
            Projects
            </a>
          </li>

          <li>
            <a href="/about" className='bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] active:bg-[length:100%_100%] transition-all'>
            About
            </a>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul> */}
      </nav>
    </header>
  )
}

export default Header