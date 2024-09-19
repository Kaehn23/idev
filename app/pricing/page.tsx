import { Metadata } from 'next';
import Pricing from './components/Pricing';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lenis from '../components/ui/lenis';


export const metadata: Metadata = {
  title: 'Nos Tarifs - VotreSite',
  description: 'Découvrez nos plans tarifaires adaptés à vos besoins.',
  keywords: ['tarifs', 'pricing', 'plans', 'abonnement'],
  openGraph: {
    title: 'Nos Tarifs - J-iDev',
    description: 'Découvrez nos plans tarifaires adaptés à vos besoins.',
    url: 'https://www.votresite.com/pricing',
    siteName: 'VotreSite',
    images: [
      {
        url: 'https://www.votresite.com/images/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};


export default function Home() {
  return (
     <>
        <Lenis>
           <Head>
              <title>J-iDev - Création de sites web, maintenance & SEO</title>
              <meta
                 name="description"
                 content="Bienvenue sur notre site, nous proposons nos services de création de sites web responsive, optimisés et rapides. Nous effectuons aussi des refontes & de la maintenance sur des sites existants. Nous offrons également un service de SEO."
              />
              <meta
                 name="keywords"
                 content="développement web, création de sites web, refonte de sites web, maintenance de sites web, SEO, optimisation SEO, site web responsive, sites web rapides, agence web, conception web, design web, optimisation de performance, développement front-end, développement back-end, web design, sécurité web, hébergement web, applications web, solutions digitales, e-commerce, UX/UI, référencement naturel, stratégie digitale, marketing digital, audit SEO"
              />
              <meta name="robots" content="index, follow" />
              <meta
                 name="viewport"
                 content="width=device-width, initial-scale=1.0"
              />
              <meta name="author" content="J-Idev.com" />
              <meta name="copyright" content="Copyright © 2024 J-Idev.com" />
           </Head>

           <header>
              <Navbar />
           </header>

           <main>
              <Pricing/>
           </main>

           <footer>
              <Footer />
           </footer>
        </Lenis>
     </>
  );
}
