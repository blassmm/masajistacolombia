import Image from 'next/image';

interface TerapiaProps {
  title: string;
  description: string;
  imageSrc: string;
  colorClass: string;
}

const TerapiaCard: React.FC<TerapiaProps> = ({
  title,
  description,
  imageSrc,
  colorClass
}) => {
  // Determinar si es la tarjeta de desbloqueo emocional (roja) o las demás (celestes)
  const isEmotionalTherapy = colorClass.includes('border-secondary');
  const borderColor = isEmotionalTherapy ? 'border-[#FF6B6B]' : 'border-[#4ECDC4]';
  const hoverBgColor = isEmotionalTherapy ? 'hover:bg-[#FF6B6B]/5' : 'hover:bg-[#4ECDC4]/5';
  const titleColor = isEmotionalTherapy ? 'text-[#FF6B6B]' : 'text-[#36B5AC]';

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 
                    hover:-translate-y-2 hover:shadow-xl ${hoverBgColor} 
                    border ${borderColor} ${colorClass}`}>
      <div className="relative h-56">
        {/* Overlay para el color */}
        <div className={`absolute inset-0 z-10 ${isEmotionalTherapy ? 'bg-gradient-to-t from-[#FF6B6B]/30' : 'bg-gradient-to-t from-[#4ECDC4]/30'
          }`}></div>

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

function Terapias() {
  const terapias = [
    {
      title: "Masaje Relajante",
      description: "Técnica suave que libera tensiones y promueve la relajación profunda del cuerpo y la mente.",
      imageSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470",
      colorClass: "bg-white"
    },
    {
      title: "Masaje Descontracturante",
      description: "Enfocado en liberar nudos musculares y contracturas para aliviar el dolor y mejorar la movilidad.",
      imageSrc: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1374",
      colorClass: "bg-white"
    },
    {
      title: "Desbloqueo Emocional",
      description: "Terapia que trabaja en liberar emociones atrapadas en el cuerpo para restaurar el equilibrio energético.",
      imageSrc: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1374",
      colorClass: "bg-white"
    },
    {
      title: "Aromaterapia",
      description: "Uso de aceites esenciales para promover el bienestar físico y emocional a través de sus propiedades terapéuticas.",
      imageSrc: "https://images.unsplash.com/photo-1636484229128-dbbf72bbe764?q=80&w=1470",
      colorClass: "bg-white"
    },
    {
      title: "Reflexología Podal",
      description: "Técnica que estimula puntos específicos en los pies para equilibrar la energía en todo el cuerpo.",
      imageSrc: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1470",
      colorClass: "bg-white"
    },
    {
      title: "Masaje con Piedras Calientes",
      description: "Combina el masaje tradicional con piedras volcánicas calientes para una relajación profunda y alivio muscular.",
      imageSrc: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470",
      colorClass: "bg-white"
    }
  ];

  return (
    <section id="terapias" className="py-20 bg-gradient-to-b from-white to-accent-light/30">
      <div className="container-section">
        <h2 className="section-title">Terapias Holísticas</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Ofrezco una variedad de terapias diseñadas para atender las necesidades específicas de cada persona,
          promoviendo la armonía entre cuerpo, mente y espíritu.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terapias.map((terapia, index) => (
            <TerapiaCard
              key={index}
              title={terapia.title}
              description={terapia.description}
              imageSrc={terapia.imageSrc}
              colorClass={`${terapia.colorClass} ${terapia.title === "Desbloqueo Emocional" ? "border-secondary" : "border-primary"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Terapias;