import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between items-center p-6">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.svg"
                    alt="Logo de la tienda"
                    width={40}
                    height={40}
                    priority
                />
            </Link>

            <nav className="flex gap-6">
                <Link href="/#inicio" className="hover:text-pink-600 transition">Inicio</Link>
                <Link href="/#sobre-mi" className="hover:text-pink-600 transition">Sobre Mi</Link>
                <Link href="/#terapias" className="hover:text-pink-600 transition">Terapias</Link>
                <Link href="/#precios" className="hover:text-pink-600 transition">Precios</Link>
                <Link href="/#testimonios" className="hover:text-pink-600 transition">Testimonios</Link>
                <Link href="/contacto" className="hover:text-pink-600 transition">Contacto</Link>
            </nav>
        </header>
    )
}
export default Header