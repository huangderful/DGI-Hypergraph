'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        <Link 
          href="/" className="text-3xl font-bold tracking-wide text-gray-100">
          Fruits of my Labor
        </Link>

        <nav className="flex space-x-4">
          <Link
            href="/hypergraph-viewer"
            className="w-60 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            🔗 Hypergraph Viewer
          </Link>
          <Link
            href="/dataset-viewer"
            className="w-60 text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            📊 Dataset Viewer
          </Link>
          <Link
            href="/gen-hypergraph"
            className="w-60 text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            ⚙️ Gen Hypergraph
          </Link>
          <Link
            href="/methods"
            className="w-60 text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            ⚙️ Methods
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
