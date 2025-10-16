import Image from 'next/image';

function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-accent-light py-20">
      <div className="container-section">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470"
              alt="Sandra, Masajista Holística"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary-dark px-4 py-2 rounded-full font-medium">
              Sandra Acosta
            </div>

            <h3 className="section-subtitle">Mi camino hacia la sanación holística</h3>

            <p className="text-gray-700 mb-4">
              Con más de 10 años de experiencia en terapias holísticas, he dedicado mi vida a comprender la profunda conexión entre cuerpo, mente y espíritu. Mi formación comenzó con estudios en masaje terapéutico tradicional, pero pronto descubrí que la verdadera sanación requiere un enfoque integral.
            </p>

            <p className="text-gray-700 mb-4">
              Me especializo en técnicas que combinan la sabiduría ancestral con métodos contemporáneos, creando experiencias terapéuticas personalizadas que atienden las necesidades únicas de cada persona.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-display text-primary-dark font-bold">+10</span>
                <span className="text-sm text-gray-600">Años de experiencia</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="block text-3xl font-display text-primary-dark font-bold">+500</span>
                <span className="text-sm text-gray-600">Clientes satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;