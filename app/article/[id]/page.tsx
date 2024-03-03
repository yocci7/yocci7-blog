import React from 'react'
export function generateStaticParams() {
  return [{id: "1"}]
}

interface PageProps {
  params: {
    id: string;
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  console.log(id)
  return (
    <>
      <h1 className='text-black'>{ id }</h1>
    </>
  )
}

export default page
