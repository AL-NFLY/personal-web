import Link from 'next/link'

const Header = () => {
  return (
    <header>
    <nav className='flex justify-between items-center px-48 max-sm:px '>
      <Link
        href='/'
        className='font-extrabold text-3xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
        >
      AL
      </Link>
      <ul className='flex justify-between gap-12 font-semibold'>
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
          About Me
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