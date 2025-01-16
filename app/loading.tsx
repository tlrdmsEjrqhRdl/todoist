import React from 'react'
import Image from 'next/image';

function loading() {
  return (
    <>
      <div className='bg-white w-full h-full flex justify-center items-center'>
        <Image src="/todoist.png" alt='Loading spinner' height={40} width={40} />
      </div>
    </>
  )
}

export default loading;