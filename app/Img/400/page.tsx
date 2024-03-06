import React from 'react'
import Image from 'next/image'

const Img = () => {
  return (
    <>
      {/* 400*400 */}
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
