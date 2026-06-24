'use client';

import { useState } from 'react';

const portfolioItems = [
  { title: 'Clínica Estética', desc: 'Landing page premium para agendamento e captação de clientes.' },
  { title: 'Clínica Médica', desc: 'Design clean para atrair pacientes e gerar confiança.' },
  { title: 'Coach / Consultor', desc: 'Página de alto impacto para captação de leads e autoridade.' },
  { title: 'Consultório Odontológico', desc: 'Presença digital profissional para clínicas dentárias.' },
  { title: 'Contabilidade', desc: 'Landing page clara para serviços contábeis e captação B2B.' },
  { title: 'Escola de Idiomas', desc: 'Layout conversor para inscrições em cursos e matrículas.' },
  { title: 'Imobiliária', desc: 'Apresentação elegante para imóveis e leads qualificados.' },
  { title: 'Infoprodutor', desc: 'Página estratégica para vendas de cursos e lançamentos.' },
  { title: 'Loja de Roupas', desc: 'Visual atraente para e-commerce de moda e promoções.' },
  { title: 'Oficina Mecânica', desc: 'Landing para serviços automotivos e agendamento online.' },
  { title: 'Petshop', desc: 'Promoção de serviços pet e vendas de produtos para animais.' },
  { title: 'Restaurante', desc: 'Menu impactante e reserva rápida para seu restaurante.' },
  { title: 'Salão de Beleza', desc: 'Design sofisticado para agendamentos e catálogos de serviços.' },
  { title: 'Academia', desc: 'Landing page de conversão para planos fitness e avaliações.' },
  { title: 'Advocacia', desc: 'Presença sólida para escritórios jurídicos e geração de contatos.' },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = portfolioItems.length - 1;

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
  };

  return (
    <div className="relative rounded-[2rem] border border-slate-700 bg-slate-900/90 p-6 shadow-xl shadow-slate-950/40">
      <div className="overflow-hidden rounded-[1.75rem] bg-slate-950/95 p-6">
        <div className="flex w-full transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {portfolioItems.map((item) => (
            <div key={item.title} className="min-w-full shrink-0 px-2 sm:px-4">
              <div className="h-full rounded-[1.75rem] border border-slate-700 bg-slate-900 p-8">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-slate-400 leading-7">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible">
          {portfolioItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-3 py-1 text-sm transition ${
                index === activeIndex ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-slate-700"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition hover:bg-slate-700"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
