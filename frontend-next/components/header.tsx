import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between items-center px-48 py-4'>
        <Link
            href='/'
            className='font-extrabold text-3xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
            >
        AL
        </Link>

        <ul className='flex justify-between gap-12 font-semibold'>
            <li>
            <Link href="/" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            Home 
            </Link>
            </li>

            <li>
            <Link href="#projects" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            Projects
            </Link>
            </li>

            <li>
            <Link href="" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            About Me
            </Link>
            </li>

            <li>
            <Link href="" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
                Contact
            </Link>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header