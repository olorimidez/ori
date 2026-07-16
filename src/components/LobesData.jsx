"use client"

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { useRouter } from 'next/navigation';




const menus = [
  {
    title: "Two Lobes",
    items: [
      { key: 1, label: "1 face up (AKO) / 1 face down (ABO)" },
      { key: 2, label: "1 face up (ABO) / 1 face down (AKO)" },
      { key: 3, label: "2 face up" },
      { key: 4, label: "2 face down" },
    ],
  },
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
  {
    title: "Five Lobes",
    items: [
      { key: 1, label: "4 face up" },
      { key: 2, label: "2 face up (AKO) / 2 face down (ABO)" },
      { key: 3, label: "2 face up (ABO) / 2 face down (AKO)" },
      { key: 4, label: "2 face up (AKO) / 1 face up (ABO) / 1 down (ABO)" },
      { key: 5, label: "2 face up (ABO) / 1 face up (AKO) / 1 down (AKO)" },
      { key: 6, label: "4 face down" },
    ],
  },
];
const Lobes = () => {
  const router = useRouter();

  const handleClick = (title, itemKey) => {
    const base = title.toLowerCase().replace(/\s+/g, '-');

    router.push(`/${base}/${itemKey}`);
  };

  return (
    // <>
    //   {menus.map(
    //     (menu, index) => (
    //       <SplitButton
    //         key={menu.title}
    //         id={`dropdown-button-drop-${index}`}
    //         drop="end"
    //         variant="secondary"
    //         title={menu.title}
    //         className="d-flex m-2"
    //         style={{ width: "10rem" }}
    //       >
    //         {menu.items.map((item) => (
    //         <Dropdown.Item
    //           key={item.key}
    //           onClick={() => handleClick(menu.title, item.key)}
    //         >
    //           {item.label}
    //         </Dropdown.Item>
    //         ))}
    //       </SplitButton>
    //     ),
    //   )}
    // </>

  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-gray-100 flex flex-col items-center justify-center px-6">

  {/* Header */}
  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
      Obi Divination
    </h1>

    <p className="mt-4 text-gray-600 text-lg max-w-xl">
      Explore the wisdom and meanings behind each Obi cast. 
      Select a configuration below to discover its interpretation.
    </p>
  </div>


  {/* Dropdown Menu Container */}
  <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-gray-200">
    
    <div className="flex flex-wrap justify-center gap-5">

      


      {menus.map((menu, index) => (
        <SplitButton
          key={menu.title}
          id={`dropdown-button-drop-${index}`}
          drop="end"
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


  {/* Footer Text */}
  <p className="mt-10 text-sm text-gray-500">
    Discover ancient knowledge through the Obi system
  </p>

</div>
  )
}

export default Lobes
