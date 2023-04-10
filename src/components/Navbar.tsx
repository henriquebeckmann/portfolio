'use client'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation'

import Link from 'next/link';

import { RxGithubLogo } from "react-icons/rx";
import {
  HiOutlineCog,
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun
} from 'react-icons/hi';

import { Title } from './Title';

// TODO: needs to be refactored
export function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true)
  }, [])

  const ThemeChangerButton = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      currentTheme === 'dark' ? (
        <>
          <button
            className="p-2 rounded-lg bg-amber-300 hover:bg-amber-400"
            onClick={() => setTheme('light')}
          >
            <HiOutlineSun className="text-zinc-800 animate-entry"/>
          </button>
        </>
      ) : (
          <>
            <button
              className="p-2 rounded-lg bg-violet-700 hover:bg-violet-800"
              onClick={() => setTheme('dark')}
            >
              <HiOutlineMoon className="text-slate-200 animate-entry"/>
            </button>
          </>
        ))}

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
            className={`fixed top-12 right-8 py-2 w-56 rounded-lg bg-slate-300 dark:bg-zinc-700
ring-1 ring-slate-400 dark:ring-zinc-600
sm:static sm:flex gap-4 sm:ring-0 sm:p-0 sm:bg-transparent sm:dark:bg-transparent
${isOpen ? 'block' : 'hidden'}`}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block p-2 hover:underline underline-offset-4 sm:hidden
${pathname === "/" && "bg-slate-200 dark:bg-zinc-800"}`}
            >
              About
            </Link>

            <Link
              href="/works"
              onClick={() => setIsOpen(false)}
              className={`hover:underline underline-offset-4 ${isOpen && 'block p-2'}
${pathname === "/works" ? "bg-slate-200 dark:bg-zinc-800" : null}`}
            >
              Works
            </Link>

            <Link
              href="/posts"
              onClick={() => setIsOpen(false)}
              className={`hover:underline underline-offset-4 ${isOpen && 'block p-2'}
${pathname === "/posts" ? "bg-slate-200 dark:bg-zinc-800" : null}`}
            >
              Posts
            </Link>

            <Link
              href="/uses"
              onClick={() => setIsOpen(false)}
              className={`hover:underline underline-offset-4 ${isOpen && 'block p-2'}
${pathname === "/uses" ? "bg-slate-200 dark:bg-zinc-800" : null}`}
            >
              Uses
            </Link>

            <Link
              href="https://github.com"
              onClick={() => setIsOpen(false)}
              className={`sm:flex items-center gap-1 hover:underline underline-offset-4
${isOpen && 'block p-2 '}`}>
              <RxGithubLogo className="hidden sm:flex"/>
              <span className="sm:hidden">View</span> Source
            </Link>
          </div>

        </div>

        <div className="flex gap-2 text-lg">
          <ThemeChangerButton />

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
