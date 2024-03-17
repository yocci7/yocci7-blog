import React from 'react'
import Image from 'next/image'


const Img = () => {
  return (
    <>
      <Image
        src="/Imgs/content/01/1.png"
        width={424}
        height={273}
        alt=""
        property='eager'
      />
      <Image
        src="/Imgs/content/01/2.png"
        width={335}
        height={260}
        alt=""
        property='eager'
      />
      <Image
        src="/Imgs/content/01/3.png"
        width={200}
        height={85}
        alt=""
        property='eager'
      />
    </>
  )
}

export default Img
