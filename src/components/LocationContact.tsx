import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';
import Reveal from './Reveal';
import { BUSINESS } from '@/lib/constants';

export default function LocationContact() {
  const mapsQuery = encodeURIComponent(`${BUSINESS.address}, ${BUSINESS.cep}`);
  const mapEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section id="localizacao" className="relative py-20 sm:py-32 bg-chumbo overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-construction/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-construction/10 border border-construction/20 text-construction text-xs font-semibold tracking-wider uppercase mb-4">
            Localização & Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Venha nos visitar ou
            <span className="block gradient-text">chame pelo WhatsApp</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Info cards */}
          <Reveal className="space-y-4">
            {/* Address */}
            <div className="rounded-2xl bg-gradient-to-br from-chumbo-light to-chumbo border border-white/5 p-6 hover:border-construction/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-construction/10 border border-construction/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-construction" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Endereço</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {BUSINESS.address}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">CEP: {BUSINESS.cep}</p>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-construction text-sm font-medium hover:text-construction-light transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Traçar rota no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-gradient-to-br from-chumbo-light to-chumbo border border-white/5 p-6 hover:border-construction/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-construction/10 border border-construction/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-construction" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Horários de Atendimento</h3>
                  <ul className="space-y-2">
                    {BUSINESS.hours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{h.day}</span>
                        <span
                          className={`font-medium ${
                            h.time === 'Fechado' ? 'text-red-400/70' : 'text-white'
                          }`}
                        >
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-gradient-to-br from-chumbo-light to-chumbo border border-white/5 p-6 hover:border-construction/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-construction/10 border border-construction/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-construction" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Telefones & WhatsApp</h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${BUSINESS.phone1.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="font-medium">{BUSINESS.phone1}</span>
                      <span className="text-xs text-gray-500">(WhatsApp / Celular)</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS.phone2.replace(/\D/g, '')}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <span className="font-medium">{BUSINESS.phone2}</span>
                      <span className="text-xs text-gray-500">(Fixo)</span>
                    </a>
                    <a
                      href={BUSINESS.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={150}>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 group">
              <iframe
                title="Mapa Gerfon Materiais de Construção"
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
