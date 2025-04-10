"use client";
import Header from './components/header';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-200 text-center">
          This is the home page probably with the abstract and tutorial and links
        </h2>
      </main>
    </div>
  );
}