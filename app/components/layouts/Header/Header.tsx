import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__top'>
          <Link href="/">
            <Image src="/Imgs/logo.png" alt="YOCCI_ii7 BLOG" width={223} height={42} />
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
            <Link href="/react">REACT</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/nextjs">NEXT.JS</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/tailwind">TAILWIND</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/fullstack">FULLSTACK</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/python">PYTHON</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/java">JAVA</Link>
          </li>
          <li className='header__nav__item'>
            <Link href="/other">OTHER</Link>
          </li>
        </ul>
        </header>
    </>
  )
}

export default Header
