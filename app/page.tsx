import ChatWidget from '@/components/ChatWidget';
import LeadForm from '@/components/LeadForm';
import PortfolioCarousel from '@/components/PortfolioCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex rounded-full bg-slate-800 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Agência de Automação com IA
              </span>
              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Criamos agentes que vendem, atendem e escalam seu negócio.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-400">
                  Transforme processos manuais em jornadas automáticas usando IA conversacional. Converta visitantes em leads qualificados com um site moderno e fluxos inteligentes.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
                >
                  Quero um diagnóstico
                </a>
                <a
                  href="#servicos"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-blue-500 sm:w-auto"
                >
                  Ver serviços
                </a>
              </div>
            </div>
            <div className="relative rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-lg shadow-slate-950/40">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Diagnóstico rápido</p>
                  <h2 className="text-2xl font-bold text-white">Seu novo fluxo de vendas em minutos</h2>
                </div>
                <div className="rounded-3xl bg-blue-500/10 px-4 py-3 text-blue-300">Atendimento IA</div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6">
                  <p className="text-sm text-slate-400">Atendimento inteligente</p>
                  <p className="mt-3 text-lg font-semibold text-white">Respostas imediatas no WhatsApp, 24 horas por dia.</p>
                </div>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6">
                  <p className="text-sm text-slate-400">Automação de vendas</p>
                  <p className="mt-3 text-lg font-semibold text-white">Lead scoring, qualificação e agendamento sem intervenção manual.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 px-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Soluções</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Serviços que unem IA e conversão</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Atendimento 24/7"
              desc="Agentes dedicados para responder clientes e qualificar oportunidades o tempo todo."
            />
            <ServiceCard
              title="Automação de Vendas"
              desc="Funis inteligentes que transformam leads em negócios com mensagens e follow-up automáticos."
            />
            <ServiceCard
              title="Dashboards de Gestão"
              desc="Visão clara do desempenho dos seus agentes e oportunidades em tempo real."
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Portfólio</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Trabalhos já entregues</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Veja os segmentos de landing pages que já desenvolvemos para clientes de diferentes nichos.
            </p>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section id="contato" className="py-20 px-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-700 bg-slate-900/90 p-8 sm:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Vamos conversar</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Solicite um diagnóstico gratuito</h2>
            <p className="mt-4 text-slate-400">Preencha seus dados e nossa equipe de IA entrará em contato rapidamente.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      <ChatWidget />
    </main>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-700 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-blue-500">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-400">{desc}</p>
    </div>
  );
}

