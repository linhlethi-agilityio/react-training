/**
 * Function to generate an acronym from a given phrase.
 */
export const acronymText = (phrase: string) => {
  // Split the input phrase into words
  const words = phrase.split(' ');
  let acronym = '';

  words.forEach((word) => {
    acronym += word[0];
  });

  return acronym;
};

/**
 * Function to encrypt a password by increasing the ASCII code of each character by 1.
 */
export const encryptPassword = (password: string) => {
  let encryptedPassword = '';

  for (let i = 0; i < password.length; i++) {
    const encryptedCharCode = password.charCodeAt(i) + 1;

    encryptedPassword += String.fromCharCode(encryptedCharCode);
  }

  return encryptedPassword;
};

/**
 * Function to decrypt an encrypted password by decreasing the ASCII code of each character by 1.
 */
export const decryptPassword = (encryptedPassword: string) => {
  let decryptedPassword = '';

  for (let i = 0; i < encryptedPassword.length; i++) {
    const decryptedCharCode = encryptedPassword.charCodeAt(i) - 1;

    decryptedPassword += String.fromCharCode(decryptedCharCode);
  }

  return decryptedPassword;
};
