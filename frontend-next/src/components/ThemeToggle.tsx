'use client'
import { useTheme } from "next-themes";

import React from 'react'
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  // const {resolvedTheme, setTheme} = useTheme()
  // return (
  //   <button
  //     aria-label='Toggle Dark Mode'
  //     type="button"
  //     className=""
  //     onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
  //   >
  //     {resolvedTheme === 'dark' ? (
  //       <IoSunny />
  //     ) : (
  //       <IoMoon
  //     )}
  //   </button>
  // )
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <IoSunny className="h-5 w-5 text-white"/>
      ) : (
        <IoMoon className='h-5 w-5 text-dark' />
      )}
    </button>
  )
}

export default ThemeToggle