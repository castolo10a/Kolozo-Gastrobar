import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppUrl, whatsappMessages } from '@/utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl(whatsappMessages.booking)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
