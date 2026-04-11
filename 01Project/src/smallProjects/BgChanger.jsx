import React, { useState } from 'react'

function BgChanger() {

    const [color, setColor] = useState('bg-gray-400')


  return (
    <>
    <section className={`relative w-full h-screen duration-200 ${color}`} >
        <div className='absolute bottom-10 right-7 pb-2 pl-6 pr-6 flex gap-3 bg-gray-200 border-2 '>
            <button className='bg-yellow-300 p-1.5 w-20 text-yellow-700 rounded-b-full border cursor-pointer' onClick={() => setColor('bg-yellow-300')}>Yellow</button>
            <button className='bg-red-300 p-1.5 w-20 text-red-700 rounded-b-full border cursor-pointer' onClick={() => setColor('bg-red-300')}>Red</button>
            <button className='bg-green-300 p-1.5 w-20 text-green-700 rounded-b-full border cursor-pointer' onClick={() => setColor('bg-green-300')}>Green</button>
            <button className='bg-blue-300 p-1.5 w-20 text-blue-700 rounded-b-full border cursor-pointer' onClick={() => setColor('bg-blue-300')}>Blue</button>
            <button className='bg-gray-400 p-1.5 w-20 text-gray-700 rounded-b-full border-2 border-dashed border-gray-700 cursor-pointer' onClick={() => setColor('bg-gray-400')}>Reset</button>
        </div>
    </section>
    
    </>
  )
}

export default BgChanger