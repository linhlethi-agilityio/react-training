export const formatDate = (inputDate: string) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' } as Intl.DateTimeFormatOptions;
  const date = new Date(inputDate);

  return date.toLocaleDateString('en-US', options);
};
