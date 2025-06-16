
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/69a48e2b-d0fd-4b71-a842-abe00864f7fd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay esmaecido para melhor contraste */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Título principal - mais bold e simples */}
          <h1 
            ref={el => elementsRef.current[0] = el}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 opacity-0 leading-tight tracking-tight"
            style={{ 
              animationDelay: '200ms',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0,0,0,0.9)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            ASSISTÊNCIA TÉCNICA
            <br />
            <span 
              className="font-black"
              style={{
                color: '#dc2626',
                textShadow: '0 4px 40px rgba(220, 38, 38, 0.8)'
              }}
            >
              PROFISSIONAL
            </span>
          </h1>
          
          {/* Subtítulo simplificado */}
          <p 
            ref={el => elementsRef.current[1] = el}
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-8 sm:mb-12 font-medium opacity-0 leading-relaxed"
            style={{ 
              animationDelay: '400ms',
              textShadow: '0 2px 15px rgba(0,0,0,0.8)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
            }}
          >
            Especialistas em <span className="text-red-400 font-bold">TVs, Celulares, Computadores</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-0"> Diagnóstico gratuito • Garantia de 90 dias</span>
          </p>

          {/* Call to Actions simplificado */}
          <div 
            ref={el => elementsRef.current[2] = el}
            className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 opacity-0 px-4 sm:px-0 mb-12 sm:mb-16"
            style={{ animationDelay: '600ms' }}
          >
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ORÇAMENTO GRATUITO
            </a>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30"
            >
              NOSSOS SERVIÇOS
            </button>
          </div>

          {/* Informação de credibilidade simples */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <p className="text-white/90 text-lg sm:text-xl font-medium mb-4">
              +15 anos de experiência • +5.000 equipamentos reparados
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero;
