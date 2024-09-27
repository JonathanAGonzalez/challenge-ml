export const parsePrice = (price: number) => {
  if (typeof price !== 'number' || isNaN(price)) {
    throw new Error('Invalid price value');
  }
  const amount = Math.floor(price);
  const decimals = Number((price % 1).toFixed(2).split('.')[1]);
  return { amount, decimals };
};
