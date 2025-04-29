import React from 'react'
import Head from 'next/head'
import Web from './ui/web'
import Maintenance from './ui/maintenance'
import Seo from './ui/seo'
import CTA from '../../components/ui/CTA'
import Ecommerce from './ui/ecommerce'

function Offres() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Services de développement web et maintenance",
        "description": "Offres de création de sites web, e-commerce, maintenance et SEO",
        "offers": {
            "@type": "AggregateOffer",
            "offerCount": "4",
            "offers": [
                {
                    "@type": "Offer",
                    "name": "Création de sites web",
                    "description": "Services de développement web personnalisés"
                },
                {
                    "@type": "Offer",
                    "name": "Création de sites E-Commerce",
                    "description": "Solutions e-commerce sur mesure"
                },
                {
                    "@type": "Offer",
                    "name": "Maintenance",
                    "description": "Services de maintenance et support technique"
                },
                {
                    "@type": "Offer",
                    "name": "SEO",
                    "description": "Services d'optimisation pour les moteurs de recherche"
                }
            ]
        }
    };

    return (
        <>
            <Head>
                <title>Nos Offres - Services de Développement Web et Maintenance</title>
                <meta name="description" content="Découvrez nos offres de création de sites web, e-commerce, maintenance et SEO. Services adaptés à vos besoins professionnels." />
                <meta name="keywords" content="développement web, création site web, e-commerce, maintenance, SEO, services web" />
                <meta property="og:title" content="Nos Offres - Services de Développement Web" />
                <meta property="og:description" content="Découvrez nos offres de création de sites web, e-commerce, maintenance et SEO." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>
            <main className="container mx-auto pt-24">
                <h1 className="text-3xl font-bold text-center mb-4 md:text-2xl sm:text-4xl text-black">
                    Découvrez nos différentes{" "}
                    <span className="font-bold border-b-4 border-green-300 text-green-300">
                        offres
                    </span>{" "}
                    adaptées à vos{" "}
                    <span className="font-bold border-b-4 text-orange-300 border-orange-300">
                        besoins
                    </span>{" "}
                    .
                </h1>

                <section>
                    <h2 className="text-black text-3xl font-semibold text-center m-4 pt-4">
                        Création de sites web
                    </h2>
                    <article>
                        <Web />
                    </article>
                </section>

                <section>
                    <h2 className="text-black text-3xl font-semibold text-center m-4 pt-4">
                        Création de sites E-Commerce
                    </h2>
                    <article>
                        <Ecommerce />
                    </article>
                </section>

                <section>
                    <h2 className="text-black text-3xl font-semibold text-center m-4 pt-4">
                        Maintenance
                    </h2>
                    <article>
                        <Maintenance />
                    </article>
                </section>

                <section>
                    <h2 className="text-black text-3xl font-semibold text-center m-4 pt-4">
                        SEO
                    </h2>
                    <article>
                        <Seo />
                    </article>
                </section>

                <section className="w-full max-w-6xl text-black pb-2 text-2xl md:text-2xl sm:text-2xl text-center mx-auto bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-80 rounded-lg mt-4 shadow-lg pt-4 md:p-8">
                    <p className="leading-relaxed">
                        N'hésitez pas à me&nbsp;
                        <span className="font-bold text-green-400">contacter&nbsp;</span>
                        pour plus&nbsp;
                        <span className="font-bold text-green-400">d'informations</span>
                    </p>
                </section>
                <div className="flex justify-center">
                    <CTA />
                </div>
            </main>
        </>
    );
}

export default Offres
