import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.booking)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-200 hover:scale-105 md:bottom-8 md:right-8"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
