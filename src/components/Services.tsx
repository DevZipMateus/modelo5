
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Shield, Camera, Zap, Lock, Wifi, Phone, CheckCircle, Settings } from 'lucide-react';

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              elementsRef.current.forEach((el, index) => {
                if (el) {
                  setTimeout(() => {
                    el.classList.add('animate-slide-up');
                  }, index * 150);
                }
              });
            }
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Shield className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Sistema de Alarme",
      subtitle: "Residencial e Comercial",
      description: "Sistemas de alarme completos para proteção de residências, comércios e indústrias. Monitoramento 24h.",
      features: ["Monitoramento 24h", "Sensores de movimento", "Sirenes internas/externas", "Central de alarme"],
      popular: true
    },
    {
      icon: <Camera className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Sistema de Câmeras (CFTV)",
      subtitle: "Vigilância inteligente",
      description: "Circuito fechado de TV com câmeras HD, gravação digital e acesso remoto via smartphone.",
      features: ["Câmeras HD", "Gravação 24h", "Acesso remoto", "Visão noturna"],
      popular: true
    },
    {
      icon: <Settings className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Automatização de Portão",
      subtitle: "Controle automático",
      description: "Instalação e manutenção de motores para portões eletrônicos, controles remotos e sensores.",
      features: ["Motor de qualidade", "Controle remoto", "Trava eletromagnética", "Sensor de obstáculo"],
      popular: false
    },
    {
      icon: <Lock className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Fechadura Elétrica",
      subtitle: "Acesso controlado",
      description: "Instalação de fechaduras elétricas, controle de acesso por cartão ou biometria.",
      features: ["Controle de acesso", "Biometria", "Cartão magnético", "Abertura remota"],
      popular: false
    },
    {
      icon: <Zap className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Cerca Elétrica",
      subtitle: "Proteção perimetral",
      description: "Instalação de cerca elétrica com isoladores e centrais de choque para segurança perimetral.",
      features: ["Alta voltagem", "Isoladores", "Central de choque", "Instalação segura"],
      popular: false
    },
    {
      icon: <Phone className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Interfone e Vídeo Porteiro",
      subtitle: "Comunicação segura",
      description: "Sistemas de interfone e vídeo porteiro para controle de acesso e comunicação.",
      features: ["Audio cristalino", "Vídeo HD", "Abertura remota", "Múltiplos pontos"],
      popular: false
    },
    {
      icon: <Wifi className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />,
      title: "Eletricista Residencial",
      subtitle: "Instalações elétricas",
      description: "Serviços elétricos residenciais e prediais, instalação de pontos, quadros elétricos.",
      features: ["Instalação segura", "Normas ABNT", "Quadros elétricos", "Manutenção"],
      popular: false
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div 
            ref={el => elementsRef.current[0] = el}
            className="inline-block bg-tech-green/20 text-tech-green px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0"
          >
            NOSSOS SERVIÇOS
          </div>
          <h2 
            ref={el => elementsRef.current[1] = el}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-4 sm:mb-6 opacity-0 leading-tight"
          >
            Soluções Integradas em
            <br />
            <span className="text-tech-green">Sistemas de Segurança</span>
          </h2>
          <p 
            ref={el => elementsRef.current[2] = el}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto opacity-0 px-4 sm:px-0"
          >
            Empresa sólida atuando no controle de segurança eletrônica para 
            indústrias, comércios, residências e condomínios
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => elementsRef.current[3 + index] = el}
              className={cn(
                "relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 border-2",
                service.popular 
                  ? "border-tech-green ring-2 sm:ring-4 ring-tech-green/20" 
                  : "border-gray-100 hover:border-tech-green/50"
              )}
            >
              {service.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-tech-green text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  MAIS PROCURADO
                </div>
              )}

              <div className={cn(
                "w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto",
                service.popular 
                  ? "bg-tech-green text-white" 
                  : "bg-gray-100 text-gray-700"
              )}>
                {service.icon}
              </div>
              
              <h3 className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-center">
                {service.title}
              </h3>
              
              <p className="text-tech-green font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-center">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-center text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={cn(
                  "w-full py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base",
                  service.popular
                    ? "bg-tech-green hover:bg-tech-green/90 text-white"
                    : "bg-black hover:bg-gray-800 text-white"
                )}
                onClick={() => {
                  window.open('https://wa.me/5514998332104?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20' + service.title, '_blank');
                }}
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          ))}
        </div>

        {/* Seção de garantia */}
        <div 
          ref={el => elementsRef.current[7] = el}
          className="bg-black rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center opacity-0"
        >
          <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Produtos Inovadores e Flexibilidade
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto">
            Promovemos soluções integradas através de produtos inovadores e flexibilidade nos processos. 
            Sua segurança é nossa prioridade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-green mb-1 sm:mb-2">24h</div>
              <div className="text-white font-semibold text-sm sm:text-base">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-green mb-1 sm:mb-2">100%</div>
              <div className="text-white font-semibold text-sm sm:text-base">Qualidade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tech-green mb-1 sm:mb-2">+1000</div>
              <div className="text-white font-semibold text-sm sm:text-base">Clientes</div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <button 
              onClick={() => {
                window.open('https://wa.me/5514998332104?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado%20para%20sistema%20de%20segurança.', '_blank');
              }}
              className="bg-tech-green hover:bg-tech-green/90 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105"
            >
              SOLICITAR ORÇAMENTO PERSONALIZADO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
