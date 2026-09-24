/**
 * Floating WhatsApp button shown in the bottom-left corner of every page.
 */

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, whatsappLink } from '../../config/site';

const DEFAULT_MESSAGE = 'مرحباً، أرغب في الاستفسار عن قطع غيار ألمانية';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a
        href={whatsappLink(DEFAULT_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        title={`تواصل مباشر عبر الواتساب: ${WHATSAPP_DISPLAY}`}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
