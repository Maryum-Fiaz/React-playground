import React from 'react'
import InputBox from './InputBox'

function FinalBox() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-200'>
        <div className='w-full max-w-md mx-auto bg-white rounded-lg shadow-lg'>
        <InputBox label="Source Language" />

        
        <hr className='my-1.5 mx-3 text-gray-400' />
        

        <InputBox label="Target Language" isDisabled color='bg-gray-100' selectLanguage='Spanish' />

        </div>
    </div>
  )
}

export default FinalBox