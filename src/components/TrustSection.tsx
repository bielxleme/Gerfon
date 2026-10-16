import { Award, Truck, CreditCard, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: Award,
    title: 'Tradição em Borborema',
    description: 'Anos servindo construtores e reformadores da cidade e região com confiança.',
  },
  {
    icon: Truck,
    title: 'Entrega na Obra',
    description: 'Levamos os materiais até você, no tempo certo, para não parar a construção.',
  },
  {
    icon: CreditCard,
    title: 'Facilidade de Pagamento',
    description: 'Diversas formas de pagamento para facilitar a compra do seu material.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Orçamento',
    description: 'Cotação rápida pelo WhatsApp, sem burocracia e sem perder tempo.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Produtos de marcas confiáveis para garantir o melhor resultado da sua obra.',
  },
  {
    icon: ThumbsUp,
    title: 'Atendimento Próximo',
    description: 'Equipe experiente pronta para ajudar na escolha do material certo.',
  },
];

export default function TrustSection() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32 bg-chumbo-deep overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-construction/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-construction/10 border border-construction/20 text-construction text-xs font-semibold tracking-wider uppercase mb-4">
            Confiança & Entrega
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Construímos uma reputação
            <span className="block gradient-text">baseada em confiança.</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Mais do que vender materiais, somos parceiros da sua obra do início ao fim.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-gradient-to-br from-chumbo-light to-chumbo border border-white/5 p-6 hover:border-construction/20 transition-all duration-500 hover:shadow-xl hover:shadow-construction/5">
                <div className="w-12 h-12 rounded-xl bg-construction/10 border border-construction/20 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-construction/20 group-hover:scale-110">
                  <f.icon className="w-6 h-6 text-construction" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Banner with message */}
        <Reveal delay={200} className="mt-16">
          <div className="relative rounded-3xl bg-gradient-to-r from-chumbo-light via-chumbo-lighter to-chumbo-light border border-white/10 p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-construction/5 blur-[80px]" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Pronto para começar sua obra?
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Fale com a gente agora e receba seu orçamento sem compromisso.
                </p>
              </div>
              <a
                href="https://wa.me/5516991172654"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-construction to-orange-strong text-chumbo-deep font-bold text-base shadow-xl shadow-construction/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
