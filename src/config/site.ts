/**
 * Business contact details. Change them here and they update everywhere
 * on the site (navbar, footer, order form, WhatsApp button).
 */

export const WHATSAPP_NUMBER = '966536152188';
export const WHATSAPP_DISPLAY = '+966 53 615 2188';
export const SUPPORT_EMAIL = 'support@deutschplex.com';

export const LOCATIONS = {
  saudi: 'جدة، المملكة العربية السعودية',
  germany: 'فرانكفورت، ألمانيا (التجهيز)',
};

/** Builds a wa.me link, optionally with a pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
