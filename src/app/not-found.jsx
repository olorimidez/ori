import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>

     <main className="flex min-h-screen items-center justify-center bg-[#E6E4E0] px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          404
        </p>

        <h1 className="mt-4 text-4xl font-medium text-[#292722] md:text-6xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#292722] px-7 py-3 text-sm text-white transition hover:bg-black"
        >
          Back to Homepage
        </a>
      </div>
    </main>
       
       
       <div className='mt-32 flex flex-col items-center'>
             <h2 className='text-red-600'> Page Not Found</h2>
             <div className='bg-black text-white p-2 border rounded mt-2'>
                <Link href="/" className='no-underline text-white'>Back to Homepage</Link>
             </div>
       </div>
    </div>
  )
}
