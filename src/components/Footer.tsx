import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-center mt-6">
        <footer className='w-full max-w-[1536px] flex flex-col justify-between items-center px-6 py-4 font-semibold text-center bg-green-600 text-white'>
            <h3>&copy; 2025 Recipe Blog. All rights reserved.</h3>
            <h3>Designed with <span className='text-red-700'>❤</span> by Mehak Khan</h3>
    </footer>
    </div>
  )
}
