import React from 'react';



function MentionsLegales() {
  return (
    
      <main className="container mx-auto px-4 py-8 text-black pt-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Mentions Légales</h1>
      </header>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Identification de l'Entreprise</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Propriétaire :</strong> Mr IPARRAGUIRRE Jérémy</li>
          <li><strong>Siège social :</strong> 64000 Pau</li>
          <li><strong>Statut :</strong>Micro-entreprise </li>
          <li><strong>SIRET :</strong>93177183600018 </li>
          <li><strong>Code APE :</strong>62.01Z - Programmation informatique</li>
          <li><strong>Adresse mail :</strong> <a href="mailto:jidev-contact@proton.me" className="text-blue-600 underline">jidev-contact@proton.me</a></li>
          <li><strong>Créateur du site :</strong> J-iDev.com</li>
          <li>
            <strong>Responsable publication :</strong> 
            <span> Mr IPARRAGUIRRE Jérémy – Le responsable publication est une personne physique ou une personne morale.</span>
          </li>
          <li><strong>Hébergeur :</strong> Vercel Inc., CA 91723, United States</li>
          <li><strong>Crédit Design :</strong> ©J-iDev.com</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Technologies Utilisées</h2>
        <p>
          Ce site est développé en utilisant <strong>Next.js</strong> et <strong>Tailwind CSS</strong>, assurant une performance optimale et une interface utilisateur réactive.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} J-iDev.com Tous droits réservés.</p>
        
      </footer>
    </main>
    
  )
}

export default MentionsLegales
