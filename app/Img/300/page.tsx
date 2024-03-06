import React from 'react'
import Image from 'next/image'

const Img = () => {
  return (
    <>
      {/* 300*300 */}
      <Image
        src="/Imgs/etc/320-180.png"
        width={320}
        height={180}
        alt=""
        property='eager'
      />
    </>
  )
}

export default Img
