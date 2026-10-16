import { useState } from 'react';
import { MessageCircle, Plus, Trash2, Send, Package, Check } from 'lucide-react';
import Reveal from './Reveal';
import { BUSINESS } from '@/lib/constants';

interface ListItem {
  id: number;
  text: string;
}

const quickItems = [
  '5 sacos de cimento',
  '10 tubos PVC 100mm',
  '100 tijolos',
  '2 latas de tinta branca',
  '1 rolo de fio 2.5mm',
  '20m de caibro',
  '3 disjuntores 20A',
  '1 caixa dágua 500L',
];

export default function QuoteBuilder() {
  const [items, setItems] = useState<ListItem[]>([{ id: 1, text: '' }]);
  const [nextId, setNextId] = useState(2);

  const addItem = () => {
    setItems([...items, { id: nextId, text: '' }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: number, text: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, text } : item)));
  };

  const addQuickItem = (text: string) => {
    setItems([...items, { id: nextId, text }]);
    setNextId(nextId + 1);
  };

  const validItems = items.filter((i) => i.text.trim().length > 0);

  const buildMessage = () => {
    const list = validItems.map((item) => `- ${item.text}`).join('\n');
    return `Olá! Gostaria de orçar os seguintes materiais:\n\n${list}\n\nPoderiam me passar os valores e prazos? Obrigado!`;
  };

  const whatsappUrl = `${BUSINESS.whatsappLink}?text=${encodeURIComponent(buildMessage())}`;

  return (
    <section id="orcamento" className="relative py-20 sm:py-32 bg-chumbo overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-construction/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-strong/5 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-construction/10 border border-construction/20 text-construction text-xs font-semibold tracking-wider uppercase mb-4">
            Orçamento Expresso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Monte sua lista e envie
            <span className="block gradient-text">direto pelo WhatsApp</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Digite o que precisa, adicione à lista e clique para enviar. Resolvemos sua cotação sem complicação.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
            {/* Items list */}
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-construction/10 border border-construction/20 flex items-center justify-center">
                    <Package className="w-5 h-5 text-construction" />
                  </div>
                  <input
                    type="text"
                    value={item.text}
                    onChange={(e) => updateItem(item.id, e.target.value)}
                    placeholder="Ex: 5 sacos de cimento, 10 tubos de 100mm..."
                    className="flex-1 px-4 py-3 rounded-xl bg-chumbo-deep border border-white/10 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-construction/50 focus:ring-2 focus:ring-construction/10 transition-all"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    disabled={items.length === 1}
                    className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Remover item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add item button */}
            <button
              onClick={addItem}
              className="mt-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              <Plus className="w-4 h-4" />
              Adicionar mais um item
            </button>

            {/* Quick add chips */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Adição rápida:</p>
              <div className="flex flex-wrap gap-2">
                {quickItems.map((qi) => (
                  <button
                    key={qi}
                    onClick={() => addQuickItem(qi)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-chumbo-deep border border-white/10 text-xs text-gray-400 hover:border-construction/30 hover:text-construction transition-all"
                  >
                    <Plus className="w-3 h-3" />
                    {qi}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary + Send */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-4 h-4 text-construction" />
                  <span>
                    {validItems.length === 0
                      ? 'Nenhum item ainda'
                      : `${validItems.length} ${validItems.length === 1 ? 'item' : 'itens'} na lista`}
                  </span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                  validItems.length > 0
                    ? 'bg-gradient-to-r from-construction to-orange-strong text-chumbo-deep shadow-xl shadow-construction/20 hover:shadow-2xl hover:shadow-construction/40 hover:scale-[1.03]'
                    : 'bg-white/5 text-gray-600 cursor-not-allowed'
                }`}
                onClick={(e) => {
                  if (validItems.length === 0) e.preventDefault();
                }}
              >
                <Send className="w-5 h-5" />
                Enviar Lista pelo WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        {/* Info note */}
        <Reveal delay={200} className="mt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Sua mensagem será montada automaticamente e aberta no WhatsApp da loja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
