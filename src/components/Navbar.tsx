'use client'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Link from 'next/link';

import { RxGithubLogo } from "react-icons/rx";
import {
  HiOutlineCog,
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun
} from 'react-icons/hi';

import { Title } from './Title';

export function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderthemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      currentTheme === 'dark' ? (
        <button
          className="p-2 rounded-lg bg-amber-300 hover:bg-amber-400"
          onClick={() => setTheme('light')}
        >
          <HiOutlineSun className="text-zinc-800"/>
        </button>
      ) : (
          <button
            className="p-2 rounded-lg bg-violet-700 hover:bg-violet-800"
            onClick={() => setTheme('dark')}
          >
            <HiOutlineMoon className="text-slate-200"/>
          </button>
        ))}

  //NOTE: need remove repetitive components with same class and build a breadcrumb for smalls devices
  return (
    <nav className="fixed top-0 w-full max-w-3xl py-2 pr-8 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="group">
            <Link href="/" className="flex items-center gap-1">
              <HiOutlineCog className="text-lg group-hover:animate-spin" />
              <Title>Henrique Beckmann</Title>
            </Link>
          </div>

          <div
            className={`fixed top-12 right-8 p-3 w-56 rounded-lg bg-slate-300 dark:bg-zinc-700
              ring-1 ring-slate-400 dark:ring-zinc-600
              sm:static sm:flex gap-4 sm:ring-0 sm:p-0 sm:bg-transparent sm:dark:bg-transparent
              ${isOpen ? 'block' : 'hidden'}`}
          >
            <Link href="#" className="block py-2 hover:underline sm:hidden">About</Link>
            <Link href="#" className={`hover:underline ${isOpen && 'block py-2 '}`}>Works</Link>
            <Link href="#" className={`hover:underline ${isOpen && 'block py-2 '}`}>Posts</Link>
            <Link href="#" className={`hover:underline ${isOpen && 'block py-2 '}`}>Uses</Link>
            <Link href="#" className={`sm:flex items-center gap-1 hover:underline ${isOpen && 'block py-2 '}`}>
              <RxGithubLogo className="hidden sm:flex"/>
              <span className="sm:hidden">View</span> Source
            </Link>
          </div>

        </div>

        <div className="flex gap-2 text-lg">
          {renderthemeChanger()}
          <button
            className="p-2 rounded-lg ring-1 ring-slate-400 dark:ring-zinc-600 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>
    </nav>
  )
}
