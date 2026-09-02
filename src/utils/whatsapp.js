/**
 * WhatsApp URL generation utilities
 */

const WHATSAPP_NUMBER = "919910850024";

/**
 * Generate WhatsApp URL for a full cart order
 */
export const generateCartWhatsAppURL = (cartItems) => {
  if (!cartItems || cartItems.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;

  let message = `Hello Dwivedi Fruit Shop 👋\n\n`;
  message += `I would like to order:\n\n`;

  let total = 0;
  let hasNullPrice = false;

  cartItems.forEach((item) => {
    const { product, quantity } = item;
    message += `${product.emoji || "🍎"} *${product.name}*\n`;
    message += `   Qty: ${quantity} ${product.unit || "/kg"}\n`;
    if (product.price !== null) {
      const lineTotal = product.price * quantity;
      message += `   Price: ₹${product.price}${product.unit || "/kg"}\n`;
      message += `   Subtotal: ₹${lineTotal.toLocaleString("en-IN")}\n`;
      total += lineTotal;
    } else {
      message += `   Price: To be confirmed\n`;
      hasNullPrice = true;
    }
    message += `\n`;
  });

  if (!hasNullPrice) {
    message += `*Estimated Total: ₹${total.toLocaleString("en-IN")}*\n\n`;
  } else {
    message += `*Estimated Total: ₹${total.toLocaleString("en-IN")} + items with price to be confirmed*\n\n`;
  }

  message += `Please confirm availability and final price.\n\n`;
  message += `Name:\nDelivery / Pickup:\nAddress (if delivery):\n\nThank you 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate WhatsApp URL for a single product quick order
 */
export const generateSingleProductWhatsAppURL = (product) => {
  let message = `Hello Dwivedi Fruit Shop 👋\n\n`;
  message += `I want to order:\n`;
  message += `${product.emoji || "🍎"} *${product.name}*`;
  if (product.nameHindi) message += ` (${product.nameHindi})`;
  message += `\n\n`;
  message += `Please confirm the current availability and price.\n\nThank you 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/**
 * General enquiry WhatsApp URL (floating button)
 */
export const generateEnquiryWhatsAppURL = () => {
  const message = `Hello Dwivedi Fruit Shop 👋\nI would like to know about today's available fruits and prices.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CALL_HREF = `tel:+919910850024`;
export const MAPS_HREF = `https://maps.app.goo.gl/21UYuNf7U6nRWUyPA`;
