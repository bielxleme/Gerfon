import { useRef } from 'react';
import { Construction, Zap, PaintRoller, Trees, ArrowRight, Wrench, Droplets } from 'lucide-react';
import Reveal from './Reveal';
import { BUSINESS } from '@/lib/constants';

interface Department {
  icon: typeof Construction;
  title: string;
  description: string;
  items: string[];
  size: 'large' | 'medium';
}

const departments: Department[] = [
  {
    icon: Construction,
    title: 'Construção Bruta',
    description: 'Cimento, cal, tijolos e agregados para fundação e alvenaria.',
    items: ['Cimento', 'Cal', 'Tijolos', 'Areia', 'Brita'],
    size: 'large',
  },
  {
    icon: Zap,
    title: 'Elétrica & Hidráulica',
    description: 'Fios, tubos, conexões e registros completos.',
    items: ['Fios & Cabos', 'Disjuntores', 'Tubos PVC', 'Conexões', 'Registros'],
    size: 'medium',
  },
  {
    icon: PaintRoller,
    title: 'Tintas & Acabamentos',
    description: 'Tintas, impermeabilizantes, massas e ferramentas.',
    items: ['Tintas', 'Impermeabilizantes', 'Massas', 'Ferramentas'],
    size: 'medium',
  },
  {
    icon: Trees,
    title: 'Madeiras & Telhas',
    description: 'Vigas, ripas, caibros e soluções para telhado.',
    items: ['Vigas', 'Ripas', 'Caibros', 'Telhas'],
    size: 'large',
  },
];

function DepartmentCard({ dept, index }: { dept: Department; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const span = dept.size === 'large' ? 'md:col-span-2' : 'md:col-span-1';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`card-glow group relative ${span} rounded-3xl bg-gradient-to-br from-chumbo-light to-chumbo border border-white/5 p-6 sm:p-8 transition-all duration-500 hover:border-construction/30 hover:shadow-2xl hover:shadow-construction/10 cursor-pointer`}
    >
      {/* Icon */}
      <div className="relative z-10 mb-5">
        <div className="w-14 h-14 rounded-2xl bg-construction/10 border border-construction/20 flex items-center justify-center transition-all duration-500 group-hover:bg-construction/20 group-hover:scale-110">
          <dept.icon className="w-7 h-7 text-construction" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{dept.title}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{dept.description}</p>

        <div className="flex flex-wrap gap-2">
          {dept.items.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-gray-300 group-hover:border-construction/20 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <div className="w-9 h-9 rounded-full bg-construction/10 border border-construction/20 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-construction" />
        </div>
      </div>

      {/* Index number */}
      <span className="absolute bottom-4 right-6 text-6xl font-extrabold text-white/[0.03] leading-none select-none pointer-events-none">
        0{index + 1}
      </span>
    </div>
  );
}

export default function Departments() {
  return (
    <section id="departamentos" className="relative py-20 sm:py-32 bg-chumbo-deep overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-construction/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-construction/10 border border-construction/20 text-construction text-xs font-semibold tracking-wider uppercase mb-4">
            Nossos Departamentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Tudo o que sua obra precisa,
            <span className="block gradient-text">em um só lugar.</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Do alicerce ao acabamento, temos os materiais certos com qualidade e preço justo.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, i) => (
              <DepartmentCard key={dept.title} dept={dept} index={i} />
            ))}
          </div>
        </Reveal>

        {/* Additional icons row */}
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-construction/60" /> Ferramentas
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-construction/60" /> Caixas d'água
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-construction/60" /> Disjuntores & Tomadas
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="text-construction/60">E muito mais...</span>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300} className="text-center mt-10">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-construction hover:text-construction-light font-semibold transition-colors"
          >
            Consulte disponibilidade e preços pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
