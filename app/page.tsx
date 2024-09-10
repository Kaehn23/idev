import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import ScrollToTop from "./components/ui/ScrollToTop"

export default function Home() {
   return (
      <body>
         <Head>
            <title>Sud Décapage - Entreprise de décapage, aérogommage</title>
            <meta
               name="description"
               content="Site web de notre entreprise Concept Truck, specialisée l'entretient, la réparation, et l'aménagement de véhicules poids lourds, véhicules legers, PL VL dans les Landes"
            />
            <meta
               name="keywords"
               content="aménagement, poids lourds, véhicule poids lourds, amenager, entretien, van, van-life, camping-car, home-car, lanterneau, panneau solaire,  véhicule aménagé,  réparation, mécanique, vidange, soudure, acier, inox, alu, aluminium, décapage, decapage, aérogommage, aerogommage, mise peinture, hangar, landes, 40, sablage, matériel, agricole, restauration, industrie, grenaillage, rénovation, volets, meubles, portails, murettes, murets, charpentes, boiserie "
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
            <About/>
            <ScrollToTop/>
         </main>
         <footer>
            <Footer />
         </footer>
      </body>
   );
}
