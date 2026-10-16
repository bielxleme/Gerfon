import { MessageCircle, ArrowRight, Package, Truck, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const stats = [
  { icon: Package, label: 'Variedade de Produtos', value: '+1.000' },
  { icon: Truck, label: 'Entrega na Obra', value: 'Rápida' },
  { icon: ShieldCheck, label: 'Qualidade', value: 'Garantida' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-chumbo-deep via-chumbo to-chumbo-deep" />
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-construction/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-orange-strong/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              Atendendo Borborema e região há anos
            </span>
          </div>

          {/* Title with reveal animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
            <span className="block text-white reveal-text" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Tudo para a sua obra
            </span>
            <span className="block reveal-text" style={{ animationDelay: '0.3s', opacity: 0 }}>
              do <span className="gradient-text">alicerce</span> ao
            </span>
            <span className="block reveal-text" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <span className="gradient-text">acabamento</span> em Borborema.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed reveal-text"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            Qualidade garantida, entrega rápida e o melhor atendimento para construir ou reformar sem dor de cabeça.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 reveal-text"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-construction to-orange-strong text-chumbo-deep font-bold text-base shadow-xl shadow-construction/20 hover:shadow-2xl hover:shadow-construction/40 hover:scale-[1.03] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Cotar Orçamento via WhatsApp
            </a>
            <button
              onClick={() => document.querySelector('#departamentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Ver Departamentos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg reveal-text"
            style={{ animationDelay: '1.1s', opacity: 0 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <stat.icon className="w-4 h-4 text-construction" />
                  <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Role para explorar</span>
          <div className="w-px h-10 bg-gradient-to-b from-construction/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
