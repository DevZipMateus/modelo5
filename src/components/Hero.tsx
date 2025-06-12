
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Shield, Clock, Award, Star } from 'lucide-react';

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
      {/* Overlay sutil para contraste */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Badge de credibilidade */}
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 mb-8 opacity-0 shadow-lg"
          >
            <Award className="h-5 w-5 text-red-600" />
            <span className="text-black font-semibold text-sm">+15 Anos de Excelência em Assistência Técnica</span>
          </div>
          
          {/* Título principal */}
          <h1 
            ref={el => elementsRef.current[1] = el}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 opacity-0 leading-tight"
            style={{ 
              animationDelay: '200ms',
              color: '#ffffff',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}
          >
            ASSISTÊNCIA TÉCNICA
            <br />
            <span 
              className="font-black"
              style={{
                color: '#dc2626',
                textShadow: '0 4px 30px rgba(220, 38, 38, 0.6)'
              }}
            >
              PROFISSIONAL
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-white text-xl md:text-2xl max-w-4xl mx-auto mb-8 font-medium opacity-0 leading-relaxed"
            style={{ 
              animationDelay: '400ms',
              textShadow: '0 2px 10px rgba(0,0,0,0.7)'
            }}
          >
            Especialistas em <span className="text-red-400 font-bold">TVs, Celulares, Computadores e Eletrodomésticos</span>
            <br />
            Diagnóstico gratuito • Garantia assegurada • Atendimento rápido
          </p>

          {/* Estatísticas de credibilidade */}
          <div 
            ref={el => elementsRef.current[3] = el}
            className="flex flex-wrap justify-center gap-8 mb-12 opacity-0"
            style={{ animationDelay: '600ms' }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">+5.000</div>
              <div className="text-sm text-white/80">Equipamentos Reparados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-white/80">Avaliação 5 Estrelas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80">Taxa de Sucesso</div>
            </div>
          </div>

          {/* Diferenciais principais */}
          <div 
            ref={el => elementsRef.current[4] = el}
            className="flex flex-wrap justify-center gap-6 mb-12 opacity-0"
            style={{ animationDelay: '800ms' }}
          >
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Shield className="h-5 w-5 text-red-400" />
              <span className="text-white font-semibold">Garantia de 90 Dias</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-white font-semibold">Diagnóstico em 24h</span>
            </div>
          </div>
          
          {/* Call to Actions */}
          <div 
            ref={el => elementsRef.current[5] = el}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
            style={{ animationDelay: '1000ms' }}
          >
            <a 
              href="https://wa.me/5555999887766?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20reparo%20do%20meu%20equipamento." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-500 hover:border-red-400"
            >
              ORÇAMENTO GRATUITO AGORA
            </a>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </button>
          </div>

          {/* Confiança adicional */}
          <div 
            ref={el => elementsRef.current[6] = el}
            className="mt-16 opacity-0"
            style={{ animationDelay: '1200ms' }}
          >
            <p className="text-white/80 text-sm mb-4">
              Mais de 15 anos cuidando dos seus equipamentos eletrônicos
            </p>
            <div className="flex justify-center space-x-8 text-white/60 text-xs">
              <span>• Técnicos Certificados</span>
              <span>• Peças Originais</span>
              <span>• Atendimento 6 dias/semana</span>
            </div>
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
