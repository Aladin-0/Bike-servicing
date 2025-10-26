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
    <div className="w-full min-h-screen lg:min-h-screen md:w-[390px] md:h-[844px] md:mx-auto md:my-8 bg-dark-bg text-text-light font-sans md:rounded-[40px] md:shadow-2xl overflow-hidden md:border-4 md:border-black lg:border-0 lg:rounded-none lg:m-0 relative">
      {/* Notch simulation - only on mobile/tablet view */}
      <div className="hidden md:block lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-50"></div>

      <div className="p-4 md:pt-12 pt-6 lg:pt-8 overflow-y-auto h-full pb-28 lg:pb-32 no-scrollbar lg:max-w-7xl lg:mx-auto lg:px-12 xl:px-16">
        <Header />
        <main className="mt-6 space-y-6 lg:mt-10 lg:space-y-10">
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