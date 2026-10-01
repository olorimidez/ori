import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div>
       
       
       <div className='mt-32 flex flex-col items-center'>
             <h2 className='text-red-600'> Page Not Found</h2>
             <div className='bg-black text-white p-2 border rounded mt-2'>
                <Link href="/" className='no-underline text-white'>Back to Homepage</Link>
             </div>
       </div>
    </div>
  )
}
