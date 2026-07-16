import twoFaceUp from "../assets/2lobes.webp";
import ogbe from "../assets/Obi-abata-all-face-up-(ogbe).jpg";
import akita from "../assets/akita.jpeg"
import obita from "../assets/obita.jpeg"
import okanran from "../assets/okanran.jpeg"
import obikan from "../assets/obikan.jpeg"
import odiyeku from "../assets/odi-oyeku.jpeg"
import obiako from "../assets/obi&ako.jpeg"

//remember to spicify the picture of AKO & ABO
const lobesDetails = {
  'two-lobes': {
    1: {
        // itemKey: 1,
        title: 'Two face up', 
        meaning: 'ALAFIA', 
        description: "You need to cast it again, but if it shows up again then its a YES.", 
        img: twoFaceUp
        },

    2: { 
        // itemKey: 2,
        title: 'Two face down', 
        meaning: 'NO / ODI', 
        description: "You need to cast it again." 
       },

    3: {
        // itemKey: 3,
        title: 'One face UP / one face DOWN', 
        meaning: 'YES', 
        description: "Its a YES" 
       }
  },

  'four-lobes': {
     1: {
        // itemKey: 1,
        title: 'Two face up (AKO MEJI) / Two face down (ABO MEJI)', 
        meaning: 'OGBE', 
        description: "Its a YES, you dont need to cast it again.",
        img: ogbe,
       },

    2: { 
        // itemKey: 2,
        title: 'Two face up (AKO MEJI) / One face down (ABO) / One face up (ABO)', 
        meaning: 'AKITA', 
        description: "Akita(sends away the energy of death and sickness) but you need to cast it again because its talking about patience before success.",
        img: akita,
       },

    3: {
        // itemKey: 3,
        title: 'Two face up (ABO MEJI) / One face down (AKO) / One face up (AKO)', 
        meaning: 'OBITA', 
        description: "Its a weak response, firstly you need to take caution before taking important decisions, you need to cast again.",
        img: obita,
       },

    4: {
        // itemKey: 4,
        title: 'All face down', 
        meaning: 'OYEKU', 
        description: "Your ancestors or ori is not in agreement with the request as at that time.",
        img: odiyeku, 
        },
    5:  {
        // itemKey: 5,
        title: 'two face up (AKO) / one face up (ABO) / one down (ABO)', 
        meaning: 'OGBE', 
        description: "Dont ask again, its a strong YES",
        // img: ogbe
        },
    6:  {
        // itemKey: 6,
        title: 'Two face down (ABO MEJI) / One face down (AKO) / One face up (AKO)', 
        meaning: 'OKANRAN', 
        description: "Your ancestors is telling you to stay calm, put your left hand on the floor and put it directly to your and repeat the process three times. ",
        img: okanran,
        },
    7:  {
        // itemKey: 7,
        title: 'Two face down (AKO MEJI) / One face down (ABO) / One face up (ABO)', 
        meaning: 'OBIKAN', 
        description: "Its a No, you need to cast again depending on your question.",
        img: obikan,
        },
    8:  {
        // itemKey: 8,
        title: 'One face down (AKO) / One face up (AKO) / One face down (ABO) / One face up (ABO)', 
        meaning: 'OBI ati AKO', 
        description: "Dont ask again, its a YES",
        img: obiako,
        }
  },

  'five-lobes' : {
    1: {
        // itemKey: 1,
        title: 'Two face up (ABO MEJI) / One face down (AKO) One face up (AKO)', 
        meaning: 'later', 
        description: "later" 
    }
  }
};

export default lobesDetails;
