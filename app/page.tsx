import Head from "next/head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import ScrollToTop from "./components/ui/ScrollToTop";
import FAQ from "./components/FAQ";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lenis from "./components/ui/lenis";

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
               <Main />
               <About />
               <Services />
               <FAQ />
               <Projects />
               <Contact />
               <ScrollToTop />
            </main>

            <footer>
               <Footer />
            </footer>
         </Lenis>
      </>
   );
}
