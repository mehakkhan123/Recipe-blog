import React from 'react'

export default function Comments() {
  return (
    <div className='flex flex-col shadow-md p-4 rounded-md'>
        <h1 className='font-bold text-2xl'>Comments</h1>
        <form action="" className='flex flex-col gap-1'>
            <label htmlFor="" className='font-semibold mt-3'>Your Name</label>
            <input type="text" className='border border-black rounded-md p-2'/>

            <label htmlFor="" className='font-semibold mt-3'>Your Comment</label>
            <textarea className='border border-black rounded-md p-2'/>
            <button type="submit" className='bg-green-600 text-white p-2 rounded-md shadow-md mt-3 cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-100'>Submit Comment</button>

        </form>
    </div>
  )
}
