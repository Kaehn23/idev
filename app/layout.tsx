import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// Utilisation de Montserrat pour toute la police de votre site
const montserrat = Montserrat({
   subsets: ["latin"],
   variable: "--font-montserrat", // Définir une variable CSS pour Montserrat
});

export const metadata: Metadata = {
   title: "J-iDev",
   description:
      "J-iDev propose des solutions de sites web responsives, rapides et optimisés pour le SEO naturel de Google. Boostez votre présence en ligne pour augmenter vos ventes.",
   icons: {
      icon: "/assets/logo/favicon.ico",
   },
   openGraph: {
      title: "J-iDev",
      description:
         "J-iDev - Création de sites web, maintenance & SEO - Sites vitrines, Landing Page. Nos sites sont rapide et optimisés pour répondre à vos besoin, et augmenter vos profits",
      url: "https://idev-nine.vercel.app/",
      images: [
         {
            url: "https://idev-nine.vercel.app/assets/Vector.webp",
            width: 1200,
            height: 630,
            alt: "Image opengraph",
         },
      ],
      type: "website",
      locale: "fr_FR",
      siteName: "J-iDev",
   },
   twitter: {
      card: "summary_large_image",
      title: "J-iDev",
      description: "J-iDev - Création de sites web, maintenance & SEO",
      images: ["https://idev-nine.vercel.app/assets/Vector.png"],
   },
};
export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fr">
         <body
            className={`${montserrat.variable} antialiased`} // Appliquer Montserrat globalement ici
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
               disableTransitionOnChange
            >
               <Navbar />
               {children}
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
