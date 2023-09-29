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
      className="flex justify-center items-center transition-colors rounded-md p-1 dark:bg-zinc-700"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <IoMoon className='h-5 w-5' />
        ) : (
          <IoSunny className="h-5 w-5"/>
      )}
    </button>
  )
}

export default ThemeToggle