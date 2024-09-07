import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weights: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Inter({
  subsets: ["latin"],
  weights: '600',
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "NFTBoost | Explore o Universo Digital de Colecionáveis Únicos",
  description: "Projeto de estudos - Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
