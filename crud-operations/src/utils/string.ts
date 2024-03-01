export const acronymText = (phrase: string) => {
  const words = phrase.split(' ');
  let acronym = '';

  words.forEach((word) => {
    acronym += word[0].toUpperCase();
  });

  return acronym;
};
