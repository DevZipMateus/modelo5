
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
      {/* Background com múltiplas imagens e efeito parallax */}
      <div className="absolute inset-0 -z-10">
        {/* Camada principal - Programação */}
        <div 
          className="absolute inset-0 hero-parallax opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        
        {/* Camada secundária - Laptop */}
        <div 
          className="absolute inset-0 hero-parallax opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80')`,
            backgroundPosition: 'right center'
          }}
        ></div>
        
        {/* Camada terciária - Código colorido */}
        <div 
          className="absolute inset-0 hero-parallax opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000&q=80')`,
            backgroundPosition: 'left center'
          }}
        ></div>
        
        {/* Overlay com gradiente tecnológico */}
        <div className="absolute inset-0 tech-overlay"></div>
        
        {/* Padrão de circuitos sutil */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Cpath d='M40 30v20M30 40h20M35 35l10 10M45 35l-10 10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Elementos geométricos flutuantes */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-2 h-2 bg-tech-orange/30 rounded-full animate-float animation-delay-500"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-tech-green/20 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-20 right-12 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="flex items-center justify-center space-x-2 text-white font-semibold mb-4 opacity-0"
          >
            <Wrench className="h-5 w-5" />
            <span className="text-lg">Assistência Técnica Multimarcas</span>
          </div>
          
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 opacity-0 animate-slide-up leading-tight"
            style={{ 
              animationDelay: '200ms',
              fontFamily: "'Orbitron', 'Inter', sans-serif",
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Seu Eletrônico em 
            <br />
            <span className="text-white">Boas Mãos</span>
          </h1>
          
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-medium opacity-0"
            style={{ animationDelay: '400ms' }}
          >
            Especialistas em TVs, Celulares, Computadores, Eletrodomésticos e Mais. 
            <br className="hidden md:block" />
            <span className="text-yellow-300">Tecnologia e Cuidado</span> para todos os seus aparelhos.
          </p>

          {/* Características principais */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-wrap justify-center gap-6 mb-10 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/10">
              <Shield className="h-5 w-5 text-green-300" />
              <span className="text-sm font-medium text-white">Garantia Assegurada</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/10">
              <Clock className="h-5 w-5 text-green-300" />
              <span className="text-sm font-medium text-white">Reparo Rápido</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/10">
              <Wrench className="h-5 w-5 text-green-300" />
              <span className="text-sm font-medium text-white">Técnicos Experientes</span>
            </div>
          </div>
          
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
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
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
            >
              Fale Conosco via WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
