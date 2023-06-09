import React from 'react'
import { Circles } from 'react-loader-spinner'

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full '>
      <Circles
        height="50"
        width="200"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="pt-2"
        visible={true}
      />
      <p className='text-lg text-center px-2 font-semibold'>{message}</p>
    </div>
  )
}

export default Spinner