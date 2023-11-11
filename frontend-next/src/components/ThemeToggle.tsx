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
      className="flex justify-center items-center rounded-md p-1 bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 bg-gradient-to-r hover:from-primary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_2px] hover:bg-[length:100%_2px] active:bg-[length:100%_100%] duration-150"
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