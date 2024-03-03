import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='w-full text-center sticky top-0 z-10'>
        <div className='flex items-center justify-center bg-main-100 h-14 py-2.5'>
          <Link href="/">
            <Image src="/Imgs/logo.png" alt="YOCCI_ii7 BLOG" width={223} height={42} className='relative b-3'/>
          </Link>
        </div>

        <ul className='text-main-gray m-5'>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/html" className='no-underline'>HTML</Link>
            </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/css" className='no-underline'>CSS</Link>
            </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/js" className='no-underline'>JS</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/react" className='no-underline'>REACT</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/nextjs" className='no-underline'>Next.js</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/tailwind" className='no-underline'>Tailwind</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/fullstack" className='no-underline'>FULLSTACK</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/python" className='no-underline'>PYTHON</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/java" className='no-underline'>JAVA</Link>
          </li>
          <li className='inline-block mx-6 text-base font-semibold'>
            <Link href="/other" className='no-underline'>OTHER</Link>
          </li>
        </ul>
        </header>
    </>
  )
}

export default Header
