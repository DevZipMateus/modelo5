
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Wrench, Shield, Clock } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background com parallax */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-tech-lightgray/90 via-white/95 to-tech-lightgray/90"></div>
        {/* Padrão de circuitos sutil */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23215570' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Cpath d='M30 25v10M25 30h10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="flex items-center justify-center space-x-2 text-tech-orange font-semibold mb-4 opacity-0"
          >
            <Wrench className="h-5 w-5" />
            <span className="text-lg">Assistência Técnica Multimarcas</span>
          </div>
          
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="hero-title leading-tight mb-6"
            style={{ animationDelay: '200ms' }}
          >
            Seu Eletrônico em 
            <br />
            <span className="text-tech-blue">Boas Mãos</span>
          </h1>
          
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-tech-gray text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-medium opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            Especialistas em TVs, Celulares, Computadores, Eletrodomésticos e Mais. 
            <br className="hidden md:block" />
            <span className="text-tech-blue">Tecnologia e Cuidado</span> para todos os seus aparelhos.
          </p>

          {/* Características principais */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-wrap justify-center gap-6 mb-10 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Shield className="h-5 w-5 text-tech-green" />
              <span className="text-sm font-medium text-tech-blue">Garantia Assegurada</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Clock className="h-5 w-5 text-tech-green" />
              <span className="text-sm font-medium text-tech-blue">Reparo Rápido</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Wrench className="h-5 w-5 text-tech-green" />
              <span className="text-sm font-medium text-tech-blue">Técnicos Experientes</span>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <a 
              href="#contact" 
              className="bg-tech-orange hover:bg-tech-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Agende Seu Orçamento Grátis
            </a>
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20TechHelp." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tech-green hover:bg-tech-green/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fale Conosco via WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-tech-gray hover:text-tech-blue transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
