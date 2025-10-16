"use client"

interface PrecioCardProps {
    title: string;
    price: string;
    duration: string;
    description: string;
    features: string[];
    isHighlighted?: boolean;
}

const PrecioCard: React.FC<PrecioCardProps> = ({
    title,
    price,
    duration,
    description,
    features,
    isHighlighted = false
}) => {
    return (
        <div className={`rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${isHighlighted
            ? 'bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 border-2 border-primary transform scale-105 relative'
            : 'bg-white hover:-translate-y-2 border border-gray-100'
            }`}>
            {isHighlighted && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Más Popular
                </div>
            )}

            <div className="p-8">
                <div className="text-center mb-6">
                    <h3 className={`text-2xl font-display font-bold mb-3 ${isHighlighted ? 'text-primary-dark' : 'text-gray-800'
                        }`}>
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{description}</p>

                    <div className="mb-4">
                        <div className="flex items-baseline justify-center mb-1">
                            <span className="text-5xl font-display font-bold text-primary-dark">{price}</span>
                        </div>
                        <p className="text-gray-500 text-sm">/ sesión</p>
                    </div>

                    <div className={`inline-block px-4 py-1 rounded-full text-sm ${isHighlighted
                        ? 'bg-white/60 text-primary-dark font-medium'
                        : 'bg-accent text-primary-dark'
                        }`}>
                        {duration}
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${isHighlighted
                        ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                    onClick={() => window.location.href = "/contacto"}
                >
                    Reservar cita
                </button>
            </div>
        </div>
    );
};

function Precios() {
    const precios = [
        {
            title: "Masaje Relajante",
            price: "$80.000",
            duration: "60 minutos",
            description: "Ideal para aliviar el estrés",
            features: [
                "Técnicas suaves de masaje",
                "Aceites esenciales relajantes",
                "Música de ambiente",
                "Consulta personalizada"
            ]
        },
        {
            title: "Terapia Completa",
            price: "$120.000",
            duration: "90 minutos",
            description: "Experiencia holística integral",
            features: [
                "Masaje personalizado",
                "Aromaterapia premium",
                "Piedras calientes",
                "Reflexología podal",
                "Consulta de seguimiento"
            ],
            isHighlighted: true
        },
        {
            title: "Desbloqueo Emocional",
            price: "$100.000",
            duration: "75 minutos",
            description: "Libera tensiones profundas",
            features: [
                "Técnicas de liberación emocional",
                "Masaje energético",
                "Aromaterapia específica",
                "Guía de autocuidado"
            ]
        }
    ];

    return (
        <section id="precios" className="py-20 bg-gradient-to-b from-white to-accent-light">
            <div className="container-section">
                <h2 className="section-title text-gray-800">Precios y Duración</h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    Todas las sesiones son personalizadas según tus necesidades específicas.
                    Los precios incluyen consulta previa y recomendaciones posteriores.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {precios.map((precio, index) => (
                        <PrecioCard
                            key={index}
                            title={precio.title}
                            price={precio.price}
                            duration={precio.duration}
                            description={precio.description}
                            features={precio.features}
                            isHighlighted={precio.isHighlighted}
                        />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-display font-semibold mb-6 text-center text-gray-800">
                            Información Adicional
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-dark mb-2">Paquetes de Sesiones</h4>
                                    <p className="text-gray-600 text-sm">
                                        Adquiere un paquete de 5 sesiones y obtén un 10% de descuento en el total.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-dark mb-2">Política de Cancelación</h4>
                                    <p className="text-gray-600 text-sm">
                                        Se requiere cancelación con 24 horas de anticipación para evitar cargos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Precios;