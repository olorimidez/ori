
import ogbe from "../assets/Obi-abata-all-face-up-(ogbe).jpg";
import akita from "../assets/akita.jpeg";
import obita from "../assets/obita.jpeg";
import okanran from "../assets/okanran.jpeg";
import obikan from "../assets/obikan.jpeg";
import odiyeku from "../assets/odi-oyeku.jpeg";
import obiako from "../assets/obi&ako.jpeg";
import etaIwa from "../assets/EtaIwa.jpeg";

const lobesDetails = {
  "four-lobes": {
    1: {
      title: "Two face up (AKO MEJI) / Two face down (ABO MEJI)",
      meaning: "OGBE",
      description: {
        type: "article",
        paragraphs: [
          "It's a YES. You don't need to cast again.",
        ],
      },
      img: ogbe,
    },

    2: {
      title:
        "Two face up (AKO MEJI) / One face down (ABO) / One face up (ABO)",
      meaning: "AKITA",
      description: {
        type: "article",
        paragraphs: [
          "Akita sends away the energy of death and sickness.",
          "However, you need to cast again because the message is asking you to exercise patience before success.",
        ],
      },
      img: akita,
    },

    3: {
      title:
        "Two face up (ABO MEJI) / One face down (AKO) / One face up (AKO)",
      meaning: "OBITA",
      description: {
        type: "article",
        paragraphs: [
          "It's a weak response. Firstly, you need to take caution before making important decisions. You need to cast again.",
          "If this shows again for the same question, then it means a YES. You don't need to cast again the third time.",
        ],
      },
      img: obita,
    },

    4: {
      title: "All face down",
      meaning: "OYEKU",
      description: {
        type: "article",
        paragraphs: [
          "Your ancestors or Ori are not in agreement with the request at that time.",
        ],
      },
      img: odiyeku,
    },

    5: {
      title:
        "Two face up (AKO) / One face up (ABO) / One down (ABO)",
      meaning: "ETA IWA",
      description: {
        type: "article",
        paragraphs: [
          "'Iwa gun, Iwa ko.' Alafia for you. You will conquer your enemies, far and near.",
          "Do not be doubtful. Your blessings are near.",
        ],
      },
      img: etaIwa,
    },

    6: {
      title:
        "Two face down (ABO MEJI) / One face down (AKO) / One face up (AKO)",
      meaning: "OKANRAN",
      description: {
        type: "article",
        paragraphs: [
          "Your ancestors are telling you to stay calm.",
          "Put your left hand on the floor and put it directly to your Ori, then repeat the process three times.",
        ],
      },
      img: okanran,
    },

    7: {
      title:
        "Two face down (AKO MEJI) / One face down (ABO) / One face up (ABO)",
      meaning: "OBIKAN",
      description: {
        type: "article",
        paragraphs: [
          "It's a NO. You need to cast again depending on your question.",
        ],
      },
      img: obikan,
    },

    8: {
      title:
        "One face down (AKO) / One face up (AKO) / One face down (ABO) / One face up (ABO)",
      meaning: "OBI ati AKO",
      description: {
        type: "article",
        paragraphs: [
          "Don't ask again. It's a YES.",
        ],
      },
      img: obiako,
    },
  },
};

export default lobesDetails;
