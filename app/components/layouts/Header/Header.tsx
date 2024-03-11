import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__top'>
          <Link href="/">
            <Image
              src="/Imgs/logo.webp"
              width={223}
              height={42}
              alt="YOCCI_ii7 BLOG"
              property='eager'
              priority
            />
          </Link>
        </div>

        <ul className='header__nav'>
          <li className='header__nav__item'>
            <Link href="/html">HTML</Link>
            </li>
          <li className='header__nav__item'>
            <Link href="/css">CSS</Link>
            </li>
          <li className='header__nav__item'>
            <Link href="/js">JS</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/react">React</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/nextjs">Next.js</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/tailwind">Tailwind</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/fullstack">FullStack</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/python">Python</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/java">Java</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/other">Other</Link>
          </li>
        </ul>
        </header>
    </>
  )
}

export default Header
