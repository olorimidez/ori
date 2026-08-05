import React from "react";


const videos = [
  {
    title: " Egúngún",
    video: "/video/egungun.mp4",
    description:
      "Prayers from the Ancestors.",

  },
  {
    title: "Ẹgbẹ́",
    video: "/video/egbe.mp4",
    description:
      "Drumming for earthly mate.",

  }
];

const Video = () => {
  return (
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 flex justify-center">
            Videos
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
     
 {videos.map((vid)=>(
   <div key={vid.title}
    className="bg-white mt-5 rounded-2xl shadow-md overflow-hidden">

      <video
        controls
        className="w-full aspect-video"
      >
        <source src={vid.video} type="video/mp4"/>
      </video>

      <div className="p-5">

        <h2 className="text-xl font-semibold">
          {vid.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {vid.description}
        </p>
       
      </div>

   </div>
 ))}

          </div>
        </div>
  );
};

export default Video;