import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Promo } from './components/Promo';
import { Packages } from './components/Packages';
import { Footer } from './components/Footer';

// Note: The original component files are repurposed to create the new UI.
// For example, Header.tsx now contains the TopBar UI, Hero.tsx contains the Garage view, etc.

const App: React.FC = () => {
  return (
    <div className="w-[390px] h-[844px] bg-dark-bg text-text-light font-sans rounded-[40px] shadow-2xl overflow-hidden border-4 border-black relative">
      {/* Notch simulation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-50"></div>
      
      <div className="p-4 pt-12 overflow-y-auto h-full pb-28 no-scrollbar">
        <Header />
        <main className="mt-6 space-y-6">
          <Hero />
          <Services />
          <Promo />
          <Packages />
        </main>
      </div>
      <Footer />
    </div>
  );
};

// Helper style to hide scrollbar for a more native app feel
const styles = `
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;