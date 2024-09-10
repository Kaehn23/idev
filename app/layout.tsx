import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
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
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${montserrat.variable} antialiased`} // Appliquer Montserrat globalement ici
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
