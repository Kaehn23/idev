import Head from "next/head";
import { Metadata } from "next";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import ScrollToTop from "./components/ui/ScrollToTop";
import FAQ from "./components/FAQ";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Lenis from "./components/ui/lenis";
import CookieConsent from "./components/ui/CookieConsent";

export const metadata: Metadata = {
   title: "J-iDev - Solutions numériques",
   description:
      "Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO. Solutions sur mesure pour votre présence en ligne. Contactez-nous pour un devis gratuit.",
   keywords:
      "J-iDev, Solutions numériques, Agence web, Création de sites web, Maintenance, SEO, Développement web, Conception web, Hébergement web, Marketing digital, E-commerce, UX/UI, Référencement naturel, Stratégie digitale, Audit SEO",
   openGraph: {
      url: "https://www.J-iDev.com",
      title: "J-iDev - Solutions numériques",
      description:
         "Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO. Solutions sur mesure pour votre présence en ligne. Contactez-nous pour un devis gratuit.",
}
};
   
export default function Home() {
   return (
      <>
         <Head>
            <title>J-iDev - Création de sites web, maintenance & SEO | Agence Web Professionnelle</title>
            <meta
               name="description"
               content="Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO. Solutions sur mesure pour votre présence en ligne. Contactez-nous pour un devis gratuit."
            />
            <meta
               name="keywords"
               content="développement web, création de sites web, refonte de sites web, maintenance de sites web, SEO, optimisation SEO, site web responsive, sites web rapides, agence web, conception web, design web, optimisation de performance, développement front-end, développement back-end, web design, sécurité web, hébergement web, applications web, solutions digitales, e-commerce, UX/UI, référencement naturel, stratégie digitale, marketing digital, audit SEO"
            />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="J-Idev.com" />
            <meta name="copyright" content="Copyright © 2024 J-Idev.com" />
            <meta name="language" content="fr" />
            <meta name="revisit-after" content="7 days" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://j-idev.com/" />
            <meta property="og:title" content="J-iDev - Création de sites web, maintenance & SEO" />
            <meta property="og:description" content="Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO. Solutions sur mesure pour votre présence en ligne." />
            <meta property="og:image" content="https://j-idev.com/images/og-image.jpg" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://j-idev.com/" />
            <meta property="twitter:title" content="J-iDev - Création de sites web, maintenance & SEO" />
            <meta property="twitter:description" content="Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO. Solutions sur mesure pour votre présence en ligne." />
            <meta property="twitter:image" content="https://j-idev.com/images/twitter-image.jpg" />
            
            {/* Canonical URL */}
            <link rel="canonical" href="https://j-idev.com/" />
            
            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            
            {/* Structured Data */}
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "WebSite",
                     "name": "J-iDev",
                     "url": "https://j-idev.com/",
                     "description": "Agence web professionnelle spécialisée dans la création de sites web responsive, maintenance et SEO",
                     "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://j-idev.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                     }
                  })
               }}
            />
         </Head>

         <Lenis>
            <header role="banner">
               
            </header>

            <main role="main">
               <Main />
               <About />
               <Services />
               <FAQ />
               
               <Projects />
               <Contact />
               <ScrollToTop />
            </main>

            
            <CookieConsent />
         </Lenis>
      </>
   );
}
