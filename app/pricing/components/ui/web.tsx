import React from 'react'

function Web() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Starter Pack</h2>
            <p className="text-xl mb-4">€19/mois</p>
            <ul className="mb-4">
              <li>Fonctionnalité 1</li>
              <li>Fonctionnalité 2</li>
              <li>Support de base</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Choisir
            </button>
          </div>
          
          <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Standard</h2>
            <p className="text-xl mb-4">€49/mois</p>
            <ul className="mb-4">
              <li>Fonctionnalité 1</li>
              <li>Fonctionnalité 2</li>
              <li>Fonctionnalité 3</li>
              <li>Support premium</li>
            </ul>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Choisir
            </button>
          </div>
          
          <div className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Premium</h2>
            <p className="text-xl mb-4">€99/mois</p>
            <ul className="mb-4">
              <li>Fonctionnalité 1</li>
              <li>Fonctionnalité 2</li>
              <li>Fonctionnalité 3</li>
              <li>Fonctionnalité 4</li>
              <li>Support 24/7</li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Choisir
            </button>
          </div>
        </div>
    </div>
  )
}

export default Web
