import Head from 'next/head';
import { Metadata } from "next";
import Lenis from '../components/ui/lenis';


export const metadata: Metadata = {
   title: "Politique de Confidentialité - J-iDev.com",
   description:
      "Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles.",
   keywords:
      "Politique de Confidentialité, J-iDev.com, IPARRAGUIRRE Jérémy, Programmation informatique, Hébergement Vercel",
   openGraph: {
      url: "https://www.J-iDev.com/politique-de-confidentialite",
      title: "Politique de Confidentialité - J-iDev.com",
      description:
         "Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles.",
      siteName: "J-iDev.com",
      locale: "fr_FR",
      type: "website",
   },
   alternates: {
      canonical: "https://www.J-iDev.com/politique-de-confidentialite",
   },
};
export default function PrivacyPolicy() {
   return (
      <Lenis>
         <Head>
            <title>Politique de Confidentialité - J-iDev</title>
            <meta
               name="description"
               content="Politique de confidentialité et gestion des cookies de J-iDev. Découvrez comment nous protégeons vos données personnelles."
            />
         </Head>

         <main className="max-w-4xl mx-auto px-4 py-8 text-black pt-24">
            <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
            
            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
               <p className="mb-4">
                  Chez J-iDev, nous accordons une grande importance à la protection de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
               </p>
            </section>

            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">2. Collecte des Données</h2>
               <p className="mb-4">
                  Nous collectons les informations suivantes :
               </p>
               <ul className="list-disc pl-6 mb-4">
                  <li>Informations de contact (nom, email, téléphone)</li>
                  <li>Données de navigation (adresse IP, type de navigateur)</li>
                  <li>Informations sur l'utilisation du site</li>
               </ul>
            </section>

            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">3. Utilisation des Cookies</h2>
               <p className="mb-4">
                  Nous utilisons différents types de cookies :
               </p>
               <ul className="list-disc pl-6 mb-4">
                  <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
                  <li>Cookies analytiques : pour améliorer nos services</li>
                  <li>Cookies de préférences : pour mémoriser vos choix</li>
               </ul>
               <p className="mb-4">
                  Vous pouvez gérer vos préférences de cookies via notre bannière de consentement.
               </p>
            </section>

            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">4. Protection des Données</h2>
               <p className="mb-4">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles 
                  contre tout accès non autorisé, modification, divulgation ou destruction.
               </p>
            </section>

            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">5. Vos Droits</h2>
               <p className="mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
               </p>
               <ul className="list-disc pl-6 mb-4">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition</li>
               </ul>
            </section>

            <section className="mb-8">
               <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
               <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, 
                  veuillez nous contacter à l'adresse suivante : jidev-contact@proton.me
               </p>
            </section>
         </main>
      </Lenis>
   );
} 