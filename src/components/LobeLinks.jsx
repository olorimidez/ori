// import React from 'react'

// const LobeLinks = () => {
//         let lobes = [
//             {
//             name: "TWO LOBES",
//             submenu: true,
//             sublinks: [
//                 {
//                 sublink: [
//                     { name: "Two(2) face up", link: "/two-lobes/1" },
//                     { name: "Two(2) face down", link: "/two-lobes/2" },
//                     { name: "One(1) face up & one(1)face down", link: "/two-lobes/3" },
//                     { name: "Standing", link: "/two-lobes/4" }
                    
//                 ]
//                 }
//             ]
//             }
//       ];
//   return (
//     <div>
//         {lobes.map((lob, index)=>(
//             <div key={index}>
//                 <button>{lob.name}</button>

//                 {lob.submenu && (
//                     <ul>
//                         {
//                             lob.sublinks.map((mysublink, index) => (
//                                 <div key={index}>
//                                     {mysublink.sublink.map((slink, myIndex) => (
//                                         <li key={myIndex}> {slink.name} </li>
//                                     ))}
//                                 </div>
//                             ))
//                         }
//                     </ul>

//                 )}
//             </div>
//         ))}
//     </div>
//   )
// }

// export default LobeLinks