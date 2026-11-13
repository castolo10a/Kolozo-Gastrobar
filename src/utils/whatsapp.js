import { site } from '@/config/site';

/** Construye un enlace de WhatsApp con un mensaje opcional prellenado. */
export function buildWhatsAppUrl(message) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  booking: '¡Hola, Kolozo! Quiero reservar una mesa.',
  event: '¡Hola, Kolozo! Quiero cotizar una celebración.',
  romantic: '¡Hola, Kolozo! Quiero información del plan en pareja.',
  signature: '¡Hola, Kolozo! Quiero probar la Salvaje.',
  cinema: '¡Hola, Kolozo! ¿Cuándo es la próxima función de Cine a la mesa?',
};
