export const acronymText = (phrase: string) => {
  const words = phrase.split(' ');
  let acronym = '';

  words.forEach((word) => {
    acronym += word[0].toUpperCase();
  });

  return acronym;
};

export const encryptPassword = (password: string) => {
  let encryptedPassword = '';

  for (let i = 0; i < password.length; i++) {
    const encryptedCharCode = password.charCodeAt(i) + 1;

    encryptedPassword += String.fromCharCode(encryptedCharCode);
  }

  return encryptedPassword;
};

export const decryptPassword = (encryptedPassword: string) => {
  let decryptedPassword = '';

  for (let i = 0; i < encryptedPassword.length; i++) {
    const decryptedCharCode = encryptedPassword.charCodeAt(i) - 1;

    decryptedPassword += String.fromCharCode(decryptedCharCode);
  }

  return decryptedPassword;
};
