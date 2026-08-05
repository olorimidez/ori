import React from "react";
import Image from "next/image";
import egbe from "../assets/egbe1.jpeg";
import ogun from "../assets/ogun.jpeg";
import esu from "../assets/esu.jpeg";
import egungun from "../assets/egungun.jpeg";


const orisha = [
  {
    id: 1,
    title: "Ẹgbẹ́ (Egbe)",
    img: egbe,
    desc: "Ẹgbẹ́ (Egbe) is your earthly mate, your spiritual counterpart, celestial companion.",
    eulogy: "Ẹ̀yin Ẹgbẹ́ mi, ẹ wá lé, ẹ wá lé Ẹ̀yin Ẹgbẹ́ mi, ẹ má bò, ẹ má bò, wá lé. Wá lé l’ápá ẹyẹlé ń ké, wá lé l’ápá ẹyẹlé ń fò.",
    music: 'CHANT',
  },
  {
    id: 2,
    title: "Ògún",
    img: ogun,
    desc: "Ògún is a deity associated with iron and metal, technology, craftsmanship, hunting, roads, and clearing paths. When life seems difficult, Ògún is believed to clear blocked paths.",
    eulogy: "Ògún Aládá, Ògún Onílé Ọ̀nà, Ògún ọlọ́jà irin, Ògún ẹni tí ń gbé ọ̀nà kúrò, Ògún a kì í bẹ̀rù rẹ, Ògún a kì í yà sílẹ̀ rẹ. Ògún má jẹ́ kí ọ̀nà mi dí, Ògún má jẹ́ kí iṣẹ́ ọwọ́ mi bàjẹ́.",
    music: 'CHANT',
  },
  {
    id: 3,
    title: "Èṣù",
    img: esu,
    desc: "Èṣù is not Satan. Èṣù is regarded as the messenger who carries offerings and prayers between humans and the Òrìṣà. He upholds balance by ensuring actions have appropriate consequences.",
    eulogy: "Èṣù Elégbára, Òjìṣẹ́ Ọ̀rọ̀, A kì í dájọ́ Èṣù kúrò, A kì í mọ̀nà Èṣù. Èṣù l’ó ń ṣọ́ ọ̀nà, Èṣù l’ó ń ṣí ọ̀nà, Bí a bá rúbọ, Èṣù ni ń gbé e dé, Èṣù má ṣe jẹ́ kí ọ̀nà mi dí.",
    music: 'CHANT',
  },
    {
    id: 4,
    title: "Ẹ̀gúngún",
    img: egungun,
    desc: "Ẹ̀gúngún is your ancestral spirit, thats referred to as your departed ancestors, your forefathers.",
    eulogy: 'Ò wà lábẹ́ aṣọ́, ò gbèrí ọmọ, Ò wà lábẹ́ aṣọ́, ò gbèrí ọmọ. Ọmọ kékeré tí àbí sọ jẹ́ o, Ọmọ kékeré tí àbí sọ jẹ́ o. Ò wà lábẹ́ aṣọ́, ò gbèrí ọmọ. Ẹ̀gún ará ọ̀run kìnkìn, Gbogbo ọmọ màrìwò. Jẹ́ mí ní wò, Ìwọ o! Gbìn, gbìn, Gbìn. Ẹrù, Owó.',
    music: "CHANT",
  },
  
];

const Orishas = () => {
  return (
    <div className=" p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-stone-900 flex justify-center">
            Chants of some Orisha's
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-3 mb-10 rounded-full"></div>
      <div className="flex flex-wrap gap-6 justify-center">
        {orisha.map((deity) => (
          <div
            key={deity.id}
            className="group w-64 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <Image
                src={deity.img}
                alt={deity.title}
                width={300}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="bg-gray-100 p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {deity.title}
              </h3>
              <p className="text-sm text-gray-600">{deity.desc}</p>
              <div className="w-[142px]">
                <h5>{deity.music}</h5>
                <p className="text-sm text-gray-600">{deity.eulogy}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orishas;