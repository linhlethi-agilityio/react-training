export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getUTCFullYear();

  return `${day}-${month.slice(0, 3)}, ${year}`;
};
