import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={BUSINESS.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="WhatsApp"
    >
      <span className="hidden sm:flex px-4 py-2.5 rounded-xl bg-chumbo-deep border border-white/10 text-white text-sm font-medium shadow-xl whitespace-nowrap">
        Fale conosco
      </span>
      <span className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        <span className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
        </span>
      </span>
    </a>
  );
}
