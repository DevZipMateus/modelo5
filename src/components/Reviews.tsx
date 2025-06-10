import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
const Reviews = () => {
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
  const reviews = [{
    name: "Maria Silva",
    service: "Reparo de TV Samsung",
    rating: 5,
    comment: "Excelente atendimento! Minha TV estava com problema na tela e foi consertada rapidamente. Equipe muito profissional e preço justo.",
    source: "Google Meu Negócio"
  }, {
    name: "João Santos",
    service: "Conserto de iPhone",
    rating: 5,
    comment: "Quebrei a tela do meu iPhone e em menos de 2 horas estava pronto! Peça original e garantia de 60 dias. Super recomendo!",
    source: "Facebook"
  }, {
    name: "Ana Costa",
    service: "Manutenção de Notebook",
    rating: 5,
    comment: "Meu notebook estava muito lento, fizeram uma limpeza completa e upgrade da memória. Ficou novo! Atendimento nota 10.",
    source: "Google Meu Negócio"
  }, {
    name: "Pedro Oliveira",
    service: "Reparo de Máquina de Lavar",
    rating: 5,
    comment: "Atendimento em domicílio excepcional. Técnico pontual, explicou todo o problema e resolveu na hora. Máquina funcionando perfeita!",
    source: "WhatsApp"
  }];
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, index) => <Star key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />);
  };
  return <section id="reviews" ref={sectionRef} className="py-20 bg-transparent">
      <div className="section-container bg-transparent">
        <div className="text-center mb-16">
          <h2 className="section-title" ref={el => elementsRef.current[0] = el}>
            O Que Nossos Clientes Dizem
          </h2>
          <p ref={el => elementsRef.current[1] = el} className="section-subtitle text-zinc-950">
            Centenas de clientes satisfeitos confiam na TechHelp Soluções para cuidar de seus equipamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => <div key={index} className="bg-tech-lightgray rounded-xl p-6 relative opacity-0 hover:shadow-lg transition-all duration-300" ref={el => elementsRef.current[2 + index] = el}>
              <Quote className="h-8 w-8 text-tech-orange mb-4" />
              
              <div className="flex items-center mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-tech-gray italic mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="border-t border-white pt-4">
                <h4 className="text-tech-blue font-semibold">{review.name}</h4>
                <p className="text-tech-gray text-sm">{review.service}</p>
                <p className="text-tech-orange text-xs mt-1 font-medium">Via {review.source}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-tech-blue to-tech-orange rounded-2xl p-8 text-white max-w-3xl mx-auto opacity-0" ref={el => elementsRef.current[6] = el}>
            <h3 className="font-display font-bold text-2xl mb-4">
              Mais de 1.000 Clientes Satisfeitos!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se aos nossos clientes que já experimentaram o melhor em assistência técnica.
              Qualidade, agilidade e garantia em todos os nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 estrelas no Google</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">98% de satisfação dos clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Reviews;