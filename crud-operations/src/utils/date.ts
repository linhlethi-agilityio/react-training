export const formatDate = (timestamp: number | string, isInoutFormatted?: boolean) => {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getUTCFullYear();

  if (isInoutFormatted) {
    const monthWithZero = (date.getMonth() + 1).toString().padStart(2, '0');
    const dateWithZero = date.getDate().toString().padStart(2, '0');

    return `${year}-${monthWithZero}-${dateWithZero}`;
  }

  return `${day}-${month.slice(0, 3)}, ${year}`;
};
