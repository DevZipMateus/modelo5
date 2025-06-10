
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Ensure smooth scroll behavior works properly
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial scroll if URL has hash
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative">
      {/* Circuit pattern overlay for entire page */}
      <div className="circuit-overlay fixed inset-0 z-0 pointer-events-none"></div>
      
      <NavBar />
      <Hero />
      <div className="space-y-0 relative z-10">
        <div className="section-bg-semi">
          <Services />
        </div>
        <div className="section-bg-alt">
          <HowItWorks />
        </div>
        <div className="section-bg-semi">
          <AboutUs />
        </div>
        <div className="section-bg-alt">
          <Reviews />
        </div>
        <div className="section-bg-semi">
          <FAQ />
        </div>
        <div className="section-bg-alt">
          <Contact />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
