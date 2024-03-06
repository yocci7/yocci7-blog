import React from 'react'
import Image from 'next/image'

const Img = () => {
  return (
    <>
      {/* 200*200 */}
      <Image
        src="/Imgs/etc/logo.png"
        width={223}
        height={42}
        alt=""
        property='eager'
      />
    </>
  )
}

export default Img
