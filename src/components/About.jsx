import React from "react";

const About = () => {
  return (
    <section className="bg-stone-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900">
            Understanding the Stages of Ifá
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-5 rounded-full"></div>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-stone-600 leading-8">
            The journey within Ifá unfolds through different sacred stages.
            From divination and guidance to receiving Ifá and full initiation,
            each step deepens one's relationship with Ọ̀rúnmìlà and the wisdom
            of the Odù Ifá.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ìdáfá */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border-t-4 border-amber-600">
            <h2 className="text-2xl font-bold text-amber-700 mb-5">
              Ìdáfá (Ìdá Ifá or Ìfá dídá)
            </h2>

            <p className="text-stone-700 leading-8">
              Ìdáfá is the process of consulting Ifá through divination to
              receive guidance from Ọ̀rúnmìlà. This consultation is performed
              using either <strong>Ọ̀pẹ̀lẹ̀</strong> (the divining chain) or
              <strong> Ìkín Ifá</strong> (consecrated palm nuts).
            </p>

            <p className="text-stone-700 leading-8 mt-4">
              The divination reveals one of the 256 <strong>Odù Ifá</strong>,
              each containing sacred verses that offer wisdom, warnings,
              teachings, and practical guidance for living in harmony with
              one's destiny.
            </p>
          </div>

          {/* Ìṣẹ̀fá */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border-t-4 border-amber-600">
            <h2 className="text-2xl font-bold text-amber-700 mb-5">
              Ìṣẹ̀fá (Receiving Ifá)
            </h2>

            <p className="text-stone-700 leading-8">
              Ìṣẹ̀fá simply means <strong>the rite of receiving Ifá</strong> or
              <strong> the act of receiving Ifá</strong>.
            </p>

            <p className="text-stone-700 leading-8 mt-4">
              A person who has undergone Ìṣẹ̀fá has begun their spiritual
              journey with Ifá but has not yet been fully initiated, as they
              have not yet received their personal
              <strong> Odù Ifá</strong>.
            </p>
          </div>

          {/* Ìtẹ́fà */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border-t-4 border-amber-600">
            <h2 className="text-2xl font-bold text-amber-700 mb-5">
              Ìtẹ́fà (Full Initiation)
            </h2>

            <p className="text-stone-700 leading-8">
              Ìtẹ́fà is the sacred initiation into the mysteries of Ifá. It is a
              much deeper ceremonial process than Ìdáfá and marks an
              individual's formal entry into the spiritual tradition of Ifá.
            </p>

            <p className="text-stone-700 leading-8 mt-4">
              During this initiation, the individual establishes a lifelong
              relationship with Ọ̀rúnmìlà, the Òrìṣà of wisdom, destiny, and
              divine knowledge. Conducted by qualified Babaláwo, the ceremony
              may last several days depending on the lineage and tradition.
            </p>

            <p className="text-stone-700 leading-8 mt-4">
              The initiate receives a personal <strong>Odù Ifá</strong>, learns
              the spiritual responsibilities associated with it, and receives
              guidance to help fulfill their destiny (<strong>Àyànmọ́</strong>).
              Ìtẹ́fà is more than a ceremony, it is a lifelong commitment to the
              wisdom and teachings of Ifá.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;