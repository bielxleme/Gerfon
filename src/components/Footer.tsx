import { HardHat, MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-chumbo-deep border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-construction/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-construction to-orange-strong flex items-center justify-center">
                <HardHat className="w-6 h-6 text-chumbo-deep" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="text-white font-bold text-lg tracking-tight block">GERFON</span>
                <span className="text-construction/80 text-xs font-medium">Materiais de Construção</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Tudo para a sua obra do alicerce ao acabamento em Borborema - SP. Qualidade, entrega rápida e o melhor atendimento.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-construction text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-construction flex-shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone1.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-construction" />
                  {BUSINESS.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone2.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-construction" />
                  {BUSINESS.phone2}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Borborema - SP · CEP {BUSINESS.cep}
          </p>
        </div>
      </div>
    </footer>
  );
}
