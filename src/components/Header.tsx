import { useEffect, useState } from 'react';
import { Menu, X, Send, HardHat, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-chumbo-deep/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#inicio')}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-construction to-orange-strong flex items-center justify-center shadow-lg shadow-construction/20 transition-transform group-hover:scale-105">
                <HardHat className="w-6 h-6 sm:w-7 sm:h-7 text-chumbo-deep" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col leading-tight text-left">
              <span className="text-white font-bold text-sm sm:text-lg tracking-tight">
                GERFON
              </span>
              <span className="text-construction/80 text-[10px] sm:text-xs font-medium tracking-wide">
                Materiais de Construção
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-construction transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone2.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone2}
            </a>
            <button
              onClick={() => handleNavClick('#orcamento')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-construction to-orange-strong text-chumbo-deep font-semibold text-sm hover:shadow-lg hover:shadow-construction/30 hover:scale-105 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Enviar Lista de Materiais
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-chumbo-deep/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-gray-300 hover:text-construction hover:bg-white/5 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#orcamento')}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-construction to-orange-strong text-chumbo-deep font-semibold transition-all hover:scale-[1.02]"
          >
            <Send className="w-4 h-4" />
            Enviar Lista de Materiais
          </button>
        </nav>
      </div>
    </header>
  );
}
