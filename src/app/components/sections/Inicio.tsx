"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './inicio.module.css';

function Inicio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
          alt="Masaje holístico"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-10 animate-pulse"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
        <div className={`max-w-2xl ${styles.heroContent} ${loaded ? styles.loaded : styles.notLoaded}`}>

          <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${styles.textShadowLg}`}>
            Bienestar holístico para cuerpo y mente
          </h1>

          <p className={`text-lg md:text-xl mb-12 text-white/95 leading-relaxed ${styles.textShadowSm}`}>
            Descubre el poder sanador del tacto terapéutico y reconecta con tu esencia natural
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/#terapias"
              className="group bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full text-center text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center"
            >
              Descubrir terapias
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white px-10 py-4 rounded-full text-center text-lg font-semibold transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center"
            >
              Reservar cita
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className={`${styles.scrollIndicator} ${loaded ? styles.loaded : styles.notLoaded}`}>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;