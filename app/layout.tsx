import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";



// Optimize font loading with preload and subset
const montserrat = Montserrat({
   subsets: ["latin"],
   variable: "--font-montserrat",
   display: "swap",
   preload: true,
   weight: ["400", "500", "600", "700"],
   fallback: ["system-ui", "arial"],
   adjustFontFallback: true,
});

// Preload critical assets
const preloadAssets = [
   "/assets/logo/favicon.ico",
   
   "/assets/Vector.webp"
];

export const metadata: Metadata = {
   metadataBase: new URL('https://j-idev.com'),
   title: {
      default: "J-iDev - Solutions Web Professionnelles",
      template: "%s | J-iDev"
   },
   description:
      "J-iDev propose des solutions de sites web responsives, rapides et optimisés pour le SEO naturel de Google. Boostez votre présence en ligne pour augmenter vos ventes.",
   keywords: [
      "développement web",
      "création site web",
      "maintenance site web",
      "SEO",
      "agence web",
      "e-commerce",
      "conception web",
      "hébergement web",
      "marketing digital"
   ],
   authors: [{ name: "J-iDev" }],
   creator: "J-iDev",
   publisher: "J-iDev",
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   icons: {
      icon: "/assets/logo/favicon.ico",
      
   },
   openGraph: {
      title: "J-iDev - Solutions Web Professionnelles",
      description:
         "J-iDev - Création de sites web, maintenance & SEO - Sites vitrines, Landing Page. Nos sites sont rapides et optimisés pour répondre à vos besoins et augmenter vos profits",
      url: "https://j-idev.com/",
      siteName: "J-iDev",
      images: [
         {
            url: "https://j-idev.com/assets/Vector.webp",
            width: 1200,
            height: 630,
            alt: "J-iDev - Solutions Web Professionnelles",
         },
      ],
      locale: "fr_FR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "J-iDev - Solutions Web Professionnelles",
      description: "J-iDev - Création de sites web, maintenance & SEO",
      images: ["https://j-idev.com/assets/Vector.webp"],
      creator: "@jidev",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
   verification: {
      google: 'your-google-site-verification',
   },
   alternates: {
      canonical: 'https://j-idev.com',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fr">
         <head>
            {/* Preload critical assets */}
            {preloadAssets.map((asset) => (
               <link
                  key={asset}
                  rel="preload"
                  href={asset}
                  as={asset.endsWith('.webp') ? 'image' : 'image'}
               />
            ))}
            
            {/* Preload critical fonts */}
            
            
            {/* Structured Data */}
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "Organization",
                     "name": "J-iDev",
                     "url": "https://j-idev.com",
                     "logo": "https://j-idev.com/assets/logo/logo.png",
                     "sameAs": [
                        "https://www.facebook.com/jidev",
                        "https://www.linkedin.com/company/jidev",
                        "https://twitter.com/jidev"
                     ],
                     "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+33-XX-XX-XX-XX",
                        "contactType": "customer service",
                        "areaServed": "FR",
                        "availableLanguage": ["French"]
                     }
                  })
               }}
            />
         </head>
         <body className={`${montserrat.variable} antialiased`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               enableSystem
               disableTransitionOnChange
            >
               
               <Navbar />
               <main role="main">
                  {children}
               </main>
               <Footer />
            </ThemeProvider>

            {/* Optimized Script Loading */}
            
         </body>
      </html>
   );
}
