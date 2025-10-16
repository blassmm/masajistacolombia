"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-black/30 backdrop-blur-sm py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
                <Link href="/" className="flex items-center gap-2">
                    <span className={`font-display text-2xl font-semibold ${scrolled ? 'text-primary-dark' : 'text-primary'
                        }`}>Sandra Acosta</span>
                    <span className={`text-sm font-light ${scrolled ? 'text-gray-600' : 'text-white'
                        }`}>Masajista Holística</span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className={`md:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menú"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <Link href="/#inicio" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors duration-300`}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/#sobre-mi" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors duration-300`}>
                                Sobre Mí
                            </Link>
                        </li>
                        <li>
                            <Link href="/#terapias" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors duration-300`}>
                                Terapias
                            </Link>
                        </li>
                        <li>
                            <Link href="/#precios" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors duration-300`}>
                                Precios
                            </Link>
                        </li>
                        <li>
                            <Link href="/#testimonios" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-primary transition-colors duration-300`}>
                                Testimonios
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="max-w-7xl mx-auto px-4 py-5">
                        <ul className="flex flex-col items-center gap-5">
                            <li className="w-full text-center">
                                <Link
                                    href="/#inicio"
                                    className="block w-full py-2 hover:text-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="w-full text-center">
                                <Link
                                    href="/#sobre-mi"
                                    className="block w-full py-2 hover:text-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sobre Mí
                                </Link>
                            </li>
                            <li className="w-full text-center">
                                <Link
                                    href="/#terapias"
                                    className="block w-full py-2 hover:text-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Terapias
                                </Link>
                            </li>
                            <li className="w-full text-center">
                                <Link
                                    href="/#precios"
                                    className="block w-full py-2 hover:text-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Precios
                                </Link>
                            </li>
                            <li className="w-full text-center">
                                <Link
                                    href="/#testimonios"
                                    className="block w-full py-2 hover:text-primary transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Testimonios
                                </Link>
                            </li>
                            <li className="w-full text-center mt-2">
                                <Link
                                    href="/contacto"
                                    className="inline-block bg-primary text-white px-8 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;