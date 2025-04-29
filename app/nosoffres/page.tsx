import { Metadata } from "next";
import Offres from "./components/Offres";
import Lenis from "../components/ui/lenis";

export const metadata: Metadata = {
   title: "Nos Offres - J-iDev.com",
   description:
      "Découvrez nos différentes offres de création de sites web, maintenance et SEO. Adaptées à vos besoins et à votre budget.",
   keywords:
      "Offres, J-iDev.com, IPARRAGUIRRE Jérémy, Programmation informatique, Hébergement Vercel",
   openGraph: {
      url: "https://www.J-iDev.com/nosoffres",
      title: "Nos Offres - J-iDev.com",
      description:
         "Découvrez nos différentes offres de création de sites web, maintenance et SEO. Adaptées à vos besoins et à votre budget.",
      siteName: "J-iDev.com",
      locale: "fr_FR",
      type: "website",
   },
   alternates: {
      canonical: "https://www.J-iDev.com/nosoffres",
   },
};

export default function Home() {
   return (
      <Lenis>
         <header></header>

         <main>
            <section aria-labelledby="offres">
               <Offres />
            </section>
         </main>
      </Lenis>
   );
}
