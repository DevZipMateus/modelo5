import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Wrench, Shield, Clock } from 'lucide-react';
const AboutUs = () => {
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
                }, index * 100);
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
  const features = [{
    icon: <Wrench className="h-10 w-10 text-orange-500" />,
    title: "Experiência Técnica",
    description: "Mais de 15 anos de experiência reparando TVs, celulares, computadores e eletrodomésticos de todas as marcas."
  }, {
    icon: <Shield className="h-10 w-10 text-orange-500" />,
    title: "Garantia Assegurada",
    description: "Todos os nossos serviços incluem garantia, proporcionando tranquilidade e confiança aos nossos clientes."
  }, {
    icon: <Clock className="h-10 w-10 text-orange-500" />,
    title: "Atendimento Rápido",
    description: "Diagnóstico preciso e reparo eficiente para que você possa voltar a usar seus aparelhos o mais rápido possível."
  }];
  return <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0" ref={el => elementsRef.current[0] = el} style={{
          fontFamily: "'Orbitron', 'Inter', sans-serif"
        }}>
            Sobre Nós
          </h2>
          <p ref={el => elementsRef.current[1] = el} className="text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-0 text-black">
            Somos especialistas em assistência técnica comprometidos com a excelência e a satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-black/70 opacity-0 text-lg" ref={el => elementsRef.current[2] = el}>
              Fundada em 2008, a <span className="font-semibold text-orange-400">TechHelp</span> nasceu com o propósito de transformar a relação entre pessoas e tecnologia, oferecendo um serviço que vai além do reparo básico.
            </p>
            <p className="text-black/70 opacity-0 text-lg" ref={el => elementsRef.current[3] = el}>
              Nossa missão é fornecer soluções técnicas claras e eficientes, auxiliando nossos clientes a manterem seus aparelhos funcionando perfeitamente por mais tempo.
            </p>
            <p className="text-black/70 opacity-0 text-lg" ref={el => elementsRef.current[4] = el}>
              Trabalhamos com ética, precisão e um profundo compromisso com a satisfação dos nossos clientes, construindo relações de confiança duradouras através da qualidade do nosso trabalho.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg flex items-start space-x-4 opacity-0 hover:bg-white/15 transition-all duration-300" ref={el => elementsRef.current[5 + index] = el}>
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-black text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-black/70">
                    {feature.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;