import { site } from '@/config/site';

/** Construye un enlace de WhatsApp con un mensaje opcional prellenado. */
export function buildWhatsAppUrl(message) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  booking: 'Hola Kolozo, quiero hacer una reserva.',
  event: 'Hola Kolozo, quiero información para realizar un evento.',
  romantic: 'Hola Kolozo, quiero información sobre los planes románticos.',
  signature: 'Hola Kolozo, quiero pedir la Hamburguesa Salvaje.',
};
