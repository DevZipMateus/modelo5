
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
import ClickSpark from '@/components/ClickSpark';
import Aurora from '@/components/Aurora';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const { getParallaxBackgroundStyle } = useParallax();

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
    <ClickSpark
      sparkColor="#f97316"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <main className="min-h-screen flex flex-col antialiased overflow-x-hidden relative">
        {/* Aurora background layer */}
        <div className="fixed inset-0 -z-30 opacity-40">
          <Aurora 
            colorStops={["#1e40af", "#f97316", "#dc2626"]}
            amplitude={0.8}
            blend={0.6}
            speed={0.5}
          />
        </div>

        {/* Global background layers with parallax effect */}
        <div className="fixed inset-0 -z-20">
          {/* Primary layer - Circuit board with parallax */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              ...getParallaxBackgroundStyle(0.3),
            }}
          ></div>
          
          {/* Secondary layer - Laptop with parallax */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              ...getParallaxBackgroundStyle(0.5),
            }}
          ></div>
          
          {/* Tertiary layer - Colorful code with parallax */}
          <div 
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              ...getParallaxBackgroundStyle(0.2),
            }}
          ></div>
          
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-red-600/30"></div>
        </div>

        {/* Floating elements with parallax */}
        <div 
          className="fixed top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-float -z-10"
          style={getParallaxBackgroundStyle(0.1)}
        ></div>
        <div 
          className="fixed top-32 right-16 w-2 h-2 bg-accent/30 rounded-full animate-float animation-delay-500 -z-10"
          style={getParallaxBackgroundStyle(0.15)}
        ></div>
        <div 
          className="fixed bottom-32 left-20 w-4 h-4 bg-tech-green/20 rounded-full animate-float animation-delay-300 -z-10"
          style={getParallaxBackgroundStyle(0.25)}
        ></div>
        <div 
          className="fixed bottom-20 right-12 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-700 -z-10"
          style={getParallaxBackgroundStyle(0.2)}
        ></div>
        
        {/* Circuit pattern overlay for entire page */}
        <div className="circuit-overlay fixed inset-0 -z-10 pointer-events-none"></div>
        
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
    </ClickSpark>
  );
};

export default Index;
