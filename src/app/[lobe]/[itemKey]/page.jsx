import React from 'react'
import lobesDetails from '@/data/lobes'
import Image from 'next/image';
import Link from 'next/link';


export default function LobeDetailsPage({ params }) {
  const { lobe, itemKey } = params;

  console.log("params:", params);         // should show { lobe: "two-lobes", itemKey: "1" }
  console.log("lobesdetails:", lobesDetails[lobe]); // should show the object for "two-lobes"

  const detail = lobesDetails[lobe]?.[itemKey];

  if (!detail) {
    return <div className="p-6 text-red-600">❌ Not found</div>;
  }

  return (
  
<div className="max-w-5xl mx-auto p-6">
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 md:flex">
    
    {/* Image Section */}
    <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
      <Image
        src={detail.img}
        width={350}
        height={350}
        alt={detail.title}
        className="rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Content Section */}
    <div className="md:w-3/5 p-8 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-gray-800">
        {detail.title}
      </h1>

      <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold text-lg w-fit">
        {detail.meaning}
      </div>

      <p className="mt-6 text-gray-600 leading-8 text-lg">
        {detail.description}
      </p>
    </div>

  </div>

  {/* Back to Homepage Button */}
  <div className="mt-8 text-center">
    <Link
      href="/"
      className="inline-block rounded-full bg-[#292722] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#3a3832]"
    >
       Back to Homepage
    </Link>
  </div>
</div>
  );
}