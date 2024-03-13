import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link href="/" className="footer__home">
          <FontAwesomeIcon icon={faHouse} width={25} height={25} />
          HOME
        </Link>
        <nav className='footer__nav'>
          <Link href="/contact" className='footer__nav__contact'>お問い合わせ</Link>
          <Link href="/about" className='footer__nav__site'>サイトについて</Link>
        </nav>
        <p className='footer__licence'>© 2024 Yocci_ii7 BLOG / よっしーブログ</p>
      </footer>
    </>
  )
}

export default Footer



