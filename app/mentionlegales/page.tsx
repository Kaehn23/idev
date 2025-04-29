import { Metadata } from "next";
import MentionLegales from "./components/MentionsLegales";

import Lenis from "../components/ui/lenis";

export const metadata: Metadata = {
   title: "Mentions Légales - J-iDev.com",
   description:
      "Découvrez les mentions légales de J-iDev.com, incluant l'identité de l'entreprise, les technologies utilisées et les informations légales requises.",
   keywords:
      "Mentions légales, J-iDev.com, IPARRAGUIRRE Jérémy, Programmation informatique, Hébergement Vercel",
   openGraph: {
      url: "https://www.J-iDev.com/mentionslegales",
      title: "Mentions Légales - J-iDev.com",
      description:
         "Découvrez les mentions légales de J-iDev.com, incluant l'identité de l'entreprise, les technologies utilisées et les informations légales requises.",
      siteName: "J-iDev.com",
      locale: "fr_FR",
      type: "website",
   },
   alternates: {
      canonical: "https://www.J-iDev.com/mentionslegales",
   },
};

export default function Home() {
   return (
      <Lenis>
         <header>
         
         </header>

         <main>
            <section aria-labelledby="mentions-legales">
               <MentionLegales />
            </section>
         </main>
      </Lenis>
   );
}
