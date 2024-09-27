export const formatPriceUtil = (price: number) => {
  const priceFormatted = new Intl.NumberFormat('es-AR', {
    style: 'decimal',
  }).format(price);

  return priceFormatted;
};
