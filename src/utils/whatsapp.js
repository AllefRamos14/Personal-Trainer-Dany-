const PHONE = "5585999999999";

export function createWhatsAppLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
