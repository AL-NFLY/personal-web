import Link from 'next/link'

const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <nav className='flex justify-between items-center px-48 max-sm:px-8 py-4 bg-dark'>
        <Link
          href='/'
          className='flex font-extrabold text-3xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
          >
        AL
        </Link>
        <ul className='flex gap-12 max-sm:gap-5 font-semibold max-sm:text-sm'>
          <li>
            <a href="/" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            Home 
            </a>
          </li>

          <li>
            <a href="#projects" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            Projects
            </a>
          </li>

          <li>
            <a href="" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
            About
            </a>
          </li>


          <li>
            <a href="" className='hover:bg-gradient-to-r from-primary to-secondary hover:bg-clip-text hover:text-transparent duration-300'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header