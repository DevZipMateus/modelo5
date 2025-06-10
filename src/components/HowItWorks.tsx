
import React, { useEffect, useRef } from 'react';
import { Calendar, Search, Wrench, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            elementsRef.current.forEach((el, index) => {
              if (el) {
                setTimeout(() => {
                  el.classList.add('animate-slide-up');
                }, index * 200);
              }
            });
          }
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "1. Agendamento",
      description: "Entre em contato conosco via WhatsApp ou formulário para agendar a avaliação do seu aparelho."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "2. Avaliação",
      description: "Nossa equipe técnica fará um diagnóstico completo e identificará o problema do seu equipamento."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "3. Reparo",
      description: "Realizamos o conserto com peças de qualidade e técnicos especializados em cada tipo de aparelho."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "4. Entrega",
      description: "Seu aparelho é devolvido funcionando perfeitamente com garantia e orientações de uso."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-tech-lightgray py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Como Funciona
          </h2>
          <p className="section-subtitle" ref={el => elementsRef.current[1] = el}>
            Um processo simples e transparente para resolver os problemas do seu equipamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group"
              ref={el => elementsRef.current[2 + index] = el}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-tech-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-tech-blue font-display font-bold text-lg mb-4">
                {step.title}
              </h3>
              
              <p className="text-tech-gray leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-tech-orange"></div>
                  <div className="w-0 h-0 border-l-4 border-l-tech-orange border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div 
            className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto opacity-0"
            ref={el => elementsRef.current[6] = el}
          >
            <h3 className="text-tech-blue font-display font-bold text-xl mb-4">
              Pronto para começar?
            </h3>
            <p className="text-tech-gray mb-6">
              Entre em contato conosco agora mesmo e resolva o problema do seu aparelho com quem entende do assunto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5555999887766?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tech-green hover:bg-tech-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Agendar via WhatsApp
              </a>
              <button 
                className="bg-tech-blue hover:bg-tech-darkblue text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Preencher Formulário
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
