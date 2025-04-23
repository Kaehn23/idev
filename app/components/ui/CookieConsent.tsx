'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
   const [showConsent, setShowConsent] = useState(false);

   useEffect(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
         setShowConsent(true);
      }
   }, []);

   const acceptCookies = () => {
      localStorage.setItem('cookieConsent', 'true');
      setShowConsent(false);
      // Initialize your analytics and tracking here
   };

   const declineCookies = () => {
      localStorage.setItem('cookieConsent', 'false');
      setShowConsent(false);
   };

   if (!showConsent) return null;

   return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
               <p className="text-sm">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                  En continuant à naviguer, vous acceptez notre{' '}
                  <Link href="/politique-de-confidentialite" className="underline">
                     politique de confidentialité
                  </Link>
                  .
               </p>
            </div>
            <div className="flex gap-4">
               <button
                  onClick={acceptCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
               >
                  Accepter
               </button>
               <button
                  onClick={declineCookies}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
               >
                  Refuser
               </button>
            </div>
         </div>
      </div>
   );
} 