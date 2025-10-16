import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sandra | Masajista Holística en Colombia",
  description: "Terapias holísticas y masajes terapéuticos para el bienestar físico y emocional. Reserva tu sesión con Sandra, masajista profesional.",
  keywords: ["masajes", "terapia holística", "masajista profesional", "bienestar", "relajación", "terapia", "Colombia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <WhatsAppButton phoneNumber="573XXXXXXXXX" />
      </body>
    </html>
  );
}
