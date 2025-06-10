import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Smartphone, Monitor, Laptop, Zap } from 'lucide-react';
const Services = () => {
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
                }, index * 150);
              }
            });
          }
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);
  const services = [{
    icon: <Monitor className="h-12 w-12" />,
    title: "Reparo de TVs",
    description: "Conserto de TVs LED, OLED, LCD, Smart TV. Problemas de imagem, som, tela quebrada e muito mais.",
    features: ["Todas as marcas", "Orçamento grátis", "Garantia de 90 dias"]
  }, {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Conserto de Celulares",
    description: "Troca de tela, bateria, conector de carga, câmera. Especialistas em iPhone e Android.",
    features: ["Peças originais", "Reparo em 24h", "Garantia de 60 dias"]
  }, {
    icon: <Laptop className="h-12 w-12" />,
    title: "Manutenção de Computadores",
    description: "Limpeza, formatação, upgrade, reparo de hardware. Notebooks, desktops e tablets.",
    features: ["Diagnóstico gratuito", "Backup incluído", "Suporte técnico"]
  }, {
    icon: <Zap className="h-12 w-12" />,
    title: "Eletrodomésticos",
    description: "Reparo de máquinas de lavar, micro-ondas, geladeiras, fogões e outros eletrodomésticos.",
    features: ["Atendimento em casa", "Peças de qualidade", "Garantia estendida"]
  }];
  return <section id="services" ref={sectionRef} className="py-20 bg-transparent">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            Nossos Serviços
          </h2>
          <p ref={el => elementsRef.current[1] = el} className="section-subtitle text-black">
            Oferecemos soluções completas para todos os seus equipamentos eletrônicos 
            com qualidade e garantia assegurada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="service-card group opacity-0" ref={el => elementsRef.current[2 + index] = el}>
              <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-tech-orange rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-tech-blue font-display font-bold text-xl mb-4">
                {service.title}
              </h3>
              
              <p className="text-tech-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-tech-green rounded-full"></div>
                    <span className="text-tech-blue font-medium">{feature}</span>
                  </li>)}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-tech-lightgray">
                <button className="w-full bg-tech-lightgray hover:bg-tech-blue hover:text-white text-tech-blue font-semibold py-3 rounded-lg transition-all duration-300" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                  Solicitar Orçamento
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;