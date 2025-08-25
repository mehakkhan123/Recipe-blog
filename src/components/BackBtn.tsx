"use client"
import React from 'react'

export default function BackBtn() {
  return (
    <div className='mt-4'>
        <button onClick={()=>{
        history.back()
    }} className='bg-green-600 py-2 px-4 text-white cursor-pointer shadow-md font-semibold hover:bg-green-500 transition duration-500 ease-in-out'>&larr; Back</button>
    </div>
  )
}
