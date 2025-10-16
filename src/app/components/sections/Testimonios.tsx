"use client"
import Image from 'next/image';

interface TestimonioProps {
  quote: string;
  author: string;
  position?: string;
  imageSrc: string;
}

const TestimonioCard: React.FC<TestimonioProps> = ({
  quote,
  author,
  position,
  imageSrc
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start mb-4">
        <svg className="w-8 h-8 text-primary opacity-30 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-gray-700 mb-6 italic">{quote}</p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
          <Image
            src={imageSrc}
            alt={author}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
    </div>
  );
};

function Testimonios() {
  const testimonios = [
    {
      quote: "Las sesiones con Sandra han transformado mi vida. Sus masajes no solo alivian el dolor físico, sino que también me han ayudado a encontrar equilibrio emocional.",
      author: "María González",
      position: "Cliente desde 2020",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374"
    },
    {
      quote: "Después de meses de dolor crónico, las terapias de Sandra fueron las únicas que me dieron alivio real. Su enfoque holístico hace toda la diferencia.",
      author: "Carlos Rodríguez",
      position: "Cliente desde 2021",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374"
    },
    {
      quote: "El ambiente que Sandra crea para sus sesiones es increíblemente relajante. Cada visita es como un oasis de paz en medio de mi agitada vida.",
      author: "Laura Martínez",
      position: "Cliente desde 2019",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1470"
    },
    {
      quote: "Sandra tiene un don especial para detectar exactamente dónde está la tensión y cómo liberarla. Sus manos son verdaderamente sanadoras.",
      author: "Javier Morales",
      position: "Cliente desde 2022",
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374"
    }
  ];

  return (
    <section id="testimonios" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Lo que dicen mis clientes</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Estas son algunas experiencias compartidas por personas que han experimentado
          los beneficios de mis terapias holísticas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <TestimonioCard
              key={index}
              quote={testimonio.quote}
              author={testimonio.author}
              position={testimonio.position}
              imageSrc={testimonio.imageSrc}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-primary-dark mb-4">
            ¿Listo para experimentar los beneficios?
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-colors duration-300" onClick={() => window.location.href = '/contacto'}>
            Reserva tu sesión ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;