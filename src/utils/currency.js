/**
 * Currency & discount utilities
 */

export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return null;
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const calcDiscount = (price, oldPrice) => {
  if (!price || !oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};
