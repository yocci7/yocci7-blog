import React from 'react'
import Image from 'next/image'

const Img = () => {
  return (
    <>
      <Image
        src="/Imgs/etc/logo.png"
        width={223}
        height={42}
        alt=""
        property='eager'
      />
      <Image
        src="/Imgs/etc/320-180.png"
        width={320}
        height={180}
        alt=""
        property='eager'
      />
      <Image
        src="/Imgs/Content/01/01.png"
        width={424}
        height={273}
        alt=""
        property='eager'
      />
    </>
  )
}

export default Img
