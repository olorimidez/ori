import Image from "next/image";
import opon_ifa from "../assets/opon_ifa.jpg";
import ikin_ifa from "../assets/ikinIfa.jpeg";
import divi from "../assets/divination_tools.avif";
import iroke_ifa from "../assets/iroke_ifa.jpg";
import opele from "../assets/opele.jpg";
import otutu_opon from "../assets/otutu_opon.jpeg";
import iyereOsun from "../assets/iyere_osun.jpeg";


const items = [
  {
    id: 1,
    name: "Opon Ifa",
    image: opon_ifa,
  },
  {
    id: 2,
    name: "Ikin Ifa",
    image: ikin_ifa,
  },
  {
    id: 3,
    name: "Divination Tools",
    image: divi,
  },
   {
    id: 4,
    name: "Iroke Ifa",
    image: iroke_ifa,
  },
  {
    id: 5,
    name: "Opele",
    image: opele,
  },
    {
    id: 6,
    name: "Otutu Opon",
    image: otutu_opon,
  },
  {
    id: 7,
    name: "Ìyèrè Òṣun",
    image: iyereOsun,
  },
];

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 flex justify-center">
            Sacred Items
        </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-3 mb-10 rounded-full"></div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}