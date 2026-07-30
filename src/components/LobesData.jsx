"use client"

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ako from '../assets/ako.jpeg'
import abo from '../assets/abo.jpeg'




const menus = [
  // {
  //   title: "Two Lobes",
  //   items: [
  //     { key: 1, label: "1 face up (AKO) / 1 face down (ABO)" },
  //     { key: 2, label: "1 face up (ABO) / 1 face down (AKO)" },
  //     { key: 3, label: "2 face up" },
  //     { key: 4, label: "2 face down" },
  //   ],
  // },
  {
    title: "Four Lobes",
    items: [
      
      { key: 1, label: "4 face up" },
      { key: 2, label: "2 face up (AKO) / 2 face down (ABO)" },
      { key: 3, label: "2 face up (ABO) / 2 face down (AKO)" },
      { key: 4, label: "4 face down" },
      { key: 5, label: "2 face up (AKO) / 1 face up (ABO) / 1 down (ABO)" },
      { key: 6, label: "2 face up (ABO) / 1 face up (AKO) / 1 down (AKO)" },
      { key: 7, label: "2 face down (AKO) / 1 face down (ABO) / 1 face up (ABO)" },
      { key: 8, label: "1 face down (AKO) / 1 face up (AKO) / 1 face down (ABO) / 1 face up (ABO)" },
    ],
  },
  // {
  //   title: "Five Lobes",
  //   items: [
  //     { key: 1, label: "4 face up" },
  //     { key: 2, label: "2 face up (AKO) / 2 face down (ABO)" },
  //     { key: 3, label: "2 face up (ABO) / 2 face down (AKO)" },
  //     { key: 4, label: "2 face up (AKO) / 1 face up (ABO) / 1 down (ABO)" },
  //     { key: 5, label: "2 face up (ABO) / 1 face up (AKO) / 1 down (AKO)" },
  //     { key: 6, label: "4 face down" },
  //   ],
  // },
];
const Lobes = () => {
  const router = useRouter();

  const handleClick = (title, itemKey) => {
    const base = title.toLowerCase().replace(/\s+/g, '-');

    router.push(`/${base}/${itemKey}`);
  };

  return (


  <div className='pt-24'>
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-gray-100 flex flex-col items-center justify-center px-6">

  {/* Header */}
  <div className="text-center mb-12">
     <h5 className='pt-10 pb-3'>Welcome Select your preffered Lobes</h5>
    <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
      Obi Divination
    </h1>

    <p className="mt-4 text-gray-600 text-lg max-w-xl">
      Explore the wisdom and meanings behind each Obi cast. 
      Select a configuration below to discover its interpretation.
    </p>
   

  <div className="flex justify-center gap-6">
  {/* Ako Card */}
  <div className="group w-40 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg transition duration-300 hover:shadow-2xl">
    <div className="overflow-hidden">
      <Image
        src={ako}
        alt="obi_ako"
        height={160}
        width={160}
        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-90"
      />
    </div>

    <div className="bg-gray-100 py-3 text-center">
      <h3 className="font-semibold text-gray-800">Ako</h3>
    </div>
  </div>


  {/* Abo Card */}
    <div className="group w-40 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg transition duration-300 hover:shadow-2xl">
      <div className="overflow-hidden">
        <Image
          src={abo}
          alt="obi_abo"
          height={160}
          width={160}
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-90"
        />
      </div>

      <div className="bg-gray-100 py-3 text-center">
        <h3 className="font-semibold text-gray-800">Abo</h3>
      </div>
    </div>
  </div>
  </div>


  {/* Dropdown Menu Container */}
  <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-gray-200">
    
    <div className="flex flex-wrap justify-center gap-5">


      {menus.map((menu, index) => (
        <SplitButton
          key={menu.title}
          id={`dropdown-button-drop-${index}`}
          drop="down"
          variant="dark"
          title={menu.title}
          className="shadow-md w-full sm:w-auto"
        >
          {menu.items.map((item) => (
            <Dropdown.Item
              key={item.key}
              onClick={() => handleClick(menu.title, item.key)}
              className="py-3 hover:bg-amber-100 transition"
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </SplitButton>
      ))}

    </div>

  </div>


 

</div>
  </div>
  )
}

export default Lobes
